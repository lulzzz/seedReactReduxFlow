import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { storeUserInfo } from '../../actions'

class SignIn extends React.Component {

	constructor() {
		super()
		this.onSignInSubmit = this.onSignInSubmit.bind(this)
	}

    onSignInSubmit(e) {
		e.preventDefault()
		let msg

		if ( 
			!this.props.email
			|| !this.props.password
		) {
			msg = 'Form is incomplete'
			alert(msg)
			return new Error(msg);
		}

		let data = {
			email:this.props.email,
			password:this.props.password
		}

		fetch(`${this.props.url}login?email=${this.props.email}&password=${this.props.password}`, {
			method: 'GET',
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
			this.props.handleLoginSuccess(res)
			browserHistory.push('/profile')
	    })
		.catch( err => {
	  		alert(err.status + ' - ' + err.statusText);
			console.error(err.stack)
		})
	}

	render() {

		return (

			<div className="back">
				<div className="card card-block login">

					<button type="button" className="close pull-left" onClick={ () => { browserHistory.push('/Login') }}>
	  					<i className="glyphicon glyphicon-remove" aria-hidden="true"></i>
					</button>
					<div className="clearfix"></div>

					<h3 className="text-xs-center signIn">SIGN IN</h3>
	
					<form onSubmit={this.onSignInSubmit}>
					  	
	  					<fieldset className="form-group">
	    					<label for="email">Email address</label>
	    					<input 
	    						type="email" 
	    						className="form-control" 
	    						id="email" 
	    						placeholder="Enter email"
	    						required
	    						onChange={this.props.handleEmailChange}/>
	  					</fieldset>

	  					<fieldset className="form-group">
	    					<label for="password">Password</label>
	    					<input 
	    						type="password" 
	    						className="form-control" 
	    						id="password" 
	    						placeholder="Password"
	    						required
	    						onChange={this.props.handlePasswordChange}/>
	  					</fieldset>

	  					<div className="text-xs-center">
	  						<button type="submit" className="btn btn-sign-in">SIGN IN</button>
	  					</div>
	  				</form>

	  				<p className="text-muted text-small text-xs-center">
	  					<a onClick={ () => { browserHistory.push('/resetPassword') } }>Forgot Password?</a>
	  				</p>
				</div>
			</div>
		)
	}
}

SignIn.propTypes = {
	url: React.PropTypes.string
}

SignIn.defaultProps = {
	url: process.env.backEnd
}


const mapStateToProps = (state) => {
  	return state.userInfo
}

const mapDispatchToProps = (dispatch) => {
  	return {
    	handleEmailChange: (e) => {
      		dispatch(storeUserInfo({ email: e.target.value }))
    	},

    	handlePasswordChange: (e) => {
      		dispatch(storeUserInfo({ password: e.target.value }))
    	},

    	handleLoginSuccess: (res) => {
			dispatch(storeUserInfo(res))
    	}
  	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
