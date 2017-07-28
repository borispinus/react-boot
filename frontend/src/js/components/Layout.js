import React from 'react';
import { connect } from 'react-redux';

import api from "../api"



import { createPost, deletePost, fetchPosts} from "../actions/actions.js";

@connect((store) => {
  return {
    posts: store.posts.posts
  };
})

export default class Layout extends React.Component {
	createPost(title, text, date) {
    this.props.dispatch((dispatch) => {
    	api.createPost(title, text, date).then( response => {
    			dispatch(createPost(response.data));
    		});
			});
  }
  deletePost(id) {
    this.props.dispatch((dispatch) => {
    	api.deletePost(id).then(() => {
    			dispatch(deletePost(id));
    		});
			});
  }
  fetchPosts() {
    this.props.dispatch((dispatch) => {
    	console.log(api.fetchPosts);
    	api.fetchPosts().then(response => {
    		dispatch(fetchPosts(response.data));
    	});
		});
  }
	render() {
		return <div onClick = {this.fetchPosts.bind(this)}>WOW</div>
	}
}