import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
	render(){
		return(
			<i className={this.props.classList}></i>
		)
	}
}

export default Dice;