import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
// import ShowImage from './ShowImage'
import '../detailCard.scss'
import ShowImageDetail from './ShowImageDetail'
import {addItem, updateItem, removeItem} from './cartHelpers'


const DetailCard = ({product, showViewProductButton = true, showAddToCartButton = true, cartUpdate = false, showRemoveProductButton = false, setRun = f => f,run = undefined}) => {

    const [redirect, setRedirect] = useState(false)
    const [count, setCount] = useState(product.count)



    const addToCart = () => {
        // console.log('added');
        addItem(product, setRedirect(true));
      };

    const shouldRedirect = redirect => {
        if (redirect) {
          return <Redirect to="/cart" />;
        }
    };
    
    const showAddToCart = (showAddToCartButton) =>{
        return showAddToCartButton && (
            <button onClick={addToCart}className="btn btn-outline-warning mt-2 mb-2">
                        Add to card
                    </button>
        )
    }

    const showRemoveButton = showRemoveProductButton => {
        return (
          showRemoveProductButton && (
            <button
              onClick={() => {
                removeItem(product._id);
                setRun(!run); // run useEffect in parent Cart
              }}
              className="btn btn-outline-danger mt-2 mb-2"
            >
              Remove Product
            </button>
          )
        );
      };

    const handleChange = productId => event => {
        setRun(!run); // run useEffect in parent Cart
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
          updateItem(productId, event.target.value);
        }
      }

    const showCartUpdateOptions = cartUpdate => {
        return cartUpdate && <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Adjust Quantity

                    </span>
                </div>
                <input type="number" className="form-control" value={count} onChange={handleChange(product._id)}/>
            </div>
        </div>
    }
    
    return (
        <div class="container">
            <div class="product-image">
                <ShowImageDetail item={product} url="product"/>
            </div>
            <div class="product-details">
            {shouldRedirect(redirect)}
                <header>
                    <h1 class="title">{product.name}</h1>
                    <span class="colorCat">{product.clubname}</span>
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

                {showAddToCart(showAddToCartButton)}
                {showRemoveButton(showRemoveProductButton)}
                {showCartUpdateOptions(cartUpdate)}
                
            </div>
        </div>  
    )
}
export default DetailCard