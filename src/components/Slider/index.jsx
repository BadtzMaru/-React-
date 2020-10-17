import React, { Component } from 'react';

import './index.css';
import SliderItem from './SliderItem';
import SliderArrow from './SliderArrow';
import SliderDots from './SliderDots';

export default class index extends Component {
    constructor() {
        super();
        this.state = {
            nowIndex: 0
        };
    };
    skip = (step) => {
        let nowIndex = this.state.nowIndex + step;
        if (nowIndex >= this.props.imgs.length) nowIndex = 0;
        if (nowIndex < 0) nowIndex = this.props.imgs.length - 1;
        this.setState({ nowIndex });
    };
    // 封装播放方法
    play = () => {
        this.$timer = setInterval(() => {
            // nowIndex++ nowIndex--
            this.skip(1);
        }, this.props.speed * 1000);
    };
    // 自动播放原理: 每隔一段时间去控制nowIndex变量
    componentDidMount() {
        if (this.props.autoPlay) this.play();
    };
    render() {
        return (
            <div
                className="slider-wrapper"
                onMouseOver={() => clearInterval(this.$timer)}
                onMouseOut={() => this.play()}
            >
                {/* 图片 */}
                <SliderItem
                    nowIndex={this.state.nowIndex}
                    imgs={this.props.imgs}
                    delay={this.props.delay}
                />
                {/* 左右箭头 */}
                <SliderArrow skip={this.skip} />
                {/* 按钮 */}
                <SliderDots
                    nowIndex={this.state.nowIndex}
                    skip={this.skip}
                    imgs={this.props.imgs}
                />
            </div>
        );
    };
};
