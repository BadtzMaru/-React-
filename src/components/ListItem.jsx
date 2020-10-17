import React from 'react';

export default class ListItem extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.dataList.map((item, index) => {
                        return (
                            <li key={index} className="list-group-item">
                                <p>{item.username}</p>
                                <p><span>{item.vip ? '[vip在线]' : '[在线]'}</span>{item.message}</p>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}