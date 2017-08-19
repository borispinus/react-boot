import { combineReducers} from "redux";
import { routerReducer } from 'react-router-redux'


const posts = function(state = {posts: []}, action){
	switch (action.type){
		case 'DELETE_POST':
			return { ...state, posts:state.posts.filter(post => action.id != post.id )};
		case 'FETCH_POSTS':
			return { ...state, posts: action.posts};
		default:
			return state;
	}
};

export default combineReducers({
  posts,
  routing: routerReducer
});