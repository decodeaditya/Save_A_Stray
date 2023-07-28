import { Helmet } from 'react-helmet'
import gallery1 from '../../assets/images/gallery1.webp'
import gallery2 from '../../assets/images/shelter-3.webp'
import gallery3 from '../../assets/images/gallery-4.jpg'
import gallery4 from '../../assets/images/gallery-5.jpg'
import gallery5 from '../../assets/images/gallery-2.webp'
import gallery6 from '../../assets/images/gallery-6.jfif'
import gallery7 from '../../assets/images/gallery-7.jfif'
import gallery8 from '../../assets/images/gallery-3.webp'
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


export default function Homepage() {
    const [pets, setPets] = useState([])


    useEffect(() => {
        const getPets = async () => {
            const docSnap = await getDoc(doc(db, "adopt", 'yB810JxrJWZX5EvopsKl'))
            setPets(docSnap.data().pets.reverse().slice(1))
            return docSnap
        }
        getPets()
    }, [])

    return (
        <>
            <Helmet>
                <title>Home - Save A Stray, Noida</title>
                <meta name="description" content="We feed and treat owner-less street animals. Save a stray is a stray animal feeding and an animal welfare organisation near Noida, Uttar pradesh and through their feeding and rescue we try to inspire the community to care for the lives of all animals." />
                <meta name="keywords" content="Save A stray, animal shelter, animal welfare centre " />
            </Helmet>

            {/* Hero Section */}
            <section className="hero-section">

                <div className="container">

                    <div className="hero-content">

                        <h1>Helping Others Always <br />Makes You Happy</h1>
                        <p>
                            Saving one Voiceless will not change the world, but surely for that one,<br />
                            the world will change forever.
                        </p>
                        <Link id="btn" to="/donate">
                            <h3 style={{ fontWeight: 700, fontSize: 17 }}>DONATE NOW</h3>
                        </Link>
                    </div>
                </div>
            </section>
            {/* End Hero Section */}

            {/* services section */}

            <div className='odds info-section features-section' style={{display:"flex",alignItems:"flex-start"}}>
                <div className='section-details' style={{margin:"auto"}}>
                    <h2 style={{fontSize:"28px",textTransform:"capitalize"}}>serving animals daily</h2>
                    <h1 style={{fontWeight:700,color:"#d99c00"}}> > 4000</h1>
                    <h3 style={{fontWeight:400,color:"#8e690c",marginBottom:"1rem"}}>& we have a long way ahead</h3>
                    <p style={{lineHeight:1.4,marginBottom:"1rem",fontSize: "16px",color:"#616161"}}>Since 2019, We are working to mitigate animal suffering and to promote a more animal-sympathetic culture. With your support, we are feeding more than 4000 animals and Treating them. We Hope you Will Continue your Support and Help us Reach to More Such Voiceless.</p>
                <div className='btn-container'  style={{marginTop:"1rem",marginBottom:"1rem"}}>
                <Link to="/donate">
                  <a>Donate Now</a>
                </Link>
                </div>
                </div>
                <div className='about-content features'>
                    <div className='features-box'>
                        <img src={icon1} />
                        <div>
                            <h3>
                                Healthy Food</h3>
                            <p style={{fontSize: "16px",color:"#616161"}}>It's a daily struggle to arrange food for more than 4000 animals which includes Dogs, Cows and Monkeys every month. Help us by buying food for our Voiceless Buddies.</p>
                        </div>
                    </div>
                    <div className='features-box'>
                        <img src={icon2} />
                        <div>
                            <h3>Street Water Bowls</h3>
                            <p style={{fontSize: "16px",color:"#616161"}}>Every year, many street animals die of thirst and dehydration. Help us Buy Water Bowls So that We Can Quench the thirst of Animals Searching for Water on the Streets.</p>
                        </div>
                    </div>
                    <div className='features-box'>
                        <img src={icon3} />
                        <div>
                            <h3>Medical Help</h3>
                            <p style={{fontSize: "16px",color:"#616161"}}>So many of our voiceless friends suffer on the streets of Noida with some treatable injury or disease. Help us give them essential medical care and Make them Healthy Again.</p>
                        </div>
                    </div>
                    <div className='features-box'>
                        <img src={icon4} />
                        <div>
                            <h3>Support</h3>
                            <p style={{fontSize: "16px",color:"#616161"}}>By supporting Save A Stray, you will save the lives of innocent street animals and giving them a second chance at happiness. We Hope You Will Support us.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* end services */}

            {/* About Section */}
            <section className="about-section info-section">

                <div className="section-details">
                    <h2>About Us </h2>
                    <hr />
                </div>
                <div className="container">
                    <div className="about-content video-box-home">

                        <div className="about-image">
                        <img src={hero} alt="main-about" loading="lazy" />
                        </div>
                        <div className="about-text" style={{color:"#616161",fontSize:"16px"}}>
                            <p style={{fontSize:25,marginBottom:"0.9rem",color:"#000"}}>Helping them Who Can't Help themselves Gives the Deep Satisfaction</p>
                            We are an
                            Animal welfare Organisation in Noida and serving Happiness to
                            3000+ dogs and 200+ Cattles in various locations. We are a Registered Organisation
                            which feeds and Treats Stray Animals.<br/>
                            <br />We do our best to follow
                            "Seva Parmo dharma" and to remove sufferings and starving.
                            We have one goal, to reduce animal suffering by addressing the root
                            cause of the issue, lack of human compassion.
                        </div>
                    </div>
                    <div className="btn-container">

                        <Link to="/about">Read More</Link>
                    </div>
                </div>
            </section>

            {/* End About Section */}

            {/* Gallery Section */}

            <section className="gallery-section info-section odds">
                <div className="section-details">
                    <h2>Gallery </h2>
                    <hr />
                </div>
                <div className="container">
                    <div className="gallery-content">

                        <div className="gallery-row">

                            <div className="gallery-column">

                                <div className="image-content">
                                    <img src={gallery1} alt="kitchen" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery2} alt="rescue" loading="lazy" />
                                </div>
                            </div>
                            <div className="gallery-column">

                                <div className="image-content">
                                    <img src={gallery3} alt="feeding" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery4} alt="awards" loading="lazy" />
                                </div>
                            </div>
                            <div className="gallery-column">

                                <div className="image-content">

                                    <img src={gallery5} alt="feeding" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery6} alt="cow" loading="lazy" />
                                </div>
                            </div>
                            <div className="gallery-column">

                                <div className="image-content">
                                    <img src={gallery7} alt="dogs" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery8} alt="dogs" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-container">
                        <Link to="/gallery">View More </Link>
                    </div>
                </div>
            </section>

            {/* End Gallery Section */}

            {/* Adopt Section */}

            <section className="adopt-section info-section">
                <div className="section-details">
                    <h2>Adopt a Friend </h2>
                    <hr />
                </div>
                <div className="container" style={{width:"100%"}}>
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

                        <Link to="/adopt">More Pets</Link>
                    </div>
                </div>
            </section>

            {/* End Adopt Section */}

            {/* Media Section */}

            <section className="media-section info-section odds">
                <div className="section-details">

                    <h2>Media Cover </h2>
                    <hr />
                    <div className="container">

                        <div className="media">

                            <img
                                src="https://incubees.com/wp-content/uploads/2021/05/2-bee-logo-registered-maroon.png"
                                alt="Incubees"
                                loading="lazy"
                            />
                        </div>
                        <div className="media">

                            <img
                                src="https://www.bestmediainfo.com/uploads/2015/08/patrika.jpg"
                                alt="Patrika"
                                loading="lazy"
                            />
                        </div>
                        
                        <div className="media">

                            <img
                                src="https://images-eu.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/peepalfarm_1608371313074_original._CR0,0,220,220_._FMjpg_.png"
                                alt="Impaac"
                                loading="lazy"
                                style={{borderRadius:0,width:'70px',height:"70px",marginLeft:"13px",marginRight:"8px"}}
                            /><p style={{fontWeight:"800"}}>PEEPAL FARM</p>
                        </div>
                        <div className="media">

                            <img
                                src="https://i0.wp.com/www.incrediblestory.org/wp-content/uploads/2020/07/Final-Logo.jpeg?w=412&ssl=1"
                                alt="Incredible Story"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* End Media Section */}

            {/* Contact Section */}

            <section className="contact-section info-section">
                <div className="container">

                    <div className="contact-content">

                        <div className="contact-page">
                            <div className="section-details">
                                <h2>Contact us</h2>
                                <hr />
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
                                <button id="btn" type="submit">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className="gmap_canvas">
                            <iframe
                                id="gmap_canvas"
                                width="100% "
                                height="380px "
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0495324371277!2d77.39285121455815!3d28.56827529373815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51201a44cd3%3A0x1f0c60228a2fb58c!2sSave%20A%20Stray!5e0!3m2!1sen!2sin!4v1653639019629!5m2!1sen!2sin=&output=embed                    "
                                frameBorder={0}
                                scrolling="no "
                                marginHeight={10}
                                marginWidth="10px "
                            />
                            <br />
                        </div>
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    ".mapouter {\nposition: relative;\ntext-align: right;\nheight: 380px;border-radius:14px;\nwidth: 100%;\n\n}\n",
                            }}
                        />
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    ".gmap_canvas {\noverflow: hidden;\nbackground: none!important;\nheight: 380px;\nwidth: 50%;\nbox-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;\n\n}",
                            }}
                        />
                    </div>
                </div>
            </section>
            {/* End Contact Section */}
        </>
    )
}