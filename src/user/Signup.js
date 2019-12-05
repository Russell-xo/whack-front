import React from "react"
import Layout from '../core/Layout'
import {API} from "../config"


const Signup = () => {
    const signUpForm = () => (
        <form className="box">
            <h1>Signup</h1> 
            <input type="text" className="" placeholder="Name"/>
            <input type="email" className="" placeholder="Email"/>
            <input type="password" className="" placeholder="password"/>    
            <input type="submit" className="" value="Register"/>         
            {/* <button className="btn btn-primary">Signup</button> */}
        </form>
    )
    return(
        <Layout 
            title="SignUp"
            description="testing"
            // className="container col-md-8 offset-md-2"
            >
            {signUpForm()}

    </Layout>
    )
}

export default Signup