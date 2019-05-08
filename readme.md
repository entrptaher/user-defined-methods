Returns all user defined methods from an object.

Code copied/adjusted from following,
- [stackoverflow answer](https://stackoverflow.com/a/35033472/6161265)
- [this snippet](https://gist.github.com/wicharek/01abfd68b99e8206229b90dd0bc917cf).

Usage:

```js
const userDefinedMethods = require('user-defined-methods');

class Driver {
  getLocation() {
    return location.href;
  }
}

userDefinedMethods(new Driver()) // returns ['getLocation']
```