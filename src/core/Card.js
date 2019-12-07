import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import ShowImage from './ShowImage'
import '../styles.scss'
// import moment from 'moment'
// import {addItem, updateItem, removeItem} from './cardHelpers'

const Card = ({product}) => {
    return (
        <div className= "col-2 mb-4">
            <div className="row">
                <div className="post">
                <ShowImage item={product} url="product"/>
                <div className="specifice">
                <div className="title">{product.name}</div>
                    {/* <p>{product.description}</p> */}
                    <p>£{product.price}</p>
                </div>
                    <Link to="/">
                    <button className="btn btn-outline-primary mt-2 mb-2">
                        View
                    </button>
                    
                    </Link>
                </div>
            </div>
         </div>
    )
}
export default Card