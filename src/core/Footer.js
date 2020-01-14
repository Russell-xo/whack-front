import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {signout, isAuthenticated} from '../auth'
import '../footer.scss'

const Footer = () => (

  <section id="newsletter">
     <div className="newsletter_inner">
         <h2>What are you doing today? Improve the way you make plans. 
             Subscribe us for latest events</h2>
         {/* <div className="subscribe_form">
             <input placeholder="Enter your name" className="form-control" type="text"/>
             <input placeholder="Enter your email" className="form-control" type="email"/>
         <button className="button">Subscribe</button>
         </div> */}
         <div className="subscribe">
             
             <input  type="text" className="" placeholder="Enter your name" />
             <input   type="email" className="" placeholder="Enter your email" />                         
             <button className="button">Subscribe</button>
         </div>
     </div>
     <footer id="main_footer">
     {/* <p className="logo">Whack<span>T</span>icket</p> */}
     <p className="copyright">&copy;2019 Whack. All Rights Reserved</p>
     <div className="links">
         <a href="#">Terms of Service</a>
         <a href="#">Privacy</a>
     </div>
 </footer>
 </section>

 

    


    // <div className="footer">
    //     <div className="container text-center">
    //         <h3>Subscribe us for latest events</h3>
    //         <form className="mc-trial row">
    //             <div className="form-group col-md col-md-offset-2 col-sm-4">
    //                 <div className="controls">
    //                     <input name="name" placeholder="Enter your name" className="form-control" type="text"></input>
    //                 </div>
    //             </div>
    //             <div className="form-group col-md-3 col-sm-4">
    //                 <div className="controls">
    //                     <input name="name" placeholder="Enter your email" className="form-control" type="text"></input>
    //                 </div>
    //             </div>
    //             <div className="col-md-2 col-sn-4">
    //                 <p>
    //                     <button name="submit" type="submit" className="btn btn-block btn-submit"><i className="fa fa-arrow-right"></i></button>
    //                 </p>
    //             </div>
    //         </form>
    //         <ul className="socials">
    //         <li> <a href="#"><i className="fab fa-facebook"></i></a></li>
    //         <li><a href="#"><i className="fab fa-instagram"></i></a></li>
    //         <li><a href="#"><i className="fab fa-twitter"></i></a></li>
    //         <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
    //         </ul>

    //         <div className="footer-bottom">
    //              &copy; whack.com | designed by russell
    //              </div>
    //         {/* @2019 website Name.All Rights Reserved
    //         <div className="credits">
    //             Designed by <a href="#">Whack</a>
    //         </div> */}
    //     </div>
    // </div>







    // <div className="footer">
    //             <div className="footer-content">
    //                 <div className="footer-section about">
    //                     <p>What are you doing today? Improve the way you make plans. Don’t know where to head this weekend? No problem. Fever delivers a curated list of the most exciting events, things to do and to see in your city, tailored just for you. 
    //                         It’s time to discover a new side to your city, right in the palm of your hand.</p>
    //                 <div className="contact">
    //                     <span><i className="fas fa-phone"></i> &nbsp; 000-333-333</span>
    //                     <span><i className="fas fa-phone"></i> &nbsp; info@whack.com</span>
    //                 </div>
    //                 <div className="socials">
    //                     <a href="#"><i class="fab fa-facebook"></i></a>
    //                     <a href="#"><i class="fab fa-instagram"></i></a>
    //                     <a href="#"><i class="fab fa-twitter"></i></a>
    //                     <a href="#"><i class="fab fa-linkedin"></i></a>
    //                 </div>
    //                 </div>

    //                 <div className="footer-section links">
    //                 <h1>Quick links</h1>
    //                 <br/>
    //                 <ul>
    //                     <a href="#"><li>Events</li></a>
    //                     <a href="#"><li>Team</li></a>
    //                     <a href="#"><li>socials</li></a>
    //                     <a href="#"><li>ramdom</li></a>
    //                     <a href="#"><li>Terms and Conditions</li></a>
    //                 </ul>
    //                 </div>
                    
    //                 <div className="footer-section contact-form">
    //                     <h1>Contact us</h1>
    //                     <br/>
    //                     <form action="index.html" method="post">
    //                         <input type="email" name="email" class="text-input contact-input" placeholder="your email address"/>
    //                         <textarea name="message" class="text-input contact-input" placeholder="your message..."></textarea>
    //                         <button type="submit" class="sbtn sbtn-big">
    //                             <i class="fas fa-envelope"></i>
    //                             Send
    //                         </button>
    //                     </form>
    //                 </div>
    //             </div>

    //             <div className="footer-bottom">
    //                 &copy; whack.com | designed by russell
    //             </div>

    //         </div>
)
export default Footer