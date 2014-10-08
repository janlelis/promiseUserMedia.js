'use strict';

(function(global, code){ if(typeof exports === 'object'){ module.exports = code(); }
else{ global.promiseUserMedia = code(); }}(this, function(){

////
// promiseUserMedia.js
//   Promisified access to getUserMedia & vendor prefixes

var promiseUserMedia = function promiseUserMedia(constraints){
  return new Promise(function promiseUserMediaPromise(resolve, reject){
    if(!promiseUserMedia.isAvailable){
      error = new Error('getUserMedia is not supported');
      error.name = "NotSupportedError";
      reject(error);
    } else {
      promiseUserMedia.getUserMedia.call(navigator, constraints, resolve, reject);
    }
  });
}

promiseUserMedia.getUserMedia = navigator.getUserMedia    || navigator.webkitGetUserMedia ||
                                navigator.mozGetUserMedia || navigator.msGetUserMedia;

promiseUserMedia.isAvailable = !! promiseUserMedia.getUserMedia;

return promiseUserMedia;
}));
