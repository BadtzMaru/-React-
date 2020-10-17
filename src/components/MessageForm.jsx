import React, { Component } from 'react';

export default class MessageBoard extends Component {
    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label">用户名: </label>
                    <div className="col-sm-10 ">
                        <input ref={(ref) => this.username = ref} className="form-control" type="text" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">留言内容: </label>
                    <div className="col-sm-10 ">
                        <textarea ref={(ref) => this.content = ref} className="form-control" type="text" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-2">
                        <input
                            className="btn btn-primary"
                            type="button"
                            value="提交"
                            onClick={() => this.props.addMessage(this.username.value, this.content.value)}
                        />
                    </div>
                </div>
            </form>
        );
    }
}
