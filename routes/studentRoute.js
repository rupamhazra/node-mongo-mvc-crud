const express = require("express");
const router = express.Router();
const {createStudent,getAllStudents,getStudent,updateStudent,deleteStudent}= require("../controllers/studentController");

//Student Routes
router.post("/student", createStudent);
router.get("/student", getAllStudents);
router.get("/student/:id", getStudent);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", deleteStudent);

module.exports = router;