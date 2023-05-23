import React from "react";
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import { useNavigate  } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate("/");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-light">
                <div className="container-fluid">
                    <img src={logo} className="nav-logo" alt="logo" />
                    <Link className="navbar-brand" to="/">ApniHealth</Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className=" fa-duotone fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact Us</Link>
                            </li>

                        </ul>
                        {!localStorage.getItem('token') ?
                            <ul className="navbar-nav navbr-btn">
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/Login">Login</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/Signup">Sign Up</Link>
                                </li> 
                            </ul>:
                                <button onClick={handleLogout} className=" nav-item btn btn-primery">Logout</button>
                           }
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;