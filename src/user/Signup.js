import React, {useState} from "react"
import Layout from '../core/Layout'


const Signup = () => {
    const [values, setValues] = useState ({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }


    const signUpForm = () => (
        <form className="box">
            <h1>Signup</h1> 
            <input onChange={handleChange('name')} type="text" className="" placeholder="Name"/>
            <input onChange={handleChange('email')} type="email" className="" placeholder="Email"/>
            <input onChange={handleChange('password')} type="password" className="" placeholder="password"/>    
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
            {JSON.stringify(values)}

    </Layout>
    )
}

export default Signup