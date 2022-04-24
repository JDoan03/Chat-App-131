import mongoose from 'mongoose';
import { StudentSchema, TeacherSchema, AdminSchema } from '../models/model';

const Student = mongoose.model('StudentLogin', StudentSchema);
const Teacher = mongoose.model('TeacherLogin', TeacherSchema);
const Admin = mongoose.model('AdminLogin',AdminSchema);

//Students
export const addNewStudent = (req,res) => {
  let newStudent = new Student(req.body);
  newStudent.save((err, student) => {
    if (err) {
      res.send(err)
    }
    res.json(student)
  })
}

export const getStudents = (req, res) => {
  Student.find({}, (err, students) => {
    if(err){
      res.send(err)
    }
    res.json(students)
  })
}

export const getStudentWithID = (req, res) => {
  Student.findById(req.params.studentID, (err, student) => {
    if(err) {
      res.send(err)
    }
    res.json(student)
  })
}

export const updateStudent = (req, res) => {
  Student.findOneAndUpdate({ _id: req.params.studentID }, req.body, { new: true, useFindAndModify: false }, (err, student) => {
    if(err) {
      req.send(err)
    }
    res.json(student)
  })
}

export const deleteStudent = (req, res) => {
  Student.deleteOne({ _id: req.params.studentID }, (err, student) => {
    if(err){
      req.send(err)
    }
    res.json({message: "Successfully deleted student"})
  })
}

//Teachers
export const addNewTeacher = (req,res) => {
  let newTeacher = new Teacher(req.body);
  newTeacher.save((err, teacher) => {
    if (err) {
      res.send(err)
    }
    res.json(teacher)
  })
}

export const getTeacher = (req, res) => {
  Teacher.find({}, (err, teacher) => {
    if(err){
      res.send(err)
    }
    res.json(teacher)
  })
}

export const getTeacherWithID = (req, res) => {
  Teacher.findById(req.params.teacherID, (err, teacher) => {
    if(err) {
      res.send(err)
    }
    res.json(teacher)
  })
}

export const updateTeacher = (req, res) => {
  Teacher.findOneAndUpdate({ _id: req.params.teacherID }, req.body, { new: true, useFindAndModify: false }, (err, teacher) => {
    if(err) {
      req.send(err)
    }
    res.json(teacher)
  })
}

export const deleteTeacher = (req, res) => {
  Teacher.deleteOne({ _id: req.params.teacherID }, (err, teacher) => {
    if(err){
      req.send(err)
    }
    res.json({message: "Successfully deleted teacher"})
  })
}

//Admin
export const addNewAdmin = (req,res) => {
  let newAdmin = new Admin(req.body);
  newAdmin.save((err, admin) => {
    if (err) {
      res.send(err)
    }
    res.json(admin)
  })
}

export const getAdmin = (req, res) => {
  Admin.find({}, (err, admin) => {
    if(err){
      res.send(err)
    }
    res.json(admin)
  })
}

export const getAdminWithID = (req, res) => {
  Admin.findById(req.params.adminID, (err, admin) => {
    if(err) {
      res.send(err)
    }
    res.json(admin)
  })
}

export const updateAdmin = (req, res) => {
  Admin.findOneAndUpdate({ _id: req.params.adminID }, req.body, { new: true, useFindAndModify: false }, (err, admin) => {
    if(err) {
      req.send(err)
    }
    res.json(admin)
  })
}

export const deleteAdmin = (req, res) => {
  Admin.deleteOne({ _id: req.params.adminID }, (err, admin) => {
    if(err){
      req.send(err)
    }
    res.json({message: "Successfully deleted admin"})
  })
}