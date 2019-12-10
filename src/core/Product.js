import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {read, listRelated} from './apiCore'
import Card from './Card'


const Product = () => {
    return (
        <Layout 
            title="Home Page"
            description="events discovery app"
            className="container-fluid"
        >
            <p>Product Page</p>
        </Layout>

    )
}

export default Product