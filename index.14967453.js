function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}
parcelRequire.register("2JpsI", function(module, exports) {

$parcel$export(module.exports, "register", () => $1fd388fe1a0c2157$export$6503ec6e8aabbaf, (v) => $1fd388fe1a0c2157$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $1fd388fe1a0c2157$export$f7ad0328861e2f03, (v) => $1fd388fe1a0c2157$export$f7ad0328861e2f03 = v);
var $1fd388fe1a0c2157$export$6503ec6e8aabbaf;
var $1fd388fe1a0c2157$export$f7ad0328861e2f03;
"use strict";
var $1fd388fe1a0c2157$var$mapping = {};
function $1fd388fe1a0c2157$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$1fd388fe1a0c2157$var$mapping[keys[i]] = pairs[keys[i]];
}
function $1fd388fe1a0c2157$var$resolve(id) {
    var resolved = $1fd388fe1a0c2157$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$1fd388fe1a0c2157$export$6503ec6e8aabbaf = $1fd388fe1a0c2157$var$register;
$1fd388fe1a0c2157$export$f7ad0328861e2f03 = $1fd388fe1a0c2157$var$resolve;

});

var $e243bf37f8572d85$exports = {};

(parcelRequire("2JpsI")).register(JSON.parse('{"2gkgR":"index.14967453.js","6WEnx":"999999999999999.23287efd.png","e4V3I":"SMALL.988b0d08.png","gHbB2":"low.0c9ad13e.webp","eK9CM":"map-marker-icon.400e0ced.png","9sMZ1":"night-sky3.db5c0d45.png","6cju0":"oreol.c6dae463.png"}'));

var $b6e62343e59abe43$exports = {};

$parcel$export($b6e62343e59abe43$exports, "create", () => $b6e62343e59abe43$export$185802fd694ee1f5);
$parcel$export($b6e62343e59abe43$exports, "clone", () => $b6e62343e59abe43$export$9cd59f9826255e47);
$parcel$export($b6e62343e59abe43$exports, "copy", () => $b6e62343e59abe43$export$784d13d8ee351f07);
$parcel$export($b6e62343e59abe43$exports, "fromValues", () => $b6e62343e59abe43$export$a82be99ed2a44a7d);
$parcel$export($b6e62343e59abe43$exports, "set", () => $b6e62343e59abe43$export$adaa4cf7ef1b65be);
$parcel$export($b6e62343e59abe43$exports, "identity", () => $b6e62343e59abe43$export$f0954fd7d5368655);
$parcel$export($b6e62343e59abe43$exports, "transpose", () => $b6e62343e59abe43$export$9cb09a71b7d66923);
$parcel$export($b6e62343e59abe43$exports, "invert", () => $b6e62343e59abe43$export$6897c284b6f9f4dc);
$parcel$export($b6e62343e59abe43$exports, "adjoint", () => $b6e62343e59abe43$export$33f3c024b4ae00a1);
$parcel$export($b6e62343e59abe43$exports, "determinant", () => $b6e62343e59abe43$export$a04698f914c55ed9);
$parcel$export($b6e62343e59abe43$exports, "multiply", () => $b6e62343e59abe43$export$2060d2db72cce88f);
$parcel$export($b6e62343e59abe43$exports, "translate", () => $b6e62343e59abe43$export$d73ee8ef04f5226a);
$parcel$export($b6e62343e59abe43$exports, "scale", () => $b6e62343e59abe43$export$dcdf75081b88279d);
$parcel$export($b6e62343e59abe43$exports, "rotate", () => $b6e62343e59abe43$export$bb628a54ab399bc9);
$parcel$export($b6e62343e59abe43$exports, "rotateX", () => $b6e62343e59abe43$export$a59c8716592e09af);
$parcel$export($b6e62343e59abe43$exports, "rotateY", () => $b6e62343e59abe43$export$cf71e4d4ca4d1cfd);
$parcel$export($b6e62343e59abe43$exports, "rotateZ", () => $b6e62343e59abe43$export$ea6eae3365de5b9c);
$parcel$export($b6e62343e59abe43$exports, "fromTranslation", () => $b6e62343e59abe43$export$bc9e79e74e9fddf6);
$parcel$export($b6e62343e59abe43$exports, "fromScaling", () => $b6e62343e59abe43$export$832ca188ffb1955d);
$parcel$export($b6e62343e59abe43$exports, "fromRotation", () => $b6e62343e59abe43$export$926fc125ff3c666c);
$parcel$export($b6e62343e59abe43$exports, "fromXRotation", () => $b6e62343e59abe43$export$dd47cc2f828c32ef);
$parcel$export($b6e62343e59abe43$exports, "fromYRotation", () => $b6e62343e59abe43$export$7dc997d67d2b7f33);
$parcel$export($b6e62343e59abe43$exports, "fromZRotation", () => $b6e62343e59abe43$export$ad5ddaedc8f405df);
$parcel$export($b6e62343e59abe43$exports, "fromRotationTranslation", () => $b6e62343e59abe43$export$9545ac307f2a256b);
$parcel$export($b6e62343e59abe43$exports, "fromQuat2", () => $b6e62343e59abe43$export$ff497f2be31cc6a);
$parcel$export($b6e62343e59abe43$exports, "getTranslation", () => $b6e62343e59abe43$export$202e99f82f7f0395);
$parcel$export($b6e62343e59abe43$exports, "getScaling", () => $b6e62343e59abe43$export$71dc54d92bd04b57);
$parcel$export($b6e62343e59abe43$exports, "getRotation", () => $b6e62343e59abe43$export$df3937d3b537df0a);
$parcel$export($b6e62343e59abe43$exports, "fromRotationTranslationScale", () => $b6e62343e59abe43$export$ddf9c55c9f2be172);
$parcel$export($b6e62343e59abe43$exports, "fromRotationTranslationScaleOrigin", () => $b6e62343e59abe43$export$1def1f860edc4b1f);
$parcel$export($b6e62343e59abe43$exports, "fromQuat", () => $b6e62343e59abe43$export$2ff2bbe382249af7);
$parcel$export($b6e62343e59abe43$exports, "frustum", () => $b6e62343e59abe43$export$89b5708c387cac6c);
$parcel$export($b6e62343e59abe43$exports, "perspectiveNO", () => $b6e62343e59abe43$export$4cf19729ec9a96b8);
$parcel$export($b6e62343e59abe43$exports, "perspective", () => $b6e62343e59abe43$export$541149539f3a4684);
$parcel$export($b6e62343e59abe43$exports, "perspectiveZO", () => $b6e62343e59abe43$export$294bba99a6af0c0c);
$parcel$export($b6e62343e59abe43$exports, "perspectiveFromFieldOfView", () => $b6e62343e59abe43$export$58ae211c788e338f);
$parcel$export($b6e62343e59abe43$exports, "orthoNO", () => $b6e62343e59abe43$export$c5f65ef3eb668f27);
$parcel$export($b6e62343e59abe43$exports, "ortho", () => $b6e62343e59abe43$export$4f2167e613cfc87b);
$parcel$export($b6e62343e59abe43$exports, "orthoZO", () => $b6e62343e59abe43$export$b1d31ea7b4d854e);
$parcel$export($b6e62343e59abe43$exports, "lookAt", () => $b6e62343e59abe43$export$d924e14fd6d9aa66);
$parcel$export($b6e62343e59abe43$exports, "targetTo", () => $b6e62343e59abe43$export$aa67782f4dc9e52c);
$parcel$export($b6e62343e59abe43$exports, "str", () => $b6e62343e59abe43$export$42d51816ce590c93);
$parcel$export($b6e62343e59abe43$exports, "frob", () => $b6e62343e59abe43$export$326827e8268e9cdb);
$parcel$export($b6e62343e59abe43$exports, "add", () => $b6e62343e59abe43$export$e16d8520af44a096);
$parcel$export($b6e62343e59abe43$exports, "subtract", () => $b6e62343e59abe43$export$4e2d2ead65e5f7e3);
$parcel$export($b6e62343e59abe43$exports, "multiplyScalar", () => $b6e62343e59abe43$export$c697bed75648cdb7);
$parcel$export($b6e62343e59abe43$exports, "multiplyScalarAndAdd", () => $b6e62343e59abe43$export$553579f63bdd7137);
$parcel$export($b6e62343e59abe43$exports, "exactEquals", () => $b6e62343e59abe43$export$f2599a5cf1109d8);
$parcel$export($b6e62343e59abe43$exports, "equals", () => $b6e62343e59abe43$export$e9bab7fafb253603);
$parcel$export($b6e62343e59abe43$exports, "mul", () => $b6e62343e59abe43$export$6e3a27864ab166fe);
$parcel$export($b6e62343e59abe43$exports, "sub", () => $b6e62343e59abe43$export$f93b5905241a7cca);
var $95b1722a0f84cc62$export$fd293b15f47e270 = 0.000001;
var $95b1722a0f84cc62$export$b67359430d3b1b2 = typeof Float32Array !== "undefined" ? Float32Array : Array;
var $95b1722a0f84cc62$export$5ada478c8a628231 = Math.random;
function $95b1722a0f84cc62$export$cb2c0eb57f5e532c(type) {
    $95b1722a0f84cc62$export$b67359430d3b1b2 = type;
}
var $95b1722a0f84cc62$var$degree = Math.PI / 180;
function $95b1722a0f84cc62$export$408b8ee5959eefd5(a) {
    return a * $95b1722a0f84cc62$var$degree;
}
function $95b1722a0f84cc62$export$e9bab7fafb253603(a, b) {
    return Math.abs(a - b) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function() {
    var y = 0, i = arguments.length;
    while(i--)y += arguments[i] * arguments[i];
    return Math.sqrt(y);
};


function $b6e62343e59abe43$export$185802fd694ee1f5() {
    var out = new $95b1722a0f84cc62$export$b67359430d3b1b2(16);
    if ($95b1722a0f84cc62$export$b67359430d3b1b2 != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
    }
    out[0] = 1;
    out[5] = 1;
    out[10] = 1;
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$9cd59f9826255e47(a) {
    var out = new $95b1722a0f84cc62$export$b67359430d3b1b2(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function $b6e62343e59abe43$export$784d13d8ee351f07(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function $b6e62343e59abe43$export$a82be99ed2a44a7d(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new $95b1722a0f84cc62$export$b67359430d3b1b2(16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
function $b6e62343e59abe43$export$adaa4cf7ef1b65be(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
function $b6e62343e59abe43$export$f0954fd7d5368655(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$9cb09a71b7d66923(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3];
        var a12 = a[6], a13 = a[7];
        var a23 = a[11];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    return out;
}
function $b6e62343e59abe43$export$6897c284b6f9f4dc(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) return null;
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
}
function $b6e62343e59abe43$export$33f3c024b4ae00a1(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
    return out;
}
function $b6e62343e59abe43$export$a04698f914c55ed9(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function $b6e62343e59abe43$export$2060d2db72cce88f(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]; // Cache only the current line of the second matrix
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}
function $b6e62343e59abe43$export$d73ee8ef04f5226a(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
}
function $b6e62343e59abe43$export$dcdf75081b88279d(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function $b6e62343e59abe43$export$bb628a54ab399bc9(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.hypot(x, y, z);
    var s, c, t;
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    var b00, b01, b02;
    var b10, b11, b12;
    var b20, b21, b22;
    if (len < $95b1722a0f84cc62$export$fd293b15f47e270) return null;
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11]; // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c; // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
}
function $b6e62343e59abe43$export$a59c8716592e09af(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    } // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
}
function $b6e62343e59abe43$export$cf71e4d4ca4d1cfd(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    } // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
}
function $b6e62343e59abe43$export$ea6eae3365de5b9c(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    } // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
}
function $b6e62343e59abe43$export$bc9e79e74e9fddf6(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$832ca188ffb1955d(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$926fc125ff3c666c(out, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.hypot(x, y, z);
    var s, c, t;
    if (len < $95b1722a0f84cc62$export$fd293b15f47e270) return null;
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c; // Perform rotation-specific matrix multiplication
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$dd47cc2f828c32ef(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$7dc997d67d2b7f33(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$ad5ddaedc8f405df(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$9545ac307f2a256b(out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$ff497f2be31cc6a(out, a) {
    var translation = new $95b1722a0f84cc62$export$b67359430d3b1b2(3);
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
    var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense
    if (magnitude > 0) {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
    } else {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    }
    $b6e62343e59abe43$export$9545ac307f2a256b(out, a, translation);
    return out;
}
function $b6e62343e59abe43$export$202e99f82f7f0395(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
}
function $b6e62343e59abe43$export$71dc54d92bd04b57(out, mat) {
    var m11 = mat[0];
    var m12 = mat[1];
    var m13 = mat[2];
    var m21 = mat[4];
    var m22 = mat[5];
    var m23 = mat[6];
    var m31 = mat[8];
    var m32 = mat[9];
    var m33 = mat[10];
    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);
    return out;
}
function $b6e62343e59abe43$export$df3937d3b537df0a(out, mat) {
    var scaling = new $95b1722a0f84cc62$export$b67359430d3b1b2(3);
    $b6e62343e59abe43$export$71dc54d92bd04b57(scaling, mat);
    var is1 = 1 / scaling[0];
    var is2 = 1 / scaling[1];
    var is3 = 1 / scaling[2];
    var sm11 = mat[0] * is1;
    var sm12 = mat[1] * is2;
    var sm13 = mat[2] * is3;
    var sm21 = mat[4] * is1;
    var sm22 = mat[5] * is2;
    var sm23 = mat[6] * is3;
    var sm31 = mat[8] * is1;
    var sm32 = mat[9] * is2;
    var sm33 = mat[10] * is3;
    var trace = sm11 + sm22 + sm33;
    var S = 0;
    if (trace > 0) {
        S = Math.sqrt(trace + 1.0) * 2;
        out[3] = 0.25 * S;
        out[0] = (sm23 - sm32) / S;
        out[1] = (sm31 - sm13) / S;
        out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
        S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
        out[3] = (sm23 - sm32) / S;
        out[0] = 0.25 * S;
        out[1] = (sm12 + sm21) / S;
        out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
        S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
        out[3] = (sm31 - sm13) / S;
        out[0] = (sm12 + sm21) / S;
        out[1] = 0.25 * S;
        out[2] = (sm23 + sm32) / S;
    } else {
        S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
        out[3] = (sm12 - sm21) / S;
        out[0] = (sm31 + sm13) / S;
        out[1] = (sm23 + sm32) / S;
        out[2] = 0.25 * S;
    }
    return out;
}
function $b6e62343e59abe43$export$ddf9c55c9f2be172(out, q, v, s) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$1def1f860edc4b1f(out, q, v, s, o) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    var ox = o[0];
    var oy = o[1];
    var oz = o[2];
    var out0 = (1 - (yy + zz)) * sx;
    var out1 = (xy + wz) * sx;
    var out2 = (xz - wy) * sx;
    var out4 = (xy - wz) * sy;
    var out5 = (1 - (xx + zz)) * sy;
    var out6 = (yz + wx) * sy;
    var out8 = (xz + wy) * sz;
    var out9 = (yz - wx) * sz;
    var out10 = (1 - (xx + yy)) * sz;
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = 0;
    out[4] = out4;
    out[5] = out5;
    out[6] = out6;
    out[7] = 0;
    out[8] = out8;
    out[9] = out9;
    out[10] = out10;
    out[11] = 0;
    out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
    out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
    out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$2ff2bbe382249af7(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$89b5708c387cac6c(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left);
    var tb = 1 / (top - bottom);
    var nf = 1 / (near - far);
    out[0] = near * 2 * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = near * 2 * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near * 2 * nf;
    out[15] = 0;
    return out;
}
function $b6e62343e59abe43$export$4cf19729ec9a96b8(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = (far + near) * nf;
        out[14] = 2 * far * near * nf;
    } else {
        out[10] = -1;
        out[14] = -2 * near;
    }
    return out;
}
var $b6e62343e59abe43$export$541149539f3a4684 = $b6e62343e59abe43$export$4cf19729ec9a96b8;
function $b6e62343e59abe43$export$294bba99a6af0c0c(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = far * nf;
        out[14] = far * near * nf;
    } else {
        out[10] = -1;
        out[14] = -near;
    }
    return out;
}
function $b6e62343e59abe43$export$58ae211c788e338f(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
    var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
    var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
    var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
    var xScale = 2.0 / (leftTan + rightTan);
    var yScale = 2.0 / (upTan + downTan);
    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = (upTan - downTan) * yScale * 0.5;
    out[10] = far / (near - far);
    out[11] = -1;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = far * near / (near - far);
    out[15] = 0.0;
    return out;
}
function $b6e62343e59abe43$export$c5f65ef3eb668f27(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
}
var $b6e62343e59abe43$export$4f2167e613cfc87b = $b6e62343e59abe43$export$c5f65ef3eb668f27;
function $b6e62343e59abe43$export$b1d31ea7b4d854e(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = near * nf;
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$d924e14fd6d9aa66(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
    var eyex = eye[0];
    var eyey = eye[1];
    var eyez = eye[2];
    var upx = up[0];
    var upy = up[1];
    var upz = up[2];
    var centerx = center[0];
    var centery = center[1];
    var centerz = center[2];
    if (Math.abs(eyex - centerx) < $95b1722a0f84cc62$export$fd293b15f47e270 && Math.abs(eyey - centery) < $95b1722a0f84cc62$export$fd293b15f47e270 && Math.abs(eyez - centerz) < $95b1722a0f84cc62$export$fd293b15f47e270) return $b6e62343e59abe43$export$f0954fd7d5368655(out);
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len = 1 / Math.hypot(z0, z1, z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.hypot(x0, x1, x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len = Math.hypot(y0, y1, y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$aa67782f4dc9e52c(out, eye, target, up) {
    var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    var len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
    }
    var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
}
function $b6e62343e59abe43$export$42d51816ce590c93(a) {
    return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
function $b6e62343e59abe43$export$326827e8268e9cdb(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
function $b6e62343e59abe43$export$e16d8520af44a096(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
}
function $b6e62343e59abe43$export$4e2d2ead65e5f7e3(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
}
function $b6e62343e59abe43$export$c697bed75648cdb7(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
}
function $b6e62343e59abe43$export$553579f63bdd7137(out, a, b, scale1) {
    out[0] = a[0] + b[0] * scale1;
    out[1] = a[1] + b[1] * scale1;
    out[2] = a[2] + b[2] * scale1;
    out[3] = a[3] + b[3] * scale1;
    out[4] = a[4] + b[4] * scale1;
    out[5] = a[5] + b[5] * scale1;
    out[6] = a[6] + b[6] * scale1;
    out[7] = a[7] + b[7] * scale1;
    out[8] = a[8] + b[8] * scale1;
    out[9] = a[9] + b[9] * scale1;
    out[10] = a[10] + b[10] * scale1;
    out[11] = a[11] + b[11] * scale1;
    out[12] = a[12] + b[12] * scale1;
    out[13] = a[13] + b[13] * scale1;
    out[14] = a[14] + b[14] * scale1;
    out[15] = a[15] + b[15] * scale1;
    return out;
}
function $b6e62343e59abe43$export$f2599a5cf1109d8(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
function $b6e62343e59abe43$export$e9bab7fafb253603(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
    var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
    var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    return Math.abs(a0 - b0) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
var $b6e62343e59abe43$export$6e3a27864ab166fe = $b6e62343e59abe43$export$2060d2db72cce88f;
var $b6e62343e59abe43$export$f93b5905241a7cca = $b6e62343e59abe43$export$4e2d2ead65e5f7e3;

var $2ded8b9747f14db0$exports = {};

$parcel$export($2ded8b9747f14db0$exports, "create", () => $2ded8b9747f14db0$export$185802fd694ee1f5);
$parcel$export($2ded8b9747f14db0$exports, "clone", () => $2ded8b9747f14db0$export$9cd59f9826255e47);
$parcel$export($2ded8b9747f14db0$exports, "length", () => $2ded8b9747f14db0$export$f24224f1c91d8156);
$parcel$export($2ded8b9747f14db0$exports, "fromValues", () => $2ded8b9747f14db0$export$a82be99ed2a44a7d);
$parcel$export($2ded8b9747f14db0$exports, "copy", () => $2ded8b9747f14db0$export$784d13d8ee351f07);
$parcel$export($2ded8b9747f14db0$exports, "set", () => $2ded8b9747f14db0$export$adaa4cf7ef1b65be);
$parcel$export($2ded8b9747f14db0$exports, "add", () => $2ded8b9747f14db0$export$e16d8520af44a096);
$parcel$export($2ded8b9747f14db0$exports, "subtract", () => $2ded8b9747f14db0$export$4e2d2ead65e5f7e3);
$parcel$export($2ded8b9747f14db0$exports, "multiply", () => $2ded8b9747f14db0$export$2060d2db72cce88f);
$parcel$export($2ded8b9747f14db0$exports, "divide", () => $2ded8b9747f14db0$export$cd007d971a5a2143);
$parcel$export($2ded8b9747f14db0$exports, "ceil", () => $2ded8b9747f14db0$export$803ce6b71a0a94b2);
$parcel$export($2ded8b9747f14db0$exports, "floor", () => $2ded8b9747f14db0$export$a3fe094919f356fd);
$parcel$export($2ded8b9747f14db0$exports, "min", () => $2ded8b9747f14db0$export$96ec731ed4dcb222);
$parcel$export($2ded8b9747f14db0$exports, "max", () => $2ded8b9747f14db0$export$8960430cfd85939f);
$parcel$export($2ded8b9747f14db0$exports, "round", () => $2ded8b9747f14db0$export$2077e0241d6afd3c);
$parcel$export($2ded8b9747f14db0$exports, "scale", () => $2ded8b9747f14db0$export$dcdf75081b88279d);
$parcel$export($2ded8b9747f14db0$exports, "scaleAndAdd", () => $2ded8b9747f14db0$export$19cedf1da84ba854);
$parcel$export($2ded8b9747f14db0$exports, "distance", () => $2ded8b9747f14db0$export$9f17032d917177de);
$parcel$export($2ded8b9747f14db0$exports, "squaredDistance", () => $2ded8b9747f14db0$export$88e6ebb4fe54f538);
$parcel$export($2ded8b9747f14db0$exports, "squaredLength", () => $2ded8b9747f14db0$export$ab44e1323ffc8376);
$parcel$export($2ded8b9747f14db0$exports, "negate", () => $2ded8b9747f14db0$export$aef51622e549b8b0);
$parcel$export($2ded8b9747f14db0$exports, "inverse", () => $2ded8b9747f14db0$export$70ae2c07e401031b);
$parcel$export($2ded8b9747f14db0$exports, "normalize", () => $2ded8b9747f14db0$export$a3295358bff77e);
$parcel$export($2ded8b9747f14db0$exports, "dot", () => $2ded8b9747f14db0$export$94132a0e348806d4);
$parcel$export($2ded8b9747f14db0$exports, "cross", () => $2ded8b9747f14db0$export$bb646b20bb93d339);
$parcel$export($2ded8b9747f14db0$exports, "lerp", () => $2ded8b9747f14db0$export$3a89f8d6f6bf6c9f);
$parcel$export($2ded8b9747f14db0$exports, "hermite", () => $2ded8b9747f14db0$export$ae8865616f30561c);
$parcel$export($2ded8b9747f14db0$exports, "bezier", () => $2ded8b9747f14db0$export$b9c5f84610baddaf);
$parcel$export($2ded8b9747f14db0$exports, "random", () => $2ded8b9747f14db0$export$4385e60b38654f68);
$parcel$export($2ded8b9747f14db0$exports, "transformMat4", () => $2ded8b9747f14db0$export$5ffbd13800309d59);
$parcel$export($2ded8b9747f14db0$exports, "transformMat3", () => $2ded8b9747f14db0$export$f0bfa0a0024626ee);
$parcel$export($2ded8b9747f14db0$exports, "transformQuat", () => $2ded8b9747f14db0$export$c32adef9e939ce85);
$parcel$export($2ded8b9747f14db0$exports, "rotateX", () => $2ded8b9747f14db0$export$a59c8716592e09af);
$parcel$export($2ded8b9747f14db0$exports, "rotateY", () => $2ded8b9747f14db0$export$cf71e4d4ca4d1cfd);
$parcel$export($2ded8b9747f14db0$exports, "rotateZ", () => $2ded8b9747f14db0$export$ea6eae3365de5b9c);
$parcel$export($2ded8b9747f14db0$exports, "angle", () => $2ded8b9747f14db0$export$944b09d2ad10b378);
$parcel$export($2ded8b9747f14db0$exports, "zero", () => $2ded8b9747f14db0$export$7f9972325ebfd559);
$parcel$export($2ded8b9747f14db0$exports, "str", () => $2ded8b9747f14db0$export$42d51816ce590c93);
$parcel$export($2ded8b9747f14db0$exports, "exactEquals", () => $2ded8b9747f14db0$export$f2599a5cf1109d8);
$parcel$export($2ded8b9747f14db0$exports, "equals", () => $2ded8b9747f14db0$export$e9bab7fafb253603);
$parcel$export($2ded8b9747f14db0$exports, "sub", () => $2ded8b9747f14db0$export$f93b5905241a7cca);
$parcel$export($2ded8b9747f14db0$exports, "mul", () => $2ded8b9747f14db0$export$6e3a27864ab166fe);
$parcel$export($2ded8b9747f14db0$exports, "div", () => $2ded8b9747f14db0$export$159d9494db57879b);
$parcel$export($2ded8b9747f14db0$exports, "dist", () => $2ded8b9747f14db0$export$6c4a311cc157c764);
$parcel$export($2ded8b9747f14db0$exports, "sqrDist", () => $2ded8b9747f14db0$export$2422cd6c492a8b3a);
$parcel$export($2ded8b9747f14db0$exports, "len", () => $2ded8b9747f14db0$export$fc1400facf92c78);
$parcel$export($2ded8b9747f14db0$exports, "sqrLen", () => $2ded8b9747f14db0$export$99d8dd3f32a3435);
$parcel$export($2ded8b9747f14db0$exports, "forEach", () => $2ded8b9747f14db0$export$4b80e395e36b5a56);

function $2ded8b9747f14db0$export$185802fd694ee1f5() {
    var out = new $95b1722a0f84cc62$export$b67359430d3b1b2(3);
    if ($95b1722a0f84cc62$export$b67359430d3b1b2 != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
    }
    return out;
}
function $2ded8b9747f14db0$export$9cd59f9826255e47(a) {
    var out = new $95b1722a0f84cc62$export$b67359430d3b1b2(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function $2ded8b9747f14db0$export$f24224f1c91d8156(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return Math.hypot(x, y, z);
}
function $2ded8b9747f14db0$export$a82be99ed2a44a7d(x, y, z) {
    var out = new $95b1722a0f84cc62$export$b67359430d3b1b2(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function $2ded8b9747f14db0$export$784d13d8ee351f07(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function $2ded8b9747f14db0$export$adaa4cf7ef1b65be(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function $2ded8b9747f14db0$export$e16d8520af44a096(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
}
function $2ded8b9747f14db0$export$4e2d2ead65e5f7e3(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
}
function $2ded8b9747f14db0$export$2060d2db72cce88f(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
}
function $2ded8b9747f14db0$export$cd007d971a5a2143(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
}
function $2ded8b9747f14db0$export$803ce6b71a0a94b2(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
}
function $2ded8b9747f14db0$export$a3fe094919f356fd(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
}
function $2ded8b9747f14db0$export$96ec731ed4dcb222(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
}
function $2ded8b9747f14db0$export$8960430cfd85939f(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
}
function $2ded8b9747f14db0$export$2077e0241d6afd3c(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
}
function $2ded8b9747f14db0$export$dcdf75081b88279d(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
}
function $2ded8b9747f14db0$export$19cedf1da84ba854(out, a, b, scale1) {
    out[0] = a[0] + b[0] * scale1;
    out[1] = a[1] + b[1] * scale1;
    out[2] = a[2] + b[2] * scale1;
    return out;
}
function $2ded8b9747f14db0$export$9f17032d917177de(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return Math.hypot(x, y, z);
}
function $2ded8b9747f14db0$export$88e6ebb4fe54f538(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return x * x + y * y + z * z;
}
function $2ded8b9747f14db0$export$ab44e1323ffc8376(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return x * x + y * y + z * z;
}
function $2ded8b9747f14db0$export$aef51622e549b8b0(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
}
function $2ded8b9747f14db0$export$70ae2c07e401031b(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
}
function $2ded8b9747f14db0$export$a3295358bff77e(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var len1 = x * x + y * y + z * z;
    if (len1 > 0) //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
    out[0] = a[0] * len1;
    out[1] = a[1] * len1;
    out[2] = a[2] * len1;
    return out;
}
function $2ded8b9747f14db0$export$94132a0e348806d4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function $2ded8b9747f14db0$export$bb646b20bb93d339(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2];
    var bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}
function $2ded8b9747f14db0$export$3a89f8d6f6bf6c9f(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
}
function $2ded8b9747f14db0$export$ae8865616f30561c(out, a, b, c, d, t) {
    var factorTimes2 = t * t;
    var factor1 = factorTimes2 * (2 * t - 3) + 1;
    var factor2 = factorTimes2 * (t - 2) + t;
    var factor3 = factorTimes2 * (t - 1);
    var factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
function $2ded8b9747f14db0$export$b9c5f84610baddaf(out, a, b, c, d, t) {
    var inverseFactor = 1 - t;
    var inverseFactorTimesTwo = inverseFactor * inverseFactor;
    var factorTimes2 = t * t;
    var factor1 = inverseFactorTimesTwo * inverseFactor;
    var factor2 = 3 * t * inverseFactorTimesTwo;
    var factor3 = 3 * factorTimes2 * inverseFactor;
    var factor4 = factorTimes2 * t;
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
function $2ded8b9747f14db0$export$4385e60b38654f68(out, scale2) {
    scale2 = scale2 || 1.0;
    var r = $95b1722a0f84cc62$export$5ada478c8a628231() * 2.0 * Math.PI;
    var z = $95b1722a0f84cc62$export$5ada478c8a628231() * 2.0 - 1.0;
    var zScale = Math.sqrt(1.0 - z * z) * scale2;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale2;
    return out;
}
function $2ded8b9747f14db0$export$5ffbd13800309d59(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    var w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
}
function $2ded8b9747f14db0$export$f0bfa0a0024626ee(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}
function $2ded8b9747f14db0$export$c32adef9e939ce85(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var x = a[0], y = a[1], z = a[2]; // var qvec = [qx, qy, qz];
    // var uv = vec3.cross([], qvec, a);
    var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);
    var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);
    var w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2; // vec3.scale(uuv, uuv, 2);
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
}
function $2ded8b9747f14db0$export$a59c8716592e09af(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[0];
    r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
    r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function $2ded8b9747f14db0$export$cf71e4d4ca4d1cfd(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
    r[1] = p[1];
    r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function $2ded8b9747f14db0$export$ea6eae3365de5b9c(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
    r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
    r[2] = p[2]; //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function $2ded8b9747f14db0$export$944b09d2ad10b378(a, b) {
    var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && $2ded8b9747f14db0$export$94132a0e348806d4(a, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function $2ded8b9747f14db0$export$7f9972325ebfd559(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    return out;
}
function $2ded8b9747f14db0$export$42d51816ce590c93(a) {
    return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function $2ded8b9747f14db0$export$f2599a5cf1109d8(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function $2ded8b9747f14db0$export$e9bab7fafb253603(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return Math.abs(a0 - b0) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= $95b1722a0f84cc62$export$fd293b15f47e270 * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
var $2ded8b9747f14db0$export$f93b5905241a7cca = $2ded8b9747f14db0$export$4e2d2ead65e5f7e3;
var $2ded8b9747f14db0$export$6e3a27864ab166fe = $2ded8b9747f14db0$export$2060d2db72cce88f;
var $2ded8b9747f14db0$export$159d9494db57879b = $2ded8b9747f14db0$export$cd007d971a5a2143;
var $2ded8b9747f14db0$export$6c4a311cc157c764 = $2ded8b9747f14db0$export$9f17032d917177de;
var $2ded8b9747f14db0$export$2422cd6c492a8b3a = $2ded8b9747f14db0$export$88e6ebb4fe54f538;
var $2ded8b9747f14db0$export$fc1400facf92c78 = $2ded8b9747f14db0$export$f24224f1c91d8156;
var $2ded8b9747f14db0$export$99d8dd3f32a3435 = $2ded8b9747f14db0$export$ab44e1323ffc8376;
var $2ded8b9747f14db0$export$4b80e395e36b5a56 = function() {
    var vec = $2ded8b9747f14db0$export$185802fd694ee1f5();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) stride = 3;
        if (!offset) offset = 0;
        if (count) l = Math.min(count * stride + offset, a.length);
        else l = a.length;
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
        }
        return a;
    };
}();



/*
Спизжено с https://webglfundamentals.org/webgl/lessons/ru/webgl-3d-camera.html#toc
*/ const $39df45f5a9adb44e$var$utils = {
    inverse: function(m) {
        var m00 = m[0];
        var m01 = m[1];
        var m02 = m[2];
        var m03 = m[3];
        var m10 = m[4];
        var m11 = m[5];
        var m12 = m[6];
        var m13 = m[7];
        var m20 = m[8];
        var m21 = m[9];
        var m22 = m[10];
        var m23 = m[11];
        var m30 = m[12];
        var m31 = m[13];
        var m32 = m[14];
        var m33 = m[15];
        var tmp_0 = m22 * m33;
        var tmp_1 = m32 * m23;
        var tmp_2 = m12 * m33;
        var tmp_3 = m32 * m13;
        var tmp_4 = m12 * m23;
        var tmp_5 = m22 * m13;
        var tmp_6 = m02 * m33;
        var tmp_7 = m32 * m03;
        var tmp_8 = m02 * m23;
        var tmp_9 = m22 * m03;
        var tmp_10 = m02 * m13;
        var tmp_11 = m12 * m03;
        var tmp_12 = m20 * m31;
        var tmp_13 = m30 * m21;
        var tmp_14 = m10 * m31;
        var tmp_15 = m30 * m11;
        var tmp_16 = m10 * m21;
        var tmp_17 = m20 * m11;
        var tmp_18 = m00 * m31;
        var tmp_19 = m30 * m01;
        var tmp_20 = m00 * m21;
        var tmp_21 = m20 * m01;
        var tmp_22 = m00 * m11;
        var tmp_23 = m10 * m01;
        var t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
        var t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
        var t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
        var t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
        var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
        return new Float32Array([
            d * t0,
            d * t1,
            d * t2,
            d * t3,
            d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30)),
            d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30)),
            d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30)),
            d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20)),
            d * (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33)),
            d * (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33)),
            d * (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33)),
            d * (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23)),
            d * (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22)),
            d * (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02)),
            d * (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12)),
            d * (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02))
        ]);
    }
};
var $39df45f5a9adb44e$export$2e2bcd8739ae039 = $39df45f5a9adb44e$var$utils;


const $2c59c3e297ed1d4b$var$matrix4 = {
    translate: (tx, ty)=>new Float32Array([
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            tx,
            ty,
            0,
            1, 
        ]),
    rotateZ: (angle)=>{
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Float32Array([
            cos,
            sin,
            0,
            0,
            -sin,
            cos,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1, 
        ]);
    },
    rotateX: (angle)=>{
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Float32Array([
            1,
            0,
            0,
            0,
            0,
            cos,
            sin,
            0,
            0,
            -sin,
            cos,
            0,
            0,
            0,
            0,
            1, 
        ]);
    },
    rotateY: (angle)=>{
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Float32Array([
            cos,
            0,
            -sin,
            0,
            0,
            1,
            0,
            0,
            sin,
            0,
            cos,
            0,
            0,
            0,
            0,
            1, 
        ]);
    },
    scale: (sx, sy)=>new Float32Array([
            sx,
            0,
            0,
            0,
            0,
            sy,
            0,
            0,
            0,
            0,
            sy,
            0,
            0,
            0,
            0,
            1, 
        ]),
    multiple: (m1, m2)=>new Float32Array([
            m1[0] * m2[0] + m1[1] * m2[4] + m1[2] * m2[8] + m1[3] * m2[12],
            m1[0] * m2[1] + m1[1] * m2[5] + m1[2] * m2[9] + m1[3] * m2[13],
            m1[0] * m2[2] + m1[1] * m2[6] + m1[2] * m2[10] + m1[3] * m2[14],
            m1[0] * m2[3] + m1[1] * m2[7] + m1[2] * m2[11] + m1[3] * m2[15],
            m1[4] * m2[0] + m1[5] * m2[4] + m1[6] * m2[8] + m1[7] * m2[12],
            m1[4] * m2[1] + m1[5] * m2[5] + m1[6] * m2[9] + m1[7] * m2[13],
            m1[4] * m2[2] + m1[5] * m2[6] + m1[6] * m2[10] + m1[7] * m2[14],
            m1[4] * m2[3] + m1[5] * m2[7] + m1[6] * m2[11] + m1[7] * m2[15],
            m1[8] * m2[0] + m1[9] * m2[4] + m1[10] * m2[8] + m1[11] * m2[12],
            m1[8] * m2[1] + m1[9] * m2[5] + m1[10] * m2[9] + m1[11] * m2[13],
            m1[8] * m2[2] + m1[9] * m2[6] + m1[10] * m2[10] + m1[11] * m2[14],
            m1[8] * m2[3] + m1[9] * m2[7] + m1[10] * m2[11] + m1[11] * m2[15],
            m1[12] * m2[0] + m1[13] * m2[4] + m1[14] * m2[8] + m1[15] * m2[12],
            m1[12] * m2[1] + m1[13] * m2[5] + m1[14] * m2[9] + m1[15] * m2[13],
            m1[12] * m2[2] + m1[13] * m2[6] + m1[14] * m2[10] + m1[15] * m2[14],
            m1[12] * m2[3] + m1[13] * m2[7] + m1[14] * m2[11] + m1[15] * m2[15], 
        ]),
    cross: (a, b)=>[
            a[1] * b[2] - a[2] * b[1],
            a[2] * b[0] - a[0] * b[2],
            a[0] * b[1] - a[1] * b[0]
        ],
    subtractVectors: (a, b)=>[
            a[0] - b[0],
            a[1] - b[1],
            a[2] - b[2], 
        ],
    normalize (v) {
        var length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
        if (length > 0.00001) return [
            v[0] / length,
            v[1] / length,
            v[2] / length
        ];
        else return [
            0,
            0,
            0
        ];
    },
    lookAt (cameraPosition, target, up) {
        var zAxis = $2c59c3e297ed1d4b$var$matrix4.normalize($2c59c3e297ed1d4b$var$matrix4.subtractVectors(cameraPosition, target));
        var xAxis = $2c59c3e297ed1d4b$var$matrix4.normalize($2c59c3e297ed1d4b$var$matrix4.cross(up, zAxis));
        var yAxis = $2c59c3e297ed1d4b$var$matrix4.normalize($2c59c3e297ed1d4b$var$matrix4.cross(zAxis, xAxis));
        return new Float32Array([
            xAxis[0],
            xAxis[1],
            xAxis[2],
            0,
            yAxis[0],
            yAxis[1],
            yAxis[2],
            0,
            zAxis[0],
            zAxis[1],
            zAxis[2],
            0,
            cameraPosition[0],
            cameraPosition[1],
            cameraPosition[2],
            1, 
        ]);
    },
    inverse: (arr)=>(0, $39df45f5a9adb44e$export$2e2bcd8739ae039).inverse(arr),
    perspective (fieldOfView, aspect, near, far) {
        const f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfView);
        const rangeInv = 1.0 / (near - far);
        return new Float32Array([
            f / aspect,
            0,
            0,
            0,
            0,
            f,
            0,
            0,
            0,
            0,
            (near + far) * rangeInv,
            -1,
            0,
            0,
            near * far * rangeInv * 2,
            0, 
        ]);
    },
    projection: function(width, height, depth) {
        // Note: This matrix flips the Y axis so 0 is at the top.
        return new Float32Array([
            2 / width,
            0,
            0,
            0,
            0,
            -2 / height,
            0,
            0,
            0,
            0,
            2 / depth,
            0,
            -1,
            1,
            0,
            1, 
        ]);
    }
};
var $2c59c3e297ed1d4b$export$2e2bcd8739ae039 = $2c59c3e297ed1d4b$var$matrix4;


var $5d11ffc170b1a8db$exports = {};
$5d11ffc170b1a8db$exports = JSON.parse('{"pages":["roboto-bold2.png"],"chars":[{"id":40,"index":12,"char":"(","width":92,"height":183,"xoffset":-22,"yoffset":24,"xadvance":42,"chnl":15,"x":0,"y":0,"page":0},{"id":41,"index":13,"char":")","width":92,"height":183,"xoffset":-28,"yoffset":24,"xadvance":42,"chnl":15,"x":93,"y":0,"page":0},{"id":91,"index":63,"char":"[","width":84,"height":177,"xoffset":-22,"yoffset":22,"xadvance":33,"chnl":15,"x":186,"y":0,"page":0},{"id":93,"index":65,"char":"]","width":84,"height":177,"xoffset":-29,"yoffset":22,"xadvance":33,"chnl":15,"x":271,"y":0,"page":0},{"id":123,"index":95,"char":"{","width":95,"height":175,"xoffset":-27,"yoffset":26,"xadvance":40,"chnl":15,"x":356,"y":0,"page":0},{"id":125,"index":97,"char":"}","width":95,"height":175,"xoffset":-28,"yoffset":26,"xadvance":40,"chnl":15,"x":356,"y":176,"page":0},{"id":106,"index":78,"char":"j","width":87,"height":173,"xoffset":-34,"yoffset":33,"xadvance":30,"chnl":15,"x":186,"y":178,"page":0},{"id":36,"index":8,"char":"$","width":116,"height":171,"xoffset":-24,"yoffset":21,"xadvance":68,"chnl":15,"x":0,"y":184,"page":0},{"id":64,"index":36,"char":"@","width":156,"height":170,"xoffset":-24,"yoffset":37,"xadvance":107,"chnl":15,"x":452,"y":0,"page":0},{"id":81,"index":53,"char":"Q","width":131,"height":161,"xoffset":-24,"yoffset":34,"xadvance":83,"chnl":15,"x":452,"y":171,"page":0},{"id":87,"index":59,"char":"W","width":161,"height":145,"xoffset":-27,"yoffset":35,"xadvance":106,"chnl":15,"x":0,"y":356,"page":0},{"id":124,"index":96,"char":"|","width":70,"height":161,"xoffset":-20,"yoffset":35,"xadvance":30,"chnl":15,"x":274,"y":178,"page":0},{"id":47,"index":19,"char":"/","width":105,"height":153,"xoffset":-30,"yoffset":35,"xadvance":47,"chnl":15,"x":162,"y":352,"page":0},{"id":92,"index":64,"char":"\\\\","width":110,"height":153,"xoffset":-29,"yoffset":35,"xadvance":50,"chnl":15,"x":268,"y":352,"page":0},{"id":98,"index":70,"char":"b","width":116,"height":151,"xoffset":-23,"yoffset":30,"xadvance":68,"chnl":15,"x":379,"y":352,"page":0},{"id":100,"index":72,"char":"d","width":116,"height":151,"xoffset":-25,"yoffset":30,"xadvance":68,"chnl":15,"x":496,"y":333,"page":0},{"id":102,"index":74,"char":"f","width":100,"height":151,"xoffset":-27,"yoffset":29,"xadvance":43,"chnl":15,"x":584,"y":171,"page":0},{"id":103,"index":75,"char":"g","width":116,"height":150,"xoffset":-25,"yoffset":55,"xadvance":68,"chnl":15,"x":609,"y":0,"page":0},{"id":104,"index":76,"char":"h","width":112,"height":150,"xoffset":-23,"yoffset":30,"xadvance":67,"chnl":15,"x":613,"y":323,"page":0},{"id":107,"index":79,"char":"k","width":116,"height":150,"xoffset":-23,"yoffset":30,"xadvance":63,"chnl":15,"x":685,"y":151,"page":0},{"id":108,"index":80,"char":"l","width":74,"height":150,"xoffset":-22,"yoffset":30,"xadvance":31,"chnl":15,"x":726,"y":0,"page":0},{"id":109,"index":81,"char":"m","width":150,"height":125,"xoffset":-23,"yoffset":55,"xadvance":104,"chnl":15,"x":801,"y":0,"page":0},{"id":112,"index":84,"char":"p","width":116,"height":149,"xoffset":-23,"yoffset":55,"xadvance":68,"chnl":15,"x":726,"y":302,"page":0},{"id":113,"index":85,"char":"q","width":115,"height":149,"xoffset":-25,"yoffset":55,"xadvance":68,"chnl":15,"x":802,"y":126,"page":0},{"id":121,"index":93,"char":"y","width":117,"height":149,"xoffset":-29,"yoffset":57,"xadvance":58,"chnl":15,"x":843,"y":276,"page":0},{"id":37,"index":9,"char":"%","width":137,"height":148,"xoffset":-24,"yoffset":33,"xadvance":88,"chnl":15,"x":0,"y":502,"page":0},{"id":38,"index":10,"char":"&","width":131,"height":148,"xoffset":-25,"yoffset":34,"xadvance":77,"chnl":15,"x":843,"y":426,"page":0},{"id":48,"index":20,"char":"0","width":116,"height":148,"xoffset":-24,"yoffset":34,"xadvance":68,"chnl":15,"x":726,"y":452,"page":0},{"id":51,"index":23,"char":"3","width":117,"height":148,"xoffset":-25,"yoffset":34,"xadvance":68,"chnl":15,"x":843,"y":575,"page":0},{"id":56,"index":28,"char":"8","width":116,"height":148,"xoffset":-24,"yoffset":34,"xadvance":68,"chnl":15,"x":496,"y":485,"page":0},{"id":67,"index":39,"char":"C","width":128,"height":148,"xoffset":-24,"yoffset":34,"xadvance":78,"chnl":15,"x":613,"y":601,"page":0},{"id":71,"index":43,"char":"G","width":128,"height":148,"xoffset":-24,"yoffset":34,"xadvance":82,"chnl":15,"x":0,"y":750,"page":0},{"id":77,"index":49,"char":"M","width":148,"height":145,"xoffset":-21,"yoffset":35,"xadvance":105,"chnl":15,"x":129,"y":750,"page":0},{"id":79,"index":51,"char":"O","width":131,"height":148,"xoffset":-24,"yoffset":34,"xadvance":83,"chnl":15,"x":278,"y":506,"page":0},{"id":83,"index":55,"char":"S","width":124,"height":148,"xoffset":-26,"yoffset":34,"xadvance":72,"chnl":15,"x":138,"y":506,"page":0},{"id":54,"index":26,"char":"6","width":116,"height":147,"xoffset":-23,"yoffset":34,"xadvance":68,"chnl":15,"x":410,"y":634,"page":0},{"id":57,"index":29,"char":"9","width":116,"height":147,"xoffset":-25,"yoffset":34,"xadvance":68,"chnl":15,"x":278,"y":655,"page":0},{"id":63,"index":35,"char":"?","width":110,"height":147,"xoffset":-26,"yoffset":34,"xadvance":58,"chnl":15,"x":278,"y":803,"page":0},{"id":105,"index":77,"char":"i","width":76,"height":147,"xoffset":-23,"yoffset":33,"xadvance":31,"chnl":15,"x":918,"y":126,"page":0},{"id":33,"index":5,"char":"!","width":76,"height":146,"xoffset":-22,"yoffset":35,"xadvance":32,"chnl":15,"x":527,"y":634,"page":0},{"id":49,"index":21,"char":"1","width":95,"height":146,"xoffset":-20,"yoffset":34,"xadvance":68,"chnl":15,"x":742,"y":601,"page":0},{"id":50,"index":22,"char":"2","width":119,"height":146,"xoffset":-25,"yoffset":34,"xadvance":68,"chnl":15,"x":838,"y":724,"page":0},{"id":53,"index":25,"char":"5","width":116,"height":146,"xoffset":-22,"yoffset":35,"xadvance":68,"chnl":15,"x":389,"y":871,"page":0},{"id":74,"index":46,"char":"J","width":116,"height":146,"xoffset":-27,"yoffset":35,"xadvance":67,"chnl":15,"x":506,"y":871,"page":0},{"id":85,"index":57,"char":"U","width":124,"height":146,"xoffset":-23,"yoffset":35,"xadvance":78,"chnl":15,"x":623,"y":871,"page":0},{"id":35,"index":7,"char":"#","width":125,"height":145,"xoffset":-24,"yoffset":35,"xadvance":73,"chnl":15,"x":748,"y":871,"page":0},{"id":52,"index":24,"char":"4","width":122,"height":145,"xoffset":-27,"yoffset":35,"xadvance":68,"chnl":15,"x":874,"y":871,"page":0},{"id":55,"index":27,"char":"7","width":119,"height":145,"xoffset":-26,"yoffset":35,"xadvance":68,"chnl":15,"x":958,"y":724,"page":0},{"id":65,"index":37,"char":"A","width":138,"height":145,"xoffset":-29,"yoffset":35,"xadvance":80,"chnl":15,"x":961,"y":575,"page":0},{"id":66,"index":38,"char":"B","width":121,"height":145,"xoffset":-21,"yoffset":35,"xadvance":76,"chnl":15,"x":961,"y":274,"page":0},{"id":68,"index":40,"char":"D","width":124,"height":145,"xoffset":-21,"yoffset":35,"xadvance":78,"chnl":15,"x":997,"y":870,"page":0},{"id":69,"index":41,"char":"E","width":116,"height":145,"xoffset":-21,"yoffset":35,"xadvance":68,"chnl":15,"x":1078,"y":721,"page":0},{"id":70,"index":42,"char":"F","width":114,"height":145,"xoffset":-21,"yoffset":35,"xadvance":66,"chnl":15,"x":975,"y":420,"page":0},{"id":72,"index":44,"char":"H","width":128,"height":145,"xoffset":-21,"yoffset":35,"xadvance":85,"chnl":15,"x":1122,"y":867,"page":0},{"id":73,"index":45,"char":"I","width":75,"height":145,"xoffset":-20,"yoffset":35,"xadvance":34,"chnl":15,"x":995,"y":0,"page":0},{"id":75,"index":47,"char":"K","width":128,"height":145,"xoffset":-21,"yoffset":35,"xadvance":76,"chnl":15,"x":1071,"y":0,"page":0},{"id":76,"index":48,"char":"L","width":114,"height":145,"xoffset":-21,"yoffset":35,"xadvance":65,"chnl":15,"x":1083,"y":146,"page":0},{"id":78,"index":50,"char":"N","width":128,"height":145,"xoffset":-21,"yoffset":35,"xadvance":85,"chnl":15,"x":1090,"y":292,"page":0},{"id":80,"index":52,"char":"P","width":124,"height":145,"xoffset":-21,"yoffset":35,"xadvance":77,"chnl":15,"x":1198,"y":146,"page":0},{"id":82,"index":54,"char":"R","width":124,"height":145,"xoffset":-21,"yoffset":35,"xadvance":75,"chnl":15,"x":1200,"y":0,"page":0},{"id":84,"index":56,"char":"T","width":128,"height":145,"xoffset":-27,"yoffset":35,"xadvance":73,"chnl":15,"x":1100,"y":438,"page":0},{"id":86,"index":58,"char":"V","width":136,"height":145,"xoffset":-29,"yoffset":35,"xadvance":78,"chnl":15,"x":1219,"y":292,"page":0},{"id":88,"index":60,"char":"X","width":131,"height":145,"xoffset":-28,"yoffset":35,"xadvance":76,"chnl":15,"x":1323,"y":146,"page":0},{"id":89,"index":61,"char":"Y","width":132,"height":145,"xoffset":-30,"yoffset":35,"xadvance":73,"chnl":15,"x":1325,"y":0,"page":0},{"id":90,"index":62,"char":"Z","width":124,"height":145,"xoffset":-25,"yoffset":35,"xadvance":72,"chnl":15,"x":1195,"y":584,"page":0},{"id":119,"index":91,"char":"w","width":145,"height":123,"xoffset":-28,"yoffset":57,"xadvance":89,"chnl":15,"x":0,"y":899,"page":0},{"id":59,"index":31,"char":";","width":80,"height":144,"xoffset":-27,"yoffset":55,"xadvance":29,"chnl":15,"x":1229,"y":438,"page":0},{"id":116,"index":88,"char":"t","width":96,"height":140,"xoffset":-30,"yoffset":41,"xadvance":40,"chnl":15,"x":1310,"y":438,"page":0},{"id":97,"index":69,"char":"a","width":114,"height":126,"xoffset":-25,"yoffset":55,"xadvance":65,"chnl":15,"x":146,"y":896,"page":0},{"id":99,"index":71,"char":"c","width":115,"height":126,"xoffset":-25,"yoffset":55,"xadvance":63,"chnl":15,"x":1195,"y":730,"page":0},{"id":101,"index":73,"char":"e","width":116,"height":126,"xoffset":-25,"yoffset":55,"xadvance":64,"chnl":15,"x":1356,"y":292,"page":0},{"id":111,"index":83,"char":"o","width":119,"height":126,"xoffset":-25,"yoffset":55,"xadvance":68,"chnl":15,"x":1455,"y":146,"page":0},{"id":115,"index":87,"char":"s","width":112,"height":126,"xoffset":-26,"yoffset":55,"xadvance":62,"chnl":15,"x":613,"y":474,"page":0},{"id":126,"index":98,"char":"~","width":126,"height":85,"xoffset":-23,"yoffset":72,"xadvance":80,"chnl":15,"x":395,"y":782,"page":0},{"id":58,"index":30,"char":":","width":77,"height":125,"xoffset":-22,"yoffset":55,"xadvance":32,"chnl":15,"x":995,"y":146,"page":0},{"id":110,"index":82,"char":"n","width":112,"height":125,"xoffset":-23,"yoffset":55,"xadvance":67,"chnl":15,"x":1458,"y":0,"page":0},{"id":114,"index":86,"char":"r","width":93,"height":125,"xoffset":-23,"yoffset":55,"xadvance":42,"chnl":15,"x":1100,"y":584,"page":0},{"id":117,"index":89,"char":"u","width":113,"height":125,"xoffset":-23,"yoffset":57,"xadvance":67,"chnl":15,"x":1571,"y":0,"page":0},{"id":118,"index":90,"char":"v","width":116,"height":123,"xoffset":-29,"yoffset":57,"xadvance":59,"chnl":15,"x":1251,"y":857,"page":0},{"id":120,"index":92,"char":"x","width":117,"height":123,"xoffset":-28,"yoffset":57,"xadvance":60,"chnl":15,"x":1311,"y":730,"page":0},{"id":122,"index":94,"char":"z","width":111,"height":123,"xoffset":-25,"yoffset":57,"xadvance":60,"chnl":15,"x":1320,"y":579,"page":0},{"id":43,"index":15,"char":"+","width":118,"height":122,"xoffset":-26,"yoffset":49,"xadvance":67,"chnl":15,"x":1407,"y":419,"page":0},{"id":60,"index":32,"char":"<","width":109,"height":115,"xoffset":-26,"yoffset":55,"xadvance":61,"chnl":15,"x":604,"y":750,"page":0},{"id":62,"index":34,"char":">","width":111,"height":115,"xoffset":-22,"yoffset":55,"xadvance":62,"chnl":15,"x":714,"y":750,"page":0},{"id":95,"index":67,"char":"_","width":114,"height":71,"xoffset":-30,"yoffset":120,"xadvance":54,"chnl":15,"x":261,"y":951,"page":0},{"id":42,"index":14,"char":"*","width":110,"height":111,"xoffset":-28,"yoffset":35,"xadvance":53,"chnl":15,"x":1473,"y":273,"page":0},{"id":61,"index":33,"char":"=","width":111,"height":97,"xoffset":-22,"yoffset":62,"xadvance":67,"chnl":15,"x":0,"y":651,"page":0},{"id":94,"index":66,"char":"^","width":105,"height":103,"xoffset":-27,"yoffset":35,"xadvance":51,"chnl":15,"x":1575,"y":126,"page":0},{"id":44,"index":16,"char":",","width":79,"height":93,"xoffset":-28,"yoffset":106,"xadvance":26,"chnl":15,"x":112,"y":655,"page":0},{"id":34,"index":6,"char":"\\"","width":88,"height":91,"xoffset":-24,"yoffset":30,"xadvance":39,"chnl":15,"x":1368,"y":854,"page":0},{"id":45,"index":17,"char":"-","width":91,"height":71,"xoffset":-26,"yoffset":78,"xadvance":39,"chnl":15,"x":1368,"y":946,"page":0},{"id":39,"index":11,"char":"\'","width":71,"height":90,"xoffset":-25,"yoffset":30,"xadvance":20,"chnl":15,"x":192,"y":655,"page":0},{"id":96,"index":68,"char":"`","width":88,"height":78,"xoffset":-27,"yoffset":30,"xadvance":39,"chnl":15,"x":1429,"y":703,"page":0},{"id":46,"index":18,"char":".","width":77,"height":76,"xoffset":-22,"yoffset":105,"xadvance":34,"chnl":15,"x":522,"y":782,"page":0},{"id":32,"index":4,"char":" ","width":0,"height":0,"xoffset":-30,"yoffset":120,"xadvance":30,"chnl":15,"x":801,"y":126,"page":0}],"info":{"face":"Roboto-Medium","size":120,"bold":0,"italic":0,"charset":[" ","!","\\"","#","$","%","&","\'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],"unicode":1,"stretchH":100,"smooth":1,"aa":1,"padding":[30,30,30,30],"spacing":[0,0]},"common":{"lineHeight":126,"base":120,"scaleW":2048,"scaleH":1024,"pages":1,"packed":0,"alphaChnl":0,"redChnl":0,"greenChnl":0,"blueChnl":0},"distanceField":{"fieldType":"msdf","distanceRange":60},"kernings":[{"first":32,"second":84,"amount":-4},{"first":34,"second":34,"amount":-2},{"first":34,"second":39,"amount":-2},{"first":34,"second":65,"amount":-7},{"first":34,"second":97,"amount":-3},{"first":34,"second":99,"amount":-3},{"first":34,"second":100,"amount":-3},{"first":34,"second":101,"amount":-3},{"first":34,"second":103,"amount":-3},{"first":34,"second":109,"amount":-1},{"first":34,"second":110,"amount":-1},{"first":34,"second":111,"amount":-5},{"first":34,"second":112,"amount":-1},{"first":34,"second":113,"amount":-3},{"first":34,"second":115,"amount":-5},{"first":34,"second":119,"amount":1},{"first":39,"second":34,"amount":-2},{"first":39,"second":39,"amount":-2},{"first":39,"second":65,"amount":-7},{"first":39,"second":97,"amount":-3},{"first":39,"second":99,"amount":-3},{"first":39,"second":100,"amount":-3},{"first":39,"second":101,"amount":-3},{"first":39,"second":103,"amount":-3},{"first":39,"second":109,"amount":-1},{"first":39,"second":110,"amount":-1},{"first":39,"second":111,"amount":-5},{"first":39,"second":112,"amount":-1},{"first":39,"second":113,"amount":-3},{"first":39,"second":115,"amount":-5},{"first":39,"second":119,"amount":1},{"first":40,"second":86,"amount":1},{"first":40,"second":87,"amount":2},{"first":40,"second":89,"amount":1},{"first":44,"second":34,"amount":-17},{"first":44,"second":39,"amount":-17},{"first":46,"second":34,"amount":-17},{"first":46,"second":39,"amount":-17},{"first":47,"second":47,"amount":-15},{"first":65,"second":34,"amount":-7},{"first":65,"second":39,"amount":-7},{"first":65,"second":63,"amount":-5},{"first":65,"second":67,"amount":-1},{"first":65,"second":71,"amount":-1},{"first":65,"second":79,"amount":-1},{"first":65,"second":81,"amount":-1},{"first":65,"second":84,"amount":-7},{"first":65,"second":85,"amount":-1},{"first":65,"second":86,"amount":-5},{"first":65,"second":87,"amount":-2},{"first":65,"second":89,"amount":-9},{"first":65,"second":109,"amount":-3},{"first":65,"second":110,"amount":-3},{"first":65,"second":111,"amount":-1},{"first":65,"second":112,"amount":-3},{"first":65,"second":116,"amount":-1},{"first":65,"second":117,"amount":-1},{"first":65,"second":118,"amount":-3},{"first":65,"second":119,"amount":-2},{"first":65,"second":121,"amount":-3},{"first":65,"second":122,"amount":1},{"first":66,"second":84,"amount":-2},{"first":66,"second":86,"amount":-1},{"first":66,"second":89,"amount":-3},{"first":67,"second":41,"amount":-2},{"first":67,"second":84,"amount":-2},{"first":67,"second":93,"amount":-1},{"first":67,"second":125,"amount":-1},{"first":68,"second":44,"amount":-7},{"first":68,"second":46,"amount":-7},{"first":68,"second":65,"amount":-1},{"first":68,"second":84,"amount":-5},{"first":68,"second":86,"amount":-1},{"first":68,"second":88,"amount":-1},{"first":68,"second":89,"amount":-3},{"first":68,"second":90,"amount":-1},{"first":69,"second":84,"amount":1},{"first":69,"second":99,"amount":-1},{"first":69,"second":100,"amount":-1},{"first":69,"second":101,"amount":-1},{"first":69,"second":102,"amount":-1},{"first":69,"second":103,"amount":-1},{"first":69,"second":111,"amount":-1},{"first":69,"second":113,"amount":-1},{"first":69,"second":117,"amount":-1},{"first":69,"second":118,"amount":-2},{"first":69,"second":119,"amount":-1},{"first":69,"second":121,"amount":-2},{"first":70,"second":44,"amount":-16},{"first":70,"second":46,"amount":-16},{"first":70,"second":65,"amount":-11},{"first":70,"second":74,"amount":-12},{"first":70,"second":84,"amount":1},{"first":70,"second":97,"amount":-2},{"first":70,"second":99,"amount":-1},{"first":70,"second":100,"amount":-1},{"first":70,"second":101,"amount":-1},{"first":70,"second":103,"amount":-1},{"first":70,"second":111,"amount":-1},{"first":70,"second":113,"amount":-1},{"first":70,"second":114,"amount":-2},{"first":70,"second":117,"amount":-1},{"first":70,"second":118,"amount":-1},{"first":70,"second":121,"amount":-1},{"first":72,"second":65,"amount":1},{"first":72,"second":84,"amount":-2},{"first":72,"second":88,"amount":1},{"first":72,"second":89,"amount":-2},{"first":73,"second":65,"amount":1},{"first":73,"second":84,"amount":-2},{"first":73,"second":88,"amount":1},{"first":73,"second":89,"amount":-2},{"first":74,"second":65,"amount":-1},{"first":75,"second":45,"amount":-10},{"first":75,"second":67,"amount":-2},{"first":75,"second":71,"amount":-2},{"first":75,"second":79,"amount":-2},{"first":75,"second":81,"amount":-2},{"first":75,"second":99,"amount":-2},{"first":75,"second":100,"amount":-2},{"first":75,"second":101,"amount":-2},{"first":75,"second":103,"amount":-2},{"first":75,"second":111,"amount":-2},{"first":75,"second":113,"amount":-2},{"first":75,"second":117,"amount":-1},{"first":75,"second":118,"amount":-2},{"first":75,"second":119,"amount":-4},{"first":75,"second":121,"amount":-2},{"first":76,"second":34,"amount":-17},{"first":76,"second":39,"amount":-17},{"first":76,"second":65,"amount":1},{"first":76,"second":67,"amount":-4},{"first":76,"second":71,"amount":-4},{"first":76,"second":79,"amount":-4},{"first":76,"second":81,"amount":-4},{"first":76,"second":84,"amount":-12},{"first":76,"second":85,"amount":-1},{"first":76,"second":86,"amount":-12},{"first":76,"second":87,"amount":-5},{"first":76,"second":89,"amount":-16},{"first":76,"second":117,"amount":-1},{"first":76,"second":118,"amount":-7},{"first":76,"second":119,"amount":-3},{"first":76,"second":121,"amount":-7},{"first":77,"second":65,"amount":1},{"first":77,"second":84,"amount":-2},{"first":77,"second":88,"amount":1},{"first":77,"second":89,"amount":-2},{"first":78,"second":65,"amount":1},{"first":78,"second":84,"amount":-2},{"first":78,"second":88,"amount":1},{"first":78,"second":89,"amount":-2},{"first":79,"second":44,"amount":-7},{"first":79,"second":46,"amount":-7},{"first":79,"second":65,"amount":-1},{"first":79,"second":84,"amount":-5},{"first":79,"second":86,"amount":-1},{"first":79,"second":88,"amount":-1},{"first":79,"second":89,"amount":-3},{"first":79,"second":90,"amount":-1},{"first":80,"second":44,"amount":-24},{"first":80,"second":46,"amount":-24},{"first":80,"second":65,"amount":-10},{"first":80,"second":74,"amount":-11},{"first":80,"second":88,"amount":-3},{"first":80,"second":90,"amount":-2},{"first":80,"second":97,"amount":-1},{"first":80,"second":99,"amount":-1},{"first":80,"second":100,"amount":-1},{"first":80,"second":101,"amount":-1},{"first":80,"second":103,"amount":-1},{"first":80,"second":111,"amount":-1},{"first":80,"second":113,"amount":-1},{"first":80,"second":116,"amount":1},{"first":80,"second":118,"amount":1},{"first":80,"second":121,"amount":1},{"first":81,"second":84,"amount":-2},{"first":81,"second":86,"amount":-2},{"first":81,"second":87,"amount":-1},{"first":81,"second":89,"amount":-2},{"first":82,"second":84,"amount":-3},{"first":82,"second":86,"amount":-1},{"first":82,"second":89,"amount":-3},{"first":84,"second":32,"amount":-4},{"first":84,"second":44,"amount":-15},{"first":84,"second":45,"amount":-16},{"first":84,"second":46,"amount":-15},{"first":84,"second":65,"amount":-7},{"first":84,"second":67,"amount":-2},{"first":84,"second":71,"amount":-2},{"first":84,"second":74,"amount":-13},{"first":84,"second":79,"amount":-2},{"first":84,"second":81,"amount":-2},{"first":84,"second":83,"amount":-1},{"first":84,"second":84,"amount":1},{"first":84,"second":86,"amount":1},{"first":84,"second":87,"amount":1},{"first":84,"second":89,"amount":1},{"first":84,"second":97,"amount":-10},{"first":84,"second":99,"amount":-5},{"first":84,"second":100,"amount":-5},{"first":84,"second":101,"amount":-5},{"first":84,"second":103,"amount":-5},{"first":84,"second":109,"amount":-5},{"first":84,"second":110,"amount":-5},{"first":84,"second":111,"amount":-12},{"first":84,"second":112,"amount":-5},{"first":84,"second":113,"amount":-5},{"first":84,"second":114,"amount":-4},{"first":84,"second":115,"amount":-4},{"first":84,"second":117,"amount":-4},{"first":84,"second":118,"amount":-5},{"first":84,"second":119,"amount":-3},{"first":84,"second":120,"amount":-5},{"first":84,"second":121,"amount":-5},{"first":84,"second":122,"amount":-4},{"first":85,"second":65,"amount":-1},{"first":86,"second":41,"amount":1},{"first":86,"second":44,"amount":-13},{"first":86,"second":45,"amount":-9},{"first":86,"second":46,"amount":-13},{"first":86,"second":65,"amount":-4},{"first":86,"second":67,"amount":-1},{"first":86,"second":71,"amount":-1},{"first":86,"second":79,"amount":-1},{"first":86,"second":81,"amount":-1},{"first":86,"second":93,"amount":1},{"first":86,"second":97,"amount":-3},{"first":86,"second":99,"amount":-3},{"first":86,"second":100,"amount":-3},{"first":86,"second":101,"amount":-3},{"first":86,"second":103,"amount":-3},{"first":86,"second":111,"amount":-3},{"first":86,"second":113,"amount":-3},{"first":86,"second":114,"amount":-2},{"first":86,"second":117,"amount":-2},{"first":86,"second":118,"amount":-1},{"first":86,"second":121,"amount":-1},{"first":86,"second":125,"amount":1},{"first":87,"second":41,"amount":1},{"first":87,"second":44,"amount":-8},{"first":87,"second":45,"amount":-4},{"first":87,"second":46,"amount":-8},{"first":87,"second":65,"amount":-3},{"first":87,"second":84,"amount":1},{"first":87,"second":93,"amount":1},{"first":87,"second":97,"amount":-2},{"first":87,"second":99,"amount":-2},{"first":87,"second":100,"amount":-2},{"first":87,"second":101,"amount":-2},{"first":87,"second":103,"amount":-2},{"first":87,"second":111,"amount":-2},{"first":87,"second":113,"amount":-2},{"first":87,"second":114,"amount":-1},{"first":87,"second":117,"amount":-1},{"first":87,"second":125,"amount":1},{"first":88,"second":45,"amount":-9},{"first":88,"second":67,"amount":-1},{"first":88,"second":71,"amount":-1},{"first":88,"second":79,"amount":-1},{"first":88,"second":81,"amount":-1},{"first":88,"second":86,"amount":1},{"first":88,"second":99,"amount":-2},{"first":88,"second":100,"amount":-2},{"first":88,"second":101,"amount":-2},{"first":88,"second":103,"amount":-2},{"first":88,"second":111,"amount":-1},{"first":88,"second":113,"amount":-2},{"first":88,"second":117,"amount":-1},{"first":88,"second":118,"amount":-2},{"first":88,"second":121,"amount":-2},{"first":89,"second":38,"amount":-2},{"first":89,"second":41,"amount":1},{"first":89,"second":42,"amount":-3},{"first":89,"second":44,"amount":-14},{"first":89,"second":45,"amount":-9},{"first":89,"second":46,"amount":-14},{"first":89,"second":65,"amount":-9},{"first":89,"second":67,"amount":-2},{"first":89,"second":71,"amount":-2},{"first":89,"second":74,"amount":-6},{"first":89,"second":79,"amount":-2},{"first":89,"second":81,"amount":-2},{"first":89,"second":83,"amount":-1},{"first":89,"second":84,"amount":1},{"first":89,"second":85,"amount":-6},{"first":89,"second":86,"amount":1},{"first":89,"second":87,"amount":1},{"first":89,"second":88,"amount":1},{"first":89,"second":89,"amount":1},{"first":89,"second":93,"amount":1},{"first":89,"second":97,"amount":-4},{"first":89,"second":99,"amount":-4},{"first":89,"second":100,"amount":-4},{"first":89,"second":101,"amount":-4},{"first":89,"second":102,"amount":-1},{"first":89,"second":103,"amount":-4},{"first":89,"second":109,"amount":-2},{"first":89,"second":110,"amount":-2},{"first":89,"second":111,"amount":-4},{"first":89,"second":112,"amount":-2},{"first":89,"second":113,"amount":-4},{"first":89,"second":114,"amount":-2},{"first":89,"second":115,"amount":-3},{"first":89,"second":116,"amount":-1},{"first":89,"second":117,"amount":-2},{"first":89,"second":118,"amount":-1},{"first":89,"second":120,"amount":-1},{"first":89,"second":121,"amount":-1},{"first":89,"second":122,"amount":-2},{"first":89,"second":125,"amount":1},{"first":90,"second":65,"amount":1},{"first":90,"second":67,"amount":-2},{"first":90,"second":71,"amount":-2},{"first":90,"second":79,"amount":-2},{"first":90,"second":81,"amount":-2},{"first":90,"second":99,"amount":-1},{"first":90,"second":100,"amount":-1},{"first":90,"second":101,"amount":-1},{"first":90,"second":103,"amount":-1},{"first":90,"second":111,"amount":-1},{"first":90,"second":113,"amount":-1},{"first":90,"second":117,"amount":-1},{"first":90,"second":118,"amount":-2},{"first":90,"second":119,"amount":-2},{"first":90,"second":121,"amount":-2},{"first":91,"second":74,"amount":-1},{"first":91,"second":85,"amount":-1},{"first":97,"second":34,"amount":-1},{"first":97,"second":39,"amount":-1},{"first":97,"second":118,"amount":-1},{"first":97,"second":121,"amount":-1},{"first":98,"second":34,"amount":-2},{"first":98,"second":39,"amount":-2},{"first":98,"second":118,"amount":-1},{"first":98,"second":120,"amount":-1},{"first":98,"second":121,"amount":-1},{"first":98,"second":122,"amount":-1},{"first":99,"second":34,"amount":-1},{"first":99,"second":39,"amount":-1},{"first":101,"second":34,"amount":-1},{"first":101,"second":39,"amount":-1},{"first":101,"second":118,"amount":-1},{"first":101,"second":121,"amount":-1},{"first":102,"second":34,"amount":1},{"first":102,"second":39,"amount":1},{"first":102,"second":41,"amount":1},{"first":102,"second":93,"amount":1},{"first":102,"second":99,"amount":-1},{"first":102,"second":100,"amount":-1},{"first":102,"second":101,"amount":-1},{"first":102,"second":103,"amount":-1},{"first":102,"second":113,"amount":-1},{"first":102,"second":125,"amount":1},{"first":104,"second":34,"amount":-5},{"first":104,"second":39,"amount":-5},{"first":107,"second":99,"amount":-1},{"first":107,"second":100,"amount":-1},{"first":107,"second":101,"amount":-1},{"first":107,"second":103,"amount":-1},{"first":107,"second":113,"amount":-1},{"first":109,"second":34,"amount":-5},{"first":109,"second":39,"amount":-5},{"first":110,"second":34,"amount":-5},{"first":110,"second":39,"amount":-5},{"first":111,"second":34,"amount":-5},{"first":111,"second":39,"amount":-5},{"first":111,"second":118,"amount":-1},{"first":111,"second":120,"amount":-1},{"first":111,"second":121,"amount":-1},{"first":111,"second":122,"amount":-1},{"first":112,"second":34,"amount":-2},{"first":112,"second":39,"amount":-2},{"first":112,"second":118,"amount":-1},{"first":112,"second":120,"amount":-1},{"first":112,"second":121,"amount":-1},{"first":112,"second":122,"amount":-1},{"first":114,"second":34,"amount":1},{"first":114,"second":39,"amount":1},{"first":114,"second":44,"amount":-10},{"first":114,"second":46,"amount":-10},{"first":114,"second":97,"amount":-2},{"first":114,"second":99,"amount":-1},{"first":114,"second":100,"amount":-1},{"first":114,"second":101,"amount":-1},{"first":114,"second":102,"amount":1},{"first":114,"second":103,"amount":-1},{"first":114,"second":111,"amount":-2},{"first":114,"second":113,"amount":-1},{"first":114,"second":116,"amount":3},{"first":114,"second":118,"amount":1},{"first":114,"second":119,"amount":1},{"first":114,"second":121,"amount":1},{"first":116,"second":111,"amount":-2},{"first":118,"second":34,"amount":1},{"first":118,"second":39,"amount":1},{"first":118,"second":44,"amount":-10},{"first":118,"second":46,"amount":-10},{"first":118,"second":97,"amount":-1},{"first":118,"second":99,"amount":-1},{"first":118,"second":100,"amount":-1},{"first":118,"second":101,"amount":-1},{"first":118,"second":102,"amount":1},{"first":118,"second":103,"amount":-1},{"first":118,"second":111,"amount":-1},{"first":118,"second":113,"amount":-1},{"first":119,"second":44,"amount":-7},{"first":119,"second":46,"amount":-7},{"first":120,"second":99,"amount":-1},{"first":120,"second":100,"amount":-1},{"first":120,"second":101,"amount":-1},{"first":120,"second":103,"amount":-1},{"first":120,"second":111,"amount":-2},{"first":120,"second":113,"amount":-1},{"first":121,"second":34,"amount":1},{"first":121,"second":39,"amount":1},{"first":121,"second":44,"amount":-10},{"first":121,"second":46,"amount":-10},{"first":121,"second":97,"amount":-1},{"first":121,"second":99,"amount":-1},{"first":121,"second":100,"amount":-1},{"first":121,"second":101,"amount":-1},{"first":121,"second":102,"amount":1},{"first":121,"second":103,"amount":-1},{"first":121,"second":111,"amount":-1},{"first":121,"second":113,"amount":-1},{"first":122,"second":99,"amount":-1},{"first":122,"second":100,"amount":-1},{"first":122,"second":101,"amount":-1},{"first":122,"second":103,"amount":-1},{"first":122,"second":111,"amount":-1},{"first":122,"second":113,"amount":-1},{"first":123,"second":74,"amount":-1},{"first":123,"second":85,"amount":-1}]}');


var $0e29f89097e37eaa$exports = {};
$0e29f89097e37eaa$exports = JSON.parse('{"countries":[{"code":"AD","lat":"42.546245","lng":"1.601554","name":"Andorra"},{"code":"AE","lat":"23.424076","lng":"53.847818","name":"United Arab Emirates"},{"code":"AF","lat":"33.93911","lng":"67.709953","name":"Afghanistan"},{"code":"AG","lat":"17.060816","lng":"-61.796428","name":"Antigua and Barbuda"},{"code":"AI","lat":"18.220554","lng":"-63.068615","name":"Anguilla"},{"code":"AL","lat":"41.153332","lng":"20.168331","name":"Albania"},{"code":"AM","lat":"40.069099","lng":"45.038189","name":"Armenia"},{"code":"AO","lat":"-11.202692","lng":"17.873887","name":"Angola"},{"code":"AQ","lat":"-75.250973","lng":"-0.071389","name":"Antarctica"},{"code":"AR","lat":"-38.416097","lng":"-63.616672","name":"Argentina"},{"code":"AS","lat":"-14.270972","lng":"-170.132217","name":"American Samoa"},{"code":"AT","lat":"47.516231","lng":"14.550072","name":"Austria"},{"code":"AU","lat":"-25.274398","lng":"133.775136","name":"Australia"},{"code":"AW","lat":"12.52111","lng":"-69.968338","name":"Aruba"},{"code":"AZ","lat":"40.143105","lng":"47.576927","name":"Azerbaijan"},{"code":"BA","lat":"43.915886","lng":"17.679076","name":"Bosnia and Herzegovina"},{"code":"BB","lat":"13.193887","lng":"-59.543198","name":"Barbados"},{"code":"BD","lat":"23.684994","lng":"90.356331","name":"Bangladesh"},{"code":"BE","lat":"50.503887","lng":"4.469936","name":"Belgium"},{"code":"BF","lat":"12.238333","lng":"-1.561593","name":"Burkina Faso"},{"code":"MX","lat":"23.634501","lng":"-102.552784","name":"Mexico"},{"code":"BG","lat":"42.733883","lng":"25.48583","name":"Bulgaria"},{"code":"BH","lat":"25.930414","lng":"50.637772","name":"Bahrain"},{"code":"BI","lat":"-3.373056","lng":"29.918886","name":"Burundi"},{"code":"BJ","lat":"9.30769","lng":"2.315834","name":"Benin"},{"code":"BM","lat":"32.321384","lng":"-64.75737","name":"Bermuda"},{"code":"BN","lat":"4.535277","lng":"114.727669","name":"Brunei"},{"code":"BO","lat":"-16.290154","lng":"-63.588653","name":"Bolivia"},{"code":"BR","lat":"-14.235004","lng":"-51.92528","name":"Brazil"},{"code":"BS","lat":"25.03428","lng":"-77.39628","name":"Bahamas"},{"code":"BT","lat":"27.514162","lng":"90.433601","name":"Bhutan"},{"code":"BV","lat":"-54.423199","lng":"3.413194","name":"Bouvet Island"},{"code":"BW","lat":"-22.328474","lng":"24.684866","name":"Botswana"},{"code":"BY","lat":"53.709807","lng":"27.953389","name":"Belarus"},{"code":"BZ","lat":"17.189877","lng":"-88.49765","name":"Belize"},{"code":"CA","lat":"56.130366","lng":"-106.346771","name":"Canada"},{"code":"US","lat":"37.09","lng":"-95.71","name":"United States"},{"code":"CC","lat":"-12.164165","lng":"96.870956","name":"Cocos Islands"},{"code":"CD","lat":"-4.038333","lng":"21.758664","name":"Congo"},{"code":"CF","lat":"6.611111","lng":"20.939444","name":"CAR"},{"code":"CG","lat":"-0.228021","lng":"15.827659","name":"Congo"},{"code":"CH","lat":"46.818188","lng":"8.227512","name":"Switzerland"},{"code":"CI","lat":"7.539989","lng":"-5.54708","name":"Ivory Coast"},{"code":"CK","lat":"-21.236736","lng":"-159.777671","name":"Cook Islands"},{"code":"CL","lat":"-35.675147","lng":"-71.542969","name":"Chile"},{"code":"CM","lat":"7.369722","lng":"12.354722","name":"Cameroon"},{"code":"CN","lat":"35.86166","lng":"104.195397","name":"China"},{"code":"RU","lat":"61.52401","lng":"105.318756","name":"Russia"},{"code":"CO","lat":"4.570868","lng":"-74.297333","name":"Colombia"},{"code":"CR","lat":"9.748917","lng":"-83.753428","name":"Costa Rica"},{"code":"CU","lat":"21.521757","lng":"-77.781167","name":"Cuba"},{"code":"CV","lat":"16.002082","lng":"-24.013197","name":"Cape Verde"},{"code":"CX","lat":"-10.447525","lng":"105.690449","name":"Christmas Island"},{"code":"CY","lat":"35.126413","lng":"33.429859","name":"Cyprus"},{"code":"CZ","lat":"49.817492","lng":"15.472962","name":"Czech Republic"},{"code":"DE","lat":"51.165691","lng":"10.451526","name":"Germany"},{"code":"DJ","lat":"11.825138","lng":"42.590275","name":"Djibouti"},{"code":"DK","lat":"56.26392","lng":"9.501785","name":"Denmark"},{"code":"DM","lat":"15.414999","lng":"-61.370976","name":"Dominica"},{"code":"DO","lat":"18.735693","lng":"-70.162651","name":"Dominican Republic"},{"code":"DZ","lat":"28.033886","lng":"1.659626","name":"Algeria"},{"code":"EC","lat":"-1.831239","lng":"-78.183406","name":"Ecuador"},{"code":"EE","lat":"58.595272","lng":"25.013607","name":"Estonia"},{"code":"EG","lat":"26.820553","lng":"30.802498","name":"Egypt"},{"code":"EH","lat":"24.215527","lng":"-12.885834","name":"Western Sahara"},{"code":"ER","lat":"15.179384","lng":"39.782334","name":"Eritrea"},{"code":"ES","lat":"40.463667","lng":"-3.74922","name":"Spain"},{"code":"ET","lat":"9.145","lng":"40.489673","name":"Ethiopia"},{"code":"FI","lat":"61.92411","lng":"25.748151","name":"Finland"},{"code":"FJ","lat":"-16.578193","lng":"179.414413","name":"Fiji"},{"code":"FK","lat":"-51.796253","lng":"-59.523613","name":"Falkland Islands"},{"code":"FM","lat":"7.425554","lng":"150.550812","name":"Micronesia"},{"code":"FO","lat":"61.892635","lng":"-6.911806","name":"Faroe Islands"},{"code":"FR","lat":"46.227638","lng":"2.213749","name":"France"},{"code":"GA","lat":"-0.803689","lng":"11.609444","name":"Gabon"},{"code":"GB","lat":"55.378051","lng":"-3.435973","name":"United Kingdom"},{"code":"GD","lat":"12.262776","lng":"-61.604171","name":"Grenada"},{"code":"GE","lat":"42.315407","lng":"43.356892","name":"Georgia"},{"code":"GF","lat":"3.933889","lng":"-53.125782","name":"French Guiana"},{"code":"GG","lat":"49.465691","lng":"-2.585278","name":"Guernsey"},{"code":"GH","lat":"7.946527","lng":"-1.023194","name":"Ghana"},{"code":"GI","lat":"36.137741","lng":"-5.345374","name":"Gibraltar"},{"code":"GL","lat":"71.706936","lng":"-42.604303","name":"Greenland"},{"code":"GM","lat":"13.443182","lng":"-15.310139","name":"Gambia"},{"code":"GN","lat":"9.945587","lng":"-9.696645","name":"Guinea"},{"code":"GP","lat":"16.995971","lng":"-62.067641","name":"Guadeloupe"},{"code":"GQ","lat":"1.650801","lng":"10.267895","name":"Equatorial Guinea"},{"code":"GR","lat":"39.074208","lng":"21.824312","name":"Greece"},{"code":"GT","lat":"15.783471","lng":"-90.230759","name":"Guatemala"},{"code":"GU","lat":"13.444304","lng":"144.793731","name":"Guam"},{"code":"GW","lat":"11.803749","lng":"-15.180413","name":"Guinea-Bissau"},{"code":"GY","lat":"4.860416","lng":"-58.93018","name":"Guyana"},{"code":"GZ","lat":"31.354676","lng":"34.308825","name":"Gaza Strip"},{"code":"HK","lat":"22.396428","lng":"114.109497","name":"Hong Kong"},{"code":"HN","lat":"15.199999","lng":"-86.241905","name":"Honduras"},{"code":"HR","lat":"45.1","lng":"15.2","name":"Croatia"},{"code":"HT","lat":"18.971187","lng":"-72.285215","name":"Haiti"},{"code":"HU","lat":"47.162494","lng":"19.503304","name":"Hungary"},{"code":"ID","lat":"-0.789275","lng":"113.921327","name":"Indonesia"},{"code":"IE","lat":"53.41291","lng":"-8.24389","name":"Ireland"},{"code":"IL","lat":"31.046051","lng":"34.851612","name":"Israel"},{"code":"IM","lat":"54.236107","lng":"-4.548056","name":"Isle of Man"},{"code":"IN","lat":"20.593684","lng":"78.96288","name":"India"},{"code":"IQ","lat":"33.223191","lng":"43.679291","name":"Iraq"},{"code":"IR","lat":"32.427908","lng":"53.688046","name":"Iran"},{"code":"IS","lat":"64.963051","lng":"-19.020835","name":"Iceland"},{"code":"IT","lat":"41.87194","lng":"12.56738","name":"Italy"},{"code":"JE","lat":"49.214439","lng":"-2.13125","name":"Jersey"},{"code":"JM","lat":"18.109581","lng":"-77.297508","name":"Jamaica"},{"code":"JO","lat":"30.585164","lng":"36.238414","name":"Jordan"},{"code":"JP","lat":"36.204824","lng":"138.252924","name":"Japan"},{"code":"KE","lat":"-0.023559","lng":"37.906193","name":"Kenya"},{"code":"KG","lat":"41.20438","lng":"74.766098","name":"Kyrgyzstan"},{"code":"KH","lat":"12.565679","lng":"104.990963","name":"Cambodia"},{"code":"KI","lat":"-3.370417","lng":"-168.734039","name":"Kiribati"},{"code":"KM","lat":"-11.875001","lng":"43.872219","name":"Comoros"},{"code":"KP","lat":"40.339852","lng":"127.510093","name":"North Korea"},{"code":"KR","lat":"35.907757","lng":"127.766922","name":"South Korea"},{"code":"KW","lat":"29.31166","lng":"47.481766","name":"Kuwait"},{"code":"KY","lat":"19.513469","lng":"-80.566956","name":"Cayman Islands"},{"code":"KZ","lat":"48.019573","lng":"66.923684","name":"Kazakhstan"},{"code":"LA","lat":"19.85627","lng":"102.495496","name":"Laos"},{"code":"LB","lat":"33.854721","lng":"35.862285","name":"Lebanon"},{"code":"LC","lat":"13.909444","lng":"-60.978893","name":"Saint Lucia"},{"code":"LI","lat":"47.166","lng":"9.555373","name":"Liechtenstein"},{"code":"LK","lat":"7.873054","lng":"80.771797","name":"Sri Lanka"},{"code":"LR","lat":"6.428055","lng":"-9.429499","name":"Liberia"},{"code":"LS","lat":"-29.609988","lng":"28.233608","name":"Lesotho"},{"code":"LT","lat":"55.169438","lng":"23.881275","name":"Lithuania"},{"code":"LU","lat":"49.815273","lng":"6.129583","name":"Luxembourg"},{"code":"LV","lat":"56.879635","lng":"24.603189","name":"Latvia"},{"code":"LY","lat":"26.3351","lng":"17.228331","name":"Libya"},{"code":"MA","lat":"31.791702","lng":"-7.09262","name":"Morocco"},{"code":"MC","lat":"43.750298","lng":"7.412841","name":"Monaco"},{"code":"MD","lat":"47.411631","lng":"28.369885","name":"Moldova"},{"code":"ME","lat":"42.708678","lng":"19.37439","name":"Montenegro"},{"code":"MG","lat":"-18.766947","lng":"46.869107","name":"Madagascar"},{"code":"MH","lat":"7.131474","lng":"171.184478","name":"Marshall Islands"},{"code":"MK","lat":"41.608635","lng":"21.745275","name":"Macedonia"},{"code":"ML","lat":"17.570692","lng":"-3.996166","name":"Mali"},{"code":"MM","lat":"21.913965","lng":"95.956223","name":"Myanmar"},{"code":"MN","lat":"46.862496","lng":"103.846656","name":"Mongolia"},{"code":"MO","lat":"22.198745","lng":"113.543873","name":"Macau"},{"code":"MQ","lat":"14.641528","lng":"-61.024174","name":"Martinique"},{"code":"MR","lat":"21.00789","lng":"-10.940835","name":"Mauritania"},{"code":"MS","lat":"16.742498","lng":"-62.187366","name":"Montserrat"},{"code":"MT","lat":"35.937496","lng":"14.375416","name":"Malta"},{"code":"MU","lat":"-20.348404","lng":"57.552152","name":"Mauritius"},{"code":"MV","lat":"3.202778","lng":"73.22068","name":"Maldives"},{"code":"MW","lat":"-13.254308","lng":"34.301525","name":"Malawi"},{"code":"MY","lat":"4.210484","lng":"101.975766","name":"Malaysia"},{"code":"MZ","lat":"-18.665695","lng":"35.529562","name":"Mozambique"},{"code":"NA","lat":"-22.95764","lng":"18.49041","name":"Namibia"},{"code":"NC","lat":"-20.904305","lng":"165.618042","name":"New Caledonia"},{"code":"NE","lat":"17.607789","lng":"8.081666","name":"Niger"},{"code":"NF","lat":"-29.040835","lng":"167.954712","name":"Norfolk Island"},{"code":"NG","lat":"9.081999","lng":"8.675277","name":"Nigeria"},{"code":"NI","lat":"12.865416","lng":"-85.207229","name":"Nicaragua"},{"code":"NL","lat":"52.132633","lng":"5.291266","name":"Netherlands"},{"code":"NO","lat":"60.472024","lng":"8.468946","name":"Norway"},{"code":"NP","lat":"28.394857","lng":"84.124008","name":"Nepal"},{"code":"NR","lat":"-0.522778","lng":"166.931503","name":"Nauru"},{"code":"NU","lat":"-19.054445","lng":"-169.867233","name":"Niue"},{"code":"NZ","lat":"-40.900557","lng":"174.885971","name":"New Zealand"},{"code":"OM","lat":"21.512583","lng":"55.923255","name":"Oman"},{"code":"PA","lat":"8.537981","lng":"-80.782127","name":"Panama"},{"code":"PE","lat":"-9.189967","lng":"-75.015152","name":"Peru"},{"code":"PF","lat":"-17.679742","lng":"-149.406843","name":"French Polynesia"},{"code":"PG","lat":"-6.314993","lng":"143.95555","name":"Papua New Guinea"},{"code":"PH","lat":"12.879721","lng":"121.774017","name":"Philippines"},{"code":"PK","lat":"30.375321","lng":"69.345116","name":"Pakistan"},{"code":"PL","lat":"51.919438","lng":"19.145136","name":"Poland"},{"code":"PN","lat":"-24.703615","lng":"-127.439308","name":"Pitcairn Islands"},{"code":"PR","lat":"18.220833","lng":"-66.590149","name":"Puerto Rico"},{"code":"PT","lat":"39.399872","lng":"-8.224454","name":"Portugal"},{"code":"PW","lat":"7.51498","lng":"134.58252","name":"Palau"},{"code":"PY","lat":"-23.442503","lng":"-58.443832","name":"Paraguay"},{"code":"QA","lat":"25.354826","lng":"51.183884","name":"Qatar"},{"code":"RE","lat":"-21.115141","lng":"55.536384","name":"Reunion"},{"code":"RO","lat":"45.943161","lng":"24.96676","name":"Romania"},{"code":"RS","lat":"44.016521","lng":"21.005859","name":"Serbia"},{"code":"RW","lat":"-1.940278","lng":"29.873888","name":"Rwanda"},{"code":"SA","lat":"23.885942","lng":"45.079162","name":"Saudi Arabia"},{"code":"SB","lat":"-9.64571","lng":"160.156194","name":"Solomon Islands"},{"code":"SC","lat":"-4.679574","lng":"55.491977","name":"Seychelles"},{"code":"SD","lat":"12.862807","lng":"30.217636","name":"Sudan"},{"code":"SE","lat":"60.128161","lng":"18.643501","name":"Sweden"},{"code":"SG","lat":"1.352083","lng":"103.819836","name":"Singapore"},{"code":"SH","lat":"-24.143474","lng":"-10.030696","name":"Saint Helena"},{"code":"SI","lat":"46.151241","lng":"14.995463","name":"Slovenia"},{"code":"SK","lat":"48.669026","lng":"19.699024","name":"Slovakia"},{"code":"SL","lat":"8.460555","lng":"-11.779889","name":"Sierra Leone"},{"code":"SM","lat":"43.94236","lng":"12.457777","name":"San Marino"},{"code":"SN","lat":"14.497401","lng":"-14.452362","name":"Senegal"},{"code":"SO","lat":"5.152149","lng":"46.199616","name":"Somalia"},{"code":"SR","lat":"3.919305","lng":"-56.027783","name":"Suriname"},{"code":"SV","lat":"13.794185","lng":"-88.89653","name":"El Salvador"},{"code":"SY","lat":"34.802075","lng":"38.996815","name":"Syria"},{"code":"SZ","lat":"-26.522503","lng":"31.465866","name":"Swaziland"},{"code":"TD","lat":"15.454166","lng":"18.732207","name":"Chad"},{"code":"TG","lat":"8.619543","lng":"0.824782","name":"Togo"},{"code":"TH","lat":"15.870032","lng":"100.992541","name":"Thailand"},{"code":"TJ","lat":"38.861034","lng":"71.276093","name":"Tajikistan"},{"code":"TK","lat":"-8.967363","lng":"-171.855881","name":"Tokelau"},{"code":"TM","lat":"38.969719","lng":"59.556278","name":"Turkmenistan"},{"code":"TN","lat":"33.886917","lng":"9.537499","name":"Tunisia"},{"code":"TO","lat":"-21.178986","lng":"-175.198242","name":"Tonga"},{"code":"TR","lat":"38.963745","lng":"35.243322","name":"Turkey"},{"code":"TT","lat":"10.691803","lng":"-61.222503","name":"Trinidad and Tobago"},{"code":"TV","lat":"-7.109535","lng":"177.64933","name":"Tuvalu"},{"code":"TW","lat":"23.69781","lng":"120.960515","name":"Taiwan"},{"code":"TZ","lat":"-6.369028","lng":"34.888822","name":"Tanzania"},{"code":"UA","lat":"48.379433","lng":"31.16558","name":"Ukraine"},{"code":"UG","lat":"1.373333","lng":"32.290275","name":"Uganda"},{"code":"UY","lat":"-32.522779","lng":"-55.765835","name":"Uruguay"},{"code":"UZ","lat":"41.377491","lng":"64.585262","name":"Uzbekistan"},{"code":"VA","lat":"41.902916","lng":"12.453389","name":"Vatican City"},{"code":"VC","lat":"12.984305","lng":"-61.287228","name":"Saint Vincent and the Grenadines"},{"code":"VE","lat":"6.42375","lng":"-66.58973","name":"Venezuela"},{"code":"VN","lat":"14.058324","lng":"108.277199","name":"Vietnam"},{"code":"VU","lat":"-15.376706","lng":"166.959158","name":"Vanuatu"},{"code":"WF","lat":"-13.768752","lng":"-177.156097","name":"Wallis and Futuna"},{"code":"WS","lat":"-13.759029","lng":"-172.104629","name":"Samoa"},{"code":"XK","lat":"42.602636","lng":"20.902977","name":"Kosovo"},{"code":"YE","lat":"15.552727","lng":"48.516388","name":"Yemen"},{"code":"YT","lat":"-12.8275","lng":"45.166244","name":"Mayotte"},{"code":"ZA","lat":"-30.559482","lng":"22.937506","name":"South Africa"},{"code":"ZM","lat":"-13.133897","lng":"27.849332","name":"Zambia"},{"code":"ZW","lat":"-19.015438","lng":"29.154857","name":"Zimbabwe"}]}');


const $7197f322bd6a047e$export$a3fb0512ff5637b9 = (lat, lang)=>{
    lat = +lat;
    lang = 0 - lang;
    let nLat;
    let nLang;
    if (0 <= lat && lat <= 90) nLat = 90 - lat;
    else nLat = Math.abs(lat) + 90;
    if (lang > 0) nLang = lang;
    else nLang = 360 + lang;
    return {
        nLat: nLat,
        nLang: nLang
    };
};
const $7197f322bd6a047e$export$39e042fd83f1b62e = (lat, lang, radius)=>{
    const { nLat: nLat , nLang: nLang  } = $7197f322bd6a047e$export$a3fb0512ff5637b9(lat, lang);
    const r = radius || 1;
    const lx = r * Math.sin(Math.PI * nLat / 180) * Math.cos(Math.PI * nLang / 180);
    const lz = r * Math.sin(Math.PI * nLat / 180) * Math.sin(Math.PI * nLang / 180);
    const ly = r * Math.cos(Math.PI * nLat / 180);
    return [
        lx,
        ly,
        lz
    ];
};
const $7197f322bd6a047e$export$fcce7887255d1c69 = (lat1, lng1, lat2, lng2)=>{
    let dLat;
    if (lat1 > lat2) dLat = -1;
    else dLat = 1;
    dLat = (Math.max(lat1, lat2) - Math.min(lat1, lat2)) * dLat;
    let dLng;
    if (lng1 > lng2) dLng = -1;
    else dLng = 1;
    if (lng1 * lng2 < 0 && Math.abs(lng1) + Math.abs(lng2) > 180) dLng = 0 - dLng;
    if (Math.abs(lng1) + Math.abs(lng2) > 180) dLng = (180 - Math.abs(lng1) + 180 - Math.abs(lng1)) * dLng;
    else dLng = (Math.max(lng1, lng2) - Math.min(lng1, lng2)) * dLng;
    return {
        lat: dLat,
        lng: dLng
    };
};
const $7197f322bd6a047e$export$bd6fa78dde623f67 = (cLat, cLng, dLat, dLng, sLat, sLng)=>{
    let dirLat = dLat > 0 ? 1 : -1;
    let dirLng = dLng > 0 ? 1 : -1;
    let rLat = cLat + sLat * dirLat;
    let rLng = cLng + sLng * dirLng;
    if (rLng > 180) rLng = rLng - 360;
    else if (rLng < -180) rLng = 360 + rLng;
    return {
        lat: rLat,
        lng: rLng
    };
};
const $7197f322bd6a047e$export$f395824e661dd4b7 = (vec)=>{
    const [x, z, y] = vec;
    const theta = 180 / Math.PI * Math.acos(z / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2)));
    const phi = 180 / Math.PI * Math.atan(y / x);
    const r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
    let lat = 0;
    let lng = 0 - phi;
    if (theta > 0 && theta < 90) lat = 90 - theta;
    else if (theta > 90 && theta < 180) lat = 90 - theta;
    if (x) {
        let oct = parseInt((x < 0 ? "1" : "0") + (y < 0 ? "1" : "0") + (z < 0 ? "1" : "0"), 2);
        switch(oct){
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            case 6:
            case 7:
                lng = 180 + lng;
                break;
            case 4:
            case 5:
                lng = -180 + lng;
                break;
            default:
                break;
        }
    }
    return {
        lat: lat,
        lng: lng
    };
};



const $583352a84ea0c220$var$places = [
    {
        name: "Andorra",
        lat: 42.546245,
        lng: 1.601554,
        size: 15,
        color: "red",
        URL: "https://places.gold/"
    },
    {
        name: "Armenia",
        lat: 40.069099,
        lng: 45.038189,
        size: 15,
        color: "red",
        URL: "https://ar.places.gold/"
    },
    {
        name: "Azerbaijan",
        lat: 40.143105,
        lng: 47.576927,
        size: 15,
        color: "red",
        URL: "https://az.places.gold/"
    },
    {
        name: "Argentina",
        lat: -38.416097,
        lng: -63.616672,
        size: 15,
        color: "red",
        URL: "https://arg.places.gold/"
    },
    {
        name: "Belgium",
        lat: 50.503887,
        lng: 4.469936,
        size: 15,
        color: "red",
        URL: "https://be.places.gold/"
    },
    {
        name: "Bulgaria",
        lat: 42.733883,
        lng: 25.48583,
        size: 15,
        color: "red",
        URL: "https://bg.places.gold/"
    },
    {
        name: "Bolivia",
        lat: -16.290154,
        lng: -63.588653,
        size: 15,
        color: "red",
        URL: "https://bo.places.gold/"
    },
    {
        name: "Brazil",
        lat: -22.90278,
        lng: -43.2075,
        size: 15,
        color: "red",
        URL: "https://bra.places.gold/"
    },
    {
        name: "Canada",
        lat: 45.41117,
        lng: -75.69812,
        size: 15,
        color: "red",
        URL: "https://ca.places.gold/"
    },
    {
        name: "China",
        lat: 35.86166,
        lng: 104.195397,
        size: 15,
        color: "red",
        URL: "https://ch.places.gold/"
    },
    {
        name: "Chile",
        lat: -35.675147,
        lng: -71.542969,
        size: 15,
        color: "red",
        URL: "https://cl.places.gold/"
    },
    {
        name: "Colombia",
        lat: 4.570868,
        lng: -74.297333,
        size: 15,
        color: "red",
        URL: "https://co.places.gold/"
    },
    {
        name: "Egypt",
        lat: 26.820553,
        lng: 30.802498,
        size: 15,
        color: "red",
        URL: "https://eg.places.gold/"
    },
    {
        name: "	Ecuador",
        lat: -1.831239,
        lng: -78.183406,
        size: 15,
        color: "red",
        URL: "https://ec.places.gold/"
    },
    {
        name: "	Spain",
        lat: 40.463667,
        lng: -3.74922,
        size: 15,
        color: "red",
        URL: "https://es.places.gold/"
    },
    {
        name: "	Estonia",
        lat: 58.595272,
        lng: 25.013607,
        size: 15,
        color: "red",
        URL: "https://est.places.gold/"
    },
    {
        name: "	Finland",
        lat: 61.92411,
        lng: 25.748151,
        size: 15,
        color: "red",
        URL: "https://fi.places.gold/"
    },
    {
        name: "	Georgia",
        lat: 42.315407,
        lng: 43.356892,
        size: 15,
        color: "red",
        URL: "https://ge.places.gold/"
    },
    {
        name: "	Greece",
        lat: 39.074208,
        lng: 21.824312,
        size: 15,
        color: "red",
        URL: "https://gr.places.gold/"
    },
    {
        name: "	Gwyana",
        lat: 13.444304,
        lng: 144.793731,
        size: 15,
        color: "red",
        URL: "https://gu.places.gold/"
    },
    {
        name: "	Guyana",
        lat: 4.860416,
        lng: -58.93018,
        size: 15,
        color: "red",
        URL: "https://gu.places.gold/"
    },
    {
        name: "Israel",
        lat: 31.046051,
        lng: 34.851612,
        size: 15,
        color: "red",
        URL: "https://is.places.gold/"
    },
    {
        name: "	Italy",
        lat: 41.87194,
        lng: 12.56738,
        size: 15,
        color: "red",
        URL: "https://ita.places.gold/"
    },
    {
        name: "	Japan",
        lat: 36.204824,
        lng: 138.252924,
        size: 15,
        color: "red",
        URL: "https://jp.places.gold/"
    },
    {
        name: "	Kyrgyzstan",
        lat: 41.20438,
        lng: 74.766098,
        size: 15,
        color: "red",
        URL: "https://kr.places.gold/"
    },
    {
        name: "	Kazakhstan",
        lat: 48.019573,
        lng: 66.923684,
        size: 15,
        color: "red",
        URL: "https://kz.places.gold/"
    },
    {
        name: "	Latvia",
        lat: 56.879635,
        lng: 24.603189,
        size: 15,
        color: "red",
        URL: "https://lat.places.gold/"
    },
    {
        name: "	Lithuania",
        lat: 55.169438,
        lng: 23.881275,
        size: 15,
        color: "red",
        URL: "https://lit.places.gold/"
    },
    {
        name: "	Montenegro",
        lat: 42.708678,
        lng: 19.37439,
        size: 15,
        color: "red",
        URL: "https://me.places.gold/"
    },
    {
        name: "	Mauritius",
        lat: -20.348404,
        lng: 57.552152,
        size: 15,
        color: "red",
        URL: "https://mu.places.gold/"
    },
    {
        name: "	Maldives",
        lat: 3.202778,
        lng: 73.22068,
        size: 15,
        color: "red",
        URL: "https://mv.places.gold/"
    },
    {
        name: "	Netherlands",
        lat: 52.132633,
        lng: 5.291266,
        size: 15,
        color: "red",
        URL: "https://nl.places.gold/"
    },
    {
        name: "	Norway",
        lat: 60.472024,
        lng: 8.468946,
        size: 15,
        color: "red",
        URL: "https://no.places.gold/"
    },
    {
        name: "	Peru",
        lat: -9.189967,
        lng: -75.015152,
        size: 15,
        color: "red",
        URL: "https://pe.places.gold/"
    },
    {
        name: "	Poland",
        lat: 51.919438,
        lng: 19.145136,
        size: 15,
        color: "red",
        URL: "https://pol.places.gold/"
    },
    {
        name: "	Paraguay",
        lat: -23.442503,
        lng: -58.443832,
        size: 15,
        color: "red",
        URL: "https://py.places.gold/"
    },
    {
        name: "	Romania",
        lat: 45.943161,
        lng: 24.96676,
        size: 15,
        color: "red",
        URL: "https://ro.places.gold/"
    },
    {
        name: "	Serbia",
        lat: 44.016521,
        lng: 21.005859,
        size: 15,
        color: "red",
        URL: "https://rs.places.gold/"
    },
    {
        name: "	Russia",
        lat: 55.7522,
        lng: 37.6156,
        size: 15,
        color: "red",
        URL: "https://rus.places.gold/"
    },
    {
        name: "Sweden",
        lat: 60.128161,
        lng: 18.643501,
        size: 15,
        color: "red",
        URL: "https://se.places.gold/"
    },
    {
        name: "Suriname",
        lat: 3.919305,
        lng: -56.027783,
        size: 15,
        color: "red",
        URL: "https://sr.places.gold/"
    },
    {
        name: "Thailand",
        lat: 15.870032,
        lng: 100.992541,
        size: 15,
        color: "red",
        URL: "https://th.places.gold/"
    },
    {
        name: "Turkey",
        lat: 38.963745,
        lng: 35.243322,
        size: 15,
        color: "red",
        URL: "https://tr.places.gold/"
    },
    {
        name: "Ukraine",
        lat: 48.379433,
        lng: 31.16558,
        size: 15,
        color: "red",
        URL: "https://ukr.places.gold/"
    },
    {
        name: "UnitedStates",
        lat: 37.09024,
        lng: -95.712891,
        size: 15,
        color: "red",
        URL: "https://us.places.gold/"
    },
    {
        name: "Uruguay",
        lat: -32.522779,
        lng: -55.765835,
        size: 15,
        color: "red",
        URL: "https://uy.places.gold/"
    },
    {
        name: "Venezuela",
        lat: 6.42375,
        lng: -66.58973,
        size: 15,
        color: "red",
        URL: "https://ve.places.gold/"
    },
    {
        name: "Vietnam",
        lat: 14.058324,
        lng: 108.277199,
        size: 15,
        color: "red",
        URL: "https://vi.places.gold/"
    }, 
];
const $583352a84ea0c220$export$d1dbb0d71f7750ab = [];
$583352a84ea0c220$var$places.forEach((place)=>{
    const geoCoords = (0, $7197f322bd6a047e$export$39e042fd83f1b62e)(place.lat, place.lng);
    $583352a84ea0c220$export$d1dbb0d71f7750ab.push(geoCoords[0]);
    $583352a84ea0c220$export$d1dbb0d71f7750ab.push(geoCoords[1]);
    $583352a84ea0c220$export$d1dbb0d71f7750ab.push(geoCoords[2]);
});
const $583352a84ea0c220$export$136a11fe0b9f989 = $583352a84ea0c220$export$d1dbb0d71f7750ab;
var $583352a84ea0c220$export$2e2bcd8739ae039 = $583352a84ea0c220$var$places;
const $583352a84ea0c220$export$53592f2646555624 = (coords)=>{
    const { lat: lat , lng: lng  } = coords;
    const radius = 0.5;
    $583352a84ea0c220$var$places.forEach((place)=>{
        let dLat;
        let dLng;
        if (place.lat > 0 && lat > 0 || place.lat < 0 && lat < 0) dLat = Math.abs(place.lat - lat);
        if (place.lng > 0 && lng > 0 || place.lng < 0 && lng < 0) dLng = Math.abs(place.lng - lng);
        if (dLat <= radius && dLng <= radius) console.log(place.name);
    });
};


let $122c8b7f14b2ba66$var$g = (0, (/*@__PURE__*/$parcel$interopDefault($0e29f89097e37eaa$exports))).countries;
const $122c8b7f14b2ba66$var$dp = 512;
const $122c8b7f14b2ba66$var$atlasW = 2048;
const $122c8b7f14b2ba66$var$atlasH = 1024;
const $122c8b7f14b2ba66$var$canvasWidth = 945;
const $122c8b7f14b2ba66$var$canvasHeight = 945;
const $122c8b7f14b2ba66$var$w = 2 / $122c8b7f14b2ba66$var$canvasWidth;
const $122c8b7f14b2ba66$var$h = 2 / $122c8b7f14b2ba66$var$canvasHeight;
const $122c8b7f14b2ba66$var$baseCoords = {
    x: 0,
    y: 0
};
const $122c8b7f14b2ba66$export$7481db2e0de8e74d = (char, baseCoords1, offset)=>{
    const charData = (0, (/*@__PURE__*/$parcel$interopDefault($5d11ffc170b1a8db$exports))).chars.find((el)=>el.char === char);
    baseCoords1 = {
        x: 0,
        y: 0,
        z: 0
    };
    const top = 1 - charData.y / $122c8b7f14b2ba66$var$atlasH;
    const bottom = top - charData.height / $122c8b7f14b2ba66$var$atlasH;
    const left = charData.x / $122c8b7f14b2ba66$var$atlasW;
    const right = left + charData.width / $122c8b7f14b2ba66$var$atlasW;
    const topV = baseCoords1.y - charData.yoffset * $122c8b7f14b2ba66$var$h + 200 * $122c8b7f14b2ba66$var$h;
    const bottomV = topV - charData.height * $122c8b7f14b2ba66$var$h;
    const leftV = offset * $122c8b7f14b2ba66$var$w + charData.xoffset * $122c8b7f14b2ba66$var$w;
    const rightV = leftV + charData.width * $122c8b7f14b2ba66$var$w;
    const vertexArray = [
        leftV,
        topV,
        0,
        rightV,
        topV,
        0,
        leftV,
        bottomV,
        0,
        rightV,
        topV,
        0,
        rightV,
        bottomV,
        0,
        leftV,
        bottomV,
        0, 
    ];
    const textureCoordsArray = [
        left,
        top,
        right,
        top,
        left,
        bottom,
        right,
        top,
        right,
        bottom,
        left,
        bottom, 
    ];
    return {
        vertexArray: vertexArray,
        textureCoordsArray: textureCoordsArray,
        offset: leftV / $122c8b7f14b2ba66$var$w + charData.xadvance + 26
    };
};
const $122c8b7f14b2ba66$export$c222d9cdf9a4821b = (str, baseCoords2)=>{
    const vertexArray = [];
    const textureCoordsArray = [];
    let width = 0;
    Array.from(str).forEach((char)=>{
        const charData = (0, (/*@__PURE__*/$parcel$interopDefault($5d11ffc170b1a8db$exports))).chars.find((el)=>el.char === char);
        width = width + charData.xadvance;
    });
    let offset = 0;
    Array.from(str).forEach((char)=>{
        const charData = $122c8b7f14b2ba66$export$7481db2e0de8e74d(char, baseCoords2, offset);
        charData.vertexArray.forEach((el)=>vertexArray.push(el));
        charData.textureCoordsArray.forEach((el)=>textureCoordsArray.push(el));
        offset = charData.offset;
    });
    return {
        vertexArray: vertexArray,
        textureCoordsArray: textureCoordsArray
    };
};
const $122c8b7f14b2ba66$export$f81a3ec2bfb3f287 = ()=>{
    const vertexArray = [];
    const coordsArray = [];
    const textureCoordsArray = [];
    let vC = 0;
    (0, $583352a84ea0c220$export$2e2bcd8739ae039).forEach((c)=>{
        const name = c.name.trim();
        const coords = (0, $7197f322bd6a047e$export$39e042fd83f1b62e)(c.lat, c.lng, 1);
        const countryData = $122c8b7f14b2ba66$export$c222d9cdf9a4821b(name, {
            x: coords[0],
            y: coords[1],
            z: coords[2]
        });
        vC += name.length;
        countryData.vertexArray.forEach((el)=>vertexArray.push(el));
        countryData.textureCoordsArray.forEach((el)=>textureCoordsArray.push(el));
        for(let index = 0; index < name.length * 6; index++){
            coordsArray.push(coords[0]);
            coordsArray.push(coords[1]);
            coordsArray.push(coords[2]);
        }
    });
    return {
        vertexArray: vertexArray,
        textureCoordsArray: textureCoordsArray,
        coordsArray: coordsArray
    };
};
const $122c8b7f14b2ba66$export$236350842f3cd9bc = (name, lat, lng)=>{
    const vertexArray = [];
    const coordsArray = [];
    const textureCoordsArray = [];
    name = name.trim();
    coords = (0, $7197f322bd6a047e$export$39e042fd83f1b62e)(lat, lng, 1);
    const countryData = $122c8b7f14b2ba66$export$c222d9cdf9a4821b(name, {
        x: coords[0],
        y: coords[1],
        z: coords[2]
    });
    for(let index = 0; index < name.length * 6; index++){
        coordsArray.push(coords[0]);
        coordsArray.push(coords[1]);
        coordsArray.push(coords[2]);
    }
    return {
        vertexArray: countryData.vertexArray,
        textureCoordsArray: countryData.textureCoordsArray,
        coordsArray: coordsArray
    };
};


const $4a6945cabdc0860e$var$getSphereData = (latitudeBands, longitudeBands, radius, textureRatio)=>{
    const vertexPositionData = [];
    const normalData = [];
    const textureCoordData = [];
    for(let latNumber = 0; latNumber <= latitudeBands; latNumber++){
        const theta = latNumber * Math.PI / latitudeBands;
        const sinTheta = Math.sin(theta);
        const cosTheta = Math.cos(theta);
        for(let longNumber = 0; longNumber <= longitudeBands; longNumber++){
            const phi = longNumber * 2 * Math.PI / longitudeBands;
            const sinPhi = Math.sin(phi);
            const cosPhi = Math.cos(phi);
            const x = cosPhi * sinTheta;
            const y = cosTheta;
            const z = sinPhi * sinTheta;
            const u = 1 - longNumber / longitudeBands;
            const v = 1 - latNumber / latitudeBands;
            normalData.push(x);
            normalData.push(y);
            normalData.push(z);
            textureCoordData.push(u * textureRatio);
            textureCoordData.push(v * textureRatio);
            vertexPositionData.push(radius * x);
            vertexPositionData.push(radius * y);
            vertexPositionData.push(radius * z);
        }
    }
    const indexData = [];
    for(let latNumber1 = 0; latNumber1 < latitudeBands; latNumber1++)for(let longNumber = 0; longNumber < longitudeBands; longNumber++){
        const first = latNumber1 * (longitudeBands + 1) + longNumber;
        const second = first + longitudeBands + 1;
        indexData.push(first);
        indexData.push(second);
        indexData.push(first + 1);
        indexData.push(second);
        indexData.push(second + 1);
        indexData.push(first + 1);
    }
    return {
        vertexPositionData: vertexPositionData,
        textureCoordData: textureCoordData,
        indexData: indexData,
        normalData: normalData
    };
};
var $4a6945cabdc0860e$export$2e2bcd8739ae039 = $4a6945cabdc0860e$var$getSphereData;


class $d723e755cb23b394$var$Program {
    constructor(programData){
        this.programData = programData;
        this.programm = null;
        this.attributesAndBuffers = {};
        this.uniformsLocations = {};
        this.textures = {};
    }
    createShader(source, type, gl) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            const info = gl.getShaderInfoLog(shader);
            throw "Could not compile WebGL program. \n\n" + info;
        }
        return shader;
    }
    createProgram(gl) {
        this.gl = gl;
        const vS = this.createShader(this.programData.vertexShader, gl.VERTEX_SHADER, gl);
        const fS = this.createShader(this.programData.fragmentShader, gl.FRAGMENT_SHADER, gl);
        this.program = gl.createProgram();
        gl.attachShader(this.program, vS);
        gl.attachShader(this.program, fS);
        gl.linkProgram(this.program);
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            const info = gl.getProgramInfoLog(this.program);
            throw "Could not compile WebGL program. \n\n" + info;
        }
        return this.program;
    }
    initAttributes() {
        this.programData.attributes.keys().forEach((key)=>{
            this.attributesLocations[key] = this.gl.getAttribLocation(this.program, key);
        });
    }
    initUniforms() {
        Object.keys(this.programData.uniforms).forEach((key)=>{
            this.uniformsLocations[key] = this.gl.getUniformLocation(this.program, key);
        });
    }
    getUniformLocation(name) {
        return this.uniformsLocations[name];
    }
    initAttributeAndBuffer(attrName, attrType, numComponents, bufferData) {
        let location;
        const buffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl[attrType], buffer);
        this.gl.bufferData(this.gl[attrType], bufferData, this.gl.STATIC_DRAW);
        if (attrType != "ELEMENT_ARRAY_BUFFER") location = this.gl.getAttribLocation(this.program, attrName);
        else {
            buffer.itemSize = 1;
            buffer.numItems = bufferData.length;
        }
        this.attributesAndBuffers[attrName] = {
            location: location,
            buffer: buffer,
            array: bufferData,
            numComponents: numComponents,
            attrName: attrName,
            attrType: attrType
        };
    }
    setAttributesAndBuffers() {
        Object.keys(this.attributesAndBuffers).forEach((key)=>{
            const data = this.attributesAndBuffers[key];
            this.gl.bindBuffer(this.gl[data.attrType], data.buffer);
            if (data.attrType !== "ELEMENT_ARRAY_BUFFER") {
                this.gl.vertexAttribPointer(data.location, data.numComponents, this.gl.FLOAT, false, 0, 0);
                this.gl.enableVertexAttribArray(data.location);
            } else {
                data.buffer.itemSize = 1;
                data.buffer.numItems = data.array.length;
            }
        });
    }
    setUniformMatrix4(name, matrix) {
        this.gl.uniformMatrix4fv(this.uniformsLocations[name], false, matrix);
    }
    uniform3fv(name, vec3) {
        this.gl.uniform3fv(this.uniformsLocations[name], vec3);
    }
    use() {
        this.gl.useProgram(this.program);
    }
    async createTexture(src, block, isSmooth, uniformName, color) {
        color = color || [
            0,
            0,
            0,
            0
        ];
        let t = Date.now();
        const gl = this.gl;
        this.textureBlock = block;
        uniformName = uniformName || "u_texture";
        const location = gl.getUniformLocation(this.program, uniformName);
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(color));
        this.textures[uniformName] = {
            block: block,
            texture: texture,
            location: location,
            name: uniformName
        };
        const image = await this.loadTexture(src);
        this.image = image;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        if (isSmooth) {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        }
        gl.generateMipmap(gl.TEXTURE_2D);
        return image;
    }
    bindTexture(block) {
        const gl = this.gl;
        if (block) {
            gl.activeTexture(gl.TEXTURE0 + block);
            gl.bindTexture(gl.TEXTURE_2D, this.textures["u_texture"].texture);
            this.gl.uniform1i(this.textures["u_texture"].location, block);
        }
        // gl.activeTexture(gl.TEXTURE0);
        // gl.bindTexture(gl.TEXTURE_2D, this.texture);
        // this.gl.uniform1i(this.textureUniformLocation, 0);
        //this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        Object.keys(this.textures).forEach((key)=>{
            //console.log(this.textures[key]);
            gl.activeTexture(gl.TEXTURE0 + this.textures[key].block);
            gl.bindTexture(gl.TEXTURE_2D, this.textures[key].texture);
            this.gl.uniform1i(this.textures[key].location, this.textures[key].block);
        });
    }
    loadTexture(src) {
        return new Promise((resolve, reject)=>{
            const image = new Image();
            image.src = src;
            image.addEventListener("load", (f)=>{
                resolve(image);
            });
        });
    }
}
var $d723e755cb23b394$export$2e2bcd8739ae039 = $d723e755cb23b394$var$Program;




var $1575c02ee9655c0d$exports = {};
$1575c02ee9655c0d$exports = "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D u_texture;\nuniform sampler2D u_cloud;\nuniform vec3 u_lightDirection;\nuniform vec3 u_cameraDirection;\n\nvarying vec3 vNormal;\n\nfloat smoothClamp(float x, float a, float b) {\n        return smoothstep(0., 1., (2./3.)*(x - a)/(b - a) + (1./6.))*(b - a) + a;\n}\n\nvoid main() {\n    vec3 normal = normalize(vNormal);\n    vec4 color = texture2D(u_texture, vTextureCoord);\n    vec4 color3 = texture2D(u_cloud, vTextureCoord);\n    float light = smoothClamp(dot(vNormal, u_lightDirection) * 2.0, 0.2, 1.1);\n    float ac = exp(dot(vNormal, u_lightDirection)) / 2.0;\n    float oreol = 1.0;\n    if(color.b > (color.g + color.r)) {\n        oreol =  smoothClamp(ac, 1.0, 1.25);\n    }\n    float res = light * oreol;\n    gl_FragColor = vec4(color.r * res, color.g * res, color.b * res, 1.0);\n}";


var $0a027796d3a2616e$exports = {};
$0a027796d3a2616e$exports = "#define GLSLIFY 1\nattribute vec4 a_Position;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 u_model;\nuniform mat4 u_projection;\nuniform mat4 u_view;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(){\n    vec4 position = u_projection * u_view * u_model * a_Position;\n    gl_Position = vec4(position.x, position.y, position.z, position.w);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}";


var $1bc417264f19007e$exports = {};
$1bc417264f19007e$exports = "precision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D u_texture;\n\nvarying float vSelect;\n\nvoid main() {\n    vec4 color = texture2D(u_texture, gl_PointCoord);\n    if (vSelect == 1.0) {\n        if(color.a > 0.1) {\n            color.r = color.r + 0.2;\n            color.g = color.g + 0.2;\n            color.b = color.b + 0.2;\n        }\n    }\n    gl_FragColor = color;\n}";


var $42982aabe834dd20$exports = {};
$42982aabe834dd20$exports = "#define GLSLIFY 1\nattribute vec3 a_Position;\nuniform mat4 u_projection;\nuniform mat4 u_view;\nuniform mat4 u_model;\nuniform vec3 u_select;\n\nvarying float vSelect;\n\nvoid main(){\n    vec4 position = vec4(a_Position, 1.0);\n    gl_Position =  u_projection * u_view * u_model *  position;\n    gl_PointSize = 48.0;\n\n    if(u_select.x == a_Position.x && u_select.y == a_Position.y) {\n        vSelect = 1.0;\n    } else {\n        vSelect = 0.0;\n    }\n}";


var $bb5759317fb51d6b$exports = {};
$bb5759317fb51d6b$exports = "#define GLSLIFY 1\nattribute vec4 a_Position;\nattribute vec3 a_Coord;\nuniform mat4 u_projection;\nuniform mat4 u_view;\nuniform mat4 u_target;\nuniform mat4 u_model;\nuniform mat4 u_scale;\nattribute vec2 aTextureCoord;\n\nvarying vec2 vTextureCoord;\nvarying float vColor;\n\nvoid main(){\n    vec3 coord = a_Coord;\n    mat4 aMat4 = mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, coord.x, coord.y, coord.z, 1);\n    vColor = 1.01;\n    mat4 vt4 = mat4(\n        vec4(1.0, 0.0, 0.0, 0.0),\n        vec4(0.0, 1.0, 0.0, 0.0),\n        vec4(0.0, 0.0, 1.0, 0.0),\n        u_view[3]);\n\n    mat4 modelView = u_view * aMat4;\n\n    modelView[0][0] = 1.0; \n    modelView[0][1] = 0.0; \n    modelView[0][2] = 0.0;\n    modelView[1][0] = 0.0; \n    modelView[1][1] = 1.0; \n    modelView[1][2] = 0.0;\n    modelView[2][0] = 0.0; \n    modelView[2][1] = 0.0; \n    modelView[2][2] = 1.0;\n\n    vec4 P = modelView * u_target * a_Position;\n    gl_Position = u_projection * P;\n\n    vTextureCoord = aTextureCoord;\n}";


var $c9121ad593172844$exports = {};
$c9121ad593172844$exports = "precision mediump float;\n#define GLSLIFY 1\nuniform sampler2D u_texture;\nvarying vec2 vTextureCoord;\n\nfloat median(float r, float g, float b) {\n    return max(min(r, g), min(max(r, g), b));\n}\n\nvec3 color = vec3(1,1,1);\n\nvoid main() {\n    vec4 texColor = texture2D(u_texture, vTextureCoord);\n    float sigDist = median(texColor.r, texColor.g, texColor.b);\n    float alpha = step(0.3, sigDist);\n    if (sigDist < 0.5) {\n        color = vec3(0.5,0.5,0.5);\n    }\n    if (sigDist < 0.45) {\n        color = vec3(0.4,0.4,0.6);\n    }\n\n    gl_FragColor = vec4(color, alpha);\n    if (gl_FragColor.a < 0.0001) discard;\n}";


var $12f353b4fff5e296$exports = {};
$12f353b4fff5e296$exports = "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D u_texture;\n\nvoid main() {\n    vec4 color = texture2D(u_texture, vTextureCoord);\n    gl_FragColor = vec4(color.r, color.g, color.b, 1.0);\n}";


var $91869c8827b220a4$exports = {};
$91869c8827b220a4$exports = "#define GLSLIFY 1\nattribute vec4 a_Position;\nattribute vec2 aTextureCoord;\n\nuniform mat4 u_model;\nuniform mat4 u_projection;\nuniform mat4 u_view;\n\nvarying vec2 vTextureCoord;\n\nvoid main(){\n    vec4 position = u_projection * u_view * u_model * a_Position;\n    gl_Position = vec4(position.x, position.y, position.z, position.w);\n    vTextureCoord = aTextureCoord;\n}";


var $1c16ef8c842d80b5$exports = {};
$1c16ef8c842d80b5$exports = "#define GLSLIFY 1\nattribute vec4 a_Position;\nattribute vec2 aTextureCoord;\n\nuniform mat4 u_model;\nuniform mat4 u_projection;\nuniform mat4 u_view;\nuniform vec3 u_pos;\n\nvarying vec2 vTextureCoord;\n\nvoid main(){\n    gl_Position = u_projection * u_view * u_model * a_Position;\n    vTextureCoord  = aTextureCoord;\n}";


var $32d7cfe403dc2385$exports = {};
$32d7cfe403dc2385$exports = "precision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D u_texture;\n\nvarying vec2 vTextureCoord;\n\nvoid main() {\n    vec4 color = texture2D(u_texture, vTextureCoord);\n    gl_FragColor = vec4(1.0, 1.0, 0.9, color.r / 2.8);\n}";


var $771a8db8fe5c6a30$export$2e2bcd8739ae039 = {
    planetF: (/*@__PURE__*/$parcel$interopDefault($1575c02ee9655c0d$exports)),
    planetV: (/*@__PURE__*/$parcel$interopDefault($0a027796d3a2616e$exports)),
    markersF: (/*@__PURE__*/$parcel$interopDefault($1bc417264f19007e$exports)),
    markersV: (/*@__PURE__*/$parcel$interopDefault($42982aabe834dd20$exports)),
    textV: (/*@__PURE__*/$parcel$interopDefault($bb5759317fb51d6b$exports)),
    textF: (/*@__PURE__*/$parcel$interopDefault($c9121ad593172844$exports)),
    spaceF: (/*@__PURE__*/$parcel$interopDefault($12f353b4fff5e296$exports)),
    spaceV: (/*@__PURE__*/$parcel$interopDefault($91869c8827b220a4$exports)),
    testV: (/*@__PURE__*/$parcel$interopDefault($1c16ef8c842d80b5$exports)),
    testF: (/*@__PURE__*/$parcel$interopDefault($32d7cfe403dc2385$exports))
};


class $9863545b94dc9a7f$var$Search {
    constructor(containerSelector, data){
        this.container = document.querySelector(containerSelector);
        this.input = this.container.querySelector(".search-field input");
        this.searchIcon = this.container.querySelector(".search-icon");
        this.closeIcon = this.container.querySelector(".close-icon");
        this.suggestionItemTemplate = this.container.querySelector(".suggestion-item");
        this.sugesstionsContainer = this.container.querySelector(".search-suggestions");
        this.init();
        this.data = data;
        this.state = {
            searchText: "",
            suggestions: [],
            preselectedItemIndex: 0
        };
    }
    setGoToCallback(f) {
        this.goToCallback = f;
    }
    init() {
        this.input.addEventListener("input", this.inputHandler.bind(this));
        document.addEventListener("click", (e)=>{
            if (e.target.nodeName === "CANVAS") {
                this.reset();
                this.input.value = "";
            }
        });
        this.sugesstionsContainer.addEventListener("click", (e)=>{
            if (e.target.nodeName === "DIV") {
                e.preventDefault();
                e.stopPropagation();
                const index = e.target.getAttribute("data-index");
                this.selectSuggestion(index);
            }
        });
        this.sugesstionsContainer.addEventListener("mouseover", (e)=>{
            e.preventDefault();
            e.stopPropagation();
            if (e.target.nodeName === "DIV") {
                e.preventDefault();
                e.stopPropagation();
                const index = e.target.getAttribute("data-index");
                this.state.preselectedItemIndex = +index;
                this.updatePreSelect(index);
            }
        });
        document.addEventListener("keydown", (e)=>{
            if (e.code === "ArrowDown" && this.state.preselectedItemIndex < this.state.suggestions.length - 1) {
                e.preventDefault();
                this.state.preselectedItemIndex = +this.state.preselectedItemIndex + 1;
            } else if (e.code === "ArrowUp" && this.state.preselectedItemIndex > 0) {
                e.preventDefault();
                this.state.preselectedItemIndex = +this.state.preselectedItemIndex - 1;
            } else if (e.code === "Enter") {
                e.preventDefault();
                this.selectSuggestion(this.state.preselectedItemIndex);
            }
            this.updatePreSelect(this.state.preselectedItemIndex);
        });
        this.closeIcon.addEventListener("click", ()=>{
            this.input.value = "";
            this.reset();
        });
    }
    selectSuggestion(index) {
        if (index != undefined && this.state.suggestions[index]) {
            //this.input.value = this.state.suggestions[index].name.trim();
            this.input.value = "";
            window.open(this.state.suggestions[index].item.URL);
            this.reset();
        }
    }
    reset() {
        this.state.suggestions = [];
        this.state.searchText = "";
        this.updateSuggestions();
        this.closeIcon.style.display = "none";
        this.searchIcon.style.display = "block";
    }
    inputHandler(e) {
        this.state.searchText = e.target.value;
        this.updateSuggestions();
        if (this.state.searchText.length) {
            this.searchIcon.classList.add("search-field__icon-active");
            this.closeIcon.style.display = "block";
            this.searchIcon.style.display = "none";
        } else {
            this.searchIcon.classList.remove("search-field__icon-active");
            this.closeIcon.style.display = "none";
            this.searchIcon.style.display = "block";
        }
    }
    updateSuggestions() {
        this.state.suggestions = [];
        if (this.state.searchText) {
            this.data.forEach((el, i)=>{
                const str = el.name.toUpperCase().trim();
                const strToFind = this.state.searchText.toUpperCase();
                const isInclude = str.includes(strToFind);
                const position = str.indexOf(strToFind, 0);
                if (isInclude) this.state.suggestions.push({
                    index: i,
                    position: position,
                    name: el.name.trim(),
                    item: el
                });
            });
            this.state.suggestions.sort((a, b)=>a.position - b.position);
            this.state.suggestions = this.state.suggestions.slice(0, 5);
        }
        this.showSuggestions();
    }
    showSuggestions() {
        this.sugesstionsContainer.innerHTML = "";
        if (this.state.suggestions.length) {
            this.state.suggestions.forEach((s, i)=>{
                const container = this.suggestionItemTemplate.cloneNode(true);
                container.classList.add("suggestion-item");
                container.setAttribute("data-index", i);
                const start = s.name.toUpperCase().indexOf(this.state.searchText.toUpperCase());
                const length = this.state.searchText.length;
                const span = document.createElement("span");
                let str = "";
                str += s.name.substring(0, start);
                str += `<strong>${s.name.substring(start, start + length)}</strong>`;
                str += s.name.substring(start + length, s.name.length);
                span.innerHTML = str;
                container.prepend(span);
                container.style.display = "flex";
                this.sugesstionsContainer.appendChild(container);
            });
            this.updatePreSelect(0);
        }
    }
    updatePreSelect(index) {
        const prev = this.sugesstionsContainer.querySelector(".suggestion-item-selected");
        if (prev) prev.classList.remove("suggestion-item-selected");
        const active = this.sugesstionsContainer.querySelector(`.suggestion-item[data-index="${index}"]`);
        if (active) active.classList.add("suggestion-item-selected");
        this.state.preselectedItemIndex = index;
        if (this.state.suggestions[index]) this.goToCallback(this.state.suggestions[index].item);
    }
    toggleIcon() {}
}
var $9863545b94dc9a7f$export$2e2bcd8739ae039 = $9863545b94dc9a7f$var$Search;


var $91fad33d47036f36$exports = {};

$91fad33d47036f36$exports = new URL((parcelRequire("2JpsI")).resolve("6WEnx"), import.meta.url).toString();


var $36891e42e8800f3a$exports = {};

$36891e42e8800f3a$exports = new URL((parcelRequire("2JpsI")).resolve("e4V3I"), import.meta.url).toString();


var $2164ddd6198d6394$exports = {};

$2164ddd6198d6394$exports = new URL((parcelRequire("2JpsI")).resolve("gHbB2"), import.meta.url).toString();


var $e1c45dca03c9803b$exports = {};

$e1c45dca03c9803b$exports = new URL((parcelRequire("2JpsI")).resolve("eK9CM"), import.meta.url).toString();


var $3303db3822ae243a$exports = {};

$3303db3822ae243a$exports = new URL((parcelRequire("2JpsI")).resolve("9sMZ1"), import.meta.url).toString();


var $815a9f00c917c3a2$exports = {};

$815a9f00c917c3a2$exports = new URL((parcelRequire("2JpsI")).resolve("6cju0"), import.meta.url).toString();


const $973c8f945f28fbbc$export$bf62932f05050610 = ()=>{
    const vertexPositionData = [
        -1,
        1,
        0,
        1,
        1,
        0,
        -1,
        -1,
        0,
        1,
        1,
        0,
        1,
        -1,
        0,
        -1,
        -1,
        0, 
    ];
    const textureCoordData = [
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        0, 
    ];
    return {
        vertexPositionData: vertexPositionData,
        textureCoordData: textureCoordData
    };
};
var $973c8f945f28fbbc$export$2e2bcd8739ae039 = $973c8f945f28fbbc$export$bf62932f05050610;


const $74a5b179c5969087$var$init = ()=>{
    const canvas = document.querySelector("#canvas");
    const gl = canvas.getContext("webgl");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    // Планета    
    const programSphere = new (0, $d723e755cb23b394$export$2e2bcd8739ae039)({
        uniforms: {
            "u_model": "mat4",
            "u_view": "mat4",
            "u_projection": "mat4",
            "aspect": "int",
            "u_texture": "int",
            "u_lightDirection": "vec3",
            "u_cameraDirection": "vec3"
        },
        vertexShader: (0, $771a8db8fe5c6a30$export$2e2bcd8739ae039).planetV,
        fragmentShader: (0, $771a8db8fe5c6a30$export$2e2bcd8739ae039).planetF
    });
    programSphere.createProgram(gl);
    // Космосъ
    const programSpace = new (0, $d723e755cb23b394$export$2e2bcd8739ae039)({
        uniforms: {
            "u_model": "mat4",
            "u_view": "mat4",
            "u_projection": "mat4",
            "aspect": "int"
        },
        vertexShader: (0, $771a8db8fe5c6a30$export$2e2bcd8739ae039).spaceV,
        fragmentShader: (0, $771a8db8fe5c6a30$export$2e2bcd8739ae039).spaceF
    });
    programSpace.createProgram(gl);
    // Маркеры
    const programPoints = new (0, $d723e755cb23b394$export$2e2bcd8739ae039)({
        uniforms: {
            "u_view": "mat4",
            "u_projection": "mat4",
            "u_model": "mat4",
            "aspect": "int",
            "u_select": "vec3"
        },
        vertexShader: (0, $771a8db8fe5c6a30$export$2e2bcd8739ae039).markersV,
        fragmentShader: (0, $771a8db8fe5c6a30$export$2e2bcd8739ae039).markersF
    });
    programPoints.createProgram(gl);
    // Свет
    const programOreol = new (0, $d723e755cb23b394$export$2e2bcd8739ae039)({
        uniforms: {
            "u_view": "mat4",
            "u_projection": "mat4",
            "u_model": "mat4",
            "u_width": "int",
            "u_height": "int",
            "u_centerX": "int",
            "u_centerY": "int"
        },
        vertexShader: (0, $771a8db8fe5c6a30$export$2e2bcd8739ae039).testV,
        fragmentShader: (0, $771a8db8fe5c6a30$export$2e2bcd8739ae039).testF
    });
    programOreol.createProgram(gl);
    const label = document.querySelector(".label");
    var latitudeBands = 48;
    var longitudeBands = 48;
    var radius = 1;
    let rx = 0;
    let ry = 180;
    let rz = 0;
    let tx = 0;
    let ty = 0;
    const camera = {
        dist: 6,
        lat: 0,
        lang: -90.01
    };
    let aspect = 1;
    let spaceScale = 1;
    const cursor = {
        x: 0,
        y: 0
    };
    const sphere = (0, $4a6945cabdc0860e$export$2e2bcd8739ae039)(latitudeBands, longitudeBands, radius, 1);
    const space = (0, $4a6945cabdc0860e$export$2e2bcd8739ae039)(12, 12, 10, 1);
    const oreol = (0, $973c8f945f28fbbc$export$2e2bcd8739ae039)();
    programSphere.initUniforms();
    programSphere.initAttributeAndBuffer("indexBuffer", "ELEMENT_ARRAY_BUFFER", 2, new Uint16Array(sphere.indexData));
    programSphere.initAttributeAndBuffer("a_Position", "ARRAY_BUFFER", 3, new Float32Array(sphere.vertexPositionData));
    programSphere.initAttributeAndBuffer("aTextureCoord", "ARRAY_BUFFER", 2, new Float32Array(sphere.textureCoordData));
    programSphere.initAttributeAndBuffer("aNormal", "ARRAY_BUFFER", 3, new Float32Array(sphere.normalData));
    programSpace.initUniforms();
    programSpace.initAttributeAndBuffer("indexBuffer", "ELEMENT_ARRAY_BUFFER", 2, new Uint16Array(space.indexData));
    programSpace.initAttributeAndBuffer("a_Position", "ARRAY_BUFFER", 3, new Float32Array(space.vertexPositionData));
    programSpace.initAttributeAndBuffer("aTextureCoord", "ARRAY_BUFFER", 2, new Float32Array(space.textureCoordData));
    programPoints.initUniforms();
    programPoints.initAttributeAndBuffer("a_Position", "ARRAY_BUFFER", 3, new Float32Array((0, $583352a84ea0c220$export$136a11fe0b9f989)));
    programOreol.initUniforms();
    programOreol.initAttributeAndBuffer("a_Position", "ARRAY_BUFFER", 3, new Float32Array(oreol.vertexPositionData));
    programOreol.initAttributeAndBuffer("aTextureCoord", "ARRAY_BUFFER", 2, new Float32Array(oreol.textureCoordData));
    let u_texture = 0;
    programSphere.createTexture((0, (/*@__PURE__*/$parcel$interopDefault($2164ddd6198d6394$exports))), 0, false, "u_low").then(()=>{
        programPoints.createTexture((0, (/*@__PURE__*/$parcel$interopDefault($e1c45dca03c9803b$exports))), 0, false, [
            0,
            0,
            0,
            0
        ]);
    });
    programSphere.createTexture((0, (/*@__PURE__*/$parcel$interopDefault($36891e42e8800f3a$exports))), 1, false, "u_mid").then(()=>{
        u_texture = 1;
    });
    programSphere.createTexture((0, (/*@__PURE__*/$parcel$interopDefault($91fad33d47036f36$exports))), 2, false);
    programSpace.createTexture((0, (/*@__PURE__*/$parcel$interopDefault($3303db3822ae243a$exports))), 0, false);
    programOreol.createTexture((0, (/*@__PURE__*/$parcel$interopDefault($815a9f00c917c3a2$exports))), 3, false);
    // -------------------------------------------
    const lookAt = (0, $b6e62343e59abe43$exports).create();
    let cameraCoords;
    let lightCoords;
    let view;
    let perspective = (0, $b6e62343e59abe43$exports).create();
    let perspectiveM = (0, $b6e62343e59abe43$exports).create();
    const spaceMatrix = (0, $b6e62343e59abe43$exports).create();
    const textMatrix = (0, $b6e62343e59abe43$exports).create();
    let markerModelMatrix = (0, $b6e62343e59abe43$exports).create();
    let modelMatrix = (0, $b6e62343e59abe43$exports).create();
    aspect = canvas.clientWidth / canvas.clientHeight;
    (0, $b6e62343e59abe43$exports).perspective(perspective, 0.5, aspect, 0.1, 60);
    (0, $b6e62343e59abe43$exports).perspective(perspectiveM, 0.5, aspect, 0.1, camera.dist - 0.5);
    cameraCoords = (0, $7197f322bd6a047e$export$39e042fd83f1b62e)(camera.lat, camera.lang, camera.dist);
    lightCoords = (0, $7197f322bd6a047e$export$39e042fd83f1b62e)(camera.lat, camera.lang, 6);
    (0, $b6e62343e59abe43$exports).lookAt(lookAt, cameraCoords, (0, $2ded8b9747f14db0$exports).fromValues(0, 0, 0), (0, $2ded8b9747f14db0$exports).fromValues(0, 1, 0));
    view = lookAt;
    let hoverArea = {};
    let hoveredPlace = {
        hovered: false
    };
    const setMouseActiveAreaBoundaries = ()=>{
        const vec = (0, $7197f322bd6a047e$export$39e042fd83f1b62e)(0.0001, camera.lang + 90.0001, 1);
        const matrix = (0, $b6e62343e59abe43$exports).create();
        (0, $b6e62343e59abe43$exports).multiply(matrix, perspective, view);
        (0, $2ded8b9747f14db0$exports).transformMat4(vec, vec, matrix);
        const halfWidth = canvas.clientWidth / 2;
        const halfHeight = canvas.clientHeight / 2;
        const sideWidth = vec[0] * halfWidth;
        const top = halfHeight - sideWidth;
        const left = halfWidth - sideWidth;
        const right = halfWidth + sideWidth;
        const bottom = halfHeight + sideWidth;
        hoverArea = {
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            vec: vec
        };
    };
    let projectionCenterVec = (0, $2ded8b9747f14db0$exports).create();
    let cursorMatrix = (0, $b6e62343e59abe43$exports).create();
    let cursorVector = (0, $2ded8b9747f14db0$exports).create();
    getPointDisplayCoords = ()=>{
        let p = [];
        let placeIndex = 0;
        let pointsCoordsArray = [];
        const halfWidth = canvas.clientWidth / 2;
        const halfHeight = canvas.clientHeight / 2;
        let vec = (0, $2ded8b9747f14db0$exports).create();
        const projectionViewMat = (0, $b6e62343e59abe43$exports).create();
        (0, $b6e62343e59abe43$exports).multiply(projectionViewMat, perspective, view);
        (0, $2ded8b9747f14db0$exports).transformMat4(projectionCenterVec, [
            0,
            0,
            0
        ], projectionViewMat);
        for(let index = 0; index < (0, $583352a84ea0c220$export$136a11fe0b9f989).length; index = index + 3){
            p[0] = (0, $583352a84ea0c220$export$136a11fe0b9f989)[index];
            p[1] = (0, $583352a84ea0c220$export$136a11fe0b9f989)[index + 1];
            p[2] = (0, $583352a84ea0c220$export$136a11fe0b9f989)[index + 2];
            (0, $2ded8b9747f14db0$exports).transformMat4(vec, p, projectionViewMat);
            pointsCoordsArray.push({
                item: (0, $583352a84ea0c220$export$2e2bcd8739ae039)[placeIndex],
                x: halfWidth + vec[0] * halfWidth,
                y: halfHeight - vec[1] * halfHeight,
                z: vec[2],
                dx: p[0],
                dy: p[1]
            });
            placeIndex++;
        }
        return pointsCoordsArray;
    };
    const checkCursorHover = (pointsCoords)=>{
        if (cursor.x < hoverArea.left || cursor.x > hoverArea.right || cursor.y < hoverArea.top || cursor.y > hoverArea.bottom) return undefined;
        (0, $b6e62343e59abe43$exports).rotateY(cursorMatrix, cursorMatrix, Math.PI / 180 * (camera.lang + 90));
        (0, $b6e62343e59abe43$exports).rotateX(cursorMatrix, cursorMatrix, Math.PI / 180 * (0 - camera.lat));
        (0, $2ded8b9747f14db0$exports).transformMat4(cursorVector, cursorVector, cursorMatrix);
        for(let index = 0; index < pointsCoords.length; index++){
            if (pointsCoords[index].z < projectionCenterVec[2]) {
                if (Math.abs(pointsCoords[index].x - cursor.x) < 16 && cursor.y > pointsCoords[index].y - 16 && cursor.y < pointsCoords[index].y + 8) {
                    hoveredPlace = {
                        hovered: true,
                        name: pointsCoords[index].item.name,
                        lat: pointsCoords[index].item.lat,
                        lng: pointsCoords[index].item.lng,
                        url: pointsCoords[index].item.URL,
                        x: pointsCoords[index].x,
                        y: pointsCoords[index].y,
                        dx: pointsCoords[index].dx,
                        dy: pointsCoords[index].dy
                    };
                    document.body.style.cursor = "pointer";
                    index = pointsCoords.length;
                }
            } else {
                hoveredPlace.hovered = false;
                hoveredPlace.dx = 0;
            }
        }
    };
    setMouseActiveAreaBoundaries();
    const draw = function() {
        document.body.style.cursor = "default";
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0.1, 0.1, 0.2, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        aspect = canvas.clientWidth / canvas.clientHeight;
        cameraCoords = (0, $7197f322bd6a047e$export$39e042fd83f1b62e)(camera.lat, camera.lang, camera.dist);
        lightCoords = (0, $7197f322bd6a047e$export$39e042fd83f1b62e)(camera.lat + 20, camera.lang - 15, 10);
        (0, $b6e62343e59abe43$exports).lookAt(lookAt, cameraCoords, (0, $2ded8b9747f14db0$exports).fromValues(0, 0, 0), (0, $2ded8b9747f14db0$exports).fromValues(0, 1, 0));
        view = lookAt;
        if (u_texture != 0) {
            if (camera.dist < 4) u_texture = 2;
            else u_texture = 1;
        }
        (0, $b6e62343e59abe43$exports).perspective(perspective, 0.5, aspect, 0.1, 60);
        (0, $b6e62343e59abe43$exports).perspective(perspectiveM, 0.5, aspect, 0.1, camera.dist - 0.4);
        (0, $b6e62343e59abe43$exports).scale(spaceMatrix, spaceMatrix, [
            spaceScale,
            spaceScale,
            spaceScale
        ]);
        let textScale = camera.dist / 22;
        let target2 = (0, $b6e62343e59abe43$exports).create();
        (0, $b6e62343e59abe43$exports).scale(target2, target2, [
            textScale,
            textScale,
            1
        ]);
        const rotateMatrixX = (0, $2c59c3e297ed1d4b$export$2e2bcd8739ae039).multiple(modelMatrix, (0, $2c59c3e297ed1d4b$export$2e2bcd8739ae039).rotateX(Math.PI * rx / 180));
        const rotateMatrixY = (0, $2c59c3e297ed1d4b$export$2e2bcd8739ae039).multiple(rotateMatrixX, (0, $2c59c3e297ed1d4b$export$2e2bcd8739ae039).rotateY(Math.PI * ry / 180));
        const rotateMatrixZ = (0, $2c59c3e297ed1d4b$export$2e2bcd8739ae039).multiple(rotateMatrixY, (0, $2c59c3e297ed1d4b$export$2e2bcd8739ae039).rotateZ(Math.PI * rz / 180));
        const trMatrix = (0, $2c59c3e297ed1d4b$export$2e2bcd8739ae039).multiple(rotateMatrixY, (0, $2c59c3e297ed1d4b$export$2e2bcd8739ae039).translate(tx, ty));
        checkCursorHover(getPointDisplayCoords(perspective, view, trMatrix));
        gl.enable(gl.CULL_FACE);
        gl.cullFace(gl.BACK);
        programSpace.use();
        programSpace.bindTexture();
        programSpace.setAttributesAndBuffers();
        programSpace.setUniformMatrix4("u_model", spaceMatrix);
        programSpace.setUniformMatrix4("u_projection", perspective);
        programSpace.setUniformMatrix4("u_view", view);
        gl.drawElements(gl.TRIANGLES, programSpace.attributesAndBuffers.indexBuffer.buffer.numItems, gl.UNSIGNED_SHORT, 0);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.cullFace(gl.FRONT);
        programSphere.use();
        programSphere.bindTexture(u_texture);
        programSphere.setAttributesAndBuffers();
        programSphere.setUniformMatrix4("u_model", trMatrix);
        programSphere.setUniformMatrix4("u_projection", perspective);
        programSphere.setUniformMatrix4("u_view", view);
        gl.uniform1i(programSphere.textures["u_texture"].location, u_texture);
        const lightDirectionVector = (0, $2ded8b9747f14db0$exports).create();
        (0, $2ded8b9747f14db0$exports).subtract(lightDirectionVector, [
            0,
            0,
            0
        ], lightCoords);
        lightDirectionVector[1] = 0 - lightDirectionVector[1];
        (0, $2ded8b9747f14db0$exports).normalize(lightDirectionVector, lightDirectionVector);
        const cameraDirectionVector = (0, $2ded8b9747f14db0$exports).create();
        (0, $2ded8b9747f14db0$exports).subtract(cameraDirectionVector, [
            0,
            0,
            0
        ], (0, $7197f322bd6a047e$export$39e042fd83f1b62e)(camera.lat, camera.lang, 10));
        cameraDirectionVector[1] = 0 - cameraDirectionVector[1];
        (0, $2ded8b9747f14db0$exports).normalize(cameraDirectionVector, cameraDirectionVector);
        programSphere.uniform3fv("u_lightDirection", lightDirectionVector);
        programSphere.uniform3fv("u_cameraDirection", cameraDirectionVector);
        gl.drawElements(gl.TRIANGLES, programSphere.attributesAndBuffers.indexBuffer.buffer.numItems, gl.UNSIGNED_SHORT, 0);
        programOreol.use();
        programOreol.bindTexture();
        programOreol.setAttributesAndBuffers();
        programOreol.setUniformMatrix4("u_projection", perspective);
        programOreol.setUniformMatrix4("u_view", view);
        const matrixOreol = (0, $b6e62343e59abe43$exports).create();
        (0, $b6e62343e59abe43$exports).rotateY(matrixOreol, matrixOreol, Math.PI / 180 * (90 + camera.lang));
        (0, $b6e62343e59abe43$exports).rotateX(matrixOreol, matrixOreol, Math.PI / 180 * (360 - camera.lat));
        (0, $b6e62343e59abe43$exports).scale(matrixOreol, matrixOreol, [
            1.15,
            1.15,
            1
        ]);
        (0, $b6e62343e59abe43$exports).translate(matrixOreol, matrixOreol, [
            0,
            0,
            0.27
        ]);
        programOreol.setUniformMatrix4("u_model", matrixOreol);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        gl.disable(gl.CULL_FACE);
        gl.disable(gl.DEPTH_TEST);
        programPoints.use();
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
        programPoints.bindTexture();
        programPoints.setUniformMatrix4("u_projection", perspectiveM);
        programPoints.setUniformMatrix4("u_view", view);
        programPoints.setUniformMatrix4("u_model", markerModelMatrix);
        gl.uniform3fv(programPoints.uniformsLocations["u_select"], [
            hoveredPlace.dx || 0,
            hoveredPlace.dy || 0,
            0
        ]);
        programPoints.setAttributesAndBuffers();
        gl.drawArrays(gl.POINTS, 0, (0, $583352a84ea0c220$export$136a11fe0b9f989).length / 3);
        if (hoveredPlace.hovered) {
            label.style.display = "block";
            label.innerHTML = hoveredPlace.name;
            label.style.transform = `translatex(${hoveredPlace.x - 6}px) translateY(${hoveredPlace.y - 52}px)`;
        } else label.style.display = "none";
    };
    let startX = 0;
    let startY = 0;
    let startLang = camera.lang;
    let startLat = camera.lat;
    const goToData = {
        lat1: 0,
        lng1: 0,
        lat2: 0,
        lng2: 0,
        startTime: 0,
        prevTime: 0,
        active: false
    };
    const animationDuration = 3000;
    document.addEventListener("click", (e)=>{
        moveHandler(e);
        requestAnimationFrame(()=>{
            if (hoveredPlace.hovered && isRotate) window.open(hoveredPlace.url);
        });
    });
    const moveHandler = (e)=>{
        const dX = startX - e.clientX;
        const dY = startY - e.clientY;
        const dLat = dY / canvas.clientHeight * 180;
        const dLang = dX / canvas.clientWidth * 180;
        camera.lat = startLat - dLat;
        camera.lang = startLang + dLang;
        if (camera.lat > 60) camera.lat = 60;
        if (camera.lat < -60) camera.lat = -60;
    };
    let zoomLine = 0;
    const touchMove = (e)=>{
        e.preventDefault();
        if (e.touches.length === 1) {
            const dX = startX - e.touches[0].clientX;
            const dY = startY - e.touches[0].clientY;
            const dLat = dY / canvas.clientHeight * 180;
            const dLang = dX / canvas.clientWidth * 180;
            camera.lat = startLat - dLat;
            camera.lang = startLang + dLang;
            if (camera.lat > 60) camera.lat = 60;
            if (camera.lat < -60) camera.lat = -60;
        } else {
            const x1 = e.touches[0].clientX;
            const y1 = e.touches[0].clientY;
            const x2 = e.touches[1].clientX;
            const y2 = e.touches[1].clientY;
            const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            if (zoomLine === 0) zoomLine = dist;
            else {
                camera.dist = camera.dist + (zoomLine - dist) / 2000;
                if (camera.dist > 10) camera.dist = 5;
                if (camera.dist < 1.5) camera.dist = 1.5;
            }
            setMouseActiveAreaBoundaries();
        }
    };
    let isActive = true;
    let isRotate = true;
    const mouseDown = (e)=>{
        e.stopPropagation();
        startX = e.clientX;
        startY = e.clientY;
        startLang = camera.lang;
        startLat = camera.lat;
        isActive = true;
        isRotate = false;
        canvas.addEventListener("mousemove", moveHandler);
    };
    const mouseUp = (e)=>{
        e.stopPropagation();
        canvas.removeEventListener("mousemove", moveHandler);
        isActive = true;
        isRotate = true;
    };
    const wheel = (e)=>{
        camera.dist = camera.dist + e.deltaY / 500;
        setMouseActiveAreaBoundaries();
    };
    const touchStart = (e)=>{
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        startLang = camera.lang;
        startLat = camera.lat;
        isActive = true;
        isRotate = false;
        canvas.addEventListener("touchmove", touchMove);
    };
    const touchEnd = (e)=>{
        canvas.removeEventListener("touchmove", moveHandler);
        isActive = true;
        isRotate = true;
        zoomLine = 0;
    };
    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mouseup", mouseUp);
    document.addEventListener("wheel", wheel);
    document.addEventListener("touchstart", touchStart);
    document.addEventListener("touchend", touchEnd);
    let cameraStartDist = camera.dist;
    const rec = ()=>{
        draw();
        if (isRotate) camera.lang += 0.01;
        if (goToData.active) {
            isRotate = false;
            t = Date.now();
            const tP = (Date.now() - goToData.prevTime) / animationDuration;
            let dLat = tP * Math.abs(goToData.dir.lat);
            let dLng = tP * Math.abs(goToData.dir.lng);
            if (camera.dist > goToData.cameraDist) camera.dist = camera.dist - (cameraStartDist - goToData.cameraDist) * tP;
            let newCoords = (0, $7197f322bd6a047e$export$bd6fa78dde623f67)(goToData.lat1, goToData.lng1, goToData.dir.lat, goToData.dir.lng, dLat, dLng);
            if (camera.lat != goToData.lat2) camera.lat = newCoords.lat;
            if (camera.lang != goToData.lng2) camera.lang = newCoords.lng;
            goToData.lat1 = newCoords.lat;
            goToData.lng1 = newCoords.lng;
            if (camera.lang * goToData.lng2 > 0 && Math.abs(Math.abs(camera.lang) - Math.abs(goToData.lng2)) < dLng) camera.lang = goToData.lng2;
            if (camera.lat * goToData.lat2 > 0) {
                if (Math.abs(Math.abs(camera.lat) - Math.abs(goToData.lat2)) < dLat) camera.lat = goToData.lat2;
            }
            if (camera.lang === goToData.lng2 && camera.lat === goToData.lat2) {
                goToData.active = false;
                isRotate = true;
            }
        }
        requestAnimationFrame(()=>{
            if (isActive) rec();
            else return;
        });
    };
    rec();
    document.addEventListener("mousemove", (e)=>{
        cursor.x = e.clientX;
        cursor.y = e.clientY;
    });
    const search = new (0, $9863545b94dc9a7f$export$2e2bcd8739ae039)(".search-container", (0, $583352a84ea0c220$export$2e2bcd8739ae039));
    search.setGoToCallback((item)=>{
        goToData.cameraDist = 3.5;
        goToData.active = true;
        goToData.lat1 = camera.lat;
        goToData.lng1 = camera.lang;
        goToData.lat2 = item.lat;
        goToData.lng2 = item.lng;
        goToData.dir = (0, $7197f322bd6a047e$export$fcce7887255d1c69)(camera.lat, camera.lang, item.lat, item.lng);
        goToData.prevTime = Date.now();
    });
};
window.addEventListener("load", $74a5b179c5969087$var$init);


