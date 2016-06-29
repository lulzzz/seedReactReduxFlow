import React from 'react'
import { Row, Col } from './bootstrap.jsx'

export default class HorizontalSplit extends React.Component {

	constructor() {
		super()
	}

  	render() {
		const numSections = this.props.children.length;
		if ( 12 % numSections !== 0 ) { return null }

	    return (
	        <Row className={`horizontal-split horizontal-split-${this.props.padding}`}>
	          	{	
	          		this.props.children.map((child, i) => {
	            		return (
	              			<Col 
	              				size={ COLUMN_CLASSES[numSections] } 
	              				className="horizontal-split-col" 
	              				key={i}>
	                  			{child}
	              			</Col>
	            		)
	          		})
	          	}
	        </Row>
	    )
  	}
}

HorizontalSplit.propTypes = {
	padding: React.PropTypes.oneOf(["sm", "md", "lg"])
}

HorizontalSplit.defaultProps = {
	padding: "sm"
}

let COLUMN_CLASSES = {
	1: ["xs-12"],
	2: ["xs-12", "lg-6"],
	3: ["xs-12", "lg-4"],
	4: ["xs-12", "sm-6", "lg-3"],
	6: ["xs-12", "sm-6", "lg-4"],
	12: ["xs-12", "sm-6", "lg-3"]
}