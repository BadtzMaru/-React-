// react核心库
import React from 'react';
// 引入渲染DOM库
import ReactDom from 'react-dom';

// 第二种方式: 通过类的形式来定义组件
// 两种方式的不同: 第一种方式通常是静态的,没有js交互, 第二种方式适用于有复杂交互
// 具体第二种方式如何实现复杂的交互? 需求: 每隔一段时间生成一个随机数,渲染到h1标签中
// 注意: 组件的命名第一个字母必须大写
// 函数名 变量名 类名 标识符号 不要以数字开头
class Hello extends React.Component {
    constructor(props) {
        super(props);
        // 挂载数据的地方 state就是组件的状态
        this.state = {
            num: 0
        };
    }
    // 生命周期 当组件已经装载完成了就去调用一次
    componentDidMount() {
        setInterval(() => {
            // 如何去更改 组件的状态
            this.setState({
                num: parseInt(Math.random() * 1000)
            });

            // 4 需要注意: 组件状态的修改必须用setState
            // this.state = parseInt(Math.random() * 1000); // 报错: Do not mutate state directly. Use setState() 
        }, 500);
    }
    // render 表示要渲染什么东西
    render() {
        // 一定要返回内容 3. 如何去使用状态
        return <h1>{this.state.num}</h1>;
    }
}

ReactDom.render(
    <Hello msg="hello nodeing" />,
    document.getElementById('root')
);