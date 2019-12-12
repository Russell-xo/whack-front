import React, {useState} from 'react'
import { Redirect} from 'react-router-dom'
import Layout from '../core/Layout'
import {signin, authenticate, isAuthenticated} from '../auth'


const Signin = () => {
    const [values, setValues] = useState({
        email: 'coach@gmail.com',
        password: 'London123',
        error: '',
        loading: false,
        redirectToReferrer: false,

    })

    const { email, password, loading, error, redirectToReferrer} = values
    const {user} = isAuthenticated()

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})

    } 


    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: false, loading: true})
        signin({ email, password})
        .then(data => {
            if(data.error){
                setValues({...values, error: data.error, loading: false})
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
        
                    })
                })
            }
            
        })

    }

    const signupForm = () => (
        <form className="box">
            <h1>Signin</h1> 
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

    const showLoading = () => 
        loading && (
            <div className="alert alert-info" >
                <h2>Loading...</h2>
            </div>
        )

    const redirectUser = () => {
        if(redirectToReferrer) {
            if(user && user.role === 1) {
                return <Redirect to= "/admin/dashboard" />
            } else {
                return <Redirect to= "/user/dashboard" />
            }
        }
        if(isAuthenticated()) {
            return <Redirect to= "/" />
        }
    }

    return (
        <Layout 
            title="Sign in"
            description="This is the sign up page"
            // className="container col-md-2 offset-md-5"
        >
            {showLoading()}
            {showError()}
            {signupForm()}
            {redirectUser()}
        </Layout>
    )
}

export default Signin