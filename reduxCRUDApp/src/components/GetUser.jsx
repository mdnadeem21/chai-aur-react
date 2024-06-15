import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../feature/userDetailsSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

function GetUser() {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showPopUp, setShowPopUp] = useState(false);
  const [radioData, setRadioData] = useState("");
  useEffect(() => {
    dispatch(getUser());
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <svg
            className="animate-spin h-8 w-8 text-blue-500 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
          <h1 className="text-xl font-semibold text-gray-700">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      {showPopUp && (
        <CustomModal
          id={id}
          showPopUp={showPopUp}
          setShowPopup={setShowPopUp}
        />
      )}
      {/* <h2 className="bg-blue-100 text-center">All Data</h2>
      <div className="bg-blue-100 text-center">
        <input
          className="bg-blue-100 form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
          name="gender"
          checked={radioData === ""}
          type="radio"
          onChange={(e) => setRadioData("")}
        />
        <label className="ml-2 text-gray-700">All</label>

        <input
          className="ml-1 form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
          name="gender"
          checked={radioData === "Male"}
          value="Male"
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="ml-2 text-gray-700">Male</label>
        <input
          className="ml-1 form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
          name="gender"
          value="Female"
          checked={radioData === "Female"}
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="ml-2 text-gray-700">Female</label>
      </div> */}
      <div className="w-full p-4 bg-blue-100">
      <h2 className="bg-blue-100 text-center text-2xl font-bold py-4">
        All Data
      </h2>
      <div className="bg-blue-100 text-center py-4">
        <div className="inline-flex items-center mx-2">
          <input
            className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
            name="gender"
            checked={radioData === ""}
            type="radio"
            onChange={(e) => setRadioData("")}
          />
          <label className="ml-2 text-gray-700">All</label>
        </div>
        <div className="inline-flex items-center mx-2">
          <input
            className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
            name="gender"
            checked={radioData === "Male"}
            value="Male"
            type="radio"
            onChange={(e) => setRadioData(e.target.value)}
          />
          <label className="ml-2 text-gray-700">Male</label>
        </div>
        <div className="inline-flex items-center mx-2">
          <input
            className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
            name="gender"
            value="Female"
            checked={radioData === "Female"}
            type="radio"
            onChange={(e) => setRadioData(e.target.value)}
          />
          <label className="ml-2 text-gray-700">Female</label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {users &&
        users
          .filter((user) => {
            if (searchData.length === 0) {
              return user;
            } else {
              return user.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .filter((user) => {
            if (radioData === "Male") {
              return user.gender == radioData;
            } else if (radioData === "Female") {
              return user.gender === radioData;
            } else return user;
          })
          .map((user) => (
            // <div key={user.id} className="p-20 bg-blue-100">
            //   <div className="bg-white p-6 rounded-lg shadow-lg">
            //     <h2 className="text-center  text-2xl font-bold mb-2 text-gray-800">
            //       {user.name.toUpperCase()}
            //     </h2>
            //     <p className="text-gray-700">{user.email}</p>
            //     <p className="text-gray-700">{user.gender}</p>
            //     <button
            //       className="hover:underline text-blue-500"
            //       onClick={() => [setId(user.id), setShowPopUp(true)]}
            //     >
            //       View
            //     </button>{" "}
            //     &nbsp;
            //     <Link
            //       to={`/edit/${user.id}`}
            //       className="hover:underline text-blue-500"
            //     >
            //       Edit
            //     </Link>{" "}
            //     &nbsp;
            //     <Link
            //       className="hover:underline text-blue-500"
            //       onClick={() => dispatch(deleteUser(user.id))}
            //     >
            //       Delete
            //     </Link>
            //   </div>
            // </div>
            // 2nd Design
            // <div key={user.id} className="p-6 md:p-10 lg:p-12 bg-blue-100">
            //   <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            //     <h2 className="text-center text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            //       {user.name.toUpperCase()}
            //     </h2>
            //     <p className="text-gray-600 text-center mb-2">{user.email}</p>
            //     <p className="text-gray-600 text-center mb-4">{user.gender}</p>
            //     <div className="flex justify-around mt-4">
            //       <button
            //         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            //         onClick={() => [setId(user.id), setShowPopUp(true)]}
            //       >
            //         View
            //       </button>
            //       <Link
            //         to={`/edit/${user.id}`}
            //         className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
            //       >
            //         Edit
            //       </Link>
            //       <button
            //         className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
            //         onClick={() => dispatch(deleteUser(user.id))}
            //       >
            //         Delete
            //       </button>
            //     </div>
            //   </div>
            // </div>

            // 3rd Design
            <div key={user.id} className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-center text-xl font-bold mb-4 text-gray-800">
                {user.name.toUpperCase()}
              </h2>
              <p className="text-gray-600 text-center mb-2">{user.email}</p>
              <p className="text-gray-600 text-center mb-4">{user.gender}</p>
              <div className="flex justify-around mt-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                  onClick={() => [setId(user.id), setShowPopUp(true)]}
                >
                  View
                </button>
                <Link
                  to={`/edit/${user.id}`}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
                >
                  Edit
                </Link>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
                  onClick={() => dispatch(deleteUser(user.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
            

          ))}
          </div>
          </div>
    </div>
  );
}

export default GetUser;
