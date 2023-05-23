import React from 'react'
import "./css/style.css";
import doctor from './images/Doctors.png';
import Pharma from './images/Pharma.png';
import Hospi from './images/Hospi.png';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <div className="text-center">
        <h1 className='my-4 py-4'>
            Welcome To ApniHealth
        </h1>
        <p className="para1">advancing everybody's future to one that is better and healthier</p>
        <section className="our-services py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="center-heading-box">
                                <h1 className="bottom_border_heading">Registration</h1>
                            </div>

                        </div>
                    </div>
                    <div className="underlines"></div>
                    <div className="row" style={{ marginTop: '30px' }}>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 my-4 my-sm-5">
                            <Link className="text-decoration-none" to="/">
                                <div className="theme-card primary-shadow  service1">
                                    <div className="theme-card-image">
                                        <img className="theme-card-3" height="200" width="300" src={doctor} alt="" />
                                    </div>
                                    <div className="theme-card-description">
                                        <Link to="DrRegister"><button className="btn">Register Doctor</button></Link>
                                    </div>
                                </div>
                            </Link  >
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 my-4 my-sm-5">
                            <Link className="text-decoration-none" to="Pharmacy">
                                <div className="theme-card primary-shadow service1">
                                    <div className="theme-card-image">
                                        <img className="theme-card-3" height="200" width="300" src={Pharma} alt="" />
                                    </div>
                                    <div className="theme-card-description theme-card-margin">
                                       
                                        <Link to="Pharmacy"><button className="btn">Register Pharmacy</button></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 my-4 my-sm-5">
                            <Link className="text-decoration-none" to="Doctor">
                                <div className="theme-card primary-shadow service1">
                                    <div className="theme-card-image">
                                        <img className="theme-card-3" height="200" width="300" src={Hospi} alt="" />
                                    </div>
                                    <div className="theme-card-description theme-card-margin">
                                        <Link to="Hospital"><button className="btn">Register Hospital</button></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    </>
  )
}

export default Welcome
