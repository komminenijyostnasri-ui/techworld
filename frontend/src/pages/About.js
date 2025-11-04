
import React from 'react';

function About() {
  return (
    <div className="container">
      <div className="about-container">
        <h1>About TechWorld</h1>
        
        <div className="about-content">
          <section className="about-section">
            <h2>🚀 Our Mission</h2>
            <p>
              TechWorld is your one-stop destination for the latest and greatest technology products. 
              We're committed to bringing you high-quality tech at competitive prices.
            </p>
          </section>

          <section className="about-section">
            <h2>💼 What We Offer</h2>
            <ul className="feature-list">
              <li>✓ Wide range of tech products</li>
              <li>✓ Competitive pricing</li>
              <li>✓ Fast and secure checkout</li>
              <li>✓ Excellent customer service</li>
              <li>✓ Secure payment processing</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>📞 Contact Us</h2>
            <p>
              Email: support@techworld.com<br />
              Phone: 1-800-TECH-WORLD<br />
              Address: 123 Tech Street, Silicon Valley, CA 94000
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
