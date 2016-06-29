import React from "react"

export default class ImageListItem extends React.Component {

  	render() {
		return (
	  		<li className="image-list-item">
				<a href={this.props.url} target="_blank">
		  			<img src={this.props.src} />
				</a>
	  		</li>
		)
  	}
}


ImageListItem.propTypes = {
	src: React.PropTypes.string.isRequired,
	url: React.PropTypes.string
};