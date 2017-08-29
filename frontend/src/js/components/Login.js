import React from 'react';

export default class Login extends React.Component {

	render() {
		return (
			<form className="loginForm" name="f" method="post">
				<div className="loginLine">
		    		<label  htmlFor ="username">Логин</label>
		    		<input type="text" id="username" name="username"/>
		    	</div>
		    	<div className="loginLine">
		    		<label htmlFor ="password">Пароль</label>
		    		<input type="password" id="password" name="password"/>
		    	</div>
		    	<button type="submit">Войти</button>
		    </form>
			)
	}
}