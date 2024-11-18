"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { HomeIcon, UserIcon, BookOpenIcon } from "@heroicons/react/24/solid";

const Student = () => {
  const params = useParams();

  // Student data
  const studentData: { [key: string]: { name: string; phone: string; email: string; linkedIn: string } } = {
    AFSHAN: {
      name: "Afshan Irsa",
      phone: "+9-034576902",
      email: "Afshanfarooq@test.com",
      linkedIn: "https://www.linkedin.com/in/afsha-irsa-farooq-4327100",
    },
    FIZA: {
      name: "Fiza Farooq",
      phone: "+9-034576903",
      email: "Fizafarooq@test.com",
      linkedIn: "https://www.linkedin.com/in/fiza-farooq-123456",
    },
    HOMA: {
      name: "Homa Ali",
      phone: "+9-034576904",
      email: "Homaali@test.com",
      linkedIn: "https://www.linkedin.com/in/homa-ali-123456",
    },
    SANA: {
      name: "Sana Khan",
      phone: "+9-034576905",
      email: "Sanakhan@test.com",
      linkedIn: "https://www.linkedin.com/in/sana-khan-123456",
    },
  };

 
 // Get the student's information based on the parameter
 const studentInfo = studentData[params?.student?.toUpperCase()] || null;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Navbar */}
      <nav className="fixed w-full bg-gray-800 text-white shadow-lg z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">Student Portal</span>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-6">
            <li className="flex items-center space-x-1">
              <HomeIcon className="h-5 w-5" />
              <Link href="/">Home</Link>
            </li>
            <li className="flex items-center space-x-1">
              <BookOpenIcon className="h-5 w-5" />
              <Link href="/studentList">Student List</Link>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-1 focus:outline-none"
                >
                  <UserIcon className="h-5 w-5" />
                  <span>Categories</span>
                </button>
                
                
              </div>
            </li>
          </ul>

        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Student List</h1>
        {studentInfo ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold">{studentInfo.name}</h2>
            <p>Phone: {studentInfo.phone}</p>
            <p>Email: {studentInfo.email}</p>
            <a
              href={studentInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              LinkedIn Profile
            </a>
          </div>
        ) : (
          <p className="text-center text-gray-600">No student found. Please select a valid student.</p>
        )}

        <ul className="text-center space-y-2 mt-6">
          {Object.keys(studentData).map((key) => (
            <li key={key} className="hover:underline">
              <Link href={`/studentList/${key}`}>{key}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Student;
