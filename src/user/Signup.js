import React, {useState} from "react"
import Layout from '../core/Layout'
import {Link} from 'react-router-dom'
import {API} from "../config"


const Signup = () => {
    const [values, setValues] = useState ({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const {name, email, password, success, error} = values

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const signup = (user) => {
       return fetch(`${API}/signup`, {
           method: "POST",
           headers: {
               Accept: 'application/json',
               "Content-Type":"application/json"
           },
           body: JSON.stringify(user)
       })
       .then(response => {
           return response.json()
       })
       .catch(err => {
           console.log(err)
       })
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false})
        signup({name, email, password})
        .then(data => {
            if(data.error){
                setValues({...values, error: data.error, success: false})
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true

                })
            }
            
        })

    }


    const signUpForm = () => (
        <form className="box">
            <h1>Signup</h1> 
            <input onChange={handleChange('name')} type="text" className="" placeholder="Name" value={name}/>
            <input onChange={handleChange('email')} type="email" className="" placeholder="Email" value={email}/>
            <input onChange={handleChange('password')} type="password" className="" placeholder="password" value={password}/>    
            <input onClick={clickSubmit} type="submit" className="" value="Register"/>         
            {/* <button className="btn btn-primary">Signup</button> */}
        </form>
    )

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    )
    const showSuccess = () => (
        <div className="alert alert-info" style={{display: success ? '' : 'none'}}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    )
    return(
        <Layout 
            title="SignUp"
            description="testing"
            // className="container col-md-8 offset-md-2"
            >
            {showSuccess()}
            {showError()}
            {signUpForm()}
            

    </Layout>
    )
}

export default Signup