// react核心库
import React from 'react';
// 引入jsonp
import jsonp from 'jsonp';

import SubList from './SubList';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            index: -1,
        };
    }
    handleChange = (ev) => {
        let url = `https://www.baidu.com/su?wd=%${ev.target.value}`;
        // 发送请求 jsonp: 跨域的解决方案
        // 需要使用jsonp的包去发送请求
        jsonp(url, {
            param: 'cb',
        }, (err, data) => {
            // 把获取到的数据存到state里面去 listData是一个数组,下标
            this.setState({
                listData: data.s,
                index: -1,
            });
        });
    };
    // 键盘事件
    handleKeyDown = (ev) => {
        // 键盘按下一次
        let nowIndex = this.state.index;
        switch (ev.keyCode) {
            case 38:
                nowIndex--;
                break;
            case 40:
                nowIndex++;
                break;
            default:
                break;
        }
        if (nowIndex >= this.state.listData.length) nowIndex = -1;
        if (nowIndex < -1) nowIndex = this.state.listData.length - 1;
        if (ev.keyCode === 38 || ev.keyCode === 40) {
            this.setState({
                index: nowIndex
            }, () => {
                // 拿到最新的index那就可以拿到最新的值
                this.refs.ipt.value = this.state.listData[this.state.index];
            });
            // 这里不能直接setState后面去获取到更新后的状态,因为setState是异步的,在setState回调函数里面才能获取
        }
        // 按回车键执行的功能
        if (ev.keyCode === 13) {
            window.location.href = `https://www.baidu.com/s?wd=${this.state.listData[this.state.index]}`;
        }
    };
    render() {
        return (
            <div className="panel panel-info" style={{ width: '300px', margin: '100px auto' }}>
                <div className="panel-heading">
                    <input ref="ipt" type="text" className="form-control" onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
                </div>
                <div className="panel-body" style={{ paddingTop: '0' }}>
                    <SubList listData={this.state.listData} nowIndex={this.state.index} />
                </div>
            </div>
        );
    }
}

export default Search;