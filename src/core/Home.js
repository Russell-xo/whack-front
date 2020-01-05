import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {getProducts} from './apiCore'
import Card from './Card'
import Search from './Search'
import Menu from "./Menu"
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
            {/* <Search></Search> */}
            <section id="best_sellers" className="clearfix">
                <div className="wrapper">
                    <header className="clearfix">
                        <h2>Best Sellers</h2>
                        <p className="view_more">view all</p>
                    </header>
                </div>
            </section>
            <div className="erow">
            {productsBySell.map((product, i) => (
                <div key={i} className= "post">
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
            {productsByArrival.map((product, i) => (
                <div className= "post">
                <Card key={i} product={product}/>
                </div>
            ))}
            </div>

            <div className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <p>What are you doing today? Improve the way you make plans. Don’t know where to head this weekend? No problem. Fever delivers a curated list of the most exciting events, things to do and to see in your city, tailored just for you. 
                            It’s time to discover a new side to your city, right in the palm of your hand.</p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; 000-333-333</span>
                        <span><i className="fas fa-phone"></i> &nbsp; info@whack.com</span>
                    </div>
                    <div className="socials">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                    </div>

                    <div className="footer-section links">
                    <h2>Quick links</h2>
                    <br/>
                    <ul>
                        <a href="#"><li>Events</li></a>
                        <a href="#"><li>Team</li></a>
                        <a href="#"><li>socials</li></a>
                        <a href="#"><li>Terms and Conditions</li></a>
                    </ul>
                    </div>
                    
                    <div className="footer-section contact-form">
                        <h2>Contact us</h2>
                        <br/>
                        <form action="index.html" method="post">
                            <input type="email" name="email" class="text-input contact-input" placeholder="your email address"/>
                            <textarea name="message" class="text-input contact-input" placeholder="your message..."></textarea>
                            <button type="submit" class="btn btn-big">
                                <i class="fas fa-envelope"></i>
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    &copy; whack.com | designed by russell
                </div>

            </div>
        </div>
    )
}
export default Home