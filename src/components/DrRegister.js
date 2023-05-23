import React, { useContext, useState } from 'react';
import DoctorContext from '../context/doctors/docContext';
import './css/DrRegister.css'
import Details from './Details';

const DrRegister = () => {
    const context = useContext(DoctorContext);
    const { addDoctor} = context;
    
   const [doctor, setDoctors] = useState({Name:"", Qualification:"", InstituteName:"",Specialization:"", YearOfPassing:"", Hospital_Clanic:"", Phone:"", Address:"", City:""})
    const handleClick = (e) =>{
        e.preventDefault();
        addDoctor(doctor.Name, doctor.Qualification, doctor.InstituteName, doctor.Specialization, doctor.YearOfPassing, doctor.Hospital_Clanic, doctor.Phone, doctor.Address, doctor.City);
        setDoctors({Name:"", Qualification:"", InstituteName:"",Specialization:"", YearOfPassing:"", Hospital_Clanic:"", Phone:"", Address:"", City:""})

    }
    const onChange= (e) => {
      setDoctors({...doctor, [e.target.name]: e.target.value})
    }
   return (
        <>
            <div className="container mb-4">
                <div className="container cont-box ">
                    <header>Doctor Registration Form</header>
                    <div className="content">
                        <form action="/DrRegister" method="post">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Name:</span>
                                    <input type="text" name="Name" placeholder="Enter your First name" value={doctor.Name} onChange={onChange} required />
                                </div>
                                
                                <div className="input-box">
                                    <span className="details">Qualification:</span>
                                    <input type="text" name="Qualification" placeholder="Enter your Qualification" value={doctor.Qualification} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">InstituteName:</span>
                                    <input type="text" name="InstituteName" placeholder="Enter your Institute Name" value={doctor.InstituteName} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Specialization:</span>
                                    <input type="text" name="Specialization" placeholder="Enter your Specialization" value={doctor.Specialization} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Year Of Passing:</span>
                                    <input type="text" name="YearOfPassing" placeholder="Enter your Year Of Passing" value={doctor.YearOfPassing} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Hospital_Clinic:</span>
                                    <input type="text" name="Hospital_Clanic" placeholder="Enter Hospital_Clinic Name" value={doctor.Hospital_Clanic} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number:</span>
                                    <input type="tel" name="Phone" placeholder="Enter your Phone Number" value={doctor.Phone} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Address:</span>
                                    <input type="text" name="Address" placeholder="Enter your Address" value={doctor.Address} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">City:</span>
                                    <input type="text" name="City" placeholder="Enter your City" value={doctor.City} onChange={onChange} required />
                                </div>
                                <div className="gender-details">
                                    <span className="details"> Gender:&nbsp; &nbsp;</span>
                                    <input type="radio" name="gender" value="male" /> Male &nbsp; &nbsp;
                                    <input type="radio" name="gender" value="female" /> Female&nbsp; &nbsp;
                                    <input type="radio" name="gender" value="unknown" /> Unknown
                                </div>
                            </div>

                            <div className="field input-box button ">
                                <input type="submit" name="Register" value="Register" onClick={handleClick}/>
                            </div>
                        </form>
                    </div>
                   <Details/>
                  </div>
                </div>
        </>
    )
}

export default DrRegister
