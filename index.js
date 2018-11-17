
import React from 'react';
import { render } from "react-dom";
import { Provider } from "mobx-react";
class App extends React.Component{
  constructor(option) {
    super();
    this.store = {};
    //model
    this.modelStore = {};

  }

  //初始化store
  init(initState) {
    initState = initState ? initState : {};
    this.store = { ...initState };
  }

  /**
   * 添加model
   * @param {*store 中的key} name 
   * @param {*模块 model} model 
   */
  createModel(name, Model) {
    this.modelStore[name] = new Model();
    this.store = { ...this.store, ...this.modelStore };

  }

  //添加路由
  createRouter(router) {
    this.router = router;
  }
  //启动
  start(id) {
    render(<Provider store={this.store}><this.router /></Provider>,
      document.getElementById(id)
    );

  }

}

export default new App();