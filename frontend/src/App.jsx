import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import toaster, { Toaster  } from 'react-hot-toast'

const App = () => {
  // console.log(toaster,Toaster)
  return (

    <div className="h-screen w-full bg-blue-800">
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
