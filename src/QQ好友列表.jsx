import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import GroupPanel from './components/GroupPanel';
import FriendData from './assets/data';

class Friend extends React.Component {
    render() {
        return (
            <div>
                {
                    Object.keys(FriendData).map((item, index) => {
                        return (
                            <GroupPanel key={index} data={FriendData[item]} />
                        );
                    })
                }
            </div>
        );
    }
}

ReactDom.render(
    <Friend />,
    document.getElementById('root')
);