import React from 'react';


export default class Grid extends React.Component {
	render() {
		return(
			<div className="container grid">
                <h1 className="grid-title display-4"> 
                	<span className="green">Get Healhy.</span>
                	<span className="purple">Stay Healhy.</span>
                </h1>
                <div className="row">
                	<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
                	    {this.props.children}
                	</div>
                </div>
			</div>
		)
	}
}

