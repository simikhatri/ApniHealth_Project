import React, {useState} from 'react';
import DoctorContext from "./docContext";

const DoctorState = (props) => {
  const host = "http://localhost:5000"
    const doctorinitials =  []
    const [doctors, setDoctor] = useState(doctorinitials)

    const getDoctor =async() =>{
      const response = await fetch(`${host}/api/doctor/fetchalldoctors`, {
        method: 'GET',
        headers: {
          'content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
      })
      const json = await response.json()
      setDoctor(json)
    }
  //Add a doctor
  const addDoctor =async(Name, Qualification, InstituteName, YearOfPassing, Specialization, Hospital_Clanic, Phone, Address, City) =>{
    const response = await fetch(`${host}/api/doctor/adddoctors`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({Name, Qualification, InstituteName, YearOfPassing, Specialization, Hospital_Clanic, Phone, Address, City})
    })

    const doctor = await response.json();
    setDoctor(doctors.concat(doctor))
  }
  //Delete a Doctor
  const deleteDoctor = async(id) =>{
    const response = await fetch(`${host}/api/doctor/deletedoctor/${id}`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    })
    const json = response.json();
   const newDr = doctors.filter((doctor)=>{ return doctor._id!==id});
    setDoctor(newDr);
  }
  //Edit a Doctor
  const editDoctor =async (id, Name, Qualification, InstituteName, YearOfPassing, Specialization, Hospital_Clanic, Phone, Address, City) =>{
    const response = await fetch(`${host}/api/doctor/updatedoctor/${id}`, {
      method: 'PUT',
      headers: {
        'content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({Name, Qualification, InstituteName, YearOfPassing, Specialization, Hospital_Clanic, Phone, Address, City})
    })
    const json = await response.json();

    let newDrs = JSON.parse(JSON.stringify(doctors))
    for (let index = 0; index < newDrs.length; index++) {
      const element = newDrs[index];
      if(element._id === id){
        newDrs[index].Name = Name;
        newDrs[index].Qualification = Qualification;
        newDrs[index].InstituteName = InstituteName;
        newDrs[index].YearOfPassing = YearOfPassing;
        newDrs[index].Specialization = Specialization;
        newDrs[index].Hospital_Clanic = Hospital_Clanic;
        newDrs[index].Phone = Phone;
        newDrs[index].Address = Address;
        newDrs[index].City = City;
        break;
      }
    }
    setDoctor(newDrs);
  }
  return (
   <DoctorContext.Provider value={{doctors, addDoctor, deleteDoctor, editDoctor, getDoctor}}>
    {props.children}
   </DoctorContext.Provider>
  )
}

export default DoctorState
