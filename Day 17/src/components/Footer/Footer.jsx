import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
        <div className="container">
          <div className="row text-md-start text-center">
            {/* Column 1: Brand/About */}
            <div className="col-md-4 col-lg-4 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4 text-warning">
                Company Name
              </h5>
              <p>
                Creating modern, fully responsive web designs that bring your
                digital ideas to life.
              </p>
            </div>
            {/* Column 2: Quick Links */}
            <div className="col-md-2 col-lg-2 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">Products</h5>
              <p>
                <a
                  href="#"
                  className="text-white text-decoration-none hover-link"
                >
                  Web Design
                </a>
              </p>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Development
                </a>
              </p>
              <p>
                <a href="#" className="text-white text-decoration-none">
                  Hosting
                </a>
              </p>
            </div>
            {/* Column 3: Contact */}
            <div className="col-md-3 col-lg-3 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
              <p>
                <i className="bi bi-geo-alt-fill me-2" /> New York, NY 10012, US
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2" /> info@example.com
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2" /> + 01 234 567 88
              </p>
            </div>
          </div>
          <hr className="mb-4 bg-white" />
          {/* Bottom Strip */}
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8 text-md-start text-center">
              <p className="mb-0">
                © 2026 Copyright:{" "}
                <a href="#" className="text-white fw-bold text-decoration-none">
                  YourBrand.com
                </a>
              </p>
            </div>
            <div className="col-md-5 col-lg-4 text-md-end text-center mt-3 mt-md-0">
              {/* Social Icons (Assumes Bootstrap Icons is loaded) */}
              <a href="#" className="text-white me-4 text-decoration-none">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="text-white me-4 text-decoration-none">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#" className="text-white me-4 text-decoration-none">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="text-white text-decoration-none">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
