import { Helmet } from "react-helmet";
import '../../assets/css/donate.css'
import DonateQr from '../../assets/images/paytmqr.jpeg'
import donate1 from '../../assets/images/gallery-14.webp'
import donate2 from '../../assets/images/gallery-19.jfif'
import donate3 from '../../assets/images/gallery-18.jfif'
import donate4 from '../../assets/images/gallery-17.jfif'
import gpay from '../../assets/images/gpay.png'
import phonepay from '../../assets/images/phonepay.png'
import paytm from '../../assets/images/paytm.png'
import upi from '../../assets/images/upi.png'

export default function Donatepage() {
  return (
    <div class="donate-page">
      <Helmet>
        <title>  Donate us - Save A Stray, Noida</title>
        <meta name="description" content="Support our Efforts &amp; Donate to Save a Stray today. We will ensure, every penny received in form of donations is used in the best interest of animal welfare." />
        <meta name="keywords" content="Save A stray, animal shelter, animal welfare centre,donate us,Vidit sharma , save a stray noida" />
      </Helmet>
      <div className="menu-box">
        <div className="container">
          <h2>Donate us</h2>
        </div>
      </div>
      <section className="about-section info-section">
        <div className="container">
          <div className="about-content" style={{ alignItems: "flex-start" }}>
            <div className="about-image" style={{ width: "100%", paddingTop: 0 }}>
              <div>
                <div style={{ position: "relative" }}>
                  <img className="donatePageImg pcPayImg" src={donate1} alt="" style={{ objectFit: "cover", }} />
                  <p className="pcPayImg" style={{ position: "absolute", top: 10, right: 10, color: "#fff", background: "#d50000fa", border: "1px solid #d99c00", padding: "7px 10px", borderRadius: "10px" }}>Urgent Funds Required</p>
                </div>
                <div className="about-image" style={{ width: "100%", marginTop: 10, paddingInline: 10, borderRadius: 10, boxShadow: `rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px` }}>
                  <text style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.8 }}>
                    We are Save A Stray and we are an animal NGO based out of Noida. We Are Working Towards Reducing the Human-Animal Conflicts by Helping Our Voiceless Buddies. In this Process we feed and Treat More than 4000 animals Every Month and These Animals Includes Dogs, Cats, Cows and Monkeys.
                    <br />
                    <img className="donatePageImg" src={donate2} alt="" style={{ marginTop: `1rem`, objectFit: "cover",  }} />
                    <br />
                    For over 4 years, we’ve been providing a Healthy and Nuritious food for stray dogs, cows in Noida. Where we’ve been feeding over 3000 dogs, and currently rescue 3-4 dogs every day, many of whom are paralyzed, blind and have chronic illnesses.
                  </text>
                  <text style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.8 }}>
                    Recently We have Started Some New Works like Feeding Monkeys on Tuesday and Saturday. We Have Also Started Our Animal Shelter named "Sharnam" in Noida.
                    <br />
                    <iframe style={{ margin: `0.78rem 0` }} width="100%" className="donatePageImg" src="https://www.youtube.com/embed/cK4sxDVsD_k" title="Why Save A Stray Needs Your Support || #saveastray" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <br />
                    Since We Are Expanding Our Work We Need Support from You because we need more than 8 lakh rupees every Month In order to Do These Activities. Making Arrangment for Money was Never been easier for us, Please Donate a Bit So that We can Make Progess in Our Mission of Making this World a Happy Place to Live for Each and Every Creature of Almighty.
                  </text>
                  <img className="donatePageImg" src={donate3} alt="" style={{ marginTop: `1rem`, objectFit: "cover"}} />
                  <div style={{ padding: `0.7rem 0` }}>
                    <h3 style={{ textDecoration: "underLine", paddingBottom: "1rem" }}>How your contribution will help:</h3>
                    <text style={{ fontSize: "17px", fontWeight: 400, lineHeight: 1.8 }}>
                      <span style={{ fontWeight: 700, fontSize: '18px', textDecoration: "underline" }}>Improvement of Shelter</span> - We Need your Help in Making A Operation Threatre, A Proper Treatment room, A Isolation Area and Increase the Capacity of Animal Shelter.
                      <br />
                      <br />
                      <span style={{ fontWeight: 700, fontSize: '18px', textDecoration: "underline" }}>Food for Animals</span> - We Also Need Funds for Making food for 3000+ Dogs, Arranging Green Fodder for Cows and Also for Arranging Fresh Fruits for Monkeys.
                      <br />
                      <img className="donatePageImg" src={donate4} alt="" style={{ marginTop: `1rem`, objectFit: "cover" }} />
                      <br />
                      <span style={{ fontWeight: 700, fontSize: '18px', textDecoration: "underline" }}>Medical Needs</span> - We Have to Arrange Funds for Medicines, Fee for Vets and Also We need funds for The Surgeries of Animals.
                      <br />
                      <br />
                      <span style={{ fontWeight: 700, fontSize: '18px', textDecoration: "underline" }}>Other Expenses</span> - Since We Own 5 Vehicles and Animals Ambulances we need Funds for Their Maintainance and Also we Have Team of 12 People Out of Which 5 Are Vounteers but We had to Give Salary to On Site Workers.
                    </text>
                  </div>
                </div>
              </div>

              <div className="about-image" style={{ width: "100%", marginTop: `1.3rem`, paddingInline: 10, borderRadius: 10, boxShadow: `rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px` }}>
                <h3 style={{ fontSize: `16px`, display: "block", borderBottom: "1px solid #000", padding: "1rem 0" }}>Donate via Bank Transfer</h3>
                <h4 style={{ color: "#000", paddingTop: "1rem", fontSize: `17px`, lineHeight: 2, fontWeight: 300 }}>
                  <p style={{ fontWeight: 200 }}> Donate directly to the Bank account of Save A Stray.</p>
                  <p style={{ fontWeight: 400 }}>– Bank Name  : <text style={{ fontWeight: "bold" }}>indusind bank</text></p>
                  <text style={{ fontWeight: 400 }}>– Branch Name : <text style={{ fontWeight: "bold" }}> Noida Sector 18</text></text><br />
                  <text style={{ fontWeight: 400 }}>– Bank account Number :  <text style={{ fontWeight: "bold" }}>201006594696</text></text><br />
                  <text style={{ fontWeight: 400 }}>– Account Name :  <text style={{ fontWeight: "bold" }}>Save a Stray</text></text><br />
                  <text style={{ fontWeight: 400 }}>– IFSC Code :  <text style={{ fontWeight: "bold" }}>INDB0000036</text></text></h4>
              </div>
            </div>

            <div className="about-text payment-box" style={{ zIndex: 99, borderRadius: 10, boxShadow: `rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px` }}>
              <h4 style={{ color: "#000", fontWeight: 400, textAlign: "center" }}>By Donating You will help us in Feeding and giving medical attention to Voiceless Souls.</h4>
              <a
                id="btn"
                style={{ display: "block", textAlign: "center", margin: 10 }}
                target="_blank"
                href="https://pages.razorpay.com/pl_GUaNiAa3KYwFiL/view"
              >
                Donate by Card or Other Methods
              </a>
              <p style={{ fontSize: "12px", color: "#000", textAlign: "center",lineHeight:1 }}>(INDIAN TAX BENEFITS AVAILABLE)</p>
              <div style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                <hr style={{ borderTop: "1px solid gray", marginRight: "5px" }} /> OR <hr style={{ borderTop: "1px solid gray", marginLeft: "5px" }} />
              </div>
              <h4 style={{ color: "#000", textAlign: "center" }}>Scan below QR & Donate using<br />
                <text style={{ fontWeight: 400 }}>Google Pay, PhonePe, Paytm or UPI</text></h4>
              <div className="qr">
                <img id="qr" src={DonateQr} alt="" />
              </div>
              <h4 style={{ color: "#000", textAlign: "center" }}>UPI ID:  <text style={{ fontWeight: "bold", color: "#d99c00" }}>Vidit.kaushik11@okIcici</text></h4>
              <h4 style={{ color: "#000", textAlign: "center" }}>Google Pay number: <text style={{ color: "#d99c00" }}>+91 9899600421</text></h4>
              <div style={{ display: "flex", justifyContent: "space-around", margin: "auto", width: "80%" }}>
                <img src={gpay} alt="" width="55px" />
                <img src={phonepay} alt="" width="55px" />
                <img src={paytm} alt="" width="55px" />
                <img src={upi} alt="" width="55px" />
              </div>
            </div>

            <div className="about-image moboPayImg" style={{ width: "100%", paddingTop: 0,position: "relative" }}>
              <img className="donatePageImg" src={donate1} alt="" style={{ marginTop: `1rem`, objectFit: "cover",  }} />
              <p style={{ position: "absolute", top: 20, right: 15, color: "#fff", background: "#d50000fa", border: "1px solid #d99c00", padding: "7px 10px", borderRadius: "10px" }}>Urgent Funds Required</p>
            </div>
          </div>
        </div></section></div>
  )
}