webpackJsonp([10],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var React = __webpack_require__(3);
var PropTypes = __webpack_require__(12);
var PureRenderMixin = __webpack_require__(2);
var _ = __webpack_require__(9);
var WidthProvider = __webpack_require__(0).WidthProvider;
var ReactGridLayout = __webpack_require__(0);
ReactGridLayout = WidthProvider(ReactGridLayout);

var NoCompactingLayout = React.createClass({
  displayName: 'NoCompactingLayout',

  mixins: [PureRenderMixin],

  propTypes: {
    onLayoutChange: PropTypes.func.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      className: "layout",
      items: 50,
      cols: 12,
      rowHeight: 30,
      onLayoutChange: function onLayoutChange() {},
      // This turns off compaction so you can place items wherever.
      verticalCompact: false
    };
  },
  getInitialState: function getInitialState() {
    var layout = this.generateLayout();
    return {
      layout: layout
    };
  },
  generateDOM: function generateDOM() {
    return _.map(_.range(this.props.items), function (i) {
      return _jsx('div', {}, i, _jsx('span', {
        className: 'text'
      }, void 0, i));
    });
  },
  generateLayout: function generateLayout() {
    var p = this.props;
    return _.map(new Array(p.items), function (item, i) {
      var y = _.result(p, 'y') || Math.ceil(Math.random() * 4) + 1;
      return { x: i * 2 % 12, y: Math.floor(i / 6) * y, w: 2, h: y, i: i.toString() };
    });
  },


  onLayoutChange: function onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  },

  render: function render() {
    return React.createElement(
      ReactGridLayout,
      _extends({ layout: this.state.layout, onLayoutChange: this.onLayoutChange
      }, this.props),
      this.generateDOM()
    );
  }
});

module.exports = NoCompactingLayout;

if (__webpack_require__.c[__webpack_require__.s] === module) {
  __webpack_require__(7)(module.exports);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var shallowCompare = __webpack_require__(8);

/**
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this mixin for a
 * considerable performance boost.
 *
 * Most React components have pure render functions.
 *
 * Example:
 *
 *   var ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 *
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 *
 * See https://facebook.github.io/react/docs/pure-render-mixin.html
 */
var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
};

module.exports = ReactComponentWithPureRenderMixin;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var shallowEqual = __webpack_require__(13);

/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 */
function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

module.exports = shallowCompare;

/***/ })

},[102]);