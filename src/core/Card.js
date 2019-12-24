import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import ShowImage from './ShowImage'
import '../cardCss.scss'
// import moment from 'moment'
// import {addItem, updateItem, removeItem} from './cardHelpers'

const Card = ({product}) => {
    return (

            <section className="eventcards">
                <div className="eventcard">
                <ShowImage item={product} url="product"/>
                </div>
                <div className="card_content">
                    <p class="card_title text--medium">
                        {product.name}
                    </p>
                    <div className="card_info">
                        <p className="text--medium">location</p>
                        <p className="card_price text--medium">£{product.price}</p>
                    </div>
                </div>
            </section>

            // <div>
            //     <Link to={`/product/${product._id}`}>
            //     <ShowImage item={product} url="product"/>
            //     </Link>
            //     <div className="specifice">
            //     <div className="title">{product.name}</div>
            //         {/* <p>{product.description}</p> */}
            //         <p>£{product.price}</p>
            //         {/* <Link to={`/product/${product._id}`}>
            //         <button className="btn-one">
            //             Tickets
            //         </button>
            //         </Link> */}
            //     </div>
            // </div>
            
        //  </div>
    )
}
export default Card