import React from 'react';

export default class Admin extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="adminContainer">
			<div className="adminHeader">Новый пост</div>
			{ React.cloneElement(this.props.children, { createPost: this.props.createPost.bind(this) }) }
			</div>
			)
	}
}