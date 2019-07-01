import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
	render(){
		let classes;
		{this.props.rolling ? classes = `Dice fas fa-dice-${this.props.face} rolling` : classes = `Dice fas fa-dice-${this.props.face}`}
		return(
			<i className={classes}></i>
		)
	}
}

export default Dice;