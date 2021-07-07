import React, { Component } from 'react'
import '../css/Navbar.css'
import { FaFacebook, FaInstagram, FaBeer, FaTwitter, FaBars } from 'react-icons/fa'
import NavToggle from './NavToggle'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = {
        fleg: false,
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
                url: '/about',
                text: 'about'
            },
            {
                id: 3,
                url: '/projects',
                text: 'projects'
            }
        ],
        showLinks: false,
    }
    //showLinks false lincks-conteiner
    check_change = () => {
        console.log('aaa');
        this.setState({ fleg: !this.state.fleg })
        console.log(this.state.fleg);
    }
    showContainer = () => {
        let className = this.state.showLinks ? "links-container on" : "links-container"
        // let className
        // if (this.state.showLinks) {
        //     className = "links-container on"
        // } else {
        //     className = "links-container "
        // }
        return className
    }
    handleToggle = () =>{
        this.setState({showLinks : ! this.state.showLinks})
    }

    render() {
        return (
            <nav>
                <div className="nav-center">
                    {/* logo */}
                    <div className="nav-header">
                        <h1 className="logo">logo</h1>
                        <NavToggle
                        toggle={this.handleToggle}
                        />

                        {/* <div className="icon" onClick={this.check_change}>
                                <span className={this.state.fleg ? 'check' : 'not_chack'}></span>
                                <span className={this.state.fleg ? 'check' : 'not_chack'}></span>
                                <span className={this.state.fleg ? 'check' : 'not_chack'}></span>
                        </div> */}

                    </div>
                    {/* Navigation */}
                    <div className={this.showContainer()}>
                        <ul className="links">
                            {
                                this.state.menu.map(item => {
                                    let { id, url, text } = item
                                    return (
                                        <li key={id}><Link to={url}>{text}</Link></li>
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