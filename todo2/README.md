## Introduction
结合React和Webpack，将TodoList移植到热加载开发环境中

## Details
#### 目录结构
    |--todo2
    |----build
    |------bundle.js(自动生成)
	|------index.html
	|----src
	|------components
	|--------App.js
	|--------Header.js
	|--------Add.js
	|--------Lists.js
	|--------List.js
	|------css
	|------scss
	|------index.js 
	|----.babelrc
	|----package.json
	|----webpack.config.js

### 安装事项
	webpack
	webpack-cli
	webpack-dev-server
	react react-dom
	babel-core babel-loader babel-preset-env babel-preset-react
	css-loader sass-loader style-loader node-sass
### 运行
	npm run dev
### 注意事项
#### 1.	遇到webpack4 使用时提示npm install webpack-cli -D的问题
按照要求实现安装，如果还是出错，在webpack.config.js moudle.exports里面添加mode: 'development'
#### 2. webpack-dev-server 404
webpack-dev-server会在content-base路径下寻找index.html作为首页，可以设定webpack-dev-server --content-base ./dist, 设定了以后如果找不到就会404
#### 3. ProvidePlugin undefined
    const webpack = require('webpack');
    webpack.ProvidePlugin	
	
	



