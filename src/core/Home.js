import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {getProducts} from './apiCore'
import Card from './Card'
import Search from './Search'
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
        <Layout 
            title="Home Page"
            description="events discovery app"
            className="container-fluid"
        >
            {/* <Search></Search> */}
            <section id="best_sellers" className="clearfix">
                <div className="wrapper">
                    <header className="clearfix">
                        <h2>Best Sellers</h2>
                        <p className="view_more">view all</p>
                    </header>
                </div>
            </section>
            <div className="row">
            {productsBySell.map((product, i) => (
                <div key={i} className= "col-2 mb-2">
                <Card product={product}/>
                </div>
            ))}
            </div>
            <section id="new_arrivals" className="clearfix">
                <div className="wrapper">
                    <header className="clearfix">
                        <h2>new arrivals</h2>
                        <p className="view_more">view all</p>
                    </header>
                </div>
            </section>
            <div className="erow">
            {productsBySell.map((product, i) => (
                <div className= "post">
                <Card key={i} product={product}/>
                </div>
            ))}
            </div>
        </Layout>
    )
}
export default Home