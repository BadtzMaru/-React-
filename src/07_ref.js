// react核心库
import React from 'react';
// 引入渲染DOM库
import ReactDom from 'react-dom';

class Hello extends React.Component {
    handleChange = () => {
        // 获取到前两个input里面的值, 然后相加;
        let num1 = parseInt(this.num1.value) || 0;
        let num2 = parseInt(this.refs.num2.value) || 0;
        this.result.value = num1 + num2;
    };
    // 总结: 要获取到原生dom对象 1. 给这个dom对象绑定一个ref 2. 通过this.refs获取
    render() {
        return (
            <div>
                {/* ref如果后面是一个函数 当input被渲染出来后就会被立即调用,调用这个函数就可以马上拿到这个元素 第一个参数ref就是真实的dom元素 */}
                <input ref={(ref) => this.num1 = ref} type="test" onChange={this.handleChange} />
                +
                <input ref="num2" type="test" onChange={this.handleChange} />
                =
                <input ref={(ref) => this.result = ref} type="test" />
            </div>
        );
    }
}

ReactDom.render(
    <Hello />,
    document.getElementById('root')
);