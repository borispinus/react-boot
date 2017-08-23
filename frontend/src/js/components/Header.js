import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			finished: false,
			lines:[
			{text: "info", currentText: "", isPresent: true },
			{text: "ls -l", currentText: "", isPresent: false },
			]};
		}

		type(i) {
			var lines= this.state.lines;
			const text = lines[i].text;
			const currentText = lines[i].currentText;
			lines[i].isPresent = true;
			if(currentText.length < text.length) {
				var newText;
				if (currentText.length){
					newText = currentText + text[currentText.length];
				} else {
					newText = text[0];
				}
				lines[i].currentText = newText;
				this.setState({lines});
				setTimeout(this.type.bind(this, i), 200);
			} else if (lines.length > i + 1) {
				this.setState({lines});
				this.type(i+1);
			} else {
				this.setState({
					finished: true
				});
				this.props.onHeaderLoad();
			}

		}	

		componentDidMount(){
			this.type(0);
		}

		render() {
			const lineStart = <span><span className = "lineStart">boris@blog</span>:~$</span>;
			var br = ["", ""];
			var lines = [lineStart , ""];
			var results = ["", ""];
			var cursor = <span className="cursor" >{ '\u258A' } </span>;


			if (this.state.lines[1].isPresent){
				lines[1] =  lineStart
				br[0] = <br/>;
				results[0] = <span><span className = "name">Boris Pinus</span>, developer. More info on <a href="http://borispinus.github.io/">borispinus.github.io/</a></span>;
				br[1] = <br/>;
			}


			if (this.state.finished){
				cursor = "";
			}

			return (
				<div className ="terminalHeader">
					{ lines[0] }
					{ this.state.lines[0].currentText }
					{ br[0] }
					{ results[0] }
					{ br[1] }
					{ lines[1] }
					{ this.state.lines[1].currentText }
					{ cursor }
				</div>
				)
		}
	}