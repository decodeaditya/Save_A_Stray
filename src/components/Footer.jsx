import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {

    const [visible, setVisible] = useState(false)


    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    window.addEventListener("scroll", toggleVisible)


    return (
        <>
            <div>
                <div className="window">
                    <div className="upper">
                        <h2>Join the Mission and Create A Impact! </h2>
                    </div>
                    <div className="btn-container">

                        <Link to="/donate">Contribute </Link>
                    </div>
                </div>
                <footer>
                    <div className="section-footer">
                        <Link to="/" id="logo">
                            <img loading="lazy" src={logo} alt="" />
                        </Link>
                        <p>
                            Together Let's Make This World a Better Place of Living for Each and
                            Every Creation of Almighty. Come forward and Donate!
                        </p>
                    <div style={{display:"flex",marginTop:"10px"}}><Link id='btn' to='/donate'>DONATE NOW &nbsp;<i className='fa fa-heart'/></Link></div>
                    </div>
                    <div className="links section-footer">
                        <h2>Explore</h2>
                        <Link to="/about">

                            <i className="fa fa-users" />
                            About Us
                        </Link>
                        <Link to="/contact">

                            <i className="fa fa-link" />
                            Connect With Us
                        </Link>
                        <Link to="/adopt">

                            <i className="fa fa-paw" />
                            Adopt a Pet
                        </Link>
                        <Link to="/terms-and-conditions">

                            <i className="fa fa-file-contract"/>
                            Terms & Conditions
                        </Link>
                        <Link to="/privacy-policy">

                            <i className="fa fa-user-lock" />
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="links section-footer">
                        <h2>Contacts</h2>
                        <Link to="tel:+91 98996 00421">

                            <i className="fa fa-phone"> </i>+91 98996 00421
                        </Link>
                        <Link to="mailto:contact@saveastray.in">

                            <i className="fa fa-envelope" />
                            contact@saveastray.in
                        </Link>
                        <Link
                            to="https://maps.google.com/maps?ll=28.568271,77.39504&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=2237268816359830924"
                            target="_blank"
                        >

                            <i className="fa fa-map" />
                            SK 27 D Sector 116 Noida, Uttar Pradesh
                        </Link>
                    </div>
                    <div className="section-footer">
                        <h2>
                            Let's Connect</h2>
                        <div className="social">
                            <Link
                                to="https://www.youtube.com/c/saveastraybyviditsharma"
                                target="_blank"
                            >

                                <i className="fab fa-youtube"> </i>
                            </Link>
                            <Link to="https://www.facebook.com/saveastray.noida/" target="_blank">

                                <i className="fab fa-facebook"> </i>
                            </Link>
                            <Link to="https://www.instagram.com/saveastray.noida/" target="_blank">

                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="https://twitter.com/saveastray2" target="_blank">

                                <i className="fab fa-twitter"> </i>
                            </Link>
                        </div>
                    </div>
                </footer>
                <div className="developer">
                    <div></div>
                    <div>  Copyright © {new Date().getFullYear()}&nbsp; - Save a Stray | Managed and created by
                        <Link to="mailto:adityaj02810@gmail.com"> Devcost Tech.</Link></div>
                </div>
            </div>
            <div class="myBtn" style={{ right: visible ? 0 : '-100vw' }} onClick={scrollToTop}><i className='fa fa-arrow-up' /></div>
        </>
    )
}