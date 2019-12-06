import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
// import ShowImage from './ShowImage'
// import moment from 'moment'
// import {addItem, updateItem, removeItem} from './cardHelpers'

const Card = ({product}) => {
    return (
        <div className= "col-4 mb-3">
            <div className="card">
                <div className="card-header">{product.name}</div>
                <div className="card-body">
                    <p>{product.description}</p>
                    <p>£{product.price}</p>
                    <Link to="/">
                    <button className="btn btn-outline-primary mt-2 mb-2">
                        View Product
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Card