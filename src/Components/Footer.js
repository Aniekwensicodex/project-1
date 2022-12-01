import React from "react"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-6 image">
              <Link to="/">
                <h3>Project</h3>
              </Link>
              <p className="short-desc">
                Social media validation business model cnvas graphical user
                interface launch party creative facebook iPad twitter
              </p>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-2 col-md-6 col-6 mb-4">
              <h3 className="">Landings</h3>
              <ul className="list-unstyled">
                <li>
                  <Link to="/home" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/products"></Link>Products
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-6 mb-4">
              <h3 className="">Company</h3>
              <ul className="list-styled">
                <li>
                  <Link to="/home" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Career<span>Hiring!</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3 className="">Resources</h3>
              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="footer-link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footer-link">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <p className="rights">&copy; All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
