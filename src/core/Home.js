import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {getProducts} from './apiCore'
import Card from './Card'
import Search from './Search'
import Menu from "./Menu"
import Footer from "./Footer"
import '../styles.scss'
// import "./carousel.scss"
// import Slider from '../SlideComponent/NetflixSlider/Slider'

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([])
    const [productsByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if(data.error) {
                setError(data.error)
            } else{
                setProductsBySell(data)
            }
        })
    }


    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if(data.error) {
                setError(data.error)
            } else{
                setProductsByArrival(data)
            }
        })
    }

    useEffect(() => {
        loadProductsByArrival()
        loadProductsBySell()

    }, [])

    return(
        <div>
            <Menu />
            <div id="banner" className="clearfix">
                <div id="banner_content_wrapper">
                    <div id="poster">

                    </div>

                </div>

            </div>
            <Search/>
            <section id="best_sellers" className="clearfix">
                <div className="wrapper">
                    <header className="clearfix">
                        <h2>Raves</h2>
                        <p className="view_more"></p>
                    </header>
                </div>
             
            <div className="erow">
            {productsBySell.map((product, i) => (
                <div key={i} className= "post">
                <Card product={product}/>
                </div>
            ))}
            </div>
            </section>
            <section id="new_arrivals" className="clearfix">
                <div className="wrapper">
                    <header className="clearfix">
                        <h2>Late Nights</h2>
                        <p className="view_more"></p>
                    </header>
                </div>
            
            <div className="erow">
            {productsByArrival.map((product, i) => (
                <div className= "post">
                <Card key={i} product={product}/>
                </div>
            ))}
            </div>
            </section>

            <Footer/>
        </div>
    )
}
export default Home