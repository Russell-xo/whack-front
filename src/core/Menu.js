import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {signout, isAuthenticated} from '../auth'
import '../styles.scss'
import './Hamburger'

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
            <a className="menu"><i className="fa fa-bars"></i></a>
            <nav id="main_nav">
                <Link  style={isActive(history, "/")} to="/">Home</Link>
             
            {isAuthenticated() && isAuthenticated().user.role === 0 &&(
             
                <Link  style={isActive(history, "/user/dashboard")} to="/user/dashboard">Dashboard</Link>
            
            )}
            {isAuthenticated() && isAuthenticated().user.role === 1 &&(
             
                <Link  style={isActive(history, "/admin/dashboard")} to="/admin/dashboard">Dashboard</Link>
             
            )}
            {!isAuthenticated() && ( 
            <Fragment>
             
                <Link style={isActive(history, "/signin")} to="/signin">Signin</Link>
            
             
                <Link  style={isActive(history, "/signup")} to="/signup">Signup</Link>
             
            </Fragment>
            )}
            {isAuthenticated() && ( 
             
                <span 
                    
                    style={{cursor: 'pointer', color: ''}}
                    onClick={() => 
                        signout(() =>{
                            history.push("/")
                        }
                    )}
                    >Signout
                </span>   
             
             )}
             </nav>
        </div>
    </header>
   
)

export default withRouter(Menu)