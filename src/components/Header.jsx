import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import menu from '../assets/images/menu.png'
import cancel from '../assets/images/cancel.png'
import { useState, useEffect } from 'react';

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [headerAnimation,setHeaderAnimation] = useState(false)

  const url = useLocation()
  const path = url.pathname.split("/")[1]

  useEffect(() => {
    setMenuOpen(false)
    document.body.scrollIntoView({ behavior: 'smooth' });
  }, [path])

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      setHeaderAnimation(true)

    } else {
    setHeaderAnimation(false)
    }

  }

  return (
    <header className={headerAnimation ? "header-animation" : ""}>
      <nav>
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" loading="lazy" />
          </div>
        </Link>
        <ul className={menuOpen ? "navlinks nav-active" : "navlinks"}>
          <li>
            <Link to="/" id={path === "" ? "active" : ""}> Home
            </Link>
          </li>
          <li>
            <Link to="/about" id={path === "about" ? "active" : ""}>About us</Link>
          </li>
          <li>
            <Link to="/gallery" id={path === "gallery" ? "active" : ""}>Gallery</Link>
          </li>
          <li>
            <Link to="/volunteer" id={path === "volunteer" ? "active" : ""}>Volunteer</Link>
          </li>
          <li>
            <Link to="/adopt" id={path === "adopt" ? "active" : ""}>Adopt a Pet</Link>
          </li>
          <li>
            <Link to="/contact" id={path === "contact" ? "active" : ""}>Contact us</Link>
          </li>
          <li>
            <Link id="btn" to="/donate">
              Donate Now
            </Link>
          </li>
          <div className="cancel" onClick={() => { setMenuOpen(false) }}>
            <img src={cancel} alt="cancel" loading="lazy" />
          </div>
        </ul>
        <div className="mobile">
          <Link id="btn" to="/donate">
            Donate Now
          </Link>
          <div className="bars" onClick={() => { setMenuOpen(true) }}>
            <img src={menu} alt="menu" loading="lazy" />
          </div>
        </div>
      </nav>
    </header>
  );
}