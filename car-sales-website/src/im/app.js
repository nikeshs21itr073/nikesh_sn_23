import React from 'react';
//import Navbar from './components/Navbar';

const home = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="./assets/js/bootstrap.min.js" />
        
      <title>Responsive Website</title>
      <link rel="stylesheet" type="text/css" href="./im/b.css" />
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
      
      <h3><a className="rounded float-left" href="./im/login.html">Login</a></h3>
      <h3><a className="link2" href="form.html">Sign up</a></h3>

      <h1 style={{ textAlign: 'center' }}>Dream World of Cars   </h1>

      <div className="row-md-16">
        <div id="i4">
          {<div class="container row-md-2" >
    <nav class="navbar navbar-expand-lg ">
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto text-right">
            <li class="nav-item">
              <a class="nav-link" href="./im/home.html">Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./im/about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./im/Dealers.html">Dealers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./im/newarrivals.html">New Arrivals</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#last">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
</div>}
        </div>
        <div className="row-md-1" id="t1" style= {{ color: 'beige' }}>
          <strong style={{ color: 'aqua' }}>
            <br /></strong><br /><h3 style={{ color: 'chartreuse' }}>
              Brand New Cars for Sale <br />
              <a href="./im/e-cart.html">Book Now</a> <br />
            </h3>
        </div>
        <div id="i2" className="row-md-2">
          <img src="./im/i1.jpeg" className="rounded float-left" alt="..." />
          <img src="./im/i2.jpeg" className="rounded float-right" alt="..." />
        </div>

        <div id="carouselExampleControls" className="carousel slide row-md-2" data-ride="carousel" id="i3">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="rounded mx-auto d-block w-150 img-fluid img-thumbnail" src="./im/img3.jpeg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="rounded mx-auto d-block w-130 img-fluid img-thumbnail" src="./im/img2.jpeg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="rounded mx-auto d-block w-130 img-fluid img-thumbnail" src="./im/img.jpeg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

        <div className="row-md-4" id="i5">
        <div className="row-md-1" id="t1">
  <strong>
    <h3>see a style statement, we see a power move. Powered by quattro.</h3>
  </strong>
</div>
<div className="row-md-1" id="t1">
  <strong>
    <h3 style={{ textAlign: 'center', color: 'beige' }}>Used cars for Rent get upto 17% discount</h3>
  </strong>
</div>
<div className="row-md-1" id="t1">
  <strong>
    <h3 style={{ textAlign: 'center' }}>
      <a href="dom.html">Get a car of your wish for rent</a>
    </h3>
    <div className="row-md-1">
      <img src="./im/car.jpeg" className="rounded mx-auto d-block" alt="..." />
    </div>
    <div className="row-md-1">
      <img src="./im/car1.jpeg" className="rounded float-left" alt="..." />
      <img src="./im/car2.jpeg" className="rounded float-right" alt="..." />
    </div>
  </strong>
</div>

        </div>

        <div id="box">
          {/* ... */}
        </div>

        <div id="i9">
  <p className="float-left"></p>
  <div id="carouselExampleControls" className="carousel slide row-md-2" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="rounded mx-auto d-block w-150 img-fluid img-thumbnail" src="./im/l1.jpeg" alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="rounded mx-auto d-block w-130 img-fluid img-thumbnail" src="./im/.jpeg" alt="Second slide" />
      </div>
      <div className="carousel-item">
        <img className="rounded mx-auto d-block w-130 img-fluid img-thumbnail" src="./im/l4.jpeg" alt="Third slide" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" ></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" ></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

        </div>

        <div className="container-fluid" id="last">
          <div className="row">
            <div className="col-sm">
              <a href="http://wa.me/9626157219">whatsapp-us</a>
            </div>
            <div className="col-sm">
              <b><a href="tel:+91997646329">contact-us</a></b>
            </div>
            <div className="col-sm">
              <a href="mailto:nikeshs.21it@kongu.edu">mail-us</a> <br />
            </div>
            <div className="col-sm">
              <a href="https://github.com/nikeshs21itr073/nikesh.git">github-account-id</a>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default home;
