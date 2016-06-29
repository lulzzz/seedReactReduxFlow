import React from 'react'
import ReactDOM from 'react-dom'

class Home extends React.Component {
	constructor() {
		super()
		this.register.bind(this)
		this.login.bind(this)
	}

	register() {
		console.log('register')
	}

	login() {
		console.log('login')
	}

	render() {
		return (
			<div>
				<p> Home </p>
				<button onClick={this.register}> Register </button>
				<button onClick={this.login}> Profile </button>
    		</div>
		)
	}
}

export default Home;

