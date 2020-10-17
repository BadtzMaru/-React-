import React, { Component } from 'react';

export default class SliderArrow extends Component {
    render() {
        return (
            <div className="slider-arrow">
                <span onClick={() => this.props.skip(-1)} className="arrow arrow-left">&lt;</span>
                <span onClick={() => this.props.skip(1)} className="arrow arrow-right">&gt;</span>
            </div>
        );
    }
}
