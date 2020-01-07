import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {signout, isAuthenticated} from '../auth'
import '../styles.scss'

const Footer = () => (
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
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                    </div>

                    <div className="footer-section links">
                    <h1>Quick links</h1>
                    <br/>
                    <ul>
                        <a href="#"><li>Events</li></a>
                        <a href="#"><li>Team</li></a>
                        <a href="#"><li>socials</li></a>
                        <a href="#"><li>ramdom</li></a>
                        <a href="#"><li>Terms and Conditions</li></a>
                    </ul>
                    </div>
                    
                    <div className="footer-section contact-form">
                        <h1>Contact us</h1>
                        <br/>
                        <form action="index.html" method="post">
                            <input type="email" name="email" class="text-input contact-input" placeholder="your email address"/>
                            <textarea name="message" class="text-input contact-input" placeholder="your message..."></textarea>
                            <button type="submit" class="sbtn sbtn-big">
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
)
export default Footer