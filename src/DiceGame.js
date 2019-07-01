import React, { Component } from 'react';
import './DiceGame.css';
import Dice from './Dice.js'

class DiceGame extends Component {
	constructor(props){
		super(props);
		this.state = {
			diceOne : 'Dice fa fa-dice-six',
			diceTwo : 'Dice fa fa-dice-six'
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		let diceArr = ['one', 'two', 'three', 'four', 'five', 'six'];
		let diceClass1 = 'Dice fa fa-dice-' + diceArr[Math.floor(Math.random()*diceArr.length)];
		let diceClass2 = 'Dice fa fa-dice-' + diceArr[Math.floor(Math.random()*diceArr.length)];
		this.setState({diceOne : diceClass1, diceTwo : diceClass2});
		console.log(this.state)
	}

	render(){
		return(
			<section className="DiceGame">
				<section className="DiceGame-inner">
					<Dice classList={this.state.diceOne}/>	
					<Dice classList={this.state.diceTwo}/>
				</section>
				<button onClick={this.handleClick} className="DiceGame-btn"> Roll the Dice!</button>
			</section>
		)
	}
}

export default DiceGame;