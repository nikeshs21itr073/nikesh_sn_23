// components/HomePage.js
import React from 'react';
import B1  from './im/Mb.png'
import A4 from './im/A4.png';

import './Homepage.css'
import B from './im/bens.webp'
import ImageSlider from './Img';
import Footer from './Footer';
import C3 from './im/C3.jpg';
import M1 from './im/M1.png'
import T1 from './im/K1.jpg'
import A from './im/Audia4.jfif'
import { Link } from 'react-router-dom';
import T2 from './im/Toyoto.png';
import NavBar from './Nav';
function HomePage() {
  return (
    <div className="home-page">
 
     
   <NavBar/>
      <ImageSlider />
      <div className="content-container">
        <section className="featured-cars">
          <h2>Featured Cars</h2>
          <div className="car-list">
          <div className="car">
              <img src={T1} alt="Tata Sumo Gold (2012-2019)" />
              <h3>Tata Sumo Gold </h3>
              <p>Year: 2012</p>
              <p>Price: Rs. 5.26 Lakh</p>
              <p>
                The Tata Sumo Gold (2012-2019) is a robust SUV that was introduced in February 2012. It featured
                a 3.0 CR4 four-cylinder diesel engine called Dicor with common rail and direct injection, producing
                85 horsepower and 250 Nm of maximum torque. This SUV was known for its reliability and performance.
              </p>
              </div>
            <div className="car">
              <img src={C3} alt="Pontiac G8 Sportwagon-VF SSV" />
              <h3>Pontiac G8 Sportwagon-VF SSV</h3>
              <p>Year: 2009</p>
              <p>Price: $30000</p>
              <p>
                The Pontiac G8 is a full-size sedan that was produced by Holden in Australia,
                and then exported to the United States, where it was sold by Pontiac. The G8,
                a rebadged Holden Commodore, was released in early 2008 for the 2008 model year
                in the United States, and in 2008 for the 2009 model year in Canada. 
              </p>
              </div>
              <div className="car">
              <img src={M1} alt="Suzuki Baleno" />
              <h3> Maruthi Suzuki Baleno</h3>
              <p>Year: 2022</p>
              <p>Price : Rs 45.00 lakh</p>
              <p>
                The Suzuki Baleno is a subcompact car produced by the Japanese manufacturer Suzuki
                in India since September 2015 with a hatchback body style. It offers a range of engine
                options, including petrol and diesel, as well as a hybrid variant. The car is built on
                the HEARTECT platform, known for its lightweight construction.
              </p>
              <div className="car">
  <img src={T2} alt="Toyota Fortuner" />
  <h3>Toyota Fortuner</h3>
  <p>Year: 2015</p>
  <p>Price : Rs  35.00 Lakh </p>
  
 
  <p>
    The Toyota Fortuner is a powerful SUV with a seating capacity of seven people. It is available in India at a price range of Rs. 32.99 Lakh to 50.74 Lakh. The Fortuner offers a choice between petrol and diesel engines and comes with both manual and automatic transmission options. With features like airbags, ABS, and adjustable seating, the Fortuner ensures a safe and comfortable ride.
  </p>
</div>
<div className="car">
  <img src={B1} alt="Mercedes-Benz GLA" width={800} />
  <h3>Mercedes-Benz GLA</h3>
  <p>Year: 2018</p>
  <p>Price : Rs 45.00 Lakh </p>
  
  <p>
    The Mercedes-Benz GLA is a premium SUV known for its luxurious features and performance. It is available in India at a price range of Rs. 48.50 Lakh to 65.00 Lakh (Ex-showroom Price). The GLA offers both petrol and diesel engine options and comes with automatic transmission. With AWD (All-Wheel Drive) capability, it ensures excellent handling in various conditions. Loaded with advanced features like airbags, ABS, and power steering, the GLA provides a safe and comfortable ride.
  </p>
</div>
<div className="car">
  <img src={A4} alt="Audi A4" />
  <h3>Audi A4</h3>
  <p>Year: 2017</p>
  <p>Price : Rs 43.00 Lakh </p>
  
  <p>About Audi A4</p>
  <p>
    The Audi A4 is a stylish sedan with advanced features and powerful performance. It is powered by a 2.0 L TFSI petrol engine with mild-hybrid technology, delivering 187.74bhp of power and 320Nm of torque. The car offers comfortable seating for five passengers and comes with a spacious boot space of 460 litres. With a sleek sedan body type, the Audi A4 combines luxury with practicality. Key features include power steering, power windows, ABS, air conditioning, airbags, fog lights, alloy wheels and more.
  </p>
</div>


          </div>
          </div>
        </section>
        <section className="about-us">
          <h2>About Us</h2>
          
          <p>
            Welcome to Dream car Motors, your one-stop destination for the best deals on new and used cars.
            We offer a wide range of vehicles to suit your needs and budget.
          </p>

          
          
        </section>
      

      
       
       
      </div>
     
      
     <Footer/>
      </div>
     
   
  );
}

export default HomePage;
