import React, { Component } from 'react';
import './DiceGame.css';
import Dice from './Dice.js'

class DiceGame extends Component {
	constructor(props){
		super(props);
		this.state = {
			diceOne : 'Dice fas fa-dice-six',
			diceTwo : 'Dice fas fa-dice-six',
			value : 'Roll the Dice!',
			disabled : false,
			rolling : false
		}
		this.rollDice = this.rollDice.bind(this);
	}

	rollDice(e){
		let diceArr = ['one', 'two', 'three', 'four', 'five', 'six'],
		diceFace1 = diceArr[Math.floor(Math.random()*diceArr.length)],
		diceFace2 = diceArr[Math.floor(Math.random()*diceArr.length)];
		
		this.setState({
			rolling : true,
			diceOne : diceFace1,
			diceTwo : diceFace2,
			value : 'Rolling...', 
			disabled : true
		});

		setTimeout(() => {
			this.setState({
				value : 'Roll the Dice!', 
				disabled : false,
				rolling : false
			})
		}, 800)
	}

	render(){
		return(
			<section className="DiceGame">
				<section className="DiceGame-inner">
					<Dice face={this.state.diceOne} rolling={this.state.rolling}/>	
					<Dice face={this.state.diceTwo} rolling={this.state.rolling}/>
				</section>
				<button 
					onClick={this.rollDice} 
					className="DiceGame-btn" 
					disabled={this.state.disabled}> 
					{this.state.value}
				</button>
			</section>
		)
	}
}

export default DiceGame;