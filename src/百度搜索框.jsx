// react核心库
import React from 'react';
// 引入渲染DOM库
import ReactDom from 'react-dom';
// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.css';

import Search from './components/Search';

class Index extends React.Component {
    render() {
        return (
            <>
                <Search />
            </>
        );
    }
}

ReactDom.render(
    <Index />,
    document.getElementById('root')
);