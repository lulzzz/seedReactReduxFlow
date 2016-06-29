import React from 'react'
import { browserHistory } from 'react-router'

const stripeKey = "pk_test_Jary6h87cU3YPOv3GEDJYHZx";

const stripe = ( Component ) => {

	class Stripe extends React.Component {

		constructor() {
			super()
			this.loadStripe = this.loadStripe.bind(this)
		}

		loadStripe(user, callback) {
			$.getScript("https://checkout.stripe.com/checkout.js", (data, textStatus, jqxhr) => {

				callback(
					null, 
					StripeCheckout.configure({ 
						key: stripeKey,
						image: "https://localhost:8081/assets/img/Heart@1024.png",
						locale: "auto",
						zipCode: true,
						billingAddress: true,
						token: token => {
					
							let data = {
								email: user.email,
								subscriptionPlan: user.plan,
								subscriptionPrice: user.price
							}
							console.log(data)

							fetch(this.props.url + 'login/pricing', {
								method: 'PUT',
								headers: {
									'Content-Type': 'application/json'
								},
								body: JSON.stringify(data),
								mode: 'cors'
							})
							.then(response => {
				  				if(response.ok) {
								    return browserHistory.push('/Profile')
								} else {
									throw new error()
								}
							})
							.catch( err => {
				  				alert(err.status + ' - ' + err.statusText);
								console.error(err.stack)
							})
						}
					})
				)
			})
		}

		render() {
			return <Component 
				{...this.props} 
				loadStripe={this.loadStripe}
				/>
		}
	}

	Stripe.propTypes = {
		url: React.PropTypes.string
	}

	Stripe.defaultProps = {
		url: process.env.backEnd
	}

	return Stripe
}

export default stripe
