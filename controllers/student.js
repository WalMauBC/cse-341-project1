// controllers/students.js
const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

// 🔹 Helper function to validate ObjectId
const isValidObjectId = (id) => ObjectId.isValid(id) && new ObjectId(id).toString() === id;

// 🟢 Get All Students
const getAll = async (req, res) => {
  // ... (your existing code)
};

// 🔵 Get a Single Student
const getSingle = async (req, res) => {
  // ... (your existing code)
};

// 🟠 Create a New Student (POST)
const createStudent = async (req, res) => {
  // ... (your existing code)
};

// 🟡 Update a Student (PUT)
const updateStudent = async (req, res) => {
  // ... (your existing code)
};

// 🔴 Delete a Student (DELETE)
const deleteStudent = async (req, res) => {
  // ... (your existing code)
};

module.exports = { getAll, getSingle, createStudent, updateStudent, deleteStudent };