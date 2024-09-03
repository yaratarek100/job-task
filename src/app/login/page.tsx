"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/e7003b653626b4899b379c517657a039.png";
import { useFormik } from "formik";
import axios from "axios";

export default function Login() {

  useEffect(()=>{
    localStorage.setItem("userToken", null);
    localStorage.setItem("userData", null);

  },[])


  const [errorMessage, seterrorMessage] = useState("");

  function handelRegistration(values : any) {
    handleLogin(values.email, values.password);
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handelRegistration,
  });

  const handleLogin = (email: string, password: string) => {
    axios
      .post(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
        new URLSearchParams({
          email: email,
          password: password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        let data = response.data;
        let accessToken = data.access;
        localStorage.setItem("userToken", accessToken);
        window.location.href = '/profile';
      })
      .catch((error) => {
        console.error(error);
        if (error.response) 
        {seterrorMessage(error.response.data.detail);}
      });
  };

  return (
    <div className="w-full bg-[#F8F8F8]  h-screen flex flex-col justify-center items-center">
      <Image src={logo} alt="logo alt" className="mx-auto w-[225px]" />

      <form
        onSubmit={formik.handleSubmit}
        className=" border rounded-2xl shadow-sm  w-3/4  md:w-1/2 lg:w-5/12 px-7 py-12  flex flex-col justify-center items-center mx-auto"
      >
        <div className="inp-group w-11/12 mb-9">
          <label className="text-[#262626]  ">Email Address</label>
          <input
            className="placeholder:text-[#CDCDCD] px-3 p-1 mt-2 rounded-lg w-full bg-transparent border focus:outline-slate-500 "
            placeholder="nouran@cyparta.com"
            name="email"
            id="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
            required
          />
        </div>
        <div className="inp-group w-11/12 mb-9">
          <label className="text-[#262626]  ">Password</label>
          <input
            className="placeholder:text-[#CDCDCD] px-3 p-1 mt-2 rounded-lg w-full bg-transparent border focus:outline-slate-500 "
            placeholder="************"
            name="password"
            id="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
            required
          />
        </div>

{errorMessage!="" ? <p className="text-red-600">{errorMessage}</p> : null}
        <button
          type="submit"
          className="bg-[#262626] text-white block mx-auto p-2 rounded-lg w-9/12 mt-9"
        >
          Login
        </button>
      </form>
    </div>
  );
}


