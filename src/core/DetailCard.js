import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import ShowImage from './ShowImage'
import '../detailCard.scss'


const DetailCard = ({product}) => {
    
    return (
        <div class="container">
            <div class="product-image">
                <ShowImage item={product} url="product"/>
            </div>
            <div class="product-details">
                <header>
                    <h1 class="title">{product.name}</h1>
                    <span class="colorCat">mint green</span>
                <div class="price">
                    <p>£{product.price}</p>
                </div>
                </header>
                <article>
                    <h5>{product.description}</h5>
                </article>
                <div class="controls">
                    <div class="color">
                    <h5>color</h5>
                    <ul>
                        <li><a href="#!" class="colors color-bdot1 active"></a></li>
                        <li><a href="#!" class="colors color-bdot2"></a></li>
                        <li><a href="#!" class="colors color-bdot3"></a></li>
                        <li><a href="#!" class="colors color-bdot4"></a></li>
                        <li><a href="#!" class="colors color-bdot5"></a></li>
                        </ul>

                    </div>
                    <div class="size">
                        <h5>size</h5>
                        <a href="#!" class="option">(UK 8)</a>
                    </div>
                    <div class="qty">
                        <h5>qty</h5>
                        <a href="#!" class="option">(1)</a>
                    </div>
                    <div class="footer">
                    <button type="button">
                        
                    </button>
                    </div>
                </div>
                
            </div>
        </div>  
    )
}
export default DetailCard