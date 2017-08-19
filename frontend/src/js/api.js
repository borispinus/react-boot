import axios from "axios"


export default class api {
	static createPost(title, text, date){
		return axios.post("api/post", {title, text, date }).catch(function (error) {
    		window.location.href = '/login';
  		});
	}

	static deletePost(id){
		return axios.delete(`/api/post/${id}`).catch(function (error) {
    		window.location.href = '/login';
  		});
	}

	static fetchPosts(){
		return axios.get("/api/posts");
	}

}