import React, { Component } from 'react';
import './DiceGame.css';
import Dice from './Dice.js'

class DiceGame extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		return(
			<section className="DiceGame">
				<section className="DiceGame-inner">
					<Dice />	
					<Dice />
				</section>
				<button className="DiceGame-btn"> Roll the Dice!</button>
			</section>
		)
	}
}

export default DiceGame;