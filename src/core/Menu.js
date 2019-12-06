import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {signout, isAuthenticated} from '../auth'
import '../styles.scss'

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {color: '#ff9900'}
    }else {
        return { color: '#8b8b9f'}
    }
    }



const Menu = ({history}) => (
    
    <header id="top_header" className="clearfix">
        <div className="wrapper">
            <h1 className="logo">Whack<span>T</span>icket</h1>
            <nav id="main_nav">
                <Link className="nav-link" style={isActive(history, "/")} to="/">Home</Link>
            </nav>
            {!isAuthenticated() && ( 
            <Fragment>
            <nav id="main_nav">
                <Link className="nav-link" style={isActive(history, "/signin")} to="/signin">Signin</Link>
            </nav>
            <nav id="main_nav">
                <Link className="nav-link" style={isActive(history, "/signup")} to="/signup">Signup</Link>
            </nav>
            </Fragment>
            )}
            {isAuthenticated() && ( 
            <nav id="main_nav">
                <span 
                    className="nav-link" 
                    style={{cursor: 'pointer', color: '#ffffff'}}
                    onClick={() => 
                        signout(() =>{
                            history.push("/")
                        }
                    )}
                    >signout
                </span>   
            </nav>
             )}
        </div>
    </header>
   
)

export default withRouter(Menu)