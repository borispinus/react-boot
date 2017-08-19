import React from 'react';
import { connect } from 'react-redux';

import api from "../api";



import { createPost, deletePost, fetchPosts} from "../actions/actions.js";
import Post from "./Post"
import PostForm from "./PostForm"

@connect((store) => {
  return {
    posts: store.posts.posts
  };
})

export default class Layout extends React.Component {

	createPost(title, text, date) {
    this.props.dispatch((dispatch) => {
    	api.createPost(title, text, date).then( response => {
    			this.fetchPosts();
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
    	api.fetchPosts().then(response => {
    		dispatch(fetchPosts(response.data));
    	});
		});
  }

	render() {
		return (
      <div>
      { React.cloneElement(this.props.children, { posts: this.props.posts, deletePost: this.deletePost.bind(this),
        createPost: this.createPost.bind(this), fetchPosts: this.fetchPosts.bind(this)}) }
      </div>
    );
	}
}