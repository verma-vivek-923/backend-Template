import React, { useState } from "react";
// import { MdOutlineusername } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import axiosInstance from "../utilities/axiosInstance";
import toast from "react-hot-toast";

const Login = () => {
  const [loading, setLoading] = useState();

  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    // console.log(loginData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);

    try {
      const { data } = await axiosInstance.post("/user/login", loginData);

      toast.success("login successfull", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full bg-gray-200 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full mb-10 max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="flex mb-2 items-center border rounded p-2 focus-within:bg-slate-100">
            {/* <MdOutlineusername className="text-gray-500 mr-2" /> */}
            <input
              type="text"
              autoComplete="off"
              placeholder="username address"
              name="userName"
              // name={loginData.username}
              value={loginData.username}
              onChange={handleChange}
              required
              className="w-full focus:outline-none"
            />
          </div>

          <div className="flex mb-2 items-center border rounded p-2 focus-within:bg-slate-100">
            <TbLockPassword className="text-gray-500 mr-2" />
            <input
              type="password"
              autoComplete="off"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
              className="w-full focus:outline-none focus:bg-slate-100"
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-green-600 mt-2 text-white py-2 rounded-md md:font-semibold hover:bg-green-700"
          >
            {!loading ? (
              "Log In"
            ) : (
              <div className="flex justify-center items-center space-x-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.28.805 4.373 2.143 6.027l1.857-1.736z"
                  ></path>
                </svg>
                <span>Loging In...</span>
              </div>
            )}
          </button>
          {/* <p className="text-center mt-4">
            Not registered yet ?{" "}
            <Link to={"/register"} className="text-blue-600 hover:underline ">
              Sign Up Now
            </Link>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
