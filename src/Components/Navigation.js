import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import "../Styles/styles.css"

import {Link} from "react-router-dom"
import {user_logout} from "../Redux/Actions/userActions"

const Navigation = () => {
  const dispatch = useDispatch()
  const userAuth = useSelector((state) => state.userAuth)
  const {userDetail, loading, error} = userAuth
  const [scrollHeader, setScrollHeader] = useState(false)

  const logoutHandler = () => {
    dispatch(user_logout())
  }

  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("scroll", () => {
        setScrollHeader(window.pageYOffset > 200)
      })
    }
  }, [])

  return (
    <>
      <nav
        className={`navbar navbar-expand-md nav-fix ${
          scrollHeader ? "fixed" : ""
        }`}
        id="mainNav"
      >
        <div className="container-fluid px-4 px-lg-5">
          <Link to="/" className="navbar-brand">
            Portfolio
          </Link>
          <button
            type="button"
            className="navbar-toggler navbar-toggler-right"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i></i>
          </button>
          {userDetail ? (
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    {userDetail.firstname}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About Me
                  </Link>
                </li>

                <li className="nav-item sign-in">
                  <Link
                    to="/signin"
                    onClick={logoutHandler}
                    className="nav-link"
                  >
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/Home" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About Me
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item sign-up">
                  <Link to="/signup" className="nav-link">
                    Get Started
                  </Link>
                </li>

                <li className="nav-item sign-in">
                  <Link to="/signin" className="nav-link">
                    Signin
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navigation
