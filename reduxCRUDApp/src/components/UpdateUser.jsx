import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from '../feature/userDetailsSlice';

function UpdateUser() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const [updateData, setUpdateData] = useState();
    const {users}= useSelector((state) => state.app);
    
    useEffect(() => {
        
        console.log("ID : ",id)
        console.log("All Users : ",users)
        if (id) {
            const singleUser = users.filter((user) => user.id === id);
            setUpdateData(singleUser[0]);
        }
    }, []);

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
      };

    const handleSubmit = (e) => {

        e.preventDefault()
        dispatch(updateUser(updateData))
        navigate("/getuser")
        
    }

  return (
    <div>
      <h2 className="text-2xl font-semibold my-4 text-center">Update the data</h2>
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
            value={updateData && updateData.name}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={newData}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"value={updateData && updateData.email}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={newData}
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
            value={updateData && updateData.age}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={newData}
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
              checked={updateData && updateData.gender === "Male"}
              onChange={newData}
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
              checked={updateData && updateData.gender === "Female"}
              onChange={newData}
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
  )
}

export default UpdateUser
