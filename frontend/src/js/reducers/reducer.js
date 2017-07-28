import { combineReducers} from "redux"

const posts = function(state = {posts: []}, action){
	switch (action.type){
		case 'CREATE_POST':
			return { ...state, posts:state.posts.concat(action.post)};
		case 'DELETE_POST':
			return { ...state, posts:state.posts.filter(post => action.post.id != id )};
		case 'FETCH_POSTS':
			return { ...state, posts: action.posts};
		default:
			return state;
	}
};

export default combineReducers({
  posts
});