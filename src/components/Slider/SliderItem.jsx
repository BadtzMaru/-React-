import React, { Component } from 'react';

export default class SliderItem extends Component {
    render() {
        let styleObj = {
            width: 4 * 800,
            left: this.props.nowIndex * (-800),
            transitionDuration: this.props.delay + 's',
        };
        return (
            <ul className="sliders" style={styleObj}>
                {
                    this.props.imgs.map((item, index) => (
                        <li key={index} className="slider">
                            <img src={item.src} alt={item.alt} />
                        </li>
                    ))
                }
            </ul>
        );
    }
}
