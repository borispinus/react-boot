import React from 'react';
import { connect } from 'react-redux';

import api from "../api"

export default class Post extends React.Component {
  deleteHelper() {
    this.props.deletePost(this.props.post.id);
  }
	render() {
		return (
      <div>
      <h3>{this.props.post.id}</h3>
      <h3>{this.props.post.title}</h3>
      <p>{this.props.post.text}</p>
      <button onClick = {this.deleteHelper.bind(this)} >Delete</button>
    </div>
    );
	}
}