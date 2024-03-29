const Student = require("../models/studentModel");

//Create Student
const createStudent = async (req, res) => {
  try {
    const _student = await Student.create(req.body);
    res.status(200).json(_student);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//Get All Students
const getAllStudents = async(req, res)=>{
  try {
    const _students = await Student.find({});
    res.status(200).json(_students);
  } catch (error) {
     res.status(500).json({ message: error.message });
  }
}

//Get the Student
const getStudent = async(req, res)=>{
  try {
    const {id} = req.params;
    const _student = await Student.findById(id);
    res.status(200).json(_student);
  } catch (error) {
     res.status(500).json({ message: error.message });
  }
}

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const _student = await Student.findByIdAndUpdate(id, req.body);
    // we cannot find any Student in database
    if (!_student) {
      return res
        .status(404)
        .json({ message: `cannot find any student with ID ${id}` });
    }
    const updatedStudent = await Student.findById(id);
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete a Student
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const _student = await Student.findByIdAndDelete(id);
    if (!_student) {
      return res
        .status(404)
        .json({ message: `cannot find any student with ID ${id}` });
    }
    res.status(200).json(_student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent
};