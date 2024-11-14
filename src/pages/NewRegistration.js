import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Array of 50 Indian names
const indianNames = [
  "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ayaan", "Krishna", "Ishaan",
  "Shaurya", "Atharv", "Aarush", "Aryan", "Parth", "Siddharth", "Rudra", "Rishi", "Shivansh", "Darsh",
  "Anika", "Ananya", "Aditi", "Diya", "Aarohi", "Saanvi", "Myra", "Anvi", "Aarya", "Kiara",
  "Prisha", "Pranavi", "Navya", "Shrishti", "Aadhya", "Vanya", "Sara", "Pihu", "Aalia", "Riya",
  "Avantika", "Kashvi", "Kavya", "Shanaya", "Esha", "Anushka", "Ira", "Nisha", "Riddhi", "Ishita"
];

// Function to generate random student data
const generateRandomStudents = (num) => {
  const courses = ["Computer Science", "Mathematics", "Physics", "Chemistry", "Biology"];
  const statuses = ["Active", "Inactive"];
  const students = [];
  
  for (let i = 1; i <= num; i++) {
    const randomName = indianNames[i % indianNames.length]; // Repeatedly use names from indianNames array
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomCourse = courses[Math.floor(Math.random() * courses.length)];
    const randomDate = new Date(
      2020 + Math.floor(Math.random() * 5), 
      Math.floor(Math.random() * 12), 
      Math.floor(Math.random() * 28) + 1
    ).toISOString().split('T')[0];
    
    students.push({
      id: i,
      name: randomName,
      status: randomStatus,
      date: randomDate,
      course: randomCourse,
    });
  }
  
  return students;
};

const NewRegistration = () => {
  const [students, setStudents] = useState(generateRandomStudents(75000));

  const addStudent = (student) => {
    setStudents([...students, { id: students.length + 1, ...student }]);
  };

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    if (!sessionStorage.getItem("isLoggedIn")) {
      navigate("/"); // Redirect to login page if not logged in
    }
  }, [navigate]);

  return (
    <>
      <div className="page">
        <div className="page-main">
          <Header />
          <div className="my-3 my-md-5">
            <div className="container">
              <div className="page-header">
                <h1 className="page-title">New Registration</h1>
              </div>

              <RegistrationForm onRegister={addStudent} />
              <StudentTable students={students} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NewRegistration;

// RegistrationForm Component
const RegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    status: "Active",
    date: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
    setFormData({ name: "", status: "Active", date: "", course: "" });
  };

  return (
    <div className="card p-4 mb-4">
      <h3 className="card-title">Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label>Status</label>
            <select
              className="form-control"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Registration Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label>Course</label>
            <input
              type="text"
              className="form-control"
              name="course"
              placeholder="Enter course"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Register Student
        </button>
      </form>
    </div>
  );
};

// StudentTable Component using Material-UI DataGrid
const StudentTable = ({ students }) => {
  // Define columns for DataGrid
  const columns = [
    { field: "id", headerName: "SNO", width: 80 },
    { field: "name", headerName: "NAME", width: 150 },
    { field: "status", headerName: "STATUS", width: 120 },
    { field: "date", headerName: "REGISTRATION DATE", width: 180 },
    { field: "course", headerName: "COURSE", width: 200 },
    {
      field: "manage",
      headerName: "MANAGE",
      width: 120,
      renderCell: () => (
        <Button variant="contained" color="primary" size="small">
          Manage
        </Button>
      ),
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 120,
      renderCell: () => (
        <Button variant="contained" color="secondary" size="small">
          Action
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ height: 600, width: "100%" }} className="card">
      <DataGrid
        rows={students}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 50, 100]}
        pagination
      />
    </Box>
  );
};