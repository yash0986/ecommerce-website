import React from 'react'; 
export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{"filter" : "brightness(80%)",
                "maxHeight":"500px","objectFit":"cover"}} src="https://i.pinimg.com/originals/3c/41/ab/3c41ab736bc52789af651115e4f0a980.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Try Premium range of Organic Products</h5>
    
      </div>
    </div>
    <div className="carousel-item">
      <img  src="https://static.vecteezy.com/system/resources/previews/001/879/481/non_2x/online-shop-sellers-display-clothes-on-mobile-e-commerce-shopping-is-easier-with-an-online-shop-illustration-concept-for-landing-page-web-ui-banner-flyer-poster-template-background-free-vector.jpg" style={{"filter" : "brightness(80%)",
                "maxHeight":"500px","objectFit":"cover"}} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Buy Organic and Fresh Products Online</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{"filter" : "brightness(80%)",
                "maxHeight":"500px","objectFit":"cover"}} src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/93789a50700333.58d7586f2ced4.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Connect with your Trustable Farmer</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
