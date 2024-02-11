// components/HomePage.js
import React, { useState } from 'react';
import B1 from './im/Mb.png';
import A4 from './im/A4.png';
import B from './im/bens.webp';
import ImageSlider from './Img';
import Footer from './Footer';
import C3 from './im/C3.jpg';
import M1 from './im/M1.png';
import T1 from './im/K1.jpg';
import A from './im/Audia4.jfif';
import { Link } from 'react-router-dom';
import T2 from './im/Toyoto.png';
import K4 from './im/K4.png'
import NavBar from './Nav';
import './Homepage.css'; // Import your custom CSS for the homepage
import A41 from './im/A41.png'
import Q7 from './im/q71.jfif'
import RS5 from './im/RS51.png'

import Eon1 from  './im/Eon1.jfif'
import  Fortuner from'./im/fortuner1.jfif'
import swift from './im/swift2.jfif'
import innova from  './im/innova1.webp'
import alto from './im/alto1.jfif'

import alto2 from './im/alto2.png'
import BookingForm from './BookingForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewCars from './NewCars';
import UsedCars from './Usedcars';
import SellCar from './sellcar';
function HomePage1() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const carName="Tata Sumo Gold"
  const carPrice="5 lakh"

  return (


    <div className="home-page">
      <NavBar />
      <ImageSlider />
      <NewCars/>
      <UsedCars/>
      <SellCar/>
      
      <div className="content-container">
        <section className="featured-cars">
          <h2>Featured Cars</h2>
          <div className="car-list">
            {/* Individual car items */}
            <div className="car">
              <img src={C3} alt="Pontiac G8 Sportwagon-VF SSV" width={450}/>
              <h3>Pontiac G8 Sportwagon-VF SSV</h3>
              <p>Year: 2009</p>
              <p>Price: $30000</p>
              <p>
                The Pontiac G8 is a full-size sedan that was produced by Holden in Australia,
                and then exported to the United States, where it was sold by Pontiac. The G8,
                a rebadged Holden Commodore, was released in early 2008 for the 2008 model year
                in the United States, and in 2008 for the 2009 model year in Canada. 
              </p>
              <Link to={`/BookingForm/${encodeURIComponent("Pontiac G8 Sportwagon-VF SSV")}/${encodeURIComponent(" $30000")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
            </div>
            
            <div className="car">
              <img src={T1} />
             
              
              <h3>Tata Sumo Gold </h3>
              <p>Year: 2012</p>
              <p>Price: Rs. 5.26 Lakh</p>
              <div className="i3">
              <p>
                The Tata Sumo Gold (2012-2019) is a robust SUV that was introduced in February 2012. It featured
                a 3.0 CR4 four-cylinder diesel engine called Dicor with common rail and direct injection, producing
                85 horsepower and 250 Nm of maximum torque. This SUV was known for its reliability and performance.
              </p>
              </div>
              <Link to={`/BookingForm/${encodeURIComponent(carName)}/${encodeURIComponent("Rs. 5.26 Lakh*")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
            </div>
           
            <div className="car">
            <img src={A41} alt="Audi A4" width={500}/>
          <h2> Audi A4</h2>
          <p>Year: 2022</p>
              <p>Price: $50000</p>
         
          <p>
            Although the current-generation A4 is getting on in years, it offers a compelling blend of performance, refinement, technology, and interior quality for the price. Look elsewhere if you need a sport sedan that'll get your heart pumping, but for across-the-board excellence at a fair price, the A4 remains tough to top.
          </p>
          <Link to={`/BookingForm/${encodeURIComponent("Pontiac G8 Sportwagon-VF SSV")}/${encodeURIComponent(" $30000")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
          
          </div>

          <div className="car">
              <img src={Q7} alt="Audi Q7" width={900} />
              <h3>Audi Q7</h3>
              <p>Year: 2022 </p>
              <p>Price: Rs. 84.70 Lakh </p>
              <p>
                The Audi Q7 is a luxurious SUV known for its premium features and powerful performance.
                It is available with a 2995 cc petrol engine and automatic transmission. With a 7-seater
                configuration and 6 cylinders, the Q7 offers both comfort and performance. The car has
                a length of 5064mm, width of 2212mm, and a wheelbase of 2999mm, ensuring spacious interiors
                for passengers.
              </p>
              <Link to={`/BookingForm/${encodeURIComponent("Audi Q7")}/${encodeURIComponent(" Rs. 84.70 Lakh *")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
            </div>
            <div className="car">
              <img src={M1} alt="Suzuki Baleno" />
              <h3>Maruti Suzuki Baleno</h3>
              <p>Year: 2022</p>
              <p>Price : Rs 45.00 lakh</p>
              <p>
                The Suzuki Baleno is a subcompact car produced by the Japanese manufacturer Suzuki
                in India since September 2015 with a hatchback body style. It offers a range of engine
                options, including petrol and diesel, as well as a hybrid variant. The car is built on
                the HEARTECT platform, known for its lightweight construction.
              </p>
              <Link to={`/BookingForm/${encodeURIComponent("Maruti Suzuki Baleno")}/${encodeURIComponent(" Rs 45.00 lakh*")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
            </div>
            <div className="car">
              <img src={T2} alt="Toyota Fortuner" />
             <div id="i9">
              <h3>Toyota Fortuner</h3>
              <p>Year: 2015</p>

              <p>Price : Rs  35.00 Lakh </p>
              <p>
                The Toyota Fortuner is a powerful SUV with a seating capacity of seven people. It is available in India at a price range of Rs. 32.99 Lakh to 50.74 Lakh. The Fortuner offers a choice between petrol and diesel engines and comes with both manual and automatic transmission options. With features like airbags, ABS, and adjustable seating, the Fortuner ensures a safe and comfortable ride.
              </p>
              <Link to={`/BookingForm/${encodeURIComponent("Toyota Fortuner")}/${encodeURIComponent("Rs  35.00 Lakh* ")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
            </div>
            </div>
            </div></section>
            </div>
            <div className="content-container">
        <section className="featured-cars">
          <h2>Top Branded Cars</h2>
          <div className="car-list">
            
          <div className="car">
  <img src={alto2} alt="Maruti Alto K10" width={500} />
  <h3>Maruti Alto K10</h3>
  <p>Year: 2022</p>
  
  <p>Price: 5.96 Lakh</p>
  <p>
    The Maruti Alto K10 has 1 Petrol Engine and 1 CNG Engine on offer. The Petrol engine is 998 cc while the CNG engine is 998 cc. It is available with Manual & Automatic transmission. Depending upon the variant and fuel type, the Alto K10 has a mileage of 24.39 kmpl to 33.85 km/kg. The Alto K10 is a 5 seater 3 cylinder car and has a length of 3530mm, width of 1490, and a wheelbase of 2380.
  </p>
  <Link to={`/BookingForm/${encodeURIComponent("Maruti Alto K10")}/${encodeURIComponent(" 5.96 Lakh*")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
  </div> 
  <div className="car">
              <img src={B1} alt="Mercedes-Benz GLA" width={1000} />
              <h3>Mercedes-Benz GLA</h3>
              <p>Year: 2018</p>
              <p>Price : Rs 45.00 Lakh </p>
              <p>
                The Mercedes-Benz GLA is a premium SUV known for its luxurious features and performance. It is available in India at a price range of Rs. 48.50 Lakh to 65.00 Lakh (Ex-showroom Price). The GLA offers both petrol and diesel engine options and comes with automatic transmission. With AWD (All-Wheel Drive) capability, it ensures excellent handling in various conditions. Loaded with advanced features like airbags, ABS, and power steering, the GLA provides a safe and comfortable ride.
              </p>
              <Link to={`/BookingForm/${encodeURIComponent("Mercedes-Benz GLA")}/${encodeURIComponent("Rs 45.00 Lakh*")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
            </div> 
  
<div className="car">
  <img src={RS5} alt="Audi RS5" width={500}/>
  <h3>Audi RS5</h3>
  <p>Year: 2022</p>
  <p>Price: Rs. 1.13 Cr*</p>
  <p>
    The Audi RS5 is a high-performance sports car that combines power and luxury. It is equipped with a 2894cc petrol engine, offering exhilarating performance. The car comes with automatic transmission and offers a mileage of 8.8 kmpl. With its 4-seater configuration and 6 cylinders, the Audi RS5 provides a thrilling driving experience.
  </p>
  <Link to={`/BookingForm/${encodeURIComponent("Audi RS5")}/${encodeURIComponent("Price: Rs. 1.13 Cr*")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
</div>
  
<div className="car">
            <img src={K4} alt="Toyota Fortuner" />
          <h2>Tata Altroz</h2>
          <p>Year: 2020</p>


        <p>Price : Rs  10 Lakh </p>
          
          
          <p>The Tata Altroz has 1 Diesel Engine, 1 Petrol Engine, and 2 CNG Engines on offer.
          The Diesel engine is 1497 cc, the Petrol engine is 1199 cc, while the CNG engines are 1199 cc and 1198 cc.
          </p>
          <Link to={`/BookingForm/${encodeURIComponent("Tata Altroz")}/${encodeURIComponent("Rs 10 Lakh*")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
          </div>


            
            </div></section></div>
            <div className="content-container">
        <section className="featured-cars" id='used'>
          <h2>Used Cars</h2>
          <div className="car-list">
            <div className="car">
              <img src={A4} alt="Audi A4"width={450} />
              <h3>Used Audi A4</h3>
              <p>Year: 2017</p>
              <p>Price : Rs 43.00 Lakh </p>
              
              <p>
                The Audi A4 is a stylish sedan with advanced features and powerful performance. It is powered by a 2.0 L TFSI petrol engine with mild-hybrid technology, delivering 187.74bhp of power and 320Nm of torque. The car offers comfortable seating for five passengers and comes with a spacious boot space of 460 litres. With a sleek sedan body type, the Audi A4 combines luxury with practicality. Key features include power steering, power windows, ABS, air conditioning, airbags, fog lights, alloy wheels and more.
              </p>
              <Link to={`/BookingForm/${encodeURIComponent("Audi A4")}/${encodeURIComponent("Rs 43.00 Lakh*")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
            </div>
            
            
           < div className="car">
              <img src={swift} alt="Maruti Swift"width={500} />
              <h3>Used Maruti Swift</h3>
              <p>Year: 2022</p>
              <p>Price: 9.03 Lakh*</p>
              <div className="i3">
                <p>
                  The Maruti Swift has 1 Petrol Engine and 1 CNG Engine on offer. The Petrol engine is 1197 cc while the CNG engine is 1197 cc. It is available with Manual & Automatic transmission. Depending upon the variant and fuel type, the Swift has a mileage of 22.38 kmpl to 30.9 km/kg. The Swift is a 5 seater 4 cylinder car and has a length of 3845mm, width of 1735, and a wheelbase of 2450.
                </p>
              </div>
              <Link to={`/BookingForm/${encodeURIComponent("Maruti Swift")}/${encodeURIComponent("9.03 Lakh*")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
            </div>
            <div className="car">
              <img src={Eon1} alt="Hyundai EON" width={500}/>
              <h3>Used Hyundai EON</h3>
              <p>Price:  4.68 Lakh*</p>
              <div className="i3">
                <p>
                  The Hyundai EON has 2 Petrol Engine and 1 LPG Engine on offer. The Petrol engine is 814 cc and 998 cc while the LPG engine is 814 cc. It is available with Manual transmission. Depending upon the variant and fuel type, the EON has a mileage of 20.3 to 22.0 kmpl & Ground clearance of EON is 170mm. The EON is a 5 seater 3 cylinder car and has a length of 3515mm, width of 1550mm, and a wheelbase of 2380mm.
                </p>
              </div>
              <Link to={`/BookingForm/${encodeURIComponent("Hyundai EON")}/${encodeURIComponent(" 4.68 Lakh*")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
              </div>
            
              <div className="car">
              <img src={Fortuner} alt="Toyota Fortuner" width={550}/>
              <h3>Used Toyota Fortuner</h3>
              <p>Price: Rs. 32.99 Lakh*</p>
              <div className="i3">
                <p>
                  The Toyota Fortuner has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 2755 cc while the Petrol engine is 2694 cc. It is available with Manual & Automatic transmission. Depending upon the variant and fuel type, the Fortuner has a mileage of 10.0 kmpl. The Fortuner is a 7 seater 4 cylinder car and has a length of 4795mm, width of 1855mm, and a wheelbase of 2745mm.
                </p>
              </div>
              <Link to={`/BookingForm/${encodeURIComponent("Toyota Fortuner")}/${encodeURIComponent(" Rs. 32.99 Lakh*")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
              </div>
              <div className="car">
              <img src={innova} alt="Toyota Innova"width={600} />
              <h3>Used Toyota Innova</h3>
              <p>Price: 16.73 Lakh*</p>
              <div className="i3">
                <p>
                  The Toyota Innova has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 2494 cc while the Petrol engine is 1998 cc. It is available with Manual transmission. Depending upon the variant and fuel type, the Innova has a mileage of 11.4 to 12.99 kmpl. The Innova is a 7 seater 4 cylinder car and has a length of 4585mm, width of 1765mm, and a wheelbase of 2750mm.
                </p>
              </div>
              <Link to={`/BookingForm/${encodeURIComponent("Toyota Innova")}/${encodeURIComponent("16.73 Lakh*")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
              </div>
              <div className="car">
              <img src={alto} alt="Maruti Alto" width={450}/>
              <h3>Used Maruti Alto</h3>
              <p>Price: Rs.3.80 Lakh*</p>
              <div className="i3">
                <p>
                  The Maruti Alto has 2 Petrol Engine and 1 CNG Engine on offer. The Petrol engine is 796 cc and 1061 cc while the CNG engine is 796 cc. It is available with Manual transmission. Depending upon the variant and fuel type, the Alto has a mileage of 18.9 kmpl to 26.83 km/kg. The Alto is a 5 seater 3 cylinder car and has a length of 3495mm, width of 1475mm, and a wheelbase of 2360mm.
                </p>
              </div>
              <Link to={`/BookingForm/${encodeURIComponent("Maruti Alto")}/${encodeURIComponent("Rs.3.80 Lakh*")}`}>
              <button  id='i10' className="mt-3 btn app-main-btn text-white rounded-pill">Book Now</button> 
</Link>
              </div>
         
         </div>
        </section>
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            Welcome to Dream Car Motors, your one-stop destination for the best deals on new and used cars. We offer a wide range of vehicles to suit your needs and budget.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage1;
