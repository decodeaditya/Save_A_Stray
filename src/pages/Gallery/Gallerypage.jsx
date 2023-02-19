import { Helmet } from "react-helmet";
import gallery1 from '../../assets/images/gallery-2.jpg'
import gallery2 from '../../assets/images/gallery-5.jpg'
import gallery3 from '../../assets/images/Dogs 78 6.webp'
import gallery4 from '../../assets/images/image2.jpg'
import gallery5 from '../../assets/images/puppies.webp'
import gallery6 from '../../assets/images/shelter-2.webp'
import gallery7 from '../../assets/images/shelter-1.webp'
import gallery8 from '../../assets/images/Dogs 78.webp'

export default function Gallerypage() {
    return (
        <>
            <Helmet>
                <title>  Gallery - Save A Stray, Noida</title>
                <meta name="description" content="We Serve happiness to Stray animals , Save a Stray is a Animal welfare organisation in Noida Sector 116 and serving food to 3000+ dogs and 200+ Cattles in various locations." />
                <meta name="keywords" content="Save A stray, animal shelter, animal welfare centre, about us,Vidit sharma , save a stray noida" />
            </Helmet>

            <div className="menu-box">
                <div className="container">
                    <h2>Gallery</h2>
                </div>
            </div>
            <section className="gallery-section info-section">
                <div className="container">
                    <div className="gallery-content">

                        <div className="gallery-row">

                            <div className="gallery-column">

                                <div className="image-content">
                                    <img src={gallery1} alt="rescue" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery2} alt="awards" loading="lazy" />
                                </div>
                            </div>
                            <div className="gallery-column">

                                <div className="image-content">
                                    <img src={gallery3} alt="rescue" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery4} alt="feeding" loading="lazy" />
                                </div>
                            </div>
                            <div className="gallery-column">

                                <div className="image-content">

                                    <img src={gallery5} alt="feeding" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery6} alt="dogs" loading="lazy" />
                                </div>
                            </div>
                            <div className="gallery-column">

                                <div className="image-content">
                                    <img src={gallery7} alt="love" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery8} alt="puppies" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}