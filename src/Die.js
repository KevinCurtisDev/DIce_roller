import React, { Component } from 'react';
import './Die.css'

class Die extends Component {
    render() {
        const dieNum = this.props.diceNum;
        const dieClass = `fas fa-dice-${dieNum} ${this.props.rolling ? 'shake' : null}`
        return (
            <i className={dieClass}></i>
        )
    }
}

export default Die;