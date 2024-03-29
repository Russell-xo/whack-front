import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import ShowImage from './ShowImage'
import '../styles.scss'
// import moment from 'moment'
// import {addItem, updateItem, removeItem} from './cardHelpers'

const Card = ({product}) => {
    return (
            <div>
                <Link to={`/product/${product._id}`}>
                <ShowImage item={product} url="product"/>
                </Link>
                <div className="specifice">
                <div className="title">{product.name}</div>
                    {/* <p>{product.description}</p> */}
                    <p>{product.clubname}</p>
                    <p className="price">£{product.price}</p>
                    {/* <Link to={`/product/${product._id}`}>
                    <button className="btn-one">
                        Tickets
                    </button>
                    </Link> */}
                </div>
            </div>
            
        //  </div>
    )
}
export default Card