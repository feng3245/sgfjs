/**
 * sgfparse.js 0.0.1
 * author: Yosiya Hinosawa ( http://twitter.com/kt3k )
 * license: MIT license ( http://kt3k.mit-license.org/ )
 */

this.sgf = (function () {

    var ajaxGet = function () {
        var xhr = new XMLHttpRequest();
        var callback;

        xhr.onload = function () {
            callback(xhr.reponseText)
        };

        return {then: function (func) {
            callback = func;
        }};
    };

    var sgf = function (text) {
        this.parse(text);
    };

    var pt = sgf.prototype;

    pt.parse = function (text) {
        this.parsed = 1;
    };

    pt.get = function (text) {
        var self = this;
        var callback;

        ajaxGet(url).then(function (text) {
            self.parse(text);
            callback.call(self);
        });

        return {then: function (func) {
            callback = func;
        }};
    };

    var exports = function (text) {
        return new sgf(text);
    };

    return exports;
});
