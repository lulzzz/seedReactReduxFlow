import React from "react"
import { Container, Row, Col } from "../Utils/bootstrap.jsx"

export default class Footer extends React.Component {

  	render() {
		return (
	  		<footer className="navbar">
	  			<div className="container-fluid">
	  				<img alt="Apple Store" src="assets/img/icons/AppStore.svg" className="left"/>
					<img alt="Play Store" src="assets/img/icons/PlayStore.svg" className="right"/>
				</div>
				
		  		<div className="row">
		  			<div className="span6 icons-div"> 
		  				{ renderSocialIcons(this.props) }
		  			</div>
		  		</div>
		  			
				<p> © {new Date().getFullYear()}, {this.props.brandName} </p>
	 		</footer>
		)
  	}
}

Footer.propTypes = {
	brandName: React.PropTypes.node.isRequired,
	facebookUrl: React.PropTypes.string,
	twitterUrl: React.PropTypes.string,
	githubUrl: React.PropTypes.string,
	email: React.PropTypes.node,
	address: React.PropTypes.node
}


function renderSocialIcons(props) {
	return (
	  	<ul className="nav navbar-nav pull-right social-icon">
	  		{/* renderSocialIcon("fa-envelope-o", props.email) */}
	  		{ renderSocialIcon("fa-linkedin-square", props.linkedinUrl) }
			{ renderSocialIcon("fa-twitter", props.twitterUrl) }
			{ renderSocialIcon("fa-facebook", props.facebookUrl) }
			{ renderSocialIcon("fa-google-plus", props.googlePlusUrl) }
			{ renderSocialIcon("fa-github", props.githubUrl) }
	  	</ul>
	)
}


function renderSocialIcon(iconClass, url) {
	if (!url || !iconClass) { return null; }
	return (
	 	<li className={`nav-item ${iconClass.replace("fa-", "")}-icon`}>
			<a href={url} target="_blank">
			  	<span className="fa-stack">
					<i className="fa fa-circle fa-stack-2x"></i>
					<i className={`fa ${iconClass} fa-stack-1x fa-inverse`}></i>
			  	</span>
			</a>
	  	</li>
	)
}

/*
function mailContact(icon, email) {
	if (!icon || !email) { return null; }
	return (
			 	<li className={`nav-item ${iconClass.replace("fa-", "")}-icon`}>
			<a href={url} target="_blank">
			  	<span className="fa-stack">
					<i className="fa fa-circle fa-stack-2x"></i>
					<i className={`fa ${iconClass} fa-stack-1x fa-inverse`}></i>
			  	</span>
			</a>
	  	</li>
	)
}
*/
