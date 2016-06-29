import React from 'react'
import HorizontalSplit from '../Utils/HorizontalSplit.jsx'

export default class PricingTable extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="container">
				<HorizontalSplit>
					{ this.props.children }
				</HorizontalSplit>
			</div>
		)
	}
}


