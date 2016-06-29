import React from 'react'

export default class Countdown extends React.Component {

	constructor() {
		super()
		this.state = { secondsRemaining: 0 }
		this.tick = this.tick.bind(this)
	}

  	tick() {
    	this.setState({ secondsRemaining: this.state.secondsRemaining - 1 })
    	if (this.state.secondsRemaining <= 0) {
      		clearInterval(this.interval)
      		this.props.triggerAction()
    	}
  	}

  	componentDidMount() {
  		console.log('bma')
  		console.log(this.props.secondsRemaining)
    	this.setState({ secondsRemaining: this.props.secondsRemaining });
    	this.interval = setInterval(this.tick, 1000)
  	}

  	componentWillUnmount() {
    	clearInterval(this.interval)
  	}

  	render() {
    	return (
      		<div>Seconds Remaining: {this.state.secondsRemaining}</div>
    	)
  	}
}

Countdown.propTypes = {
	secondsRemaining: React.PropTypes.number,
	triggerAction: React.PropTypes.func.isRequired
}

Countdown.defaultProps = {
	secondsRemaining: 10
}
