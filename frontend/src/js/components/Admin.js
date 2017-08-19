import React from 'react';

export default class Admin extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		console.log(this);
		return (
			<div>
			{ React.cloneElement(this.props.children, { createPost: this.props.createPost.bind(this) }) }
			</div>
			)
	}
}