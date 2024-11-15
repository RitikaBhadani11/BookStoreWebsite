import React from 'react';
import Cards from '../components/cards';
import list from "../../public/list.json";
import {Link} from 'react-router-dom';

function Course() {
  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />

   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

    <div className="mt=28 items-center justify-center text-center " >
    <h1 className="text-2xl  md:text-4xl">We're delighted to have you {" "}
     <span className="text-pink-500">Here! :)</span>
     </h1>
     <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium minus earum ex soluta culpa ducimus, debitis asperiores nisi nostrum dolorum non eius eveniet ut, quo esse sint perspiciatis incidunt!</p>
    <Link to="/">
    <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
    </Link>
    </div>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
    {
      list.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))
    }
    </div>
    </>
  );
}

export default Course;
