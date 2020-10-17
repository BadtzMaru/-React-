import React, { Component } from 'react';

import MessageList from './MessageList';
import MessageForm from './MessageForm';

export default class MessageBoard extends Component {
    constructor() {
        super();
        this.state = {
            MessageData: [],
        };
    };
    addMessage = (username, content) => {
        let obj = {
            username,
            content,
            create_time: new Date().toLocaleDateString(),
        };
        this.setState({
            MessageData: [
                ...this.state.MessageData,
                obj,
            ],
        });
    };
    render() {
        return (
            <div className="container">
                <MessageList MessageData={this.state.MessageData} />
                <MessageForm addMessage={this.addMessage} />
            </div>
        );
    };
};
