import { Helmet } from "react-helmet";
import '../../assets/css/donate.css'
import DonateQr from '../../assets/images/paytmqr.jpeg'
import donate1 from '../../assets/images/gallery-14.webp'
import donate2 from '../../assets/images/gallery-10.webp'
import donate3 from '../../assets/images/gallery-11.webp'

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
                <img className="donatePageImg pcPayImg" src={donate1} alt="" style={{ objectFit: "cover", borderRadius: 5 }} />
                <div className="about-image" style={{ width: "100%", marginTop: 10, paddingInline: 10, borderRadius: 10, boxShadow: `rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px` }}>
                  <text style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }}>
                    We are Save A Stray and we are an animal NGO based out of Noida. We Are Working Towards Reducing the Human-Animal Conflicts by Helping Our Voiceless Buddies. In this Process we feed and Treat More than 4000 animals Every Month and These Animals Includes Dogs, Cats, Cows and Monkeys.
                    <br />
                    <br />
                    For over 4 years, we’ve been providing a Healthy and Nuritious food for stray dogs, cows in Noida. Where we’ve been feeding over 3000 dogs, and currently rescue 3-4 dogs every day, many of whom are paralyzed, blind and have chronic illnesses.
                  </text>
                  <iframe style={{ margin: `0.78rem 0` }} width="100%" className="donatePageImg" src="https://www.youtube.com/embed/B3MPkT0wXQI" title="Emergency Save A STray! Together, Let&#39;s Save 200+ Rescued Dogs by Providing them a Permanent Sanctuary!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <text style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }}>
                    Recently We have Started Some New Works like Feeding Monkeys on Tuesday and Saturday. We Have Also Started Our Animal Shelter named "Sharnam" in Noida.
                    <br />
                    <br />
                    Since We Are Expanding Our Work We Need Support from You because we need more than 8 lakh rupees every Month In order to Do These Activities. Making Arrangment for Money was Never been easier for us, Please Donate a Bit So that We can Make Progess in Our Mission of Making this World a Happy Place to Live for Each and Every Creature of Almighty.
                  </text>
                  <img className="donatePageImg" src={donate3} alt="" style={{ marginTop: `1rem`, objectFit: "cover", borderRadius: 5 }} />
                  <div style={{ padding: `0.7rem 0` }}>
                    <h3 style={{ textDecoration: "underLine", paddingBottom: "1rem" }}>How your contribution will help:</h3>
                    <text style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }}>
                   <span style={{fontWeight:700,fontSize:'17px',textDecoration:"underline"}}>Improvement of Shelter</span> - We Need your Help in Making A Operation Threatre, A Proper Treatment room, A Isolation Area and Increase the Capacity of Animal Shelter. 
                  <br/>
                  <br/>
                  <span style={{fontWeight:700,fontSize:'17px',textDecoration:"underline"}}>Food for Animals</span> - We Also Need Funds for Making food for 3000+ Dogs, Arranging Green Fodder for Cows and Also for Arranging Fresh Fruits for Monkeys.
                  <br/>
                  <br/>
                  <span style={{fontWeight:700,fontSize:'17px',textDecoration:"underline"}}>Medical Needs</span> - We Have to Arrange Funds for Medicines, Fee for Vets and Also We need funds for The Surgeries of Animals.
                  <br/>
                  <br/>
                  <span style={{fontWeight:700,fontSize:'17px',textDecoration:"underline"}}>Other Expenses</span> - Since We Own 5 Vehicles and Animals Ambulances we need Funds for Their Maintainance and Also we Have Team of 12 People Out of Which 5 Are Vounteers but We had to Give Salary to On Site Workers. 
                    </text>
                    <img className="donatePageImg" src={donate2} alt="" style={{ marginTop: `1rem`, objectFit: "cover", borderRadius: 5 }} />
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
                href="https://pages.razorpay.com/pl_GUaNiAa3KYwFiL/view"
              >
                Donate by Debit/credit card
              </a>
              <div style={{ textAlign: "center" }}>
                ——— OR ———
              </div>
              <h4 style={{ color: "#000", textAlign: "center" }}>Scan below QR & Donate using<br />
                <text style={{ fontWeight: 400 }}>Google Pay, PhonePe, Paytm or UPI</text></h4>
              <div className="qr">
                <img id="qr" src={DonateQr} alt="" />
              </div>
              <h4 style={{ color: "#000", textAlign: "center" }}>UPI ID:  <text style={{ fontWeight: "bold", color: "#d99c00" }}>Vidit.kaushik11@okIcici</text></h4>
              <h4 style={{ color: "#000", textAlign: "center" }}>Google Pay number: <text style={{ color: "#d99c00" }}>+91 9899600421</text></h4>
              <div style={{ display: "flex", justifyContent: "space-around", margin: "auto", width: "80%" }}>
                <img src="https://sarvoham.org/wp-content/uploads/2021/12/3-removebg-preview-e1640622497626.png" alt="" width="55px" />
                <img src="https://sarvoham.org/wp-content/uploads/2021/12/1-removebg-preview-e1640622621499.png" alt="" width="55px" />
                <img src="https://sarvoham.org/wp-content/uploads/2021/12/2-removebg-preview-e1640622551799.png" alt="" width="55px" />
                <img src="https://sarvoham.org/wp-content/uploads/2021/12/4-removebg-preview-e1640622417801.png" alt="" width="55px" />
              </div>
            </div>

            <div className="about-image moboPayImg" style={{ width: "100%", paddingTop: 0 }}>
              <img className="donatePageImg" src={donate1} alt="" style={{ marginTop: `1rem`, objectFit: "cover", borderRadius: 5 }} />
            </div>
          </div>
        </div></section></div>
  )
}