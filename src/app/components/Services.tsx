"use client";
import './Services.css'

export default function Services() {
  return (
    <div className="potential">
      <h1 className="h1-service">Discover Your Potential</h1>
      <div className="gallery-container">
        <h1>Our Services</h1>
        <div className="slideshow-container">
          <div className="slide">
            <div className="slide-item">
              <img src="/1st-image.jpg" alt="Academic Counseling" />
              <h1>Academic Counseling</h1>
            </div>
            <div className="slide-item">
              <img src="/2nd-image.jpg" alt="Test Preparation" />
              <h1>Test Preparation</h1>
            </div>
            <div className="slide-item">
              <img src="/3rd-image.jpg" alt="Career Coaching" />
              <h1>Career Coaching</h1>
            </div>

            <div className="slide-item">
              <img src="/4th-image.jpg" alt="Career Coaching" />
              <h1>University Shortlisting</h1>
            </div>

            <div className="slide-item">
              <img src="/5th-image.jpg" alt="Career Coaching" />
              <h1>Scholarship Assistance</h1>
            </div>
              
        
            
            <div className="slide-item">
                <img src="/application.jpg" alt="Parking Space 1"/>
                <h1>Application Review</h1>
            </div>
            <div className="slide-item">
                <img src="/admission.jpg" alt="Parking Space 2"/>
                <h1 >Admission</h1>
            </div>
           
           
            <div className="slide-item">
                <img src="/visa.jpg" alt="Interior 2"/>
                <h1 >Student Visa Support</h1>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
