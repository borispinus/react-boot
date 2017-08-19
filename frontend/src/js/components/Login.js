import React from 'react';

export default class Login extends React.Component {

	render() {
		return (
			<form name="f" method="post">
		    	<legend>Please Login</legend>
		    	<label for="username">Username</label>
		    	<input type="text" id="username" name="username"/>
		    	<label for="password">Password</label>
		    	<input type="password" id="password" name="password"/>
		    	<div>
		    		<button type="submit">Log in</button>
		    	</div>
		    </form>
			)
	}
}