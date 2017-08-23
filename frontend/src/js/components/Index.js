import React from 'react';
import axios from "axios";

import PostLink from "./PostLink";
import Header from "./Header";
import Footer from "./Footer";

import { connect } from 'react-redux';


export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logged: false, loaded: false };
  }

  componentWillMount(){
    this.checkLogin();
  }

  checkLogin(){
    axios.get("/is_admin").then((response) => {
      this.setState({
        logged: response.data
      });
    });
  }

  onHeaderLoad(){
    this.setState({loaded:true});
  }

  render() {
    var postsAndFooter = " ";
    if (this.state.loaded){
      postsAndFooter = 
      <div>
        <div className = "posts">
        <ul>
          { this.props.posts.map((post, i) => 
            <li key = {i}>
            <PostLink logged = {this.state.logged} post = { post} deletePost= {this.props.deletePost.bind(this) }/>
            </li>)}
        </ul>
        </div>
        <Footer/>
      </div>
    }
    return (
      <div className  = "terminal">
      <Header onHeaderLoad = { this.onHeaderLoad.bind(this)}/>
      { postsAndFooter }
      </div>
      );
  }
}