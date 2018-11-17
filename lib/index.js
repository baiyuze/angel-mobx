"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _mobxReact = require("mobx-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(option) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.store = {};
    //model
    _this.modelStore = {};

    return _this;
  }

  //初始化store


  _createClass(App, [{
    key: "init",
    value: function init(initState) {
      initState = initState ? initState : {};
      this.store = _extends({}, initState);
    }

    /**
     * 添加model
     * @param {*store 中的key} name 
     * @param {*模块 model} model 
     */

  }, {
    key: "createModel",
    value: function createModel(name, Model) {
      this.modelStore[name] = new Model();
      this.store = _extends({}, this.store, this.modelStore);
    }

    //添加路由

  }, {
    key: "createRouter",
    value: function createRouter(router) {
      this.router = router;
    }
    //启动

  }, {
    key: "start",
    value: function start(id) {
      (0, _reactDom.render)(_react2.default.createElement(_mobxReact.Provider, { store: this.store }, _react2.default.createElement(this.router, null)), document.getElementById(id));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = new App();