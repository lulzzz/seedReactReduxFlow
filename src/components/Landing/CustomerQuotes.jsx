import React from 'react'
import HorizontalSplit from '../Utils/HorizontalSplit.jsx'

export default class CustomerQuotes extends React.Component {

	render() {
		return (
			<section>
		  		<div className="container feedbacks">
					<HorizontalSplit>
			  			{this.props.children}
					</HorizontalSplit>
		  		</div>
	  		</section>
		)
  	}
}

CustomerQuotes.propTypes = {
	children: React.PropTypes.arrayOf(React.PropTypes.element)
}
