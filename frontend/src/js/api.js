import axios from "axios"


export default class api {
	static createPost(title, text, date){
		return axios.post("/post", {title, text, date});
	}

	static deletePost(id){
		return axios.delete(`/post/${id}`);
	}

	static fetchPosts(){
		console.log("/posts");
		return axios.get("/posts");
	}

}