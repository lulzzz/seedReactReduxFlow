import React from 'react'
import WebRTC from '../VideoConsultation/WebRTC.jsx'

export default class DoctorConMockUp extends React.Component {
	render() {
		return (
			<div className="container embed-responsive embed-responsive-16by9">
	    		<WebRTC handleNewPeer={ () => {} }/>
			</div>
		)
	}
}