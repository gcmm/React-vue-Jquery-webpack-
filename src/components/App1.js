import React, { Component } from 'react'

export default class App1 extends Component {
	render() {
		return <div onClick={this.show.bind(this)}>react</div>
	}
	show() {
		alert('react')
	}
}
