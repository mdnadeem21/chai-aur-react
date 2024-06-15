import React from "react";
import { useSelector } from "react-redux";

function CustomModal({ id, setShowPopup }) {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.filter((user) => user.id == id);
  return (
    // <div>
    //   <div className="fixed inset-0 bg-black flex justify-center items-center z-50 bg-opacity-80">
    //     <div className="bg-white shadow-lg p-6 rounded-lg h-72 w-72">
    //       <div className="relative">
    //       <button
    //         onClick={() => setShowPopup(false)}
    //         className="absolute top-0 right-0 text-red-500 hover:text-red-700"
    //       >
    //         X
    //       </button>
    //       </div>
    //       <h2 className="text-xl font-bold mt-4">{singleUser[0].name}</h2>
    //       <h3 className="text-lg mt-2">{singleUser[0].email}</h3>
    //       <h4 className="text-md mt-2">{singleUser[0].age}</h4>
    //       <p className="text-sm mt-2">{singleUser[0].gender}</p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
        <div className="bg-white shadow-2xl p-8 rounded-lg max-w-sm w-full relative">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-2xl font-bold mt-4 text-center">
            {singleUser[0].name}
          </h2>
          <h3 className="text-lg mt-2 text-center text-gray-700">
            {singleUser[0].email}
          </h3>
          <h4 className="text-md mt-2 text-center text-gray-700">
            {singleUser[0].age}
          </h4>
          <p className="text-sm mt-2 text-center text-gray-600">
            {singleUser[0].gender}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
