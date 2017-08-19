import React from 'react';
import { Link } from 'react-router';
import axios from "axios";

import Post from "./Post";


export default class Index extends React.Component {
    constructor(props) {
      super(props);
      this.state = {logged: false };
    }
    componentWillMount(){
        this.props.fetchPosts();
        this.checkLogin();
    }

    checkLogin(){
        axios.get("/is_admin").then((response) => {
          this.setState({
            logged: response.data
          });
        });
    }

	render() {
		return (
      <ul>
      { this.props.posts.map((post, i) => 
        <li key = {i}>
          <Post logged = {this.state.logged} post = { post} deletePost= {this.props.deletePost.bind(this) }/>
        </li>)}
      </ul>
    );
	}
}