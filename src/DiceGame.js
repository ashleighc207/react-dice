import React, { Component } from 'react';
import './DiceGame.css';
import Dice from './Dice.js'

class DiceGame extends Component {
	render(){
		return(
			<section>
				<Dice />
				<Dice />
			</section>
		)
	}
}

export default DiceGame;