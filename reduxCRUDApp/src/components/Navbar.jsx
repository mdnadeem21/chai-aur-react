import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../feature/userDetailsSlice";

function Navbar() {
  const allUsers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    // <nav className="bg-gray-100 p-4">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <h4 className="text-xl font-semibold">RTK</h4>

    //     <div className="flex items-center space-x-4">
    //       <ul className="flex space-x-4">
    //         <li className="nav-item">
    //           <Link to="/" className="text-gray-700 hover:text-gray-900">
    //             Create Post
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/getuser" className="text-gray-700 hover:text-gray-900">
    //             All Post ({allUsers.length})
    //           </Link>
    //         </li>
    //       </ul>

    //       <input
    //         className="form-input w-1/2 p-2 border border-gray-300 rounded"
    //         type="search"
    //         placeholder="Search"
    //         aria-label="Search"
    //         value={searchData}
    //         onChange={(e) => setSearchData(e.target.value)}
    //       />
    //     </div>
    //   </div>
    // </nav>
    <nav className="bg-gray-100 p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://images.pexels.com/photos/8442161/pexels-photo-8442161.jpeg"
            alt="RTK Logo"
            className="h-16 w-16 rounded-full"
          />
          <h4 className="text-xl font-semibold text-gray-800">RTK</h4>
        </Link>

        <div className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li>
              <Link to="/adduser" className="text-gray-700 hover:text-gray-900">
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                All Post ({allUsers.length})
              </Link>
            </li>
          </ul>

          <input
            className="form-input w-64 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
