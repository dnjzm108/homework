import React, { Component } from 'react'
import '../css/Navbar.css'
import { FaFacebook, FaInstagram, FaBeer, FaTwitter, FaBars } from 'react-icons/fa'

class Navbar extends Component {
    state = {
        fleg:false,
        social: [
            {
                id: 1,
                url: 'https://www.twitter.com',
                icon: <FaTwitter />
            }, {
                id: 2,
                url: 'https://www.facebook.com',
                icon: <FaFacebook />
            }, {
                id: 3,
                url: 'https://www.instagram.com',
                icon: <FaInstagram />
            }
        ],
        menu: [
            {
                id: 1,
                url: '/',
                text: 'home'
            },
            {
                id: 2,
                url: '/',
                text: 'about'
            },
            {
                id: 3,
                url: '/',
                text: 'projects'
            }
        ]
    }
   check_change = () =>{
       console.log('aaa');
        this.state.setState({this.state.fleg})
        console.log(this.state.fleg);
   }
    render() {
        return (
            <nav>
                <div className="nav-center">
                    {/* logo */}
                    <div className="nav-header">
                        <h1 className="logo">logo</h1>
                        <div className="icon" onClick={this.check_change}>
                            <span className=""></span>
                            <span className=""></span>
                            <span className=""></span>
                        </div>

                    </div>
                    {/* Navigation */}
                    <div className="links-container">
                        <ul className="links">
                            {
                                this.state.menu.map(item => {
                                    let { id, url, text } = item
                                    return (
                                        <li key={id}><a href={url}>{text}</a></li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <ul className="social-icons">
                        {
                            this.state.social.map(item => {
                                let { id, url, icon } = item
                                return (
                                    <li key={id}>
                                        <a href={url}>{icon}</a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar