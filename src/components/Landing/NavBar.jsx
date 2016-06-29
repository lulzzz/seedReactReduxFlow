import React from 'react'

export default class NavBar extends React.Component {
	constructor() {
		super()
	}

	render() {

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
					    <a className="navbar-brand" href="#">
							<img alt="Brand" src="assets/img/Brand.svg"/>
     					</a>
     				</div>

     				<div className="collapse navbar-collapse">
	     				<ul className="nav navbar-nav navbar-right">

	        				<li className="dropdown">
	        					<a 
	        						href="#"
	        						className="dropdown-toggle" 
	          						data-toggle="dropdown" 
	          						role="button" 
	          						aria-haspopup="true" 
	          						aria-expanded="false">
	        						WHAT WE DO
	        					</a>
	        					<ul className="dropdown-menu">
	            					<li><a href="#">WHAT WE TREAT</a></li>
	            					<li><a href="#">OUR DOCTORS</a></li>
	            					<li><a href="#">OUR SPECIALISTS</a></li>
	          					</ul>
	          				</li>

	        				<li className="dropdown">
	          					<a 
	          						href="#" 
	          						className="dropdown-toggle" 
	          						data-toggle="dropdown" 
	          						role="button" 
	          						aria-haspopup="true" 
	          						aria-expanded="false">
	          						SERVICES 
	          					</a>
	          					<ul className="dropdown-menu">
	            					<li><a href="#">PRODUCT</a></li>
	            					<li><a href="#">PRICING</a></li>
	            					<li><a href="#">FAQS</a></li>
	            					<li role="separator" className="divider"></li>
	            					<li><a href="#">YOUR FEEDBACK</a></li>
	          					</ul>
	        				</li>

	        				<li className="dropdown">
	          					<a 
	          						href="#" 
	          						className="dropdown-toggle" 
	          						data-toggle="dropdown" 
	          						role="button" 
	          						aria-haspopup="true" 
	          						aria-expanded="false">
	          						ABOUT US
	          					</a>
	          					<ul className="dropdown-menu">
	            					<li><a href="#">OUR MISSION</a></li>
	            					<li><a href="#">OUR TEAM</a></li>
	            					<li><a href="#">OUR PARTNER</a></li>
	            					<li role="separator" className="divider"></li>
	            					<li><a href="#">CAREERS</a></li>
	            					<li><a href="#">BLOG</a></li>
	          					</ul>
	        				</li>
	        				<li><a href="#" className="border">JOIN</a></li>
	      				</ul>
	      			</div>
				</div>
			</nav>
		)
	}
}


