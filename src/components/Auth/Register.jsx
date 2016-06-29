import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { storeUserInfo } from '../../actions'


class Register extends React.Component {

	constructor() {
		super()
	}

	_onSubmit(e) {
		e.preventDefault()
		let msg

		if ( 
			!this.props.firstName
			|| !this.props.lastName
			|| !this.props.email
			|| !this.props.password
		) {
			msg = 'Form is incomplete'
			alert(msg)
			return new Error(msg);
		}

		if ( this.props.password.length < 8 ) {
			msg = 'Password is too short'
			alert(msg)
			return new Error(msg);
		}

		let data = {
			firstName:this.props.firstName,
			lastName:this.props.lastName,
			email:this.props.email,
			password:this.props.password
		}

		fetch(this.props.url + 'register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data),
			mode: 'cors'
		})
		.then(response => {
	  		if(response.ok) {
			     return browserHistory.push('/payment')
			} else {
				throw new error();
			}
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

					<button type="button" className="close pull-left" onClick={() => {browserHistory.push('/login')}}>
	  					<i className="glyphicon glyphicon-remove" aria-hidden="true"></i>
					</button>
					<div className="clearfix"></div>

					<h2 className="register text-xs-center">REGISTER</h2>
	
					<form onSubmit={this._onSubmit.bind(this)}>
					  	<fieldset className="form-group">
	    					<label for="first-name">First name</label>
	    					<input 
	    						type="text" 
	    						className="form-control" 
	    						id="first-name" 
	    						placeholder="Your first name"
	    						required
	    						onChange={this.props.handleFirstNameChange}/>
	  					</fieldset>

	  					<fieldset className="form-group">
	    					<label for="last-name">Last name</label>
	    					<input 
	    						type="text" 
	    						className="form-control" 
	    						id="last-name" 
	    						placeholder="Your last name"
	    						required
	    						onChange={this.props.handleLastNameChange}/>
	  					</fieldset>

	  					<fieldset className="form-group">
	    					<label for="email">Email address</label>
	    					<input 
	    						type="email" 
	    						className="form-control" 
	    						id="email" 
	    						placeholder="Enter email"
	    						required
	    						onChange={this.props.handleEmailChange}/>
	    					<small className="text-muted">We'll never share your email with anyone else.</small>
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
	  						<button type="submit" className="btn btn-sign-up">REGISTER</button>
	  					</div>
	  				</form>

	  				<p className="text-muted text-small text-xs-center">Clicking here you accept the <a>Terms & Conditions</a></p>
	  	
  				</div>
 			</div>
 		)
 	}
}

Register.propTypes = {
	url: React.PropTypes.string
}


Register.defaultProps = {
	url: process.env.backEnd
}


const mapStateToProps = (state) => {
  	return state.userInfo
}

const mapDispatchToProps = (dispatch) => {
  	return {
    	handleFirstNameChange: (e) => {
      		dispatch(storeUserInfo({ firstName: e.target.value }))
    	},
    	handleLastNameChange: (e) => {
      		dispatch(storeUserInfo({ lastName: e.target.value }))
    	},
    	handleEmailChange: (e) => {
      		dispatch(storeUserInfo({ email: e.target.value }))
    	},
    	handlePasswordChange: (e) => {
      		dispatch(storeUserInfo({ password: e.target.value }))
    	}
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)


