import React from 'react';

export default class Post extends React.Component {
  deleteHelper() {
    this.props.deletePost(this.props.post.id);
  }
	render() {
    let dltBtn = "";
    if (this.props.logged) {
      dltBtn = <button onClick = {this.deleteHelper.bind(this)} >Delete</button>;
    }
		return (
      <div>
      <h3>{this.props.post.id}</h3>
      <h3>{this.props.post.title}</h3>
      <div dangerouslySetInnerHTML={{__html: this.props.post.text}} />
      { dltBtn }
    </div>
    );
	}
}