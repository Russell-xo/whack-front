import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import Layout from './Layout'
import {getCart, removeItem} from './cartHelpers'
import Card from './Card'
import Menu from "./Menu"
import Footer from "./Footer"
import '../detailCard.scss'
import DetailCard from './DetailCard'
import Checkout from './Checkout'




const Cart = () => {
    const [items, setItems] = useState([]);
    // const [cartSize, setCartSize] = useState([]);
    const [run, setRun] = useState(false);
   
    useEffect(() => {
      console.log('MAX DEPTH ...');
      setItems(getCart());
    }, [run]);
   
    const showItems = items => {
        return (
          <div>
            {/* <h2>Your cart has {`${items.length}`} items</h2>
            <hr /> */}
            {items.map((product, i) => (
              <DetailCard
                key={i}
                product={product}
                showAddToCartButton={false}
                cartUpdate={true}
                showRemoveProductButton={true}
                setRun={setRun}
                run={run}
                // changeCartSize={changeCartSize}
              />
            ))}
          </div>
        );
      };

      const noItemsMessage = () => (
        <h2>
          Your Cart is empty. <br />
          <Link to="/shop"> Continue shopping. </Link>
        </h2>
      );
     
      return (
        // <Layout title="Shopping Cart" description="Checkout now!" className="container-fluid">
        <div>
          <Menu/>
          <div id="banner" className="clearfix">
                <div id="banner_content_wrapper">
                    <div id="poster">

                    </div>

                </div>

            </div>
          <div className="row">
            <div className="col-6">{items.length > 0 ? showItems(items) : noItemsMessage()}</div> 
              </div>
              <div className="relatedrow">
              {/* <h2 className="mb-4">Your Cart Summary</h2>
              <hr /> */}
              <Checkout products={items} />
              </div>
          <Footer/>
               
        </div>
          
        // </Layout>
      );
    };

export default Cart