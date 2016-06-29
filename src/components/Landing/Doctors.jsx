import React from 'react'
import HorizontalSplit from '../Utils/HorizontalSplit.jsx'

export default class Doctors extends React.Component {

	constructor() {
		super()
		this._onClick = this._onClick.bind(this)
	}

	_onClick(e) {
		e.preventDefault()
	}

	render() {
		return (
			<section>
		  		<div className="container doctors">
		  			<h1 className="display-4">Meet our doctors</h1>
					<HorizontalSplit>
			  			{this.props.children}
					</HorizontalSplit>
					<button className="btn btn-lg center-block btn-doc" onclick={this._onClick}>
						SEE MORE DOCTORS
					</button>
		  		</div>
	  		</section>
		)
  	}
}

Doctors.propTypes = {
	children: React.PropTypes.arrayOf(React.PropTypes.element)
}