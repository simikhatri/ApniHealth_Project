import React from 'react';
import './css/Pharma.css'

const PharmaRegister = () => {
  return (
    <>
       <div className="container cont-box">
        <header>Pharmacy Registration Form</header>
        <div className="content">
            <form>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Pharmacy Name:</span>
                        <input type="text" name="PharmacyName" placeholder="Enter Pharmacy Name" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number:</span>
                        <input type="tel" name="Phone" placeholder="Enter Phone Number" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Owner Name:</span>
                        <input type="text" name="OwnerName" placeholder="Enter Owner Name" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">City:</span>
                        <input type="text" name="City" placeholder="Enter your City" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">License Number:</span>
                        <input type="text" name="LicenseNumber" placeholder="Enter License Number" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Address:</span>
                        <input type="text" name="Address" placeholder="Enter Pharmacy Address" required/>
                    </div>
                </div>
                
                <div className="field input-box button">
                    <input type="submit" name="Register" value="Register"/>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default PharmaRegister
