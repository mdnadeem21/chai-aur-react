import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const className = "col-md-6 m-4 bg-gray-600 text-white p-4 text-xl";
  const [userName, setUserName] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [userFollowers, setUserFollowers] = useState("");
  const [name, setName] = useState("");
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //    fetch(`https://api.github.com/users/mdnadeem21`)
  //    .then( res => res.json())
  //    .then( data => {
  //      console.log(`User Data : ${data}`);
  //      setData(data)

  //    })
  // },[])
  const handleChange = (data) => {
    console.log(`Inserted Data : ${data}`);
    setUserName(data);
  };
  const getUserData = () => {
    console.log("Submited Data : ", userName);
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then(
        (data) => (
          console.log(data),
          setName(data.name),
          setUserFollowers(data.followers),
          setUserProfile(data.avatar_url)
        )
      );
    setUserName("");
  };
  return (
    <>
      <div className="columns-2">
        <div className="col-md-6 m-4 bg-gray-600 text-white p-4 text-xl">
          Github <br />
          Name : {data.name} <br />
          Followers : {data.followers}
          <img
            src={data.avatar_url}
            width="200"
            height="200"
            className="rounded"
            alt="user photo"
          />
        </div>
          <div className={className}>
            Other User <br />
            Name : {name ? name : "N/A"} <br />
            Followers : {userFollowers ? userFollowers : "0"}
            <img
              src={userProfile}
              width="200"
              height="200"
              className="rounded"
              alt="user photo"
            />
          </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-6 flex flex-col justify-center"
      >
        <div className="flex flex-col-6">
          <label for="name" className="hidden">
            User Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={userName}
            placeholder="User Name"
            onChange={(e) => handleChange(e.target.value)}
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
          onClick={() => getUserData()}
        >
          Get Data
        </button>
      </form>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/mdnadeem21`);
  return response.json();
};
