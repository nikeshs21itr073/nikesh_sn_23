import React from 'react';


import styles from './Home.css'; 
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







const Header = () => {
  return (
      <div className="header">
          <h3><a className="rounded float-left" href="./Login">Login</a></h3>
          <h3><a className="link2" href="./Signup">Sign up</a></h3>
          <h1 style={{ textAlign: 'center' }}>Dream World Cars</h1>
          <div class="container row-md-2">
              
          </div>
      </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
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

const Home = () => {
  return (
    

    <div id="i6" className={styles.container}>
       <Header />
      
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="./assets/js/bootstrap.min.js" />
        
      <title>Responsive Website</title>
      <link rel="stylesheet" type="text/css" href="./im/b.css" />
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
      
      
      <div className="row-md-16"  >
        <div id="i4">
          
          { <div class="container row-md-2" >
         
          <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./components/dealers">Dealers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./components/newarrivals">New Arrivals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#last">Contact Us</a>
                            </li>
                        </ul>
                    </div>

          
    <nav class="navbar navbar-expand-lg ">
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto text-right">
            <li className="nav-item">
              <a className="nav-link" href= "/">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./dealers">Dealers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./newarrivals">New Arrivals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#last">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
</div>}
        </div>
        <div className="row-md-1" id="t1" style={{ color: 'beige' }}>
          <strong style={{ color: 'aqua' }}>
            <br /></strong><br /><h3 style={{ color: 'chartreuse' }}>
              Brand New Cars for Sale <br />
              <a href="./ecart">Available Cars</a> <br />
            </h3>
        </div>
        <div id="i2" className="row-md-2">
        <img src={i1Image} className="rounded float-left" alt="..." />
      <img src={i2Image} className="rounded float-right" alt="..." />
        </div>
        
        <div id="carouselExampleControls" className="carousel slide row-md-2" data-ride="carousel" id="i3">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="rounded mx-auto d-block w-150 img-fluid img-thumbnail" src={img3Image} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="rounded mx-auto d-block w-130 img-fluid img-thumbnail" src={img2Image} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="rounded mx-auto d-block w-130 img-fluid img-thumbnail" src={imgImage}alt="Third slide" />
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

        <div className="row-md-1" id="i5">
        <div className="row-md-1" id="t1">
  <strong>
    <h3>see a style statement, we see a power move. Powered by quattro.</h3>
  </strong>
</div>
<div className="row-md-1" id="t1">
  <strong>
    <h3 style={{ textAlign: 'center', color: 'beige' }}></h3>
  </strong>
</div>
<div className="row-md-1" id="t1">
  <strong>
    <h3 style={{ textAlign: 'center' }}>
      <a href="dom.html"></a>
    </h3>
    <div className="row-md-1">
      <img src={carImage} className="rounded mx-auto d-block" alt="..." />
    </div>
    <div className="row-md-1">
      <img src={car1Image} alt="..."   />
      <img src={car2Image}  alt="..." />
    </div>
  </strong>
</div>

        </div>

        <div id="box">
          {/* ... */}
        </div>

        <div >
  <p className="float-left"></p>
  <div id="carouselExampleControls" className="carousel slide row-md-2" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="rounded mx-auto d-block w-150 img-fluid img-thumbnail" src={l1Image} alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="rounded mx-auto d-block w-130 img-fluid img-thumbnail" src={l3Image}alt="Second slide" />
      </div>
      <div className="carousel-item">
        <img className="rounded mx-auto d-block w-130 img-fluid img-thumbnail" src={l4Image} alt="Third slide" />
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
<Footer />

        </div>

       
        
      </div>
      
    
  );
};

export default Home;
