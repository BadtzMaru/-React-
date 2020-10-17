import React, { Component } from 'react';

export default class MessageBoard extends Component {
    render() {
        const { MessageData } = this.props;
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">螺钉留言板</div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            MessageData.map((item, index) => (
                                <li key={index} className="list-group-item clearfix">
                                    <div className="col-sm-10">
                                        <span>{item.username}: </span><span>{item.content}</span>
                                    </div>
                                    <div className="col-sm-2">
                                        <span>{item.create_time}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
