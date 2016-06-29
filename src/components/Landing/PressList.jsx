import React from "react"
import classNames from "classnames"

export default class ImageList extends React.Component {

  	render() {
		const _className = classNames("image-list list-inline", { centered: this.props.centered });
		return (
			<section className="press">
		  		<ul className={_className}>
					{this.props.children}
		  		</ul>
	  		</section>
		)
  	}
}

ImageList.propTypes = {
	centered: React.PropTypes.bool.isRequired,
}

ImageList.defaultProps = {
	centered: true,
}


