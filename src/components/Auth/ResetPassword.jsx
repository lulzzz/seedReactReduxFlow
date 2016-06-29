import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { storeUserInfo } from '../../actions'


class ResetPassword extends React.Component {

	constructor() {
		super()
		this.onResetPasswordSubmit = this.onResetPasswordSubmit.bind(this)
	}

	onResetPasswordSubmit(e) {
		e.preventDefault()

		console.dir(this.props.email)

			fetch(this.props.url + 'resetPassword', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({email:this.props.email}),
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
				alert('An email has been sent to ' + this.props.email)
				browserHistory.push('/login')
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

					<button type="button" className="close pull-left" onClick={ () => { browserHistory.push('/signin') } }>
	  					<i className="glyphicon glyphicon-remove" aria-hidden="true"></i>
					</button>
					<div className="clearfix"></div>

					<h3 className="text-xs-center resetPassword">Reset Password</h3>
					<p 
						className= "text-xs-center resetPassword"> 
						Please enter your email address below and we’ll send you instructions to reset your password 
					</p>
	
					<form onSubmit={ this.onResetPasswordSubmit }>
					  	
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

 						<button type="submit" className="btn btn-block btn-sign-in">SEND</button>
						
	  				</form>

				</div>
			</div>
		)
	}
}

ResetPassword.propTypes = {
	url: React.PropTypes.string
}

ResetPassword.defaultProps = {
	url: process.env.backEnd
}

const mapStateToProps = (state) => {
  	return state.userInfo
}

const mapDispatchToProps = (dispatch) => {
  	return {
    	handleEmailChange: (e) => {
      		dispatch(storeUserInfo({ email: e.target.value }))
    	}
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
