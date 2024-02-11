import React from 'react';
import './c1.css'
import T from './im/Toyoto.png';
import B1 from './im/Mb.png';
import A from './im/Audia4.jfif'
import A41 from './im/A41.png'
import B from './im/bens.webp'
import C3 from './im/C3.jpg';
import M1 from './im/M1.png'
import T1 from './im/K1.jpg'
import T4 from './im/K4.png'
import Q7 from './im/Q7.jfif'
import RS5 from './im/RS51.png'
import eon from  './im/Eon1.jfif'
import  fortuner from'./im/fortuner1.jfif'
import swift from './im/swift2.jfif'
import innova from  './im/innova1.webp'
import alto from './im/alto1.jfif'
import NavBar from './Nav';
import Footer from './Footer';
import alto2 from './im/alto2.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function CarDetails() {
  
  return (
    <div>
      <NavBar/>
      
    <div className="car-details-page" id="i3">
    
    <h1 >Our Cars</h1>
    

    <div className="car-details-container">
     
      <div className="car-image">
        <img src={T} alt="Car Name" style={{ width: '100%', height: 'auto' }}/>
       
      </div>
      <div className="car-info">
        <h2>Toyota Fortuner</h2>
        <p>
          <strong>Price Range:</strong> Rs. 32.99 Lakh - 50.74 Lakh 
        </p>
        <p>
          <strong>Seating Capacity:</strong> 7
        </p>
        <p>
          <strong>Available Variants:</strong> 7
        </p>
        <p>
          <strong>Available Colors:</strong> 7
        </p>
        <p>
          <strong>Engine Options:</strong>
        </p>
        <p>
          Petrol: 2694cc, 163.60bhp, 245nm
        </p>
        <p>
          Diesel: 2755cc, 163.60bhp, 245nm
        </p>
        <p>
          <strong>Transmission Options:</strong> Manual / Automatic
        </p>
        <p>
          <strong>Mileage:</strong>
        </p>
        <p>
          Petrol: 10 Kmpl
        </p>
        <p>
          Diesel: 8 Kmpl
        </p>
        <p>
          <strong>Features:</strong>
        </p>
        <ul>
          <li>Airbags (Driver, Passenger, and Side Front)</li>
          <li>Adjustable Front Passenger Seat</li>
          <li>ABS</li>
          <li>AC</li>
          <li>Central Locking</li>
          <li>Power Steering</li>
          <li>Max Torque (500Nm@1600-2800rpm)</li>
          <li>Drive Type: 4WD</li>
          <li>Body Type: SUV</li>
        </ul>
      
      </div>
      <div className="car-description">
        <h3>About Toyota Fortuner</h3>
        <p>
          The Toyota Fortuner is a powerful SUV with a seating capacity of seven people.
          It is available in India at a price range of Rs. 32.99 Lakh to 50.74 Lakh.
          The Fortuner offers a choice between petrol and diesel engines and comes with
          both manual and automatic transmission options. With features like airbags, ABS,
          and adjustable seating, the Fortuner ensures a safe and comfortable ride.
        </p>
      </div>
      <div className="car-details-container">
  <div className="car-image">
    <img src={RS5} alt="Audi RS5" style={{ width: '100%', height: 'auto' }}/>
  </div>
  <div className="car-info">
    <h2>Audi RS5</h2>
    <p>
            <strong>Price Range:</strong> Rs. 1.13 Crore 
          </p>
          <p>
            <strong>ARAI Mileage:</strong> 8.8 kmpl
          </p>
          <p>
            <strong>Fuel Type:</strong> Petrol
          </p>
          <p>
            <strong>Engine Displacement (cc):</strong> 2894
          </p>
          <p>
            <strong>No. of cylinders:</strong> 6
          </p>
          <p>
            <strong>Max Power (bhp@rpm):</strong> 443.87bhp@5700-6700rpm
          </p>
          <p>
            <strong>Max Torque (nm@rpm):</strong> 600Nm@1900-5000rpm
          </p>
          <p>
            <strong>Seating Capacity:</strong> 4
          </p>
          <p>
            <strong>Transmission Type:</strong> Automatic
          </p>
          <p>
            <strong>Boot Space (Litres):</strong> 465
          </p>
          <p>
            <strong>Fuel Tank Capacity:</strong> 58.0
          </p>
          <p>
            <strong>Body Type:</strong> Coupe
          </p>
    
      
      <h2>Key Features of Audi RS5</h2>
      <ul>
        <li>Power Steering</li>
        <li>Power Windows Front</li>
        <li>Anti-Lock Braking System</li>
        <li>Air Conditioner</li>
        <li>Driver Airbag</li>
        <li>Passenger Airbag</li>
        <li>Fog Lights - Front</li>
        <li>Alloy Wheels</li>
        <li>Multi-function Steering Wheel</li>
      </ul>
    
  </div>
  <div className="car-description">
    <h3>About Audi RS5</h3>
    <p>
      The Audi RS5 is a high-performance coupe known for its power and luxury features.
      It is available in India at a price range of Rs. 1,12,61,000* .
      The RS5 is powered by a 2894cc V6 petrol engine, delivering 443.87bhp of power
      and 600Nm of torque. With an automatic transmission and AWD (All-Wheel Drive),
      it ensures a thrilling driving experience.
    </p>
    
  </div>
  </div>


    
      
  <div className="car-details-container">
  <div className="car-image">
    <img src={alto} alt="Maruti Alto K10" style={{ width: '100%', height: 'auto' }}/>
  </div>
  <div className="car-info">
    <h2>Maruti Suzuki Alto K10</h2>
    <p>
      <strong>Price Range:</strong> Rs. 3.99 Lakh - 5.96 Lakh
    </p>
    <p>
      <strong>ARAI Mileage:</strong> 24.39 - 24.9 kmpl
    </p>
    <p>
      <strong>Fuel Type:</strong> Petrol/CNG
    </p>
    <p>
      <strong>Engine Displacement (cc):</strong> 998
    </p>
    <p>
      <strong>No. of cylinders:</strong> 3
    </p>
    <p>
      <strong>Max Power (bhp@rpm):</strong> 55.92 - 65.71bhp@5500rpm
    </p>
    <p>
      <strong>Max Torque (nm@rpm):</strong> 89Nm@3500rpm
    </p>
    <p>
      <strong>Seating Capacity:</strong> 5
    </p>
    <p>
      <strong>Transmission Type:</strong> Manual/Automatic
    </p>
    <p>
      <strong>Boot Space (Litres):</strong> 214
    </p>
  </div>
  <div className="car-description">
    <h3>About Maruti Suzuki Alto K10</h3>
    <p>
      {/* Add a brief description of the Maruti Alto K10 here */}
      The Maruti Suzuki Alto K10 is a compact and efficient car known for its peppy performance and great fuel efficiency.
      It is available in a price range of Rs. 3.99 Lakh to 5.96 Lakh and comes with both manual and automatic transmission options.
      With its compact design and spacious interior, it's a popular choice for city commuters.
    </p>
  </div>
</div>


      <div className="car-details-container">
        {/* Tata Altroz */}
        <div className="car-image">
          <img src={T4} alt="Tata Altroz" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="car-info">
          <h2>Tata Altroz</h2>
          <p>
            <strong>Price Range:</strong> Rs. 6.60 Lakh - 10.74 Lakh 
          </p>
          <p>
            <strong>ARAI Mileage:</strong> 23.64 kmpl
          </p>
          <p>
            <strong>Fuel Type:</strong> Diesel
          </p>
          <p>
            <strong>Engine Displacement (cc):</strong> 1497
          </p>
          <p>
            <strong>No. of cylinders:</strong> 4
          </p>
          <p>
            <strong>Max Power (bhp@rpm):</strong> 88.77bhp@4000rpm
          </p>
          <p>
            <strong>Max Torque (nm@rpm):</strong> 200Nm@1250-3000rpm
          </p>
          <p>
            <strong>Seating Capacity:</strong> 5
          </p>
          <p>
            <strong>Transmission Type:</strong> Manual
          </p>
          <p>
            <strong>Boot Space (Litres):</strong> 345
          </p>
          <p>
            <strong>Fuel Tank Capacity:</strong> 37.0
          </p>
          <p>
            <strong>Body Type:</strong> Hatchback
          </p>
          <p>
            <strong>Ground Clearance Unladen:</strong> 165
          </p>
        </div>
        <div className="car-description">
          <h3>About Tata Altroz</h3>
          <p>
            The Tata Altroz is a versatile hatchback with impressive specifications.
            It is available in India at a price range of Rs. 6.60 Lakh to 10.74 Lakh
            . This diesel-powered car offers a mileage
            of 23.64 kmpl and comes with a manual transmission. With its spacious
            interior and ample boot space of 345 litres, the Tata Altroz is a great
            choice for those looking for a comfortable and fuel-efficient car.
          </p>
          
        </div>
      </div>
     

< div className="car-details-container">
  <div className="car-image">
   
    <img src={swift} alt="Maruti Swift" style={{ width: '100%', height: 'auto' }} />
  </div>
  <div className="car-info">
    <h2>Maruti Swift</h2>
    <p>
      <strong>Price Range:</strong> Rs. 5.99 Lakh - 9.03 Lakh
    </p>
    <p>
      <strong>ARAI Mileage:</strong> 22.56 kmpl
    </p>
    <p>
      <strong>Fuel Type:</strong> Petrol
    </p>
    <p>
      <strong>Engine Displacement (cc):</strong> 1197
    </p>
    <p>
      <strong>No. of cylinders:</strong> 4
    </p>
    <p>
      <strong>Max Power (bhp@rpm):</strong> 88.50bhp@6000rpm
    </p>
    <p>
      <strong>Max Torque (nm@rpm):</strong> 113Nm@4400rpm
    </p>
    <p>
      <strong>Seating Capacity:</strong> 5
    </p>
    <p>
      <strong>Transmission Type:</strong> Automatic
    </p>
    <p>
      <strong>Boot Space (Litres):</strong> 268
    </p>
  </div>
  <div className="car-description">
    <h3>About Maruti Swift</h3>
    <p>
      The Maruti Swift is a popular hatchback known for its excellent mileage and performance.
      It is available in India at a price range of Rs. 5.99 Lakh to 9.03 Lakh.
      The Swift is powered by a 1197 cc petrol engine, delivering 88.50bhp of power and 113Nm of torque.
      With automatic transmission and a seating capacity of 5, it offers a comfortable and efficient ride.
      The Swift is equipped with features like power steering, power windows, air conditioning, and more.
    </p>
  </div>
</div>



      <div className="car-details-container">
  <div className="car-image">
    <img src={Q7} alt="Audi Q7" style={{ width: '100%', height: 'auto' }} />
  </div>
  <div className="car-info">
    <h2>Audi Q7</h2>
    <p>
      <strong>Price Range:</strong> Rs. 84.70 Lakh - 92.30 Lakh 
    </p>
    <p>
      <strong>Seating Capacity:</strong> 7
    </p>
    <p>
      <strong>Engine Displacement (cc):</strong> 2995
    </p>
    <p>
      <strong>Fuel Type:</strong> Petrol
    </p>
    <p>
      <strong>Mileage:</strong> 11.21 kmpl
    </p>
    <p>
      <strong>Transmission Type:</strong> Automatic
    </p>
    <p>
      <strong>Body Type:</strong> SUV
    </p>
    <p>
      <strong>Key Features:</strong>
    </p>
    <ul>
      <li>Power Steering</li>
      <li>Power Windows Front</li>
      <li>Air Conditioner</li>
      <li>Driver Airbag</li>
      <li>Fog Lights - Front</li>
      <li>Alloy Wheels</li>
      <li>Multi-function Steering Wheel</li>
      <li>Engine Start Stop Button</li>
    </ul>
  </div>
  




  <div className="car-description">
    <h3>About Audi Q7</h3>
    <p>
      The Audi Q7 is a premium SUV known for its luxurious features and powerful performance.
      It is available in India at a price range of Rs. 84.70 Lakh to 92.30 Lakh .
      The Q7 offers a 7-seater configuration and is powered by a 2995cc petrol engine, delivering
      335.25bhp of power and 500Nm of torque. With automatic transmission and AWD (All-Wheel Drive),
      it ensures excellent handling in various conditions.
    </p>
    <p>
      Loaded with advanced features like lane keep assist, Audi's Virtual Cockpit, matrix LED headlamps,
      and 4-zone climate control, the Audi Q7 provides a safe and comfortable ride.
    </p>
  </div>
</div>



<div className="car-image">
          <img src={eon} alt="Hyundai EON" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="car-info">
          <h2>Hyundai EON</h2>
          <p>
            <strong>Price Range:</strong> Rs. 3.33 Lakh - 4.68 Lakh
          </p>
          <p>
            <strong>ARAI Mileage:</strong> 20.3 kmpl (Petrol)
          </p>
          <p>
            <strong>Fuel Type:</strong> Petrol/LPG
          </p>
          <p>
            <strong>Engine Displacement (cc):</strong> 814/998 (Petrol), 814 (LPG)
          </p>
          <p>
            <strong>No. of cylinders:</strong> 3
          </p>
          <p>
            <strong>Max Power (bhp@rpm):</strong> 68.05bhp@6200rpm
          </p>
          <p>
            <strong>Max Torque (nm@rpm):</strong> 94.14Nm@3500rpm
          </p>
          <p>
            <strong>Seating Capacity:</strong> 5
          </p>
          <p>
            <strong>Transmission Type:</strong> Manual
          </p>
          <p>
            <strong>Boot Space (Litres):</strong> 215
          </p>
          <p>
            <strong>Fuel Tank Capacity:</strong> 32.0
          </p>
          <p>
            <strong>Body Type:</strong> Hatchback
          </p>
          <p>
            <strong>Ground Clearance Unladen:</strong> 170mm
          </p>
        </div>
        <div className="car-description">
          <h3>About Hyundai EON</h3>
          <p>
            The Hyundai EON is a compact and efficient hatchback known for its affordability and fuel efficiency.
            It was available in India with a price range of Rs. 3.33 Lakh to 4.68 Lakh .
            The EON came with both petrol and LPG engine options and featured a manual transmission.
            With a seating capacity of 5 and a spacious boot space of 215 litres, the EON was a practical choice for city commuting.
          </p>
        </div>
       
      <div className="car-details-container">
      <div className="car-image">
        <img src={B1} alt="Car Name" />
      </div>
      <div className="car-info">
        <h2>Mercedes-Benz GLA</h2>
        <p>
          <strong>Price Range:</strong> Rs. 48.50 Lakh - 65.00 Lakh
        </p>
        <p>
          <strong>Seating Capacity:</strong> 5
        </p>
        <p>
          <strong>Engine Options:</strong>
        </p>
        <p>
          Petrol: 1332cc, 187.74bhp, 400Nm
        </p>
        <p>
          Diesel: 1950cc
        </p>
        <p>
          <strong>Transmission:₹4,312,000 - ₹5,099,000</strong> Automatic
        </p>
        <p>
          <strong>Fuel Type:</strong> Petrol / Diesel
        </p>
        <p>
          <strong>Drive Type:</strong> AWD (All-Wheel Drive)
        </p>
        <p>
          <strong>Body Type:</strong> SUV
        </p>
        <p>
          <strong>Features:</strong>
        </p>
        <ul>
          <li>Airbags (Driver, Passenger, Side Front, and Side Rear)</li>
          <li>Adjustable Front Passenger Seat</li>
          <li>ABS</li>
          <li>AC</li>
          <li>Central Locking</li>
          <li>Power Steering</li>
          <li>Max Torque (400Nm@1600-2600rpm)</li>
        </ul>
       
      </div>
      <div className="car-description">
        <h3>About Mercedes-Benz GLA</h3>
        <p>
          The Mercedes-Benz GLA is a premium SUV known for its luxurious features and performance.
          It is available in India at a price range of Rs. 48.50 Lakh to 65.00 Lakh .
          The GLA offers both petrol and diesel engine options and comes with automatic transmission.
          With AWD (All-Wheel Drive) capability, it ensures excellent handling in various conditions.
          Loaded with advanced features like airbags, ABS, and power steering, the GLA provides a safe and comfortable ride.
        </p>
      </div>
      </div>
      
    <div className="car-details-container">
      <div className="car-image">
        <img src={A41} alt="Car Name" style={{ width: '80%', height: 'auto' }} />
      </div>
      <div className="car-info">
        <h2>Audi A4</h2>
        <p>
          <strong>Key Specifications:</strong>
        </p>
        <p>
          <strong>Fuel Type:</strong> Petrol
        </p>
        <p>
          <strong>Engine Displacement (cc):</strong> 1998
        </p>
        <p>
          <strong>No. of cylinders:</strong> 4
        </p>
        <p>
          <strong>Max Power (bhp@rpm):</strong> 187.74bhp@4200-6000rpm
        </p>
        <p>
          <strong>Max Torque (nm@rpm):</strong> 320Nm@1450–4200rpm
        </p>
        <p>
          <strong>Seating Capacity:</strong> 5
        </p>
        <p>
          <strong>Transmission Type:</strong> Automatic
        </p>
        <p>
          <strong>Boot Space (Litres):</strong> 460
        </p>
        <p>
          <strong>Fuel Tank Capacity:</strong> 54.0
        </p>
        <p>
          <strong>Body Type:</strong> Sedan
        </p>
        <p>
          <strong>Key Features:</strong>
        </p>
        <ul>
          <li>Power Steering</li>
          <li>Power Windows Front</li>
          <li>Anti Lock Braking System</li>
          <li>Air Conditioner</li>
          <li>Driver Airbag</li>
          <li>Passenger Airbag</li>
          <li>Fog Lights - Front</li>
          <li>Alloy Wheels</li>
          <li>Multi-function Steering Wheel</li>
        </ul>
        <p>
          <strong>Engine and Transmission:</strong>
        </p>
        <p>
          <strong>Engine Type:</strong> 2.0 L TFSI petrol engine
        </p>
        <p>
          <strong>Motor Type:</strong> 12V Mild-Hybrid
        </p>
        <p>
          <strong>Gear Box:</strong> 7-speed Stronic
        </p>
        <p>
          <strong>Drive Type:</strong> FWD (Front-Wheel Drive)
        </p>
      </div>
      <div className="car-description">
        <h3>About Audi A4</h3>
        <p>
          The Audi A4 is a stylish sedan with advanced features and powerful performance.
          It is powered by a 2.0 L TFSI petrol engine with mild-hybrid technology,
          delivering 187.74bhp of power and 320Nm of torque. The car offers comfortable
          seating for five passengers and comes with a spacious boot space of 460 litres.
          With a sleek sedan body type, the Audi A4 combines luxury with practicality.
          Key features include power steering, power windows, ABS, air conditioning,
          airbags, fog lights, alloy wheels, and a multi-function steering wheel.
        </p>
      </div>
    </div>
    
    <div className="car-details-container">
      <div className="car-image">
        <img src={T1} alt="Car Name" style={{ width: '80%', height: 'auto' }} />
      </div>
      <div className="car-info">
        <h2>Tata Sumo Gold SA Gold</h2>
        <p>
          <strong>Price:</strong> Rs. 5.26 Lakh
        </p>
        <p>
          <strong>Mileage (ARAI):</strong> 10.6 kmpl
        </p>
        <p>
          <strong>Specifications:</strong>
        </p>
        <p>
          <strong>Engine & Transmission:</strong>
        </p>
        <p>
          Engine: 2956 cc, 4 Cylinders 2 Valves/Cylinder
        </p>
        <p>
          Fuel Type: Diesel
        </p>
        <p>
          Max Power (bhp@rpm): 65@2800
        </p>
        <p>
          Max Torque (Nm@rpm): 167@1800
        </p>
        <p>
          Mileage (ARAI): 10.6 kmpl
        </p>
        <p>
          Transmission: Manual - 5 Gears
        </p>
        <p>
          <strong>Dimensions & Weight:</strong>
        </p>
        <p>
          Length: 4552 mm
        </p>
        <p>
          Width: 1700 mm
        </p>
        <p>
          Height: 1904 mm
        </p>
        <p>
          Wheelbase: 2425 mm
        </p>
      </div>
      <div className="car-description">
        <h3>About Tata Sumo Gold SA Gold</h3>
        <p>
          The Tata Sumo Gold SA Gold is the top model in the Sumo Gold lineup,
          priced at Rs. 5.26 Lakh. It is a powerful diesel SUV that offers a
          mileage of 10.6 kmpl. With a 2956 cc engine, it produces 65 bhp of power
          at 2800 rpm and a torque of 167 Nm at 1800 rpm. This SUV is known for
          its robust performance and spacious dimensions. It comes with a manual
          transmission with 5 gears.
        </p>
      </div>
  

 

      </div>
      
    <div className="car-details-container">
      <div className="car-image">
        <img src={C3} alt="Car Name" style={{ width: '80%', height: 'auto' }} />
      </div>
      <div className="car-info">
        <h2>Pontiac G8</h2>
        <p>
          <strong>Body:</strong> Sedan
        </p>
        <p>
          <strong>Number of Doors:</strong> 4 doors
        </p>
        <p>
          <strong>Engine Technical Data:</strong>
        </p>
        <p>
          Engine type - Number of cylinders: V 6
        </p>
        <p>
          Fuel type: Petrol
        </p>
        <p>
          Fuel System: MPFi
        </p>
        <p>
          Engine size - Displacement - Engine capacity: 3564 cm3 / 217.5 cu-in
        </p>
        <p>
          Bore x Stroke: 94.00 x 85.60 mm (3.7 x 3.37 inches)
        </p>
        <p>
          Number of valves: 24 Valves
        </p>
        <p>
          Maximum power - Output - Horsepower: 265 PS / 261 HP / 195 kW @ 6300 rpm
        </p>
        <p>
          Maximum torque: 340.0 Nm / 250 lb-ft @ 6300 rpm
        </p>
        <p>
          Drive wheels - Traction - Drivetrain: RWD
        </p>
        <p>
          Transmission Gearbox - Number of speeds: 5 speed Automatic
        </p>
        <p>
          <strong>Size, Dimensions, Aerodynamics, and Weight:</strong>
        </p>
        <p>
          Wheelbase: 291.5 cm / 114.76 in
        </p>
        <p>
          Length: 498.2 cm / 196.14 in
        </p>
        <p>
          Width: 189.9 cm / 74.76 in
        </p>
        <p>
          Height: 146.5 cm / 57.68 in
        </p>
        <p>
          Curb Weight: 1762 Kg / 3885 lbs
        </p>
        <p>
          Weight-Power Output Ratio: 6.6 kg/hp
        </p>
      </div>
      <div className="car-description">
        <h3>About Pontiac G8</h3>
        <p>
          The Pontiac G8 is a sedan car with impressive specifications. It features a V6 petrol engine,
          offering 265 PS (261 HP) of power at 6300 rpm and a torque of 340.0 Nm at 6300 rpm. With a
          rear-wheel-drive (RWD) configuration and a 5-speed automatic gearbox, the G8 delivers a
          thrilling driving experience.
        </p>
        <p>
          This sedan has a well-balanced design with dimensions that provide ample space for passengers.
          Its curb weight of 3885 lbs contributes to its performance, making it a powerful and agile car.
        </p>
      </div>
    </div>
    
    <div className="car-details-container">
      <div className="car-image">
        <img src={M1} alt="Car Name" style={{ width: '80%', height: 'auto' }} />
      </div>
      <div className="car-info">
        <h2>Maruti Baleno Sigma MT</h2>
        <p>
          <strong>Price:</strong> Rs. 6.61 Lakh
        </p>
        <p>
          <strong>Mileage:</strong> 22.35 kmpl
        </p>
        <p>
          <strong>Transmission:</strong> Manual - 5 Gears
        </p>
        <p>
          <strong>Available Colors:</strong> Pearl Midnight Black, Nexa Blue, Grandeur Grey, Splendid Silver, Luxe Beige, Opulent Red, and Arctic White
        </p>
        <p>
          <strong>Specifications:</strong>
        </p>
        <p>
          Engine: 1197 cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC
        </p>
        <p>
          Engine Type: 1.2L VVT
        </p>
        <p>
          Fuel Type: Petrol
        </p>
        <p>
          Max Power: 88 bhp @ 6000 rpm
        </p>
        <p>
          Max Torque: 113 Nm @ 4400 rpm
        </p>
        <p>
          Mileage (ARAI): 22.35 kmpl
        </p>
        <p>
          Drivetrain: FWD
        </p>
        <p>
          Emission Standard: BS6 Phase 2
        </p>
        <p>
          Dimensions & Weight:
        </p>
        <p>
          Length: 3990 mm
        </p>
        <p>
          Width: 1745 mm
        </p>
        <p>
          Height: 1500 mm
        </p>
        <p>
          Wheelbase: 2520 mm
        </p>
        <p>
          Kerb Weight: 925 kg
        </p>
      </div>
      <div className="car-description">
        <h3>About Maruti Baleno Sigma MT</h3>
        <p>
          The Maruti Baleno Sigma MT is a petrol variant of the Maruti Baleno lineup, priced at Rs. 6.61 Lakh.
          It offers excellent mileage of 22.35 kmpl, making it an efficient choice for your daily commute.
          This car comes with a manual transmission and is available in a variety of attractive colors.
        </p>
        <p>
          The specifications include a powerful 1197 cc engine with 4 cylinders, delivering 88 bhp of power
          at 6000 rpm and 113 Nm of torque at 4400 rpm. It is designed for front-wheel drive (FWD) and complies
          with BS6 Phase 2 emission standards.
        </p>
        <p>
          The Maruti Baleno Sigma MT boasts a compact yet spacious design, making it a comfortable and stylish choice.
        </p>
      </div>
    </div>
 

  

      </div>
      </div>
      <Footer/>
      
    </div>
  

  );
}

export default CarDetails;
