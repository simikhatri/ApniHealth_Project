import React, { useState } from 'react';
import log from './images/login.png';
import "./css/signup.css";
import { useNavigate  } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({Email: "", password: ""});
  const navigate = useNavigate();

    const handleSubmit = async(e)=>{
      e.preventDefault();
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({Email: credentials.Email, password: credentials.password})
      })
      const json = await response.json()
      console.log(json); 
      if(json.success){
        localStorage.setItem('token', json.authtoken);
        navigate("/DrRegister");
      }
      else{
        alert("Invalid Credentials")
      }
    }
    const onChange= (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
      }
  return (
   <>
    <section className="container containeer forms">
        <div className="row">
            <div className="col-sm-6 logpic">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="700"
                    height="1100" src={log} alt=""/>
            </div>
            <div className="col-sm-6">
                <div className="log-form login">
                    <div className="form-content">
                        <header>Login</header>
                        <form name="myForm" onSubmit={handleSubmit}>
                            
                            <div className="field input-field" id="Email">
                                <input type="email" name="Email" className="inputs" maxLength="30"
                                    placeholder="Enter Your Email" value={credentials.Email} onChange={onChange} required/>
                                <div className="underline"></div>
                            </div>
                            <div className="field input-field" id="password">
                                <input type="password" name="password" className="password" value={credentials.password} onChange={onChange}
                                 maxLength="30" placeholder="password"/>
                                <i className="bx bx-hide eye-icon"></i>
                                <div className="underline"></div>
        
                            </div>
                            {/* <div className="form-link">
                                <a href="/" className="forgot-pass">Forgot password?</a>
                            </div> */}
                            <div className="field input-box button ">
                                <input type="submit" name="Login" value="Login" />
                            </div>
                            {/* <Link to="/Signup">SignUp</Link> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Login;
