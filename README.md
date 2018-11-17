# 初步封装了mobx
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