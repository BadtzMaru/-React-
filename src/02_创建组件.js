// react核心库
import React from 'react';
// 引入渲染DOM库
import ReactDom from 'react-dom';

// 通过定义函数的形式来创建组件
let Hello = (props) => {
    console.log(props);
    // 在jsx语法中写的标签是react的虚拟元素,返回对象
    return <h1>{props.msg}</h1>;
};

ReactDom.render(<Hello msg="hello nodeing" id="h1" />, document.getElementById('root'));