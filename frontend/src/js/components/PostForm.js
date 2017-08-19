import React from 'react';
import BasicHtmlEditor from '../../lib/BasicHtmlEditor';


export default class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.rawHtml = "";
    this.onChange = html => this.rawHtml = html;
  }

  createHelper(){
    var f = new FormData(document.getElementById("newPost"));
    this.props.createPost(f.get("title"), this.rawHtml , new Date());
    this.props.router.push('/');
  }



	render() {
    return (
      <div>
      <form id = "newPost">
        <input name = "title"></input>
      </form>

      <BasicHtmlEditor
        onChange={ this.onChange }
        debounce={ 500 }
      />

      <button type="button" onClick = {this.createHelper.bind(this)}>Create</button>
      </div>
      );
  }
}