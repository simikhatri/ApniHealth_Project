const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser')
const Doctors = require('../models/Doctor');
const { body, validationResult } = require('express-validator');

router.get('/fetchalldoctors', fetchuser ,async(req, res)=>{
   try {
      const doctors = await Doctors.find({user:req.user.id})
      res.json(doctors)
   } catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error Occured")
   }
  
})

// Route:2 Adding Doctors using post
router.post('/adddoctors', fetchuser,[
   body('Name', 'Enter Your Valid Name ').isLength({ min: 3 }),
   body('Qualification', 'Enter Your Qualification').notEmpty(),
   body('InstituteName', 'Enter Your Institute Name').notEmpty(),
   body('YearOfPassing', 'Enter Your Year Of Passing ').notEmpty(),
   body('Specialization', 'Enter Your Specialization ').notEmpty(),
   body('Hospital_Clanic', 'Enter Your  Hospital_Clanic').notEmpty(),
   body('Phone', 'Enter Valid Phone Number').isNumeric(),
   body('Address', 'Enter Your Address').notEmpty(),
   body('City', 'Enter Your City').notEmpty(),
] ,async(req, res)=>{
   try {
   const {Name, Qualification, InstituteName, YearOfPassing, Specialization, Hospital_Clanic, Phone, Address, City} = req.body
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }
   const doctor = new Doctors({
      Name, Qualification, InstituteName, YearOfPassing, Specialization, Hospital_Clanic, Phone, Address, City, user:req.user.id
   }) 
   const saveDr = await doctor.save()
   res.json(saveDr)
} catch (error) {
   console.log(error.message);
   res.status(500).send("Some Error Occured")  
}
})

//Note 3 update a existing doctor using: PUT "/api/doctor/updatedoctor". login required
router.put('/updatedoctor/:id', fetchuser, async (req, res) => {
   const {Name, Qualification, InstituteName, YearOfPassing, Specialization, Hospital_Clanic, Phone, Address, City} = req.body
   try {
     const newdoc = {};
     if (Name) { newdoc.Name = Name };
     if (Qualification) { newdoc.Qualification = Qualification };
     if (InstituteName) { newdoc.InstituteName = InstituteName };
     if (YearOfPassing) { newdoc.YearOfPassing = YearOfPassing };
     if (Specialization) { newdoc.Specialization = Specialization };
     if (Hospital_Clanic) { newdoc.Hospital_Clanic = Hospital_Clanic };
     if (Phone) { newdoc.Phone = Phone };
     if (Address) { newdoc.Address = Address }; 
     if (City) { newdoc.City = City};

 
     //find the note to be update  and update it
     let doctor = await Doctors.findById(req.params.id);
     if (!doctor) {
       return res.status(404).send("Not Found");
     }
 
     if (doctor.user.toString() !== req.user.id) {
       return res.status(401).send("Not Allowed");
     }
 
     doctor = await Doctors.findByIdAndUpdate(req.params.id, { $set: newdoc }, { new: true })
     res.json({ doctor });
   } catch (error) {
     console.error(error.message);
     res.status(500).send("enternal Server Error");
   }
 })

 //Note 4 delete a existing doctor using: DELETE "/api/doctor/deletedoctor". login required
router.delete('/deletedoctor/:id', fetchuser, async (req, res) => {
   try {
     //find the note to be delete and delete it
     let doctor = await Doctors.findById(req.params.id);
     if (!doctor) {
       return res.status(404).send("Not Found");
     }
 
     if (doctor.user.toString() !== req.user.id) {
       return res.status(401).send("Not Allowed");
     }
 
     doctor = await Doctors.findByIdAndDelete(req.params.id)
     res.json({ "Success": "Note has been deleted", doctor: doctor });
 
   } catch (error) {
     console.error(error.message);
     res.status(500).send("enternal Server Error");
   }
 })
module.exports = router
