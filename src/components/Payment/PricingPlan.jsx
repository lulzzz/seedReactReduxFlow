import React from 'react'
import { connect } from 'react-redux'
import { storeUserInfo } from '../../actions'
import stripe from './Stripe.jsx'

class PricingCard extends React.Component {

	constructor() {
		super()
		this.onClick = this.onClick.bind(this)
	}

	onClick() {
		
		// Save user data
		let plan = this.props.name
		let price = this.props.price
		this.props.saveUserPlan({ plan, price })

		// Load stripe and request payment
		let user = Object.assign({}, this.props.user, { plan, price })
		let url = this.props.url

		this.props.loadStripe(user, (err, stripeHandler) => {
			this.props.onClick({ user, stripeHandler })
		})
	}

	render() {
		return(
			<div className="card pricing-plan">
	        	<div className="card-header pricing-plan-name">
	        		{this.props.name}
	        	</div>
	        	
	        	<div className="card-block">
	          		<div className="text-xs-center pricing-plan-price">
	            		<h4 className="card-title pricing-plan-price-amount">{this.props.price}</h4>
	            		<span className="pricing-plan-price-period">{this.props.period}</span>
	          		</div>
	          		<p className="card-text text-xs-center pricing-plan-description">{this.props.description}</p>
	          		<p className="card-text text-xs-center pricing-plan-action">
	            		<button 
	            			className="btn btn-lg" 
	            			onClick={this.onClick}>
	              			{this.props.buttonText}
	            		</button>
	          		</p>
	        	</div>

	       		<div className="card-block pricing-plan-features">
	          		<ul className="list-group list-group-flush">
	            		{
	            			this.props.features.map((name, i) => {
	              				return (
	              					<li key={i} className="list-group-item">
	              						<i className="glyphicon glyphicon-star" aria-hidden="true"></i>
	              						{name}
	              					</li>
	              				)
	            			})
	            		}
	          		</ul>
	        	</div>
	      	</div>
		)
	}
}


PricingCard.propTypes = {
	name: React.PropTypes.string.isRequired,
	description: React.PropTypes.string,
	price: React.PropTypes.node.isRequired,
	period: React.PropTypes.string,
	features: React.PropTypes.array,
	buttonText: React.PropTypes.string,
	onClick: React.PropTypes.func,
	url: React.PropTypes.string.isRequired
}

PricingCard.defaultProps = {
	period: "/month",
	buttonText: "Sign up",
	url: process.env.backEnd
}


const mapStateToProps = (state) => {
  	return { user: state.userInfo }
}

const mapDispatchToProps = (dispatch) => {
  	return {
    	saveUserPlan: ({ plan, price }) => {
      		dispatch(storeUserInfo({ plan, price }))
    	}
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(stripe(PricingCard))


