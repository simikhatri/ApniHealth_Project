import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import "./css/signup.css";
import sign from './images/signup.png';

function Signup() {
    const [credentials, setCredentials] = useState({  Username: '', Email: '', Phone: '', password: '', cpassword: '', Role: ''});
    const [errors, setError] = useState({});
    const navigate = useNavigate();
  
      const handleSubmit = async(e)=>{
        e.preventDefault();
        setError(validate(credentials));
        const response = await fetch(`http://localhost:5000/api/auth/signup`, {
          method: 'POST',
          headers: {
            'content-Type': 'application/json'
          },
          body: JSON.stringify({Username: credentials.Username, Email: credentials.Email, Phone: credentials.Phone, password: credentials.password})
        })
        const json = await response.json()
        console.log(json);
        if(json.success){
            localStorage.setItem('token', json.authtoken);
            if (credentials.Role === "doctor") {
                navigate("/DrRegister");
            }
            else if(credentials.Role === "pharmacy"){
                navigate("/PharmaRegister");
            }
            else{
                navigate("/");
            }
          }
          else{
            alert("Invalid Credentials")
          }
      }
      const handleChange= (e) => {
          setCredentials({...credentials, [e.target.name]: e.target.value})
        }

  
    function validate(value) {
        const error = {}

        if (!value.Username) {
            error.Username = "*Username is required";
        }

        if (!value.Email) {
            error.Email = "*Email is required";
        }
        if (!value.Phone) {
            error.Phone = "*Phone Number is required"
        }
        if (!value.password) {
            error.password = "*Password is required"
        }
        else if (value.password.length < 6) {
            error.password = "*Password length must be atleast 6 characters"
        }
        if (!value.cpassword) {
            error.cpassword = "*Confirm Password is required"
        }
        else if (value.cpassword !== value.password) {
            error.cpassword = "*Password do not match"
        }
        return error;
    }

    return (
        <>
            <section className="container containeer forms">
                <div className="row">
                    <div className="col-sm-6 logpic">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700"
                            height="1100" src={sign} alt="" />
                    </div>
                    <div className="col-sm-6">
                        <div className="log-form login">
                            <div className="form-content">
                                <header>Signup</header>
                                <form name="myForm" onSubmit={handleSubmit}>
                                    <div className="field input-field" id="name">
                                        <input type="text" name="Username" value={credentials.Username} className="inputs"
                                            onChange={handleChange}
                                            placeholder="Enter Your Name" />
                                        <span className="formerror">{errors.Username}</span>
                                        <div className="underline"></div>
                                    </div>
                                    <div className="field input-field" id="phone">
                                        <input type="tel" name="Phone" value={credentials.Phone} className="inputs"
                                            onChange={handleChange}
                                            placeholder="Enter Your Phone Number" />
                                        <span className="formerror">{errors.Phone}</span>
                                        <div className="underline"></div>
                                    </div>
                                    <div className="field input-field" id="email">
                                        <input type="email" name="Email" value={credentials.Email} className="inputs"
                                            onChange={handleChange}
                                            placeholder="Enter Your Email" />
                                        <span className="formerror">{errors.Email}</span>
                                        {/* <span className="formerror"> </span> */}
                                        <div className="underline"></div>
                                    </div>
                                    <div className="field input-field" id="pass">
                                        <input type="password" name="password" value={credentials.password} className="password"
                                            onChange={handleChange} placeholder="Password" />
                                        <span className="formerror">{errors.password}</span>
                                        <i className="bx bx-hide eye-icon" ></i>
                                        <div className="underline"></div>
                                    </div>
                                    <div className="field input-field" id="cpass">
                                        <input type="password" name="cpassword" className="password" value={credentials.cpassword}
                                            onChange={handleChange} placeholder="Confirm password" />
                                        <span className="formerror">{errors.cpassword}</span>
                                        {/* <i className="bx bx-hide eye-icon"></i> */}
                                        {/* <FontAwesomeIcon icon="fa-solid fa-eye" />                                */}
                                        <div className="underline"></div>

                                    </div>
                                    <div className="field input-field" id="role">
                                        <label htmlFor="Role">Enter Your Role:</label>
                                        <select name="Role" value={credentials.Role} onChange={handleChange}>
                                            <option value="">...</option>
                                            <option value="doctor">Doctor</option>
                                            <option value="pharmacy">Pharmacy</option>
                                            <option value="Hospital">Hospital</option>
                                        </select>
                                        <span className="formerror"> </span>
                                    </div>
                                    <div className="field input-box button ">
                                        <input type="submit" name="signup" value="Signup" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
