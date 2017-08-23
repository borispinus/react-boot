import React from 'react';

export default class Footer extends React.Component {
		render() {
			return (
				<div className="terminalFooter">
					<span><span className = "lineStart">boris@blog</span>:~$</span>
					<span className="cursor" >{ '\u258A' } </span>
				</div>
				)
		}
	}