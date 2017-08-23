import React from 'react';
import { Link } from 'react-router';

export default class Post extends React.Component {
  deleteHelper() {
    this.props.deletePost(this.props.post.id);
  }

  formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    return day + '/' + (month + 1) + '/' + year;
  }

  render() {
    let dltBtn = "";
    if (this.props.logged) {
      dltBtn = <button onClick = {this.deleteHelper.bind(this)} >Delete</button>;
    }
    return (
        <div className = "postContainer">
          <div className="postTitle"><Link to={`/post/${this.props.post.id}`}>{this.props.post.title}</Link> </div>
          <div className="postDate"> { this.formatDate(new Date(this.props.post.date))} </div>
        { dltBtn }
      </div>
      );
  }
}