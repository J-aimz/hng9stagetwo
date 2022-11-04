import {Routes, Route} from 'react-router-dom'

// import pages
import Home from './pages/Home';
import Contact from './pages/Contact';

// components
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <div className="body">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer/>

      </div>
    </div>
      
  );
}


export default App;
