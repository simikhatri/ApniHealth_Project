import React, { useContext, useEffect, useRef, useState } from 'react';
import DoctorContext from '../context/doctors/docContext';
import DocItem from './DocItem';
import './css/DrRegister.css';
import { useNavigate  } from 'react-router-dom';

const Details = () => {
    const context = useContext(DoctorContext);
    const navigate = useNavigate();
    const { doctors, getDoctor, editDoctor} = context;
    const [doctor, setDoctors] = useState({id: "", eName: "", eQualification: "", eInstituteName: "", eSpecialization: "", eYearOfPassing: "", eHospital_Clanic: "", ePhone: "", eAddress: "", eCity: "" })
    useEffect(() => {
        if(localStorage.getItem('token')){ 
            getDoctor();
        }
       else{
        navigate("/Login");
       }
        // eslint-disable-next-line
    }, [])
    const updatedoctor = (currentDoctor) => {
        ref.current.click()
        setDoctors({id: currentDoctor._id, eName: currentDoctor.Name, eQualification: currentDoctor.Qualification, eInstituteName: currentDoctor.InstituteName, eSpecialization: currentDoctor.Specialization, eYearOfPassing: currentDoctor.YearOfPassing, eHospital_Clanic: currentDoctor.Hospital_Clanic, ePhone: currentDoctor.Phone, eAddress: currentDoctor.Address, eCity: currentDoctor.City})
    }
    const handleClick = (e) =>{
        editDoctor(doctor.id, doctor.eName, doctor.eQualification, doctor.eInstituteName, doctor.eYearOfPassing, doctor.eSpecialization, doctor.eHospital_Clanic, doctor.ePhone, doctor.eAddress, doctor.eCity)
       refClose.current.click();        
    }
    const onChange = (e) => {
        setDoctors({ ...doctor, [e.target.name]: e.target.value })
    }
    const ref = useRef(null)
    const refClose = useRef(null)
    return (
        <>

            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Registration</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="content">
                        <form>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Name:</span>
                                    <input type="text" name="eName" value={doctor.eName}  onChange={onChange} required />
                                </div>
                                
                                <div className="input-box">
                                    <span className="details">Qualification:</span>
                                    <input type="text" name="eQualification" value={doctor.eQualification} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">InstituteName:</span>
                                    <input type="text" name="eInstituteName" value={doctor.eInstituteName} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Specialization:</span>
                                    <input type="text" name="eSpecialization" value={doctor.eSpecialization} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Year Of Passing:</span>
                                    <input type="text" name="eYearOfPassing" value={doctor.eYearOfPassing} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Hospital_Clinic:</span>
                                    <input type="text" name="eHospital_Clanic" value={doctor.eHospital_Clanic} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number:</span>
                                    <input type="tel" name="ePhone" value={doctor.ePhone} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Address:</span>
                                    <input type="text" name="eAddress" value={doctor.eAddress} onChange={onChange} required />
                                </div>
                                <div className="input-box">
                                    <span className="details">City:</span>
                                    <input type="text" name="eCity" value={doctor.eCity} onChange={onChange} required />
                                </div>
                                <div className="gender-details">
                                    <span className="details"> Gender:&nbsp; &nbsp;</span>
                                    <input type="radio" name="gender" value="male" /> Male &nbsp; &nbsp;
                                    <input type="radio" name="gender" value="female" /> Female&nbsp; &nbsp;
                                    <input type="radio" name="gender" value="unknown" /> Unknown
                                </div>
                            </div>
                        </form>
                    </div>
                        </div>
                        <div className="modal-footer">
                            <button ref = {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4 py-4 ">
                <h2 className='p-3'> your registration detail</h2>
                {doctors.map((doctor) => {
                    return <DocItem key={doctor._id} updatedoctor={updatedoctor} doctor={doctor} />
                })
                }
            </div>
        </>
    )
}

export default Details
