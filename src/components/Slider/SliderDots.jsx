import React, { Component } from 'react';

export default class SliderDots extends Component {
    render() {
        return (
            <div className="slider-dots">
                {
                    this.props.imgs.map((item, index) => (
                        <span
                            key={index}
                            className={'dot ' + (index === this.props.nowIndex ? 'active' : '')}
                            onClick={() => this.props.skip(index - this.props.nowIndex)}
                        />
                    ))
                }
            </div>
        );
    }
}
