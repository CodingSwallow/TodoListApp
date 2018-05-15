## Introduction
将TodoList结合Redux，参考了官方的Redux TodoList

## Details
#### 目录结构
    |--todo3
    |------build
    |----------bundle.js(自动生成)
    |----------index.html
    |------src
    |----------actions
    |--------------index.js 
    |----------reducers
    |--------------index.js
    |----------containers
    |--------------AddTodo.js
    |--------------VisibleTodoList.js
    |----------components
    |--------------App.js
    |--------------Header.js
    |--------------TodoList.js
    |--------------Todo.js
    |--------------NavItem.js
    |----------store
    |--------------index.js
    |----------scss
    |--------------todo.scss
    |----------index.js 
    |------.babelrc
    |------package.json
    |------webpack.config.js

### 安装
	react-redux redux
### 运行
	npm run dev
### 主要修改
1. 修改了目录结构，将store的内容抽离进index.js, 除去了menuReducer，导航功能交与react-router,除去了footer组件，将导航内容放在头部，重新编写了样式文件
2. 实现了router功能
3. 修改webpack.config.js文件，解决除主页外刷新页面404问题




