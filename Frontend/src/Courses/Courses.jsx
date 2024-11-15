import React from 'react'
import Navbar from "../components/navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import list from "../../public/list.json";




function courses() {
  console.log(list);
  return (
    <>
    
      <Navbar />
      
      <div className="min-h-screen">
        <Course />
      </div>
      
        <Footer />
      
      </>
  );
}

export default courses;
