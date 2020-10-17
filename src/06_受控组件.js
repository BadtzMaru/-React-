// react核心库
import React from 'react';
// 引入渲染DOM库
import ReactDom from 'react-dom';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        };
    }
    handleChange = (ev) => {
        // 在这里面修改input里面的值 如何去获取到input里面的值
        this.setState({ val: ev.target.value });
    };
    render() {
        return (
            <div>
                {/* 必须要用onChange事件来更改内容 数据的双向绑定 受控组件 */}
                <input type="text" value={this.state.val} onChange={this.handleChange} />
                <p>{this.state.val}</p>
            </div>
        );
    }
}

ReactDom.render(
    <Hello />,
    document.getElementById('root')
);