import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { db } from "../../firebase";

export default function Adoptpage() {

  const [pets, setPets] = useState([])


  useEffect(() => {
    const getPets = async () => {
      const docSnap = await getDoc(doc(db, 'adopt', 'yB810JxrJWZX5EvopsKl'))
      setPets(docSnap.data().pets.reverse())
      return docSnap
    }

    getPets()
  }, [])

  return (
    <>
      <Helmet>
        <title>  Adopt a Friend - Save A Stray, Noida</title>
        <meta name="description" content="We Serve happiness to Stray animals , Save a Stray is a Animal welfare organisation in Noida Sector 116 and serving food to 3000+ dogs and 200+ Cattles in various locations." />
        <meta name="keywords" content="Save A stray, animal shelter, animal welfare centre, about us,Vidit sharma , save a stray noida" />
      </Helmet>
      <div className="menu-box">
        <div className="container">
          <h2>Adopt a Friend</h2>
        </div>
      </div>
      <section className="adopt-section info-section">
        <div className="container">
          <div className="adopt-content">
            {pets.map((pet) => (
              <div className="adopt-card">
                <img src={pet?.img} alt="" loading="lazy" />
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
          <h4 style={{ textAlign: "center", color: "#000" }}>
            If you Had any Queries Related to Adoption Please Contact on
            <Link to="tel:919899600421" style={{ color: "#8e690c" }}> +91 9899600421</Link>
          </h4>
        </div>
      </section>
    </>
  )
}