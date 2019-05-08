const getAllClassMethods = obj => {
  let keys = [];
  let topObject = obj;

  const onlyOriginalMethods = (p, i, arr) =>
    typeof topObject[p] === "function" && // only the methods
    p !== "constructor" && // not the constructor
    (i === 0 || p !== arr[i - 1]) && // not overriding in this prototype
    keys.indexOf(p) === -1; // not overridden in a child

  do {
    const l = Object.getOwnPropertyNames(obj)
      .sort()
      .filter(onlyOriginalMethods);
    keys = keys.concat(l);

    // walk-up the prototype chain
    obj = Object.getPrototypeOf(obj);
  } while (
    // not the the Object prototype methods (hasOwnProperty, etc...)
    obj &&
    Object.getPrototypeOf(obj)
  );

  return keys;
};

module.exports = getAllClassMethods;
