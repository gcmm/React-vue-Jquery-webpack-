import './style/index.css'
import './style/reset.scss'
import './style/common.less'

import $ from 'jquery'

$(function() {
	$('.title').text('更新 jquer').click(function(params) {
		alert('jquery')
	})
})

import Vue from 'vue'
import App from './components/App.vue'

new Vue({ render: (h) => h(App) }).$mount('#app')

//use react
import React from 'react'
import ReactDom from 'react-dom'
import App1 from './components/App1.js'
ReactDom.render(<App1 />, document.getElementById('container'))
