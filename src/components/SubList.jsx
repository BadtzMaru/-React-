// react核心库
import React from 'react';

class SubList extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {/* <li className="list-group-item active">xxx</li>
                <li className="list-group-item">xxx</li>
                <li className="list-group-item">xxx</li> */}
                {
                    this.props.listData.map((item, index) => {
                        return (
                            <li className={this.props.nowIndex === index ? 'list-group-item active' : 'list-group-item'} key={index}>{item}</li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default SubList;
