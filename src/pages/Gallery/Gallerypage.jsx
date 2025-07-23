import { Helmet } from "react-helmet";
import gallery1 from '../../assets/images/gallery-9.jfif'
import gallery2 from '../../assets/images/gallery-3.webp'
import gallery3 from '../../assets/images/gallery-5.jpg'
import gallery4 from '../../assets/images/gallery-7.jfif'
import gallery5 from '../../assets/images/gallery-6.jfif'
import gallery6 from '../../assets/images/gallery1.webp'
import gallery14 from '../../assets/images/gallery-17.jfif'
import gallery8 from '../../assets/images/gallery-4.jpg'
import gallery9 from '../../assets/images/shelter-3.webp'
import gallery10 from '../../assets/images/home-about.jpg'
import gallery11 from '../../assets/images/gallery-10.webp'
import gallery12 from '../../assets/images/gallery-12.jfif'
import gallery13 from '../../assets/images/puppies.webp'
import gallery7 from '../../assets/images/gallery-14.webp'
import gallery15 from '../../assets/images/shelter-1.webp'
import gallery16 from '../../assets/images/gallery-15.jfif'

export default function Gallerypage() {
    return (
        <>
            <Helmet>
                <title>  Gallery - Save A Stray, Noida</title>
                <meta name="description" content="We Do our Best to Serve happiness to Stray animals. Save a Stray is an animal welfare organization located in Noida, Uttar Pradesh that feeds and cares for street animals. Through our efforts, we aim to inspire the community to value the lives of all animals." />
                <meta name="keywords" content="Save A stray, animal shelter, animal welfare centre, about us,Vidit sharma , save a stray noida" />
            </Helmet>

            <div className="menu-box">
                <div className="container">
                    <h2>Gallery</h2>
                </div>
            </div>
            <section className="gallery-section info-section">
                <div className="container">
                    <div className="section-details">
                        <h2 style={{ fontSize: "30px" }}>Memorable Moments</h2>
                        <hr style={{ marginBottom: 0 }} />

                    </div>
                    <div className="gallery-content">

                        <div className="gallery-row">

                            <div className="gallery-column">

                                <div className="image-content">
                                    <img src={gallery1} alt="rescue" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery2} alt="awards" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery9} alt="rescue" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery10} alt="awards" loading="lazy" />
                                </div>
                            </div>
                            <div className="gallery-column">

                                <div className="image-content">
                                    <img src={gallery3} alt="rescue" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery4} alt="feeding" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery11} alt="rescue" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery12} alt="feeding" loading="lazy" />
                                </div>
                            </div>
                            <div className="gallery-column">

                                <div className="image-content">

                                    <img src={gallery5} alt="feeding" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery6} alt="dogs" loading="lazy" />
                                </div>
                                <div className="image-content">

                                    <img src={gallery13} alt="feeding" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery14} alt="dogs" loading="lazy" />
                                </div>
                            </div>
                            <div className="gallery-column">

                                <div className="image-content">
                                    <img src={gallery7} alt="love" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery8} alt="puppies" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery15} alt="love" loading="lazy" />
                                </div>
                                <div className="image-content">
                                    <img src={gallery16} alt="puppies" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}