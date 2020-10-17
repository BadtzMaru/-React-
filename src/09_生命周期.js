// react核心库
import React from 'react';
// 引入渲染DOM库
import ReactDom from 'react-dom';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
    }
    // 这个方法是在render之前调用
    UNSAFE_componentWillMount() {
        console.log('1. 组件渲染之前被调用');
    }
    // 组件挂载完成后, 这个方法在render之后调用
    componentDidMount() {
        console.log('3. 组件渲染完成');
    }
    // 询问你是到底要不要更新
    shouldComponentUpdate(nextProps, nextState) {
        // 第一个参数表示新的属性 第二个参数表示新的状态
        console.log('询问是否更新', nextProps, nextState);
        // 1. 返回true 就会更新页面 render  2. 返回false 就不会去 render
        return true;
    }
    // 组件即将更新 这个函数在render再次渲染之前调用
    UNSAFE_componentWillUpdate() {
        console.log('组件即将更新');
    }
    // 组件更新完成 这个函数在 render 之后调用
    componentDidUpdate(prevProps, prevState) {
        console.log('组件更新完成', prevProps, prevState);
    }
    handleClick = () => {
        let { num } = this.state;
        num++;
        this.setState({ num });
    };
    // 注意: 生命周期是什么? 组件从产生到消亡的过程, 在这个过程中挂载了很多函数
    render() {
        console.log('2. 组件被渲染render执行了');
        return (
            <div>
                <button onClick={this.handleClick}>点击</button>
                <p>{this.state.num}</p>
                <SubHello num={this.state.num} />
            </div>
        );
    }
}

class SubHello extends React.Component {
    // 当属性更新的时候会触发
    UNSAFE_componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.num > 5) {
            alert(nextProps.num);
        }
        console.log('有属性更新了', nextProps, nextState);
    }
    render() {
        return (
            <h1>{this.props.num}</h1>
        );
    }
}

ReactDom.render(
    <Hello />,
    document.getElementById('root')
);