
// Import your images

import React, { Component } from 'react';
import './App.css';
import car1 from './im/L1.jpg';
import car2 from './im/L2.jpg';
import car3 from './im/L3.jpg';

class H extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0,
      slides: [car1, car2, car3],
    };
  }

  nextSlide = () => {
    const { currentSlide, slides } = this.state;
    const nextSlide = (currentSlide + 1) % slides.length;
    this.setState({ currentSlide: nextSlide });
  };

  render() {
    const { currentSlide, slides } = this.state;

    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Cars</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>

        <section className="slider">
          <div className="slide">
            <img src={slides[currentSlide]} alt={`Car ${currentSlide + 1}`} />
          </div>
          <button onClick={this.nextSlide}>Next</button>
        </section>
      </div>
    );
  }
}

export default H;




