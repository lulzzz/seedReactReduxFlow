import React from 'react'

export default class Doctor extends React.Component {

  	render() {
		return (
	  		<div>
	  			<div className="profile">
	  				<img alt="Photo" src={this.props.photo} className="photo"/>
	  			</div>
	  			<div className="doctor-title"> 
	  				<h4>{this.props.name}</h4>
	  			</div>
				<p className="quote">{ this.props.quote }</p>
	  		</div>
		)
  	}
}



Doctor.propTypes = {
	quote: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	photo: React.PropTypes.string.isRequired
};