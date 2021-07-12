import React, { Component } from 'react'
import Test from './component/Test'
import LoginBox from './component/LoginBox'
import UserContext from './Store/User'

class App extends Component {
    state = {
        loginTxt : 'login',
        user:{
            userid:'web7722',
            name:'jin',
            job:'developer'
        }
    }

    render() {
        return (
            <>
            <UserContext.Provider value={this.state.user}>
                <LoginBox 
                v={this.state.loginTxt}/>
                
                </UserContext.Provider>
            </>
        )
    }
}

export default App