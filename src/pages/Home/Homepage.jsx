import { Helmet } from 'react-helmet'
import gallery1 from '../../assets/images/kitchen.jpeg'
import gallery2 from '../../assets/images/shelter-3.webp'
import gallery3 from '../../assets/images/gallery-4.jpg'
import gallery4 from '../../assets/images/gallery-5.jpg'
import gallery5 from '../../assets/images/gallery-6.jpg'
import gallery6 from '../../assets/images/cow.jpg'
import gallery7 from '../../assets/images/puppies.webp'
import gallery8 from '../../assets/images/gallery-3.webp'
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
            setPets(docSnap.data().pets.slice(0,3).reverse())
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

                        <h4>Save a Stray</h4>
                        <h1>Donate a little, Change a lot</h1>
                        <p>
                            Saving one Voiceless will not change the world, but surely for that
                            one,
                            <br />
                            the world will change forever.
                        </p>
                        <Link id="btn" to="/donate">
                            Support us
                        </Link>
                    </div>
                </div>
            </section>
            {/* End Hero Section */}


            {/* About Section */}
            <section className="about-section info-section">

                <div className="section-details">
                    <h2>About Us </h2>
                    <hr />
                </div>
                <div className="container">
                    <div className="about-content video-box-home">

                        <div className="about-text">
                            Animal suffering is what brought a group of people together. We are an
                            Animal welfare Organisation in Noida Sector 116 and serving food to
                            3000+ dogs and 200+ Cattles in various locations. We are Self Help Group
                            of people who runs feeding Drive and Medcare for stray dogs and other
                            animals in need.
                            <br /> Save a Stray is a Registered Trust, working tirelessly for Stray
                            Dogs and Cattles, Founded By Vidit Sharma. We do our best to follow
                            "Seva Parmo dharma" and to remove sufferings and starving.
                            <br />
                            We have one goal, to reduce animal suffering by addressing the root
                            cause of the issue, lack of human compassion.
                        </div>
                        <div className="about-image">
                            <div className='video'>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8mlTR_DRPo4" frameborder="0"></iframe>
                            </div>
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
                <div className="container">
                    <div className="adopt-content">

                        {pets.map((pet) => (
                            <div className="adopt-card">

                                <img
                                    src={pet?.img}
                                    alt="Heera and Moti"
                                    loading="lazy"
                                />
                                <div className="pet-name">{pet.name}</div>
                                <div className="pet-info">

                                    <div className="pet-gender">{pet.gender}</div>
                                    <div className="pet-age">{pet.age}</div>
                                </div>
                                <a
                                    id="btn"
                                    href={`https://api.whatsapp.com/send/?phone=919899600421&text=Hi I Want To Adopt ${pet.name}. Can You Help?`}
                                    target="_blank"
                                >
                                    Adopt {pet.name}
                                </a>
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
                                src="https://new-img.patrika.com/static-assets/patrika-logo.png"
                                alt="Patrika"
                                loading="lazy"
                            />
                        </div>
                        <div className="media">

                            <img
                                src="https://www.impaac.org/static/media/IFLogo.ca3837ed63d9a6c70774.png"
                                alt="Impaac"
                                loading="lazy"
                            />
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
                                    ".mapouter {\nposition: relative;\ntext-align: right;\nheight: 400px;\nwidth: 100%;\n\n}\n",
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