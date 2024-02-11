import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cars = [
  {
    id: 1,
    name: 'Audi A6',
    price: '$55,000',
    imageUrl: 'car1.jpg',
    details: 'The 2023 Audi A6 is a luxurious sedan known for its style and performance.',
  },
  {
    id: 2,
    name: 'BMW X5',
    price: '$60,000',
    imageUrl: 'car2.jpg',
    details: 'The 2023 BMW X5 is a versatile SUV with cutting-edge technology.',
  },
  {
    id: 3,
    name: 'Mercedes-Benz C-Class',
    price: '$50,000',
    imageUrl: 'car3.jpg',
    details: 'The 2023 Mercedes-Benz C-Class offers elegance and advanced features.',
  },
];

const HomePage = () => {
  return (
    <div className="container">
      <header>
        
      </header>

      <section className="hero">
        <div className="hero-content text-center">
          <h1>Welcome to DreamCars</h1>
          <p>Discover Your Dream Ride</p>
        </div>
      </section>

      <section className="car-list">
        <div className="row">
          {cars.map((car) => (
            <div className="col-md-4" key={car.id}>
              <div className="car-card">
                <img src={car.imageUrl} alt={car.name} className="img-fluid" />
                <h2>{car.name}</h2>
                <p>Price: {car.price}</p>
                <p>{car.details}</p>
                <a href={`/details/${car.id}`} className="btn btn-primary">Details</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-us">
        <div className="row">
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>
              We are a leading car dealership offering a wide range of premium vehicles. Our mission is to provide you with the best car buying experience, offering the latest models and competitive prices.
            </p>
            <a href="/about" className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-md-6">
            <img src="showroom.jpg" alt="Showroom" className="img-fluid" />
          </div>
        </div>
      </section>

      <footer className="text-center">
        <p>&copy; 2023 DreamCars</p>
      </footer>
    </div>
  );
};

export default HomePage;
