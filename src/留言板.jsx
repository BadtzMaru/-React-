import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import MessageBoard from './components/MessageBoard';

ReactDom.render(
    <MessageBoard />,
    document.getElementById('root'),
);