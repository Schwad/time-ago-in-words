(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["time-ago-in-words"] = {}));
})(this, (function (exports) { 'use strict';

  // Attribution: https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time/53800501#53800501
  var units = {
    year: 24 * 60 * 60 * 1000 * 365,
    month: 24 * 60 * 60 * 1000 * 365 / 12,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000
  };
  var rtf = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto'
  });
  var timeAgoInWords = function timeAgoInWords(d1) {
    var d2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
    var elapsed = d1 - d2; // "Math.abs" accounts for both "past" & "future" scenarios

    for (var u in units) {
      if (Math.abs(elapsed) > units[u] || u == 'second') return rtf.format(Math.round(elapsed / units[u]), u);
    }
  };

  exports.rtf = rtf;
  exports.timeAgoInWords = timeAgoInWords;
  exports.units = units;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
