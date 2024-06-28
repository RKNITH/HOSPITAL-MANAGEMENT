import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  // Mock data for initial doctors
  const initialDoctors = [
    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      dob: "1990-01-01",
      gender: "Male",
      doctorDepartment: "Pediatrics",
      docAvatar: { url: "/doc1.jpg" }, // Provide a default avatar URL
    },
    {
      _id: "2",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "0987654321",
      dob: "1985-05-15",
      gender: "Female",
      doctorDepartment: "Orthopedics",
      docAvatar: { url: "/doc2.jpg" }, // Provide a default avatar URL
    },
    {
      _id: "3",
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@example.com",
      phone: "4567890123",
      dob: "1978-10-20",
      gender: "Male",
      doctorDepartment: "Cardiology",
      docAvatar: { url: "/doc3.jpg" }, // Provide a default avatar URL
    },
    {
      _id: "4",
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily.johnson@example.com",
      phone: "5678901234",
      dob: "1982-07-12",
      gender: "Female",
      doctorDepartment: "Neurology",
      docAvatar: { url: "/doc4.jpg" }, // Provide a default avatar URL
    },
    {
      _id: "5",
      firstName: "Daniel",
      lastName: "Williams",
      email: "daniel.williams@example.com",
      phone: "2345678901",
      dob: "1989-03-25",
      gender: "Male",
      doctorDepartment: "Oncology",
      docAvatar: { url: "/doc5.jpg" }, // Provide a default avatar URL
    },
    {
      _id: "6",
      firstName: "Olivia",
      lastName: "Jones",
      email: "olivia.jones@example.com",
      phone: "6789012345",
      dob: "1980-12-30",
      gender: "Female",
      doctorDepartment: "Radiology",
      docAvatar: { url: "/doc6.jpg" }, // Provide a default avatar URL
    },
    {
      _id: "7",
      firstName: "David",
      lastName: "Garcia",
      email: "david.garcia@example.com",
      phone: "7890123456",
      dob: "1975-04-05",
      gender: "Male",
      doctorDepartment: "Physical Therapy",
      docAvatar: { url: "/doc7.jpg" }, // Provide a default avatar URL
    },
    {
      _id: "8",
      firstName: "Sophia",
      lastName: "Martinez",
      email: "sophia.martinez@example.com",
      phone: "3456789012",
      dob: "1987-09-17",
      gender: "Female",
      doctorDepartment: "Dermatology",
      docAvatar: { url: "/doc8.jpg" }, // Provide a default avatar URL
    },
    {
      _id: "9",
      firstName: "Matthew",
      lastName: "Rodriguez",
      email: "matthew.rodriguez@example.com",
      phone: "8901234567",
      dob: "1984-02-08",
      gender: "Male",
      doctorDepartment: "ENT",
      docAvatar: { url: "/doc9.jpg" }, // Provide a default avatar URL
    },
    {
      _id: "10",
      firstName: "Isabella",
      lastName: "Lopez",
      email: "isabella.lopez@example.com",
      phone: "9012345678",
      dob: "1983-06-22",
      gender: "Female",
      doctorDepartment: "Gynecology",
      docAvatar: { url: "/doc10.jpg" }, // Provide a default avatar URL
    },
  ];


  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    // Fetch doctors only if there are no initial doctors
    if (initialDoctors.length === 0) {
      fetchDoctors();
    } else {
      setDoctors(initialDoctors); // Use mock data initially
    }
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => (
            <div className="card" key={element._id}>
              <img
                src={element.docAvatar?.url || "/defaultAvatar.png"}
                alt="doctor avatar"
              />
              <h4>{`${element.firstName} ${element.lastName}`}</h4>
              <div className="details">
                <p>
                  Email: <span>{element.email}</span>
                </p>
                <p>
                  Phone: <span>{element.phone}</span>
                </p>
                <p>
                  DOB: <span>{element.dob.substring(0, 10)}</span>
                </p>
                <p>
                  Department: <span>{element.doctorDepartment}</span>
                </p>
                <p>
                  NIC: <span>{element.nic}</span>
                </p>
                <p>
                  Gender: <span>{element.gender}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;
