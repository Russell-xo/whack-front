import React from "react"
import {Link, withRouter} from 'react-router-dom'
import '../styles.scss'


const Menu = () => (
    
    <header id="top_header" className="clearfix">
        <div className="wrapper">
            <h1 className="logo">Whack<span>T</span>icket</h1>
            <nav id="main_nav">
                <Link to="/">Home</Link>
                <Link to="/signin">Signin</Link>
                <Link to="/signup">Signup</Link>
                
            </nav>
            {/* <nav className="nav-item">
                <Link className="nav-link" to="/signin">Signin</Link>
            </nav>
            <nav className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
            </nav> */}
        </div>
    </header>
   
)

export default withRouter(Menu)