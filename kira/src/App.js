import './App.css';
import RegistrationU from './components/RegistrationU';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Time } from "./components/Time";
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<><Header /><Home /><Footer/></>} />
          <Route path="/Contact" element={<><Header />< Contact /></>} />
          {/* <Route path="/Profile" element={<><Header /><Profile /></>} /> */}

          <Route path="/Login" element={<><Login /></>} />
          <Route path="/RegistrationU" element={<><RegistrationU /></>} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
