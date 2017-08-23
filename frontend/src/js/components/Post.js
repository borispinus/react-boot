import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class Post extends React.Component {
  render() {
    const post  = this.props.posts.filter((post) => post.id == this.props.params.id)[0];
    var postDiv = "";
    if (post){
      postDiv = <div className="post">
            <div className="postTitle">{post.title}</div>
            <div className="postText" dangerouslySetInnerHTML={{__html: post.text}} />
        </div>
      }
      return (
        <div>
        <Link to={"/"}>На главную</Link>
        { postDiv }
        </div>
      );
  }
}