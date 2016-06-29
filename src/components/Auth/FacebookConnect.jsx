import React from 'react'
import { browserHistory } from 'react-router'

const facebookConnect = ( Component ) => {

	class FacebookConnect extends React.Component {

		constructor() {
			super()
			this.onFBConnect = this.onFBConnect.bind(this)
		}

		componentWillMount() {

			window.fbAsyncInit = function() {
				FB.init({
				  	appId      : process.env.facebookAppId,
				  	cookie     : true,  
				  	xfbml      : true,  
				  	version    : 'v2.5' 
				});

			}.bind(this);

			// Load the SDK asynchronously
			(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_US/sdk.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		}

		syncFBData() {
		
		  	FB.api('/me', {fields: 'id,name,first_name,last_name,age_range,link,gender,picture,email,birthday'}, response => {
		  	
				fetch(this.props.url + 'login/facebook', {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(response),
					mode: 'cors'
				})
				.then(response => {
	  				if(response.ok) {
					     return response.json()
					} else {
						throw new error();
					}
				})
				.then(res => {
					this.props._handleLoginSuccess({
						email: res.email,
						firstName: res.firstName,
						lastName: res.lastName,
						gender: res.gender,
						birthday: res.birthday,
						photo: res.photo,
						plan: res.plan,
						price: res.price
					})
					browserHistory.push( res.price ? 'profile' : 'payment' )
	    		})
				.catch( err => {
	  				alert(err.status + ' - ' + err.statusText);
					console.error(err.stack)
				})
		  	})
		}

		statusChangeCallback(response) {
			let self = this
		  	
		  	if (response.status === 'connected') {
		  		console.log('connected')
		    	self.syncFBData()
		  	} else {
		  		console.log('not connected')
		    	FB.login(function(response) {
	   				self.syncFBData()
	 			}, {scope: 'public_profile, email, user_birthday'});
		  	}
		}

		// This function is called when someone finishes with the Login
		// Button.  See the onlogin handler attached to it in the sample
		// code below.
		checkLoginState() {
		  	FB.getLoginStatus(function(response) {
		    	this.statusChangeCallback(response);
		  	}.bind(this));
		}

		onFBConnect(e) {
			e.preventDefault()
		  	FB.login(this.checkLoginState());
		}

		render() {
			return <Component 
				{...this.props} 
				checkLoginState={this.checkLoginState}
				statusChangeCallback={this.statusChangeCallback}
				syncFBData={this.syncFBData}
				onFBConnect={this.onFBConnect}
				/>
		}
	}

	FacebookConnect.propTypes = {
		url: React.PropTypes.string
	}

	FacebookConnect.defaultProps = {
		url: process.env.backEnd
	}

	return FacebookConnect
}

export default facebookConnect

