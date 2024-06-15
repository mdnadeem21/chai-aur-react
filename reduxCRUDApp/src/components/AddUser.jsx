import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../feature/userDetailsSlice";

function AddUser() {
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(addUser(users));
    navigate("/getuser");
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold my-4 text-center">Fill the data</h2>
      <form
        className="w-full max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={getUserData}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={getUserData}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age
          </label>
          <input
            type="text"
            name="age"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={getUserData}
            required
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input
              className="form-radio text-blue-500"
              name="gender"
              value="Male"
              type="radio"
              onChange={getUserData}
              required
            />
            <label className="ml-2 text-gray-700">Male</label>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input
              className="form-radio text-blue-500"
              name="gender"
              value="Female"
              type="radio"
              onChange={getUserData}
            />
            <label className="ml-2 text-gray-700">Female</label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUser;
