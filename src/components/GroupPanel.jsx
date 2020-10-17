import React from 'react';

import ListItem from './ListItem';

export default class GroupPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
        };
    }
    handleClick = () => {
        let flag = this.state.flag;
        if (flag) {
            this.refs.pbody.style.display = 'none';
        } else {
            this.refs.pbody.style.display = 'block';
        }
        this.setState({
            flag: !flag,
        });
    };
    render() {
        return (
            <div className="panel panel-info">
                <div onClick={this.handleClick} className="panel-heading">{this.props.data.name}</div>
                <div ref="pbody" className="panel-body" style={{ padding: 0 }}>
                    {/* 循环出每个好友 */}
                    <ListItem dataList={this.props.data.list} />
                </div>
            </div>
        );
    }
}