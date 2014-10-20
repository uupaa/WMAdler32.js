# WMAdler32.js [![Build Status](https://travis-ci.org/uupaa/WMAdler32.js.png)](http://travis-ci.org/uupaa/WMAdler32.js)

[![npm](https://nodei.co/npm/uupaa.wmadler32.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.wmadler32.js/)

Adler32 function

## Document

- [WMAdler32.js wiki](https://github.com/uupaa/WMAdler32.js/wiki/WMAdler32)
- [WebModule](https://github.com/uupaa/WebModule)
    - [Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html)
    - [Development](https://github.com/uupaa/WebModule/wiki/Development)

## How to use

### Browser

```js
<script src="lib/WMAdler32.js"></script>
<script>
var array = "Hellp Adler32".split("").map(function(_) { return _.charCodeAt(0); });
var source = new Uint8Array(array);
console.log( WMAdler32(source) === 0x1FFA0463 );
</script>
```

### WebWorkers

```js
importScripts("lib/WMAdler32.js");

...
```

### Node.js

```js
var WMAdler32 = require("lib/WMAdler32.js");

...
```
