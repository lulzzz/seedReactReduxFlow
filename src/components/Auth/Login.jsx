import React from 'react'
import facebookConnect from './FacebookConnect.jsx'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { storeUserInfo } from '../../actions'

export default class Login extends React.Component {

	constructor() {
		super()
	}

	render() {
		
		return (

			<div className="back text-xs-center">
				<div className="card card-block login">

					{/* Back */}
					<button type="button" className="close pull-left" onClick={() => {browserHistory.push('/')}}>
		  				<i className="glyphicon glyphicon-remove" aria-hidden="true"></i>
					</button>
					<div className="clearfix"></div>

					<img alt="karma-logo" src="assets/img/Heart.svg" className="col-centered"/>
					<h4 className="card-title">Karma</h4>
					<h6 className="card-subtitle text-muted">Your doctor at your fingertips</h6>
					
					{/* Sign-in */}
					<button className="btn btn-block btn-sign-in" onClick={() => {browserHistory.push('/signin')}}>SIGN IN</button>

					{/* Register */}
					<button className="btn btn-block btn-sign-up" onClick={() => {browserHistory.push('/register')}}>CREATE ACCOUNT</button>

					<p className="text-muted">or</p>

					{/* FB Connect */}
					<button className="btn btn-block btn-fb" onClick={this.props.onFBConnect}>
						FACEBOOK CONNECT
					</button>
					<div id="status"/>

					<p className="text-muted text-small">We will never share your data without your permission</p>
					<p className="text-muted text-small">I accept the <a>Terms & Conditions</a></p>
				</div>
			</div>
		)
	}
}

Login.propTypes = {
	url: React.PropTypes.string
}

Login.defaultProps = {
	url: process.env.backEnd
}

