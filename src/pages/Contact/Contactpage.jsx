import { Helmet } from "react-helmet";

export default function Contactpage() {
  return (
    <>
      <Helmet>
        <title>  Contact us - Save A Stray, Noida</title>
        <meta name="description" content="We Serve happiness to Stray animals , Save a Stray is a Animal welfare organisation in Noida Sector 116 and serving food to 3000+ dogs and 200+ Cattles in various locations." />
        <meta name="keywords" content="Save A stray, animal shelter, animal welfare centre, about us,Vidit sharma , save a stray noida" />
      </Helmet>
      <div className="menu-box">
        <div className="container">
          <h2>Contact us</h2>
        </div>
      </div>
      <section className="contact-section info-section">
        <div className="container">

          <div className="contact-content">

            <div className="contact-page">
              <div className="section-details">
                <h3>Drop us a line</h3>
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
                    placeholder="Write Message Here..."
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
                  ".gmap_canvas {\noverflow: hidden;\nbackground: none!important;\nheight: 380px;\nwidth: 50%;\nbox-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;\n}",
              }}
            />
          </div>
        </div>
        <div className="container odds contact-details">
          <div className="section-details">
            <h3>Get in Touch</h3>
            <hr />
          </div>
          <div className="contact-box-content">

            <div className="contact-box">

              <div className="item">

                <h3>

                  <i className="fa fa-envelope"> </i>Email - contact@saveastray.in
                </h3>
              </div>
              <div className="item">

                <h3>

                  <i className="fa fa-phone"> </i>Call us - +91 98996 00421
                </h3>
              </div>
            </div>
            <div className="contact-box">

              <div className="item">

                <h3>

                  <i className="fa fa-map-marker-alt"> </i>Kitchen Address – SK 27 D
                  Sector 116 Noida - 201301
                </h3>
              </div>
              <div className="item">

                <h3>
                  <i className="fa fa-map-marker-alt"> </i>Delivery Address – A 329
                  Sector 46 Noida - 201301
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}