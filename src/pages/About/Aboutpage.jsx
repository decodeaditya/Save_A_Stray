import { useState } from "react"
import hero from '../../assets/images/gallery-3.webp'
import about2 from '../../assets/images/gallery-18.jfif'
import about3 from '../../assets/images/gallery-17.jfif'
import Ankush from './AboutImages/Ankush.jpg'
import Ds from './AboutImages/Dheeraj Sharma.jpeg'
import Ps from './AboutImages/Pankaj Sharma.jpeg'
import Ms from './AboutImages/Monty Sharma.jpg'
import Ks from './AboutImages/Keshav Sharma.jpeg'
import Ad from './AboutImages/Aditya Kumar.jfif'
import Vidit from './AboutImages/founderimage.jpeg'
import { Helmet } from "react-helmet"
import '../../assets/css/about.css'

const team = [
    {
        name: "Keshav Sharma",
        work: "Kitchen And Delivery Manager",
        img: Ks
    },
    {
        name: "Aditya Kumar",
        work: "Web Developer & Social Media",
        img: Ad
    },
    {
        name: "Pankaj Sharma",
        work: "Logistic Manager",
        img: Ps
    },
    {
        name: "Dheeraj Sharma",
        work: "Volunteer",
        img: Ds
    },
    {
        name: "Ankush",
        work: "Kitchen and Task Manager",
        img: Ankush
    },
    {
        name: "Monty Sharma",
        work: "Maintaince Head",
        img: Ms
    },
]


export default function Aboutpage() {

    const [Open, setOpen] = useState(false)

    return (
        <>
            <Helmet>
                <title>  About us - Save A Stray, Noida</title>
                <meta name="description" content="Save a Stray is an animal welfare organization located near Noida, Uttar Pradesh that feeds and cares for street animals. Through their efforts, they aim to inspire the community to value the lives of all animals." />
                <meta name="keywords" content="Save A stray, animal shelter, animal welfare centre, about us,Vidit sharma , save a stray noida" />
            </Helmet>
            <div className="menu-box">
                <div className="container">
                    <h2>About us</h2>
                </div>
            </div>
            <section className="about-section info-section">

                <div className="section-details">
                    <h2>How we Started ? </h2>
                    <hr />
                </div>
                <div className="container">
                    <div className="about-content">
                        <div className="about-image">
                            <img src={hero} alt="main-about" loading="lazy" />
                        </div>
                        <div className="about-text" style={{ fontSize: "17px", color: "#616161" }}>
                            <p style={{ fontSize: 25, marginBottom: "0.9rem", color: "#000" }}>"A journey of a thousand miles begins with a single step"</p>
                            The eerie silence of the sudden lockdown in March 2020, amplified the
                            cries of hungry stray dogs on the streets of Noida. Our furry friends
                            had no idea where the few friendly humans had vanished, and man's best
                            friend roamed the streets hungry, thirsty, lost and utterly hopeless.
                            <br />
                            When we could no longer bear to hear the distressed cries of hunger of
                            these voiceless furries, We decided it was time to put our strong
                            resolve and limited resources to use.
                            <br />
                        </div>
                    </div>
                    {!Open && <div className="btn-container">
                        <button onClick={() => { setOpen(true) }}>Read More</button>
                    </div>}
                    {Open &&
                        <>
                            <div className="about-content  phone-reverse">
                                <div className="about-text" style={{ fontSize: "17px", color: "#616161" }}>
                                    What began as a modest initiative in 2020 with just 35 dogs under our
                                    wings, has increased exponentially during the lockdown as we
                                    discovered various parts of Noida where animals were starving. Today,
                                    <br />
                                    we are proud to be able to cater to well over 3500 dogs daily across
                                    Noida and neighbouring parts of Delhi, for which we cook approximately
                                    1 Lakh meals a month!
                                    Turning adversity into an opportunity to do some good saw the
                                    inception of ‘Save A Stray’ on 22nd March 2020, with the sole aim of feeding our furry street friends.
                                </div>
                                <div className="about-image">
                                    <img src={about2} alt="main-about" loading="lazy" />
                                </div>
                            </div>
                            <div className="about-content">
                                <div className="about-image">
                                    <img src={about3} alt="main-about" loading="lazy" />
                                </div>
                                <div className="about-text" style={{ fontSize: "17px", color: "#616161" }}>
                                    We have a dedicated and compassionate crew who help in ensuring that come hail or shine, or even the harshest cold, the little bellies of our canine kids are filled everyday! This food is delivered to various locations with the help of two vans and two E-rickshaws. We believe in feeding them healthy and
                                    nutritious food made of rice, soya, pulses, seasonal vegetables, eggs, milk and even processed dog kibble.
                                </div>
                            </div>
                            <div className="btn-container">
                                <button onClick={() => { setOpen(false) }}>Read Less</button>
                            </div>
                        </>
                    }
                </div>
            </section>
            <section className="founder-section info-section odds">
                <div className="section-details">
                    <h2>Our Founder </h2>
                    <hr />
                </div>
                <div className="container">
                    <div className="about-content">
                        <div className="about-text" style={{ color: "#616161", fontSize: "17px" }}>
                            <p style={{ fontSize: 25, marginBottom: "0.9rem", color: "#000" }}>The Life Lived for Others is the one that is Happiest!</p>
                            Vidit Sharma is the founder of Save a Stray.
                            It's due to his able guidance, dedication, and commitment that we are able to feed more than 3000 animals daily and treating
                            them.
                            <br />
                            Vidit's selfless work has earned him praise from numerous dignitaries and is donating his own
                            50% of salary to Save A Stray.
                            <br />
                            He has been involved in humanitarian work since 2011 and has worked with NGOs such as 'Vision4care.'
                        </div>
                        <div className="about-image">
                            <img src={Vidit} alt="founder" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-section info-section">
                <div className="section-details">
                    <h2>Meet our Team </h2>
                    <hr />
                </div>
                <div className="container">
                    <div className="team-content">
                        {team.map((member) => (
                            <div className="profile">
                                <img src={member.img} alt={member.name} loading="lazy" />
                                <div className="profile-details">
                                    <div className="profile-name">
                                        <h3>{member.name}</h3>
                                    </div>
                                    <div className="work">{member.work}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="team-section info-section odds">
                <div className="section-details">
                    <h2>
                        Thanks <i className="fa fa-heart"> </i>
                    </h2>
                    <hr />
                </div>
                <div className="container">
                    <div className="team-content">

                        <div className="supp-card">

                            <h3>Mr. Amit Kochhar</h3>
                        </div>
                        <div className="supp-card">

                            <h3>Mr. Vikram</h3>
                        </div>
                        <div className="supp-card">

                            <h3>Mrs. Ritu</h3>
                        </div>
                        <div className="supp-card">

                            <h3>Mrs. Mamta Nigam</h3>
                        </div>
                        <div className="supp-card">

                            <h3>Gaurav Malhotra</h3>
                        </div>
                        <div className="supp-card">

                            <h3>Adesh Awana</h3>
                        </div>
                        <div className="supp-card">

                            <h3>Rahul Sharma</h3>
                        </div>
                        <div className="supp-card">

                            <h3>Kapil Rathi</h3>
                        </div>
                        <div className="supp-card">

                            <h3>Mrs. Ritu</h3>
                        </div>
                        <div className="supp-card">

                            <h3>Mr. Anubhav </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}