import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import WebRTC from '../VideoConsultation/WebRTC.jsx'
import Countdown from '../Utils/Countdown.jsx'


class Profile extends React.Component {
	constructor() {
		super()
		this.state = { view: 'default'}
		this._displayVideo = this._displayVideo.bind(this)
		this._displayWaiting = this._displayWaiting.bind(this)
		this._startChatting = this._startChatting.bind(this)
	}

	componentWillMount() {
		if ( !this.props.email ) { browserHistory.push('Login') }
	}

	_displayVideo() {
		this.setState({ view: 'video' })
	}

	_displayWaiting() {
		this.setState({ view: 'waitingForDoc' })
	}

	_startChatting() {
		alert('Chat is not ready yet!')
	}

	render() {

		const notLoggedView = (
			<div></div>
		)

		if ( !this.props.email ) { return notLoggedView } 

		const defaultView = (
			<div>
				<p>Hello {this.props.firstName} {this.props.lastName}! </p>
				<p>You have subscribed our {this.props.plan} offer </p>

				<br/>
				<button onClick={ this._displayWaiting }> Talk to a doc </button>
				<button onClick={ this._startChatting }> Chat with a doc </button>
			</div>
		)

		const waitingView = (
			<div>
				<h1>Dr Louis Baudoin will see you now!</h1>
				<Countdown triggerAction={ this._displayVideo }/>
			</div>
		)

		const videoView = (
			<div className="container embed-responsive embed-responsive-16by9">
	    		<WebRTC handleNewPeer={ this._displayVideo }/>
			</div>
		)


		switch( this.state.view ) {
			case 'default':
				return defaultView 

			case 'waitingForDoc':
				return waitingView

			case 'video':
				return videoView

			default:
				return notLoggedView
		} 
	}
}

const mapStateToProps = (state) => {
  	return state.userInfo
}

export default connect(mapStateToProps)(Profile)












