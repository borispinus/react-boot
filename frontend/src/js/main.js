import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Layout from "./components/Layout";
import Index from "./components/Index";
import Admin from "./components/Admin";
import PostForm from "./components/PostForm";
import Login from './components/Login'
import Post from './components/Post'
import store from "./store";

require ("../css/main.sass");
require ("../css/rich-text-editor.css");

const app = document.getElementById('app');
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(<Provider store = {store} >
	<Router history={history}>
      <Route path="/" component={Layout}>
      	<IndexRoute component={Index}/>
      	<Route path="/post/:id"component={Post}/>
        <Route path='/admin' component={Admin}>
        	<IndexRoute component={PostForm}/>
        </Route>
        <Route path='/login' component={Login}/>
      </Route>
    </Router>
	</Provider> , app);