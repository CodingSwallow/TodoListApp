## Introduction
使用React实现TodoList的组件化，包括添加、删除代办事项、完成事项、清空所有事项.
create-react-app创建而成

## Details
### 1. 组件结构
	<App>
		<Header />
		<Add />
		<Lists>
			<List />
		</Lists>
	</App>
### 2. 传递数据
父组件传递到子组件：数据作为父组件的state，作为子组件的props传递到子组件
子组件传递到父组件：父组件编写处理该state的函数，同时将函数名通过props属性值的形式传入子组件，子组件通过props调用父组件的处理函数，引起state变化
兄弟组件：将数据提升到父组件，实现子组件A->父组件->子组件B
### 3. 存储数据
组件APP中，componentWillMount()函数中加载localStorage数据，在每次setState后保存数据到localStorage


