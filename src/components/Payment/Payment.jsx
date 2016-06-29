import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import _PricingPlan from './PricingPlan.jsx'
import _PricingTable from './PricingTable.jsx'
import { basicPlan, standardPlan, premiumPlan } from './plans.js'

export default class Payment extends React.Component {

	constructor() {
		super()
	}

	render() {

		return(
			<div className="pricing space">
				<_PricingTable>
			  		<_PricingPlan {... basicPlan} />
			  		<_PricingPlan {... standardPlan} />
			  		<_PricingPlan {... premiumPlan} />
        		</_PricingTable>
			</div>
		)
	}
}


function onSignup({ user, stripeHandler }) {
	if ( !user.email ) {
		browserHistory.push('/Login')
		return
	}

	user.price = Math.round(parseFloat(user.price.replace('€','')) * 100)

	let options = {
		name: 'Karma',
		description: user.plan + ' Plan',
		email: user.email,
		currency: 'eur',
		amount: user.price
	}

	stripeHandler.open(options)
}

basicPlan.onClick = onSignup
standardPlan.onClick = onSignup
premiumPlan.onClick = onSignup







