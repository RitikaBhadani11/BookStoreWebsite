import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h3 className="font-bold text-lg mb-4">Contact Us</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-md"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            placeholder="Enter your message"
            className="w-full px-3 py-2 border rounded-md"
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
        </div>
        <div>
          <button
            type="submit"
            className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
