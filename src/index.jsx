import React from 'react';
import ReactDom from 'react-dom';

import Slider from './components/Slider';

let IMAGE_DATA = [
    { src: require('./assets/imgs/01.jpg'), alt: '图片01' },
    { src: require('./assets/imgs/02.jpg'), alt: '图片02' },
    { src: require('./assets/imgs/03.jpg'), alt: '图片03' },
    { src: require('./assets/imgs/04.jpg'), alt: '图片04' },
];

ReactDom.render(
    // 在使用Slider组件的时候,就把图片数据传过去
    <Slider
        imgs={IMAGE_DATA}
        speed={1}
        autoPlay={true}
        delay={1}
    />,
    document.getElementById('root'),
);