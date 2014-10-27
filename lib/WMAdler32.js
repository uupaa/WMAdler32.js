(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- class / interfaces ----------------------------------
function WMAdler32(source,  // @arg Uint8Array
                   adler) { // @arg Integer = 1 - initial value
                            // @ret Adler32Integer
                            // @desc http://en.wikipedia.org/wiki/Adler-32
//{@dev
    $valid($type(source, "Uint8Array"),   WMAdler32, "source");
    $valid($type(adler,  "Integer|omit"), WMAdler32, "adler");
//}@dev

    adler = adler === undefined ? 1 : adler;

    return _caclAdler32(source, adler);
}

//{@dev
WMAdler32["repository"] = "https://github.com/uupaa/WMAdler32.js"; // GitHub repository URL. http://git.io/Help
//}@dev

// --- implements ------------------------------------------
function _caclAdler32(source,  // @arg Uint8Array - data source
                      adler) { // @arg Integer - initial value
                               // @ret Uint32 - result
    var MOD_ADLER    = 65521;
    var MAGIC_NUMBER = 5550;

    var a =  adler         & 0xffff;
    var b = (adler >>> 16) & 0xffff;

    var len = source.length;
    var i = 0;

    while (len > 0) {
        var tlen = len > MAGIC_NUMBER ? MAGIC_NUMBER : len;

        len -= tlen;

        do {
            a += source[i++];
            b += a;
        } while (--tlen);

        a %= MOD_ADLER;
        b %= MOD_ADLER;
    }
    return ((b << 16) | a) >>> 0;
}

// --- validate / assertions -------------------------------
//{@dev
function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if ("process" in global) {
    module["exports"] = WMAdler32;
}
global["WMAdler32" in global ? "WMAdler32_" : "WMAdler32"] = WMAdler32; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

