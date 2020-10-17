// react核心库
import React from 'react';
// 引入渲染DOM库
import ReactDom from 'react-dom';
// 引入类型检查库
import PropTypes from 'prop-types';

class Hello extends React.Component {
    // 3. 如何去定义默认属性
    static defaultProps = {
        name: '李四'
    };
    // 4. 如何去规定属性的类型? 类型的检查 使用于大型项目
    static propTypes = {
        // 规定传入的msg必须是字符串
        msg: PropTypes.string,
    };
    render() {
        // 2. 如何访问属性
        return <h1>{this.props.msg}</h1>;
    }
}

ReactDom.render(
    // 1. 如何去定义组件的属性
    <Hello msg="hello nodeing" id="1" />,
    document.getElementById('root')
);
