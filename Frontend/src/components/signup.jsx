import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import { useForm } from "react-hook-form";

function signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
  return (
    <>
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
            <div className='modal-box bg-white text-black'>
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >X</Link>
            
            <h3 className="font-bold text-lg">Sign Up</h3>
            <br />
            <br />
            <span>Name</span>
            <br />
            <input
                type="text"
                placeholder="Enter your name"
                className="bg-white text-black w-80 px-3 py-2 border rounded-md outline-none"{...register("name", { required: "true" })}

              />
              <br />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}

            <div className="mt-4">
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black w-80 px-3 py-2 border rounded-md outline-none" {...register("email", { required: "true" })}

              />
              <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            <br />
            <div className="mt-4">
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-white text-black w-80 px-3 py-2 border rounded-md outline-none"{...register("password", { required: "true" })}

              />
              <br />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            {/* Action buttons inside modal */}
            <div className="modal-action flex justify-between items-center mt-4 w-full">
              <button className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200">
                Sign Up
              </button>
              <p className="text-xl">
              Have account?  <button className="underline text-blue-500 cursor-pointer text-pink-500" onClick={()=>{
                document.getElementById('my_modal_3').showModal()
              }}>Login</button>
              <Login/>
              </p>
            </div>
          </form>
          </div>
    </div>
    </div>
    </>
  )
};

export default signup
