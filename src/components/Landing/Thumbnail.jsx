import React from 'react';

export default class Thumbnail extends React.Component {
	
	constructor() {
		super()
		this._onClick = this._onClick.bind(this)
	}

	_onClick(e) {
		e.preventDefault()
	}

	render() {

		return(
			<div className="col-lg-4 col-md-4 col-sm-4 col-xs-6 thumb">
                <img className="img-responsive thumbnail" src={this.props.src} alt=""/>
                <div className="caption text-xs-center">
                    <p>{this.props.text}</p>
        			<button className="btn btn-xsm" role="button" onclick={this._onClick}>
        				{this.props.buttonText}
        			</button> 
      			</div>
      		</div>
	
		)
	}
}


Thumbnail.propTypes = {
	text: React.PropTypes.string.isRequired,
	src: React.PropTypes.string.isRequired,
	buttonText: React.PropTypes.string.isRequired
}


