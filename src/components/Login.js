//Login.js
import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "../Axios/axios.js";
import TokenContext from "../context/TokenContext.js";
import logo from "./login_avatar2.png";
import "./LoginStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [formData, setFormData] = useState({});
  const { userToken, tokenDispatch, userDispatch } = useContext(TokenContext);
  const [error, setError] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("/user/login", formData);
      tokenDispatch({ type: "SET_TOKEN", payload: result.data.token });
      userDispatch({ type: "SET_USER", payload: result.data.user });
      localStorage.setItem("authToken", JSON.stringify(result.data.token));
    } catch (error) {
      console.log(error);
      setError({ message: error.response.data.message });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      {userToken && <Navigate to="/" />}
      <section className="mainsection ">
        <div className="px-6 h-full text-gray-800 mt-[-20px]">
          <div className="animebox">
            <div className="animesquare" style={{ "--i": 1 }}></div>
            <div className="animesquare" style={{ "--i": 2 }}></div>
            <div className="animesquare" style={{ "--i": 3 }}></div>
            <div className="animesquare" style={{ "--i": 4 }}></div>
            <div className="animesquare" style={{ "--i": 5 }}></div>
            <div className="animesquare" style={{ "--i": 6 }}></div>
            <div className="animesquare" style={{ "--i": 7 }}></div>
            <div className="animesquare" style={{ "--i": 8 }}></div>
            <div className="animesquare" style={{ "--i": 9 }}></div>
            <div className="animesquare" style={{ "--i": 10 }}></div>

            <div className="containerbox">
              <div className="formpage">
                <img className="logoimage" src={logo} alt="Logo" />
                <h2 className="headingname">SIGN IN</h2>
                <form method="post" onSubmit={handleSubmit}>
                  {/* This is Error Block */}
                  <div>
                    {error && (
                      <div className="text-center text-white border-2 border-green-600 p-2 mb-2 rounded-md bg-red-200 shadow-2xl">
                        {error.message}
                      </div>
                    )}
                  </div>

                  {/* This is Input Fields */}
                  <div className="inputBox">
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      className="inputdetails"
                      id="emailInput"
                      required
                    />
                    <span className="spantag">
                      <FontAwesomeIcon icon={faEnvelope} className="userIcon" />
                      USEREMAIL
                    </span>
                  </div>

                  <div className="inputBox">
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      className="inputdetails"
                      id="passInput"
                      required
                    />
                    <span className="spantag">
                      <FontAwesomeIcon icon={faKey} className="userIcon" />
                      PASSWORD
                    </span>
                  </div>

                  {/* This is checkbox and forgot password div */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0 3rem", // Adjust the padding to add space
                    }}
                  >
                    <div style={{ margin: 0 }}>
                      <input
                        type="checkbox"
                        className="form-check-input  appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                      />
                      <label
                        className="form-check-label inline-block text-black hover:text-white hover:text-lg"
                        htmlFor="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      to={"/forgotPassword"}
                      className="text-black hover:text-white hover:text-lg"
                      style={{ margin: 0 }}
                    >
                      <u>Forgot Password</u>
                    </Link>
                  </div>

                  {/* This is Submit Button */}
                  <div className="inputBox">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="inputdetails mt-3"
                    >
                      Login
                    </button>
                    <p className="text-sm text-black font-semibold mt-3 pt-1 mb-0">
                      Don't have an account?
                      <Link
                        to={"/register"}
                        className="text-red-600 text-white hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      >
                        {" "}
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/*

<div className="px-6 h-full text-gray-800 mt-[-50px]">
                    <div className="flex flex-col items-center justify-center h-screen" >
                        <div className='mb-1 flex justify-center'>
                            <img src={logo} style={{ height: '250px', width: '250px' }} alt="Logo" />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form method='post' onSubmit={handleSubmit}>
                                <div>
                                    {error && (
                                        <div className="text-center text-white border-2 border-green-600 p-2 mb-2 rounded-md bg-red-200 shadow-2xl">
                                            {error.message}
                                        </div>
                                    )
                                    }
                                </div>
                                
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        name='email'
                                        onChange={handleChange}
                                        className="form-control  block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="emailInput"
                                        placeholder="Email address" />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        name='password'
                                        onChange={handleChange}
                                        className="form-control block  w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="passInput"
                                        placeholder="Password" />
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input  appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck2" />
                                        <label className="form-check-label inline-block text-white" htmlFor="exampleCheck2">Remember me</label>
                                    </div>
                                    <Link
                                        to={"/forgotPassword"} className='text-white'
                                    >Forgot Password</Link>
                                </div>
                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Login
                                    </button>
                                    <p className="text-sm text-white font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <Link
                                            to={"/register"}
                                            className="text-red-600 text-white hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        > Register</Link>
                                    </p>
                                </div>
                            </
                            form>
                        </div>

                    </div>
                </div>
 */

export default Login;

/*
//Login.js
import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from "../Axios/axios.js"
import TokenContext from '../context/TokenContext.js';
import logo from './login_avatar2.png'

function Login() {
    const [formData, setFormData] = useState({});
    const { userToken, tokenDispatch, userDispatch } = useContext(TokenContext);
    const [error, setError] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("/user/login", formData)
            tokenDispatch({ type: "SET_TOKEN", payload: result.data.token })
            userDispatch({ type: "SET_USER", payload: result.data.user })
            localStorage.setItem("authToken", JSON.stringify(result.data.token))
        } catch (error) {
            console.log(error);
            setError({ message: error.response.data.message })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div >
            {userToken && <Navigate to="/" />}
            <section className="login-container " >
                <div className="px-6 h-full text-gray-800 mt-[-50px]">
                    <div className="flex flex-col items-center justify-center h-screen" >
                        <div className='mb-1 flex justify-center'>
                            <img src={logo} style={{ height: '250px', width: '250px' }} alt="Logo" />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form method='post' onSubmit={handleSubmit}>
                                <div>
                                    {error && (
                                        <div className="text-center text-white border-2 border-green-600 p-2 mb-2 rounded-md bg-red-200 shadow-2xl">
                                            {error.message}
                                        </div>
                                    )
                                    }
                                </div>
                                
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        name='email'
                                        onChange={handleChange}
                                        className="form-control  block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="emailInput"
                                        placeholder="Email address" />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        name='password'
                                        onChange={handleChange}
                                        className="form-control block  w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="passInput"
                                        placeholder="Password" />
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input  appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck2" />
                                        <label className="form-check-label inline-block text-white" htmlFor="exampleCheck2">Remember me</label>
                                    </div>
                                    <Link
                                        to={"/forgotPassword"} className='text-white'
                                    >Forgot Password</Link>
                                </div>
                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Login
                                    </button>
                                    <p className="text-sm text-white font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <Link
                                            to={"/register"}
                                            className="text-red-600 text-white hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        > Register</Link>
                                    </p>
                                </div>
                            </
                            form>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default Login;
*/