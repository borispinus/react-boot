import React from 'react';
import { connect } from 'react-redux';

import api from "../api"

export default class PostForm extends React.Component {
  createHelper(){
    this.props.createPost();
  }

  createHelper(){
    var f = new FormData(document.getElementById("newPost"));
    this.props.createPost(f.get("title"), f.get("text"), new Date());
  }

	render() {
    return (
      <form id = "newPost">
        <input name = "title"></input>
        <textarea name = "text"></textarea>
        <button type="button" onClick = {this.createHelper.bind(this)}>Create</button>
      </form>
      );
  }
}