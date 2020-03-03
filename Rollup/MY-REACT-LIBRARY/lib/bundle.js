'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var react__default = _interopDefault(react);
var core = require('@emotion/core');
var framerMotion = require('framer-motion');

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "13j9o15-Switch",
  styles: "width:100px;height:50px;background:whitesmoke;border-radius:50px;position:relative;;label:Switch;"
} : {
  name: "13j9o15-Switch",
  styles: "width:100px;height:50px;background:whitesmoke;border-radius:50px;position:relative;;label:Switch;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmMiLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBjb25zdCBTd2l0Y2ggPSAoKSA9PiB7XG4vLyAgIHJldHVybiA8U3R5bGVkU3dpdGNoPlN3aXRjaCBoZWxsbzI8L1N0eWxlZFN3aXRjaD47XG4vLyB9O1xuXG4vLyBjb25zdCBTdHlsZWRTd2l0Y2ggPSBzdHlsZWQuaDFgXG4vLyAgIGNvbG9yOiBob3RwaW5rO1xuLy8gYDtcbi8vIGV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcblxuLy8yXG5cbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuY29uc3QgU3dpdGNoID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlT25UYXAgPSAoKSA9PiB7XG4gICAgc2V0c3RhdGUoIXN0YXRlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYH1cbiAgICAgIG9uVGFwPXtoYW5kbGVPblRhcH1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJiYWxsXCJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJveWFsYmx1ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6ICR7c3RhdGUgPyBcInVuc2V0XCIgOiAwfTtcbiAgICAgICAgICByaWdodDogJHtzdGF0ZSA/IDAgOiBcInVuc2V0XCJ9O1xuICAgICAgICBgfVxuICAgICAgICBwb3NpdGlvblRyYW5zaXRpb25cbiAgICAgID48L21vdGlvbi5kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Switch = function Switch() {
  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setstate = _useState2[1];

  var handleOnTap = function handleOnTap() {
    setstate(!state);
  };

  return core.jsx(framerMotion.motion.div, {
    className: "container",
    css: _ref,
    onTap: handleOnTap
  }, core.jsx(framerMotion.motion.div, {
    className: "ball",
    css: /*#__PURE__*/core.css("width:50px;height:50px;background:royalblue;border-radius:50%;position:absolute;left:", state ? "unset" : 0, ";right:", state ? 0 : "unset", ";;label:Switch;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2dCIiwiZmlsZSI6IlN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gY29uc3QgU3dpdGNoID0gKCkgPT4ge1xuLy8gICByZXR1cm4gPFN0eWxlZFN3aXRjaD5Td2l0Y2ggaGVsbG8yPC9TdHlsZWRTd2l0Y2g+O1xuLy8gfTtcblxuLy8gY29uc3QgU3R5bGVkU3dpdGNoID0gc3R5bGVkLmgxYFxuLy8gICBjb2xvcjogaG90cGluaztcbi8vIGA7XG4vLyBleHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG5cbi8vMlxuXG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmNvbnN0IFN3aXRjaCA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU9uVGFwID0gKCkgPT4ge1xuICAgIHNldHN0YXRlKCFzdGF0ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGB9XG4gICAgICBvblRhcD17aGFuZGxlT25UYXB9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiYmFsbFwiXG4gICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAke3N0YXRlID8gXCJ1bnNldFwiIDogMH07XG4gICAgICAgICAgcmlnaHQ6ICR7c3RhdGUgPyAwIDogXCJ1bnNldFwifTtcbiAgICAgICAgYH1cbiAgICAgICAgcG9zaXRpb25UcmFuc2l0aW9uXG4gICAgICA+PC9tb3Rpb24uZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2g7XG4iXX0= */")),
    positionTransition: true
  }));
};

exports.Switch = Switch;
