// const React = require('react')
// const ReactDOM = require('react-dom')
// const LoginBox = require('./loginBox.jsx')
// const {Component} = React
// import  <<javascript version nodejs X
// require << nodejs 처리가 되는 아이 .

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LoginBox from './loginBox'


class App extends Component {
    render() {
        return (
            <>
                <div>hellow 이게 바로 핫로드???</div>
                <LoginBox />
            </>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)