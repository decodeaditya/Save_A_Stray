import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import vol1 from '../../assets/images/volunteer1.jpg'
import vol2 from '../../assets/images/vol2.jpg'
import vol3 from '../../assets/images/vol3.png'

export default function Volunteerpage() {
    return (
        <>
            <Helmet>
                <title>Become a Volunteer - Save A Stray, Noida</title>
                <meta name="description" content="We, cordially invite you to join us in our efforts to improve animal welfare. Your interest in volunteering with Save A Stray is greatly appreciated. Please feel free to visit us and share in the duty and joy of our work." />
                <meta name="keywords" content="Save A stray, animal shelter, animal welfare centre, about us,Vidit sharma , save a stray noida" />
            </Helmet>

            <div className="menu-box">
                <div className="container">
                    <h2>Volunteer</h2>
                </div>
            </div>
            <section className="info-section volunteer-section">
                <div className="container">
                    <div className="section-details" style={{ textAlign: "center", lineHeight: 1, padding: "0.5rem", marginTop: "2rem" }}>
                        <h2 style={{ fontSize: "28px" }}>Reasons to Volunteer</h2>
                        <hr style={{marginTop:"1rem"}}/>
                    </div>
                    <div className="terms" style={{fontSize: "18px", paddingTop: 0 }}>
                    <div className="aboutcontent" style={{ width: "100%", fontSize: "17px",marginBottom:"1rem",textAlign:"justify" }}>
                    Thank you for your interest in volunteering with us. Our community is committed to animal welfare and welcomes your efforts to positively impact the lives of our furry friends. Whether you edit videos, create content, respond to social media, or perform physical tasks such as dog walks, baths, or feeding infant puppies, your skills will help us make the world a better place for animals in need.
                    </div>
                        <div className="about-content " style={{padding:0 ,width: "100%", }}>
                            <div className="about-image" style={{ paddingLeft: '0rem' ,height:"100%"}} >
                                <img src={vol2} alt="Volunteer Image 1" loading="lazy" height={'100%'}/>
                            </div>
                                <ol style={{ paddingLeft: '1rem' }} className="about-text">
                                    <li><span style={{ textDecoration: 'underline', fontWeight: "700" }}>Meaningful Impact:</span> By volunteering, you can make a real difference in the lives of animals. Whether you care for them directly, help with rescues, or promote animal rights, your efforts can make a positive difference.</li>
                                    <li><span style={{ textDecoration: 'underline', fontWeight: "700" }}>Personal Growth:</span> Volunteering is an experience that not only helps animals, but also enriches you. You will gain valuable skills, expand your knowledge of animal welfare issues, and gain fulfillment and personal growth.</li>
                                </ol>
                        </div>
                        <div className="about-content phone-reverse" style={{paddingTop:0}}>
                                <ol style={{ paddingLeft: '1rem',paddingRight:"1rem" }} className="about-text">
                                    <li><span style={{ textDecoration: 'underline', fontWeight: "700" }}>Flexible Commitment:</span> The length of time you can volunteer is up to you; we welcome volunteers for any duration, whether it is one month, three months, or six months. Whatever the length of time, your commitment is highly valued.</li>
                                    <li><span style={{ textDecoration: 'underline', fontWeight: "700" }}>Certificate of Volunteering:</span> As a token of our appreciation for your dedicated service, you will receive a volunteer certificate recognizing your valuable contributions to animal welfare. This certificate is a testament to your dedication and compassion.</li>
                                </ol>
                            <div className="about-image" style={{ paddingLeft: '0rem' }} >
                                <img src={vol1} alt="Volunteer Image 2" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="odds info-section">
                <div className="container" style={{ paddingBottom: '2rem' }}>
                    <div className="section-details" style={{ textAlign: "left", lineHeight: 1, borderLeft: "4px solid #d99c00", marginLeft: 0, padding: "0.5rem", marginBottom: "1rem" }}>
                        <h2 style={{ fontSize: "28px" }}>Get Started</h2>
                        <p style={{ color: "#8b8a8a" }}>How you can Volunteer</p>
                    </div>
                    <div className="aboutcontent terms" style={{ width: "100%", fontSize: "18px" }}>
                        To become a volunteer, you can connect us through the following ways:
                        <div className="about-content">
                            <div className="about-image" style={{ paddingLeft: '0rem' }} >
                                <img src={vol3} alt="Volunteer Image 3" loading="lazy" />
                            </div>
                            <ul style={{ paddingLeft: '1rem', textAlign: "left"}} className="about-text started">
                                <li><span style={{ textDecoration: 'underline', fontWeight: "800" }}>Call us:</span> Call us on <a href="tel:+919899600421" style={{ textDecoration: "underline", color: "#d99c00" }}>+91 9899600421</a> to express your interest and discuss the available volunteering opportunities. we will provide you with all the necessary details and answer any questions you may have.</li>
                                <li><span style={{ textDecoration: 'underline', fontWeight: "800" }}>Write Us:</span> You can also email us at <a href="mailto:contact@saveastray.in" style={{ color: "#d99c00", textDecoration: "underline" }}>contact@saveastray.in</a> or Visit <Link to="/contact" style={{ color: "#d99c00", textDecoration: "underline" }}>Contact Us Page</Link>. Please include your contact information, desired volunteer period, and any specific skills or areas of interest.</li>
                            </ul>
                        </div>
                        We are pleased to welcome you to our team of volunteers and appreciate your commitment to animal welfare. Thank you for your compassion!
                    </div>
                </div>
            </div>
        </>
    )
}
