import React, { Component } from 'react';
import Die from './Die';
import './Dice.css'

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "one",
            num2: "three",
            rolling: false
        }
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {
        const numbers = ["one", "two", "three", "four", "five", "six"];
        const randomNum1 = Math.floor(Math.random() * 6);
        const randomNum2 = Math.floor(Math.random() * 6);
        this.setState({ num1: numbers[randomNum1], num2: numbers[randomNum2], rolling: true });

        setTimeout(() => {
            this.setState({ rolling: false });
        }, 500);
    }

    render() {
        return (
            <div>
                <div>
                    <Die diceNum={this.state.num1} rolling={this.state.rolling} />
                    <Die diceNum={this.state.num2} rolling={this.state.rolling} />
                </div>
                <button onClick={this.rollDice} className="RollDice-button" disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling.." : "Roll Dice!"}
                </button>
            </div>
        )
    }
}

export default Dice;