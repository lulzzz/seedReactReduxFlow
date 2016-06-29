import React from 'react'
import ReactDOM from 'react-dom'
import SimpleWebRTC from 'simplewebrtc'
import classNames from 'classnames'

export default class WebRTC extends React.Component {

  	constructor(props) {
		super(props)

		this.state = {
			audio: true,
			video: true
		}

		this.addVideo = this.addVideo.bind(this)
		this.removeVideo = this.removeVideo.bind(this)
		this.readyToCall = this.readyToCall.bind(this)
		this.handleMute = this.handleMute.bind(this)
		this.handleVideoChange = this.handleVideoChange.bind(this)
		this.hangUp = this.hangUp.bind(this)
  	}
 
  	componentDidMount() {

  		this.webrtc = new SimpleWebRTC({
			localVideoEl: 'localVideo',
			autoRequestMedia: true,
			localVideo: {
				autoplay: false, // automatically play the video stream on the page
    			mirror: true, // flip the local video to mirror mode (for UX)
    			muted: true // mute local video stream to prevent echo
			},
			media: {
				video: true, 
				audio: true 
			},
			remoteVideosEl: '',
			url: this.props.signalServer,
			nick: this.props.nick
		})

		this.webrtc.on('videoAdded', this.addVideo)
		this.webrtc.on('videoRemoved', this.removeVideo)
		this.webrtc.on('readyToCall', this.readyToCall)
  	}

  	readyToCall() {
   		return this.webrtc.joinRoom(this.props.room);
  	}


  	addVideo(video, peer) {
		console.log('video added for: ', peer.nick)
		console.dir(peer)

		this.props.handleNewPeer()
	
		let remotes = ReactDOM.findDOMNode(this.refs.remotes);
	
		if ( remotes ) {
	  		let container = document.createElement('div')
	  		container.className = 'videoContainer embed-responsive-item'
	  		container.id = 'container_' + this.webrtc.getDomId(peer)
	  		container.appendChild(video)
	  
	  		// suppress contextmenu
	  		video.oncontextmenu = function() { return false }

	  		// connection status
	  		if (peer && peer.pc) {
	        	let connstate = document.createElement('div');
	        	connstate.className = 'connectionstate';
	        	container.appendChild(connstate);
	        	
	        	peer.pc.on('iceConnectionStateChange', function (event) {
	            	switch (peer.pc.iceConnectionState) {
	            		case 'checking':
	                		connstate.innerText = 'Connecting to peer...';
	                		break;
	            		case 'connected':
	            		case 'completed': // on caller side
	                		connstate.innerText = 'Connection established.';
	                		break;
	            		case 'disconnected':
	                		connstate.innerText = 'Disconnected.';
	                		break;
	            		case 'failed':
	                		break;
	            		case 'closed':
	                		connstate.innerText = 'Connection closed.';
	                		break;
	            	}
	        	});
    		}

	  		remotes.appendChild(container)
		}
  	}

  	removeVideo(video, peer) {
		console.log('video removed ', peer);
		
		let remotes = ReactDOM.findDOMNode(this.refs.remotes);
		let el = document.getElementById(peer ? 'container_' + this.webrtc.getDomId(peer) : 'localScreenContainer');
		if (remotes && el) { remotes.removeChild(el) }
  	}

  	handleMute() {
  		this.setState({ audio: !this.state.audio })
  		if ( this.state.audio ) {
  			this.webrtc.mute()
  		} else {
  			this.webrtc.unmute()
  		}
  	}

  	handleVideoChange() {
  		this.setState({ video: !this.state.video }) 	

  		if ( this.state.video ) {
  			this.webrtc.pauseVideo()
  		} else {
  			this.webrtc.resumeVideo()
  		}
  	}

  	hangUp() {
  		this.webrtc.disconnect()
  		this.setState({ disconnected: true })
  	}

  	render() {

  		if ( this.state.disconnected ) {
  			return <div></div>
  		}

  		let muteClass = classNames({ 'hidden': !this.state.audio });
  		let unMuteClass = classNames({ 'hidden': this.state.audio });

    	let removeVideo = classNames({ 'hidden': !this.state.video });
    	let addVideo = classNames({ 'hidden': this.state.video });


		return (
			<div className="container"> 
				<div className="webrtc">

			  		<div 
			  			id="remoteVideos"
			  			ref="remotes"> 	
			  		</div> 
			  		
			  		<video
		  				className="local embed-responsive-item"
		  				id="localVideo"
		  				width="20%"
		  				height="auto">
		  			</video>
		  		
	  			</div>

			  	<div className="videoControls">
			  		<ul>
			  			<li className={muteClass}><button onClick={this.handleMute}>
			  				<img alt="mute" src="assets/img/callActions/Mute.svg"/>
			  			</button></li>
			  			<li className={unMuteClass}><a onClick={this.handleMute}>
			  				<img alt="unmute" src="assets/img/callActions/UnMute.svg"/>
			  			</a></li>

			  			<li className={removeVideo}><a onClick={this.handleVideoChange}>
			  				<img alt="videoOff" src="assets/img/callActions/CamOff.svg"/>
			  			</a></li>
			  			<li className={addVideo}><a onClick={this.handleVideoChange}>
			  				<img alt="videoOn" src="assets/img/callActions/CamOn.svg"/>
			  			</a></li>

			  			<li><a onClick={this.hangUp}>
			  				<img alt="HangUp" src="assets/img/callActions/CallHangUp.png"/>
			  			</a></li>

			  		</ul>
		  		</div>
	  		</div>
		)
  	}
}


WebRTC.propTypes = {
	signalServer: React.PropTypes.string,
	room: React.PropTypes.string,
	room: React.PropTypes.nick,
	handleNewPeer: React.PropTypes.func.isRequired
}

WebRTC.defaultProps = {
	signalServer: process.env.signalServer,
	room: 'test',
	nick: 'guest'
}





