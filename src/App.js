
import './App.css';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer'
import Contact from './components/Contact';


function App() {
  return (
  <>

    
  <Router>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Services' element={<Services/>} />
      <Route path='/#about' element={<about/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
