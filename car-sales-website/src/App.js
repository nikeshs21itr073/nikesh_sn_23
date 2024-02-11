import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch



import HomePage from './H1';
import Home1 from './Home1';

import carImage from './im/car.jpeg';
import car1Image from './im/car1.jpeg';
import car2Image from './im/car2.jpeg';
import l1Image from './im/l1.jpeg';
import l3Image from './im/l3.jpeg';
import l4Image from './im/l4.jpeg';
import img3Image from './im/img3.jpeg';
import img2Image from './im/img2.jpeg';
import imgImage from './im/img.jpeg';
import i1Image from './im/i1.jpeg';
import i2Image from './im/i2.jpeg';
import LoginForm from './Login';
import SignupForm from './Signup';
import AboutUs from './about';
import NavBar from './Nav';
import CarDetails from './Cars';
import Footer from './Footer';
import HomePage1 from './Home2';
import Loginform from './Loginform';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signupform from './Signupform'
import NewCars from './NewCars';
import UsedCars from './Usedcars';
import SellCar from './sellcar';
import BookingForm from './BookingForm';
import Sigg from './Sigin';
import L from './ni';
function App() {
  return (
    
    <Router>
      <div>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<HomePage1/>} />
         
          <Route path="/Signup" element={<Sigg />} />
          <Route path="/Login" element={<L/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/car" element={<CarDetails/>} />
          <Route path="/Newcars" element={<NewCars/>} />
          <Route path="/Usedcars" element={<UsedCars/>} />
          
         
          <Route path="/BookingForm/:carName/:carPrice" element={<BookingForm />} />

          
          
         
          
          


        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
