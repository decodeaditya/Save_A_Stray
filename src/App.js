import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Home/Homepage';
import Gallerypage from './pages/Gallery/Gallerypage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutpage from './pages/About/Aboutpage';
import Adoptpage from './pages/Adopt/Adoptpage';
import Contactpage from './pages/Contact/Contactpage';
import Donatepage from './pages/Donate/Donatepage';
import NotFound from './pages/404';
import './assets/css/style.css'
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Volunteerpage from './pages/volunteer/volunteer';

function App() {

  const title = "- Save A Stray, Noida"

  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{paddingTop:"90px"}}>
          <Routes>
            <Route index exact path='/' element={<Homepage title={title} />} />
            <Route path='/about' element={<Aboutpage title={title} />} />
            <Route path='/gallery' element={<Gallerypage title={title} />} />
            <Route path='/volunteer' element={<Volunteerpage title={title} />} />
            <Route path='/adopt' element={<Adoptpage title={title} />} />
            <Route path='/contact' element={<Contactpage title={title} />} />
            <Route path='/donate' element={<Donatepage title={title} />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/terms-and-conditions' element={<Terms title={title} />} />
            <Route path='/privacy-policy' element={<Privacy title={title} />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
