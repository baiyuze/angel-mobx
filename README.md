# 封装了mobx
```javascript
import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import TodoList from "./components/TodoList";
import app from 'angel-mobx';
function RouterConfig() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={TodoList} />
        <Route path="/test" exact component={TodoList} />
      </Switch>
    </HashRouter >
  );
}
//初始化
app.init({a: 1});
//创建model
app.createModel("TodoListModel", require('./models/TodoListModel').default);
//创建router
app.createRouter(RouterConfig);
//启动
app.start('root');

```

# 统一包处理

# 无论是从mobx中的包还是mobx-react中的包都可以直接在angel-mobx/package中进行引用

```javascript

import React, { Component } from "react";
// import { observable, action } from "mobx";
// import { observer, inject } from "mobx-react";
import { observer, inject, observable, action } from "angel-mobx/package";

import Todo from "./Todo";
@inject("store")
@observer
class TodoList extends React.Component {
  @observable newTodoTitle = "";

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <hr />
        <ul>
          {this.props.store.TodoListModel.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        <div>
          测试: {this.props.store.TodoListModel.unfinishedTodoCount}
        </div>
        <div>
          点击了几次: {this.props.store.TodoListModel.testValue}
        </div>
      </div>
    );
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.TodoListModel.addTodo(this.newTodoTitle || '我是测试');
    this.props.store.TodoListModel.test ++;
    this.newTodoTitle = "";
    e.preventDefault();
  };
}

export default TodoList;



```
