import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import GetUser  from "./components/GetUser"
import UpdateUser from "./components/UpdateUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<GetUser/>} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edit/:id" element={<UpdateUser/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
