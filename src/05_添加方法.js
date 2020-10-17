// react核心库
import React from 'react';
// 引入渲染DOM库
import ReactDom from 'react-dom';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
    }
    handleClick = () => {
        let { num } = this.state;
        num++;
        this.setState({
            num
        });
    };
    render() {
        // 给h1绑定事件, onClick必须大写
        // 注意: on+原生事件名称(大写)
        return <h1 onMouseOver={this.handleClick}>{this.state.num}</h1>;
    }
}

ReactDom.render(
    <Hello />,
    document.getElementById('root')
);