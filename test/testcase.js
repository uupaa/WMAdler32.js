var ModuleTestWMAdler32 = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;

return new Test("WMAdler32", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        testWMAdler32,
    ]).run().clone();

function toUint8Array(str) {
    return new Uint8Array(str.split("").map(function(_) { return _.charCodeAt(0); }));
}

function testWMAdler32(test, pass, miss) {

    var source1 = new Uint8Array(toUint8Array("The quick brown fox jumped over the lazy dogs.\n"));
    var source2 = new Uint8Array([ // "The quick brown fox jumped over the lazy dogs.\n"
            0x54, 0x68, 0x65, 0x20, 0x71, 0x75, 0x69, 0x63,
            0x6b, 0x20, 0x62, 0x72, 0x6f, 0x77, 0x6e, 0x20,
            0x66, 0x6f, 0x78, 0x20, 0x6a, 0x75, 0x6d, 0x70,
            0x65, 0x64, 0x20, 0x6f, 0x76, 0x65, 0x72, 0x20,
            0x74, 0x68, 0x65, 0x20, 0x6c, 0x61, 0x7a, 0x79,
            0x20, 0x64, 0x6f, 0x67, 0x73, 0x2e, 0x0a]);
    var source3 = new Uint8Array([ // wrongChecksumWithAdler32Test
            1, 0, 5, 0, 15, 0, 1, 11, 0, 1]);
    var source4 = new Uint8Array(toUint8Array("Hellp Adler32"));

    var result1 = WMAdler32(source1);
    var result2 = WMAdler32(source2);
    var result3 = WMAdler32(source3);
    var result4 = WMAdler32(source4);

    if (result1 === 0x9DE210DB &&
        result2 === 0x9DE210DB &&
        result3 === 0xBC0023   &&
        result4 === 0x1FFA0463) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

})((this || 0).self || global);

