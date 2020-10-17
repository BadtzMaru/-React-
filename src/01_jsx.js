// react核心库
import React from 'react';
// 引入渲染DOM库
import ReactDom from 'react-dom';

// 定义虚拟元素,不是真正的html标签,在jsx里面写的html标签其实是一个对象
// 语法糖(简写)
let element = <h1> hello nodeing </h1>;

// 定义一个虚拟元素(对象)
let element2 = React.createElement('h2', null, ['hello nodeing']);

// render 作用: 把h1塞到root容器里面Ç
// jsx 语法: js语法 + html语法混合写法 在js里面直接写html标签
// 为什么能在js直接写html标签? 最终html标签被转化成了js代码,babel工具转化
// ReactDom.render(
// 	<h1>hello nodeing</h1>,
// 	document.getElementById('root')
// );

// 1. 虚拟元素 -> 对象
// 2. 标签通过babel转化成js代码运行

// 1. 为什么能够在js文件里面写html语法? html语法是被转化成了js语法 babel和React 最终得到一个对象
// 2. 如何去渲染

// <h1 id="box">hello nodeing</h1>
let objH1 = {
    type: 'h1',
    props: {
        id: 'box',
        children: 'hello nodeing'
    },
};

function render(ele, container) {
    let { type, props } = ele;
    // 把ele渲染到container里面 把ele对象变成htlm元素
    // 创建元素
    let objHtml = document.createElement(type);
    for (let attr in props) {
        if (attr !== 'children') {
            objHtml.setAttribute(attr, props);
        } else {
            // 假设只有一个文本节点
            objHtml.innerText = props.children;
        }
    }
    // 把元素添加到container
    container.appendChild(objHtml);
}

// 把objH1 要赛到root容器
render(objH1, document.getElementById('root'));

// 把一个对象渲染成html元素 jsx文件

// jsx底层的流程: 1.html语法通过babel和react转化成一个对象 2. 把这个对象通过react-dom里面的render方法渲染成一个真正的html元素