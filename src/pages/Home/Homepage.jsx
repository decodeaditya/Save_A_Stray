import { Helmet } from 'react-helmet'
import icon1 from '../../assets/images/icon-box_05.png'
import icon2 from '../../assets/images/icon-box_06.png'
import icon3 from '../../assets/images/icon-box_07.png'
import icon4 from '../../assets/images/icon-box_08.png'
import hero from '../../assets/images/gallery-16.jfif'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useEffect } from 'react'
import '../../assets/css/style.css'
import et from '../../assets/images/economic times.png'
import pf from '../../assets/images/peepal farm.png'
import incubee from '../../assets/images/incubees.png'
import is from '../../assets/images/incredible.png'
import logical from '../../assets/images/logical-indian.png'
import Slider from 'react-slick'
import paw from '../../assets/images/paw.png'
import cowface from '../../assets/images/cowface.png'
import dogface from '../../assets/images/dogface.png'
import dogfood from '../../assets/images/dogfood.png'
import volunteerIcon from '../../assets/images/volunteerImg.png'
import donateIcon from '../../assets/images/donateIcon.png'


export default function Homepage() {
    const [pets, setPets] = useState([])


    useEffect(() => {
        const getPets = async () => {
            const docSnap = await getDoc(doc(db, "adopt", 'yB810JxrJWZX5EvopsKl'))
            setPets(docSnap.data().pets.slice(0, 2).reverse())
            return docSnap
        }
        getPets()
    }, [])


    const settings = {
        className: "center",
        arrows:false,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        dots: true,
        autoplay: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>Home - Save A Stray, Noida</title>
                <meta name="description" content="Save a Stray is an animal welfare organization located in Noida, Uttar Pradesh that feeds and cares for street animals. Through our efforts, we aim to inspire the community to value the lives of all animals." />
                <meta name="keywords" content="Save A stray, animal shelter, animal welfare centre " />
            </Helmet>

            {/* Hero Section */}
            <section className="hero-section">

                <div className="container">

                    <div className="hero-content">

                        <h1>Helping Others Always <br />Makes You Happy</h1>
                        <p style={{maxWidth:"500px"}}>
                        Animals give us love, but have no voice to demand it from us. This is exactly what makes it so important that we should consciously and passionately stand up for them.
                        </p>
                        <Link id="btn" to="/donate">
                            <h3 style={{ fontWeight: 700, fontSize: 17 }}>DONATE NOW</h3>
                        </Link>
                    </div>
                </div>
            </section>
            {/* End Hero Section */}

            {/* services section */}

            <div className='odds'>
                <div className='info-section features-section container'>
                    <div className='section-details' style={{ margin: "auto" }}>
                        <h2 style={{ fontSize: "28px", textTransform: "capitalize", marginTop: "1rem" }}>serving animals daily</h2>
                        <h1 style={{ fontWeight: 700, color: "#d99c00" }}> > 4000</h1>
                        <h3 style={{ fontWeight: 600, color: "#8e690c", marginBottom: "1rem" }}>& we have a long way ahead</h3>
                        <p style={{ lineHeight: 1.6, marginBottom: "1rem", color: "#616161", }}>Since 2019, our organization has been dedicated to reducing animal suffering and promoting a more animal-sympathetic culture. With your support, we are able to feed over 4000 animals daily and treat them. We sincerely hope that you will continue to support us as we strive to reach even more voiceless creatures in need.</p>
                        <div className='btn-container' style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                            <Link to="/donate" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                                <a>Donate Now</a>
                            </Link>
                        </div>
                    </div>

                    <div className='about-content features'>
                        <div className='features-box' style={{ lineHeight: "1.7" }}>
                            <img src={icon1} />
                            <div>
                                <h3>
                                    Healthy Meals</h3>
                                <p style={{ fontSize: "16px", color: "#616161" }}>It's a daily struggle to arrange food for more than 4000 animals which includes Dogs, Cows and Monkeys every month. Help us by buying food for our Voiceless Buddies.</p>
                            </div>
                        </div>
                        <div className='features-box' style={{ lineHeight: "1.7" }}>
                            <img src={icon2} />
                            <div>
                                <h3>Street Water Bowls</h3>
                                <p style={{ fontSize: "16px", color: "#616161", }}>Every year, many street animals die of thirst and dehydration. Help us Buy Water Bowls So that We Can Quench the thirst of Animals Searching for Water on the Streets.</p>
                            </div>
                        </div>
                        <div className='features-box' style={{ lineHeight: "1.7" }}>
                            <img src={icon3} />
                            <div>
                                <h3>Medical Help</h3>
                                <p style={{ fontSize: "16px", color: "#616161", }}>So many of our voiceless friends suffer on the streets of Noida with some treatable injury or disease. Help us give them essential medical care and Make them Healthy Again.</p>
                            </div>
                        </div>
                        <div className='features-box' style={{ lineHeight: "1.7" }}>
                            <img src={icon4} />
                            <div>
                                <h3>Support</h3>
                                <p style={{ fontSize: "16px", color: "#616161", lineHeight: "1.7" }}>By supporting Save A Stray, you will save the lives of innocent street animals and giving them a second chance at happiness. We Hope You Will Support us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* end service section  */}

            {/* end services */}

            {/* About Section */}
            <section className="about-section info-section">
                <div className="container homepage-about">
                    <div className="about-content" style={{ alignItems: "center" }}>
                        <div className="about-text" style={{ fontSize: "16.7px", lineHeight: "1.8" }}>
                            <div className="section-details" style={{ textAlign: "left", lineHeight: 1, borderLeft: "4px solid #d99c00", marginLeft: 0, padding: "0.5rem" }}>
                                <h2 style={{ fontSize: "28px" }}>About Us</h2>
                                <p style={{ color: "#8b8a8a" }}>Who we are</p>
                            </div>
                            <p>
                                Save A Stray is an
                                Animal welfare Organisation in Noida (Sector 116) and we Do Our Best to Give a better Life to Our Voiceless Friends by Providing Them Food and Medical Care.  <br />We always Try to Create Maximum Impact through Limited Resources and People that we have. Join Us now and let's help more Animals together.
                            </p>
                            <div className="btn-container" style={{ paddingLeft: 0, textAlign: "left" }}>

                                <Link to="/about" >More about Us</Link>
                            </div>
                        </div>
                        <div className="about-image">
                            <div class="video-container">
                                <iframe width="560px" height="315px" src="https://www.youtube.com/embed/EvLbspglkWY" title="Journey of Hope: A Heartwarming Tour of Our Shelter Home for stray dogs in Need" frameborder="0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="statics dark-blue odds">
                    <div class="section-heading">
                        <div class="datas">
                            <div class="data">
                                <img loading="lazy" src={dogface} alt="" />
                                <h1>100+</h1>
                                <h3>Successful Adoptions</h3>
                            </div>
                            <div class="data">
                                <img loading="lazy" src={paw} alt="" />
                                <h1>150+ </h1>
                                <h3>Animals treated</h3>
                            </div>
                            <div class="data">
                                <img loading="lazy" src={dogfood} alt="" />
                                <h1>4000+</h1>
                                <h3>Animals Fed Daily</h3>
                            </div>
                            <div class="data">
                                <img loading="lazy" src={cowface} alt="" />
                                <h1>50+ </h1>
                                <h3>Cows Rescued</h3>
                            </div>
                        </div>

                    </div>
                </div>

                </div>
                {/* Start stats  */}
              
                {/* End Stats  */}
            </section>

            {/* End About Section */}

            {/* Gallery Section */}

            <div className='involved-section'>
                <div className="section-details info-section">
                    <h2 style={{ color: "#f1f1f1" }}>Get Involved </h2>
                    <hr />
                    <div className='getinvolved container'>
                        <div class="donate-involved">
                            <img loading="lazy" src={donateIcon} alt="" />
                            <h1>Donate</h1>
                            <h3>Every penny you donate, adds to the comfort and care of our voiceless friends.</h3>
                            <div className="btn-container">
                                <Link to="/donate" >Donate Now!</Link>
                            </div>
                        </div>
                        <div class="volunteer">
                            <img loading="lazy" src={volunteerIcon} alt="" />
                            <h1>Volunteer with us</h1>
                            <h3>Volunteers play a crucial role in helping us make a significant impact towards animal welfare.</h3>
                            <div className="btn-container">
                                <Link to="/volunteer" >Volunteer!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Gallery Section */}
            {/* Adopt Section */}

            <section className="adopt-section info-section">

                <div className="section-details">
                    <h2>Adopt a Friend </h2>
                    <hr />
                    <p style={{ color: "#555555", fontSize: "17px", marginTop: "10px" }}>"You can't buy love, but you
                        can <br /> rescue it." <span style={{color:'#ec9626'}}>#adoptdontshop</span></p>
                </div>
                <div className="container">
                    <div className="adopt-content">

                        {pets.map((pet) => (
                            <div className="adopt-card">
                                <img src={pet?.img} alt="" loading="lazy" />
                                <div className="pet-name">{pet.name}</div>
                                <div className="pet-info">
                                    <div className="pet-gender">{pet.gender}</div>
                                    <div className="pet-age">{pet.age}</div>
                                </div>
                                <div className="btn-container">
                                    <a
                                        href={`https://api.whatsapp.com/send/?phone=919899600421&text=Hi I Want To Adopt ${pet.name}. Can You Help?`}
                                        target="_blank"
                                    >
                                        Adopt {pet.name}
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="btn-container">
                        <Link to="/adopt" style={{ padding: "1.2rem 1.5rem" }}> More Pets</Link>
                    </div>
                </div>
            </section>

            {/* End Adopt Section */}

            {/* Media Section */}

            <section className="media-section info-section odds">
                <div className="section-details">

                    <h2>Media Cover</h2>
                    <hr />
                    <div className="container">
                        <Slider {...settings}>
                           <div className="media">
                                <img
                                    src={pf}
                                    alt="Impaac"
                                    loading="lazy"
                                />
                            </div>
                            <div className="media" style={{ width: "175px" }}>
                                <img
                                    src={incubee}
                                    alt="Incredible Story"
                                    loading="lazy"
                                />
                            </div>
                            <div className="media" style={{ width: "175px" }}>
                                <img
                                    src={is}
                                    alt="Incredible Story"
                                    loading="lazy"
                                />
                            </div>
                            <div className="media" >
                                <img
                                    src={et}
                                    alt="Incredible Story"
                                    loading="lazy"
                                />
                            </div>
                            <div className="media">
                                <img
                                    src={logical}
                                    alt="Incredible Story"
                                    loading="lazy"
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            {/* End Media Section */}

            {/* Contact Section */}

            <section className="contact-section info-section">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-page">
                                <div className="section-details" style={{ textAlign: "left", lineHeight: 1, borderLeft: "4px solid #d99c00", marginLeft: 0,padding:"0.3rem",paddingLeft:'1rem' }}>
                                <h2 style={{ fontSize: "28px" }}>Contact Us</h2>
                                <p style={{ color: "#8b8a8a" }}>Drop Us A Message</p>
                            </div>
                            <form

                                className="contact-form"
                                action="https://formsubmit.co/contact@saveastray.in"
                                method="post"
                            >

                                <div className="input-group">
                                    <input
                                        className="field margin"
                                        id="grid"
                                        type="text"
                                        placeholder="Your Name"
                                        name="name"
                                        required
                                    />
                                    <input
                                        className="field"
                                        id="grid"
                                        type="email"
                                        placeholder="Your Email"
                                        name="email"
                                        required
                                    />
                                </div>
                                <input
                                    className="field"
                                    id="phone"
                                    type="phone"
                                    placeholder="Your Phone"
                                    name="phone"
                                />
                                <div className="msg">

                                    <textarea
                                        placeholder="Your Message"
                                        name="message"
                                        required
                                        defaultValue=""
                                    />
                                </div>
                                <button id="btn" type="submit" style={{display:"flex",alignItems:"center"}}>
                                    Send Message <i className='fa fa-paper-plane' style={{marginLeft:"6px",fontSize:"18px"}}/>
                                </button>
                            </form>
                        </div>
                        <div className="gmap_canvas">
                            <iframe
                                id="gmap_canvas"
                                width="100% "
                                height="500px"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0495324371277!2d77.39285121455815!3d28.56827529373815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51201a44cd3%3A0x1f0c60228a2fb58c!2sSave%20A%20Stray!5e0!3m2!1sen!2sin!4v1653639019629!5m2!1sen!2sin=&output=embed                    "
                                frameBorder={0}
                                border="none"
                                scrolling="no "
                                marginHeight={10}
                                marginWidth="10px "
                            />
                            <br />
                        </div>
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    ".mapouter {\nposition: relative;\ntext-align: right;\nheight: 500px;border-radius:14px;\nwidth: 100%;\n\n}\n",
                            }}
                        />
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    ".gmap_canvas {\noverflow: hidden;\nbackground: none!important;\nheight: 500px;\nwidth: 50%;border-radius:8px;border:none;\nbox-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;\n\n}",
                            }}
                        />
                    </div>
                </div>
            </section>
            {/* End Contact Section */}
            <div className="window">
                    <div className="upper">
                        <h2>Join the Mission and Create An Impact! </h2>
                    </div>
                    <div className="btn-container">

                        <Link to="/donate">Contribute </Link>
                    </div>
                </div>
        </>
    )
}