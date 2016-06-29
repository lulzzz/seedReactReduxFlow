import React from 'react'
import { browserHistory } from 'react-router'

export default class Hero extends React.Component {
	
	constructor() {
		super()
		this._onClick = this._onClick.bind(this)
	}

	_onClick(e) {
		e.preventDefault()
		browserHistory.push('/Login')
	}

	render() {

		let style = {}
		if ( this.props.backgroundImage ) { 
			style.backgroundImage = `
			linear-gradient(
	      		rgba(0, 0, 0, 0.55), 
	      		rgba(0, 0, 0, 0.55)
	    	),
	    	url(${this.props.backgroundImage})` 
	   	}

		return (
			<div className="hero jumbotron jumbotron-fluid text-xs-center" style={style}>
				<h1 className="display-4"> Your doctor anywhere anytime </h1>
				<p className="lead"> Certified GPs. Confidential consultations. Prescription included. </p>
				<button className="btn btn-white" onClick={this._onClick}> JOIN FREE FOR A MONTH </button>
			</div>
		)

	}
}

