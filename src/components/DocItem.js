import React, { useContext } from 'react';
import './css/DocItem.css';
import DoctorContext from '../context/doctors/docContext';

const DocItem = (props) => {
    const context = useContext(DoctorContext);
    const { deleteDoctor} = context;
    const { doctor, updatedoctor } = props
    return (
        <>
            {/* <div className="card">
                <div className="card-body">
                    <p className="card-text">Name: <span>{doctor.Name}</span> </p>
                    <p className="card-text">Qualification: <span>{doctor.Qualification}</span> </p>
                    <p className="card-text">Institute Name: <span>{doctor.InstituteName}</span> </p>
                    <p className="card-text">Year Of Passing: <span>{doctor.YearOfPassing}</span> </p>
                    <p className="card-text">Hospital_Clanic: <span>{doctor.Hospital_Clanic}</span> </p>
                    <p className="card-text">Phone: <span>{doctor.Phone}</span> </p>
                    <p className="card-text">Address: <span> {doctor.Address}</span></p>
                    <p className="card-text">City: <span>{doctor.City}</span> </p>
                    <i class="fa-solid fa-trash-can mx-2"></i>
                    <i class="fa-solid fa-pen-to-square mx-2"></i>
                </div>
            </div> */}
            <div className="container docdata">
                <table className="table table-border">
                    <tbody>
                        <tr>
                            <td>Name: </td>
                            <td>{doctor.Name}</td>
                        </tr>
                        <tr>
                            <td>Qualification:</td>
                            <td>{doctor.Qualification}</td>
                        </tr>
                        <tr>
                            <td >Institute Name:</td>
                            <td>{doctor.InstituteName}</td>
                        </tr>
                        <tr>
                            <td >Year Of Passing:</td>
                            <td>{doctor.YearOfPassing}</td>
                        </tr>
                        <tr>
                            <td >Hospital_Clanic:</td>
                            <td>{doctor.Hospital_Clanic}</td>
                        </tr>
                        <tr>
                            <td >Phone:</td>
                            <td>{doctor.Phone}</td>
                        </tr>
                        <tr>
                            <td >Address:</td>
                            <td>{doctor.Address}</td>
                        </tr>
                        <tr>
                            <td >City:</td>
                            <td>{doctor.City}</td>
                        </tr>
                    </tbody>
                </table>
                <i className="fa-solid fa-trash-can mx-2 delte" onClick={()=>{deleteDoctor(doctor._id)}}></i>
                    <i className="fa-solid fa-pen-to-square mx-4 px-2" onClick={()=>{updatedoctor(doctor)}}></i>
            </div>
        </>
    )
}

export default DocItem
