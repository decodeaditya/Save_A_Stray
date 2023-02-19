import { Helmet } from "react-helmet";
import '../../assets/css/donate.css'
import DonateHero from '../../assets/images/Donatehero.webp'
import DonateQr from '../../assets/images/paytmqr.jpeg'

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
        <div className="container my">
          <div className="about-content">

            <div className="about-image">

              <img src={DonateHero} alt="" />
            </div>
            <div className="about-text">

              <div className="section-details">
                <h3>Donation is used in</h3>
                <hr />
              </div>
              <div className="item"> 1) Construction of Shelter </div>
              <div className="item"> 2) Medicines for animals </div>
              <div className="item"> 3) Food for animals </div>
              <div className="item"> 4) Salaries of Team</div>
              <div className="item"> 5) Other Expenses of centre </div>
              <div className="section-details">
                <h3>Donate through Bank</h3>
                <hr />
              </div>
              <div className="item"> Bank Name: indusind bank</div>
              <div className="item"> Branch Name: Noida Sector 18</div>
              <div className="item"> Bank account Number: 201006594696</div>
              <div className="item"> Name as in Bank: Save a Stray</div>
              <div className="item"> Bank IFSC code: INDB0000036 </div>
            </div>
          </div>
        </div>
        <div className="container odds contact-details my">
          <div className="contact-box-content">

            <div className="contact-box">

              <div className="item">

                <h3>

                  <a
                    id="btn"
                    href="https://pages.razorpay.com/pl_GUaNiAa3KYwFiL/view"
                  >
                    Donate by Debit/credit card
                  </a>
                </h3>
              </div>
              <div className="item">

                <h3>

                  <a
                    id="btn"
                    href="https://campaign.impaac.org/fundraisers/Support-%22Save-A-Stray%22-To-Feed-Stray-Animals-In-Noida/627ba8e5091d3a3a86a09740"
                  >
                    Donate on Impaac
                  </a>
                </h3>
              </div>
            </div>
            <div className="contact-box">

              <div className="item">

                <h3>

                  <a
                    id="btn"
                    href="https://milaap.org/fundraisers/support-stray-animals-258"
                  >
                    Donate on Milaap
                  </a>
                </h3>
              </div>
              <div className="item">

                <h3>

                  <a
                    id="btn"
                    href="https://www.ketto.org/fundraiser/help-vidit-to-feed-thousands-of-hungry-stray-animals"
                  >
                    Donate on Ketto
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">

          <div className="about-content">

            <div className="about-text">

              <div className="section-details">
                <h2>Donate By Paytm/Gpay</h2>
                <hr />
              </div>
              <div className="item">

                If you want to donate to Save a Stray by NetBanking, then you can
                donate through Paytm/Gpay on <strong> +91 98996 00421 </strong>or
                scan to given qr code.
              </div>
            </div>
            <div className="about-image qr">

              <img id="qr" src={DonateQr} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}