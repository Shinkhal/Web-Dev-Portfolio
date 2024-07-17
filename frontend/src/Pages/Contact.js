import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.CLIENT_URI}/api/send-email`, formData);
      navigate("/confirmation");
    } catch (error) {
      console.error("There was an error sending the email!", error);
    }
  };

  return (
    <main className="container mx-auto max-w-screen-lg pt-10 pb-20 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-light-heading font-semibold md:font-bold mb-8">
          Contact Me
        </h1>
        <p className="text-lg text-center text-light-heading font-semibold mb-8">
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md border backdrop-blur-lg border-gray-300 shadow-2xl shadow-indigo-500/40 rounded-lg p-6 ">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-light-heading">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 bg-black text-white bg-opacity-20 backdrop-blur-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-light-heading">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 bg-black text-white bg-opacity-20 backdrop-blur-md py-2 px-3"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="message" className="block text-lg font-medium text-light-heading">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 bg-black text-white bg-opacity-20 backdrop-blur-md resize-none py-2 px-3"
              required
            ></textarea>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l8 8a1 1 0 01-1.414 1.414L10 5.414 2.707 12.707a1 1 0 01-1.414-1.414l8-8zM10 16a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="text-center">
          <button class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Submit
          </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Contact;
