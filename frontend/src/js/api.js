import axios from "axios"


export default class api {
	static createPost(title, text, date){
		return axios.post("http://localhost:8090/api/post", {title, text, date });
	}

	static deletePost(id){
		return axios.delete(`http://localhost:8090/api/post/${id}`);
	}

	static fetchPosts(){
		return axios.get("http://localhost:8090/api/posts");
	}

}