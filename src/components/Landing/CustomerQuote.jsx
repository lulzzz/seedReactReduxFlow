import React from 'react'


export default class CustomerQuote extends React.Component {

  	render() {
  		let rating = [];
		for ( let i = 0 ; i < this.props.rating ; i++ ) {
			rating.push(<img alt="rating" src="assets/img/icons/Star.svg" key={i} className="star"/>);
		}

		return (
	  		<div>
	  			<div className="profile">
	  				<img alt="Photo" src={this.props.photo} className="photo"/>
	  				<h4>{this.props.name}, {this.props.city}</h4>
	  				<ul> { rating } </ul>
	  			</div>
				<p className="quote">{ this.props.quote }</p>
	  		</div>
		)
  	}
}



CustomerQuote.propTypes = {
	quote: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	city: React.PropTypes.string.isRequired,
	photo: React.PropTypes.string.isRequired,
	rating: React.PropTypes.number.isRequired
};
