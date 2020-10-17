// react核心库
import React from 'react';
// 引入渲染DOM库
import ReactDom from 'react-dom';
// 引入bootstrap    
import 'bootstrap/dist/css/bootstrap.css';

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            head: '国内新闻',
            body: '内容内容内容',
            footer: '底部信息'
        };
    }
    render() {
        return (
            <div className="panel panel-primary">
                <PanelHead head={this.state.head} />
                <PanelBody body={this.state.body} />
                <PanelFooter footer={this.state.footer} />
            </div>
        );
    }
}

class PanelHead extends React.Component {
    render() {
        return (
            <div className="panel-heading">{this.props.head}</div>
        );
    }
}

class PanelBody extends React.Component {
    render() {
        return (
            <div className="panel-body">{this.props.body}</div>
        );
    }
}

class PanelFooter extends React.Component {
    render() {
        return (
            <div className="panel-footer">{this.props.footer}</div>
        );
    }
}

// 单向数据流, 这是react中的一种原则 数据是从顶层往下流
ReactDom.render(
    <Panel />,
    document.getElementById('root')
);