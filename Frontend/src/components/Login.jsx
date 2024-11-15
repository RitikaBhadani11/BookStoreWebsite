import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'; // Don't forget to import Link

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white text-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              X
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4">
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black w-80 px-3 py-2 border rounded-md outline-none"
                {...register("email", { required: "true" })}
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
                className="bg-white text-black w-80 px-3 py-2 border rounded-md outline-none"
                {...register("password", { required: "true" })}
              />
              <br />
               {errors.email && <span className="text-sm text-red-500">This field is required</span>}
               </div>
            {/* Action buttons inside modal */}
            <div className="modal-action flex justify-between items-center mt-4 w-full">
              <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p className="text-sm">
                Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
