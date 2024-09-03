"use client";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import axios from "axios";

export default function Edit({ clickedSrc, setClickedSrc }) {
  const [openPopUp, setopenPopUp] = useState(true);

  let user = JSON.parse(localStorage.getItem("userData"));
  let userToken = localStorage.getItem("userToken");

  function handelEditedData(values) {

    axios.patch(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
        {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          phone: values.phone,
          bio: values.bio,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        let data = response.data;
        console.log(data);
        localStorage.setItem("userData", JSON.stringify(data));
        console.log(localStorage.getItem("userData"));
        window.location.href = "/profile/personal";
      })
      .catch((error) => {
        console.error(error);
      });
  }

  let formik = useFormik({
    initialValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
      email: user.email,
      bio: user.bio,
    },
    onSubmit: handelEditedData,
  });

  return (
    <div className="layer  w-full h-screen flex justify-center items-center absolute top-0 right-0 bg-black bg-opacity-30">
      <form
        onSubmit={formik.handleSubmit}
        className=" w-2/3 px-9 py-5 rounded-3xl shadow-md flex flex-wrap gap-12 bg-[#F8F8F8] "
      >
        <div className="group grow w-[45%] py-2 text-slate-400 text-sm border-b  ">
          <label className="w-full ps-2">First Name</label>
          <input
            className="w-full ps-2 focus:outline-1 text-slate-800 text-base block bg-transparent rounded-lg"
            name="first_name"
            id="first_name"
            type="text"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
          ></input>
        </div>
        <div className="group grow w-[45%] py-2 text-slate-400 text-sm border-b  ">
          <label className="w-full ps-2">Last Name</label>
          <input
            className="w-full ps-2 focus:outline-1 text-slate-800 text-base block bg-transparent rounded-lg"
            name="last_name"
            id="last_name"
            type="text"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
          ></input>
        </div>
        <div className="group grow w-[45%] py-2 text-slate-400 text-sm border-b  ">
          <label className="w-full ps-2">Mobile Number</label>
          <input
            className="w-full ps-2 focus:outline-1 text-slate-800 text-base block bg-transparent rounded-lg"
            name="phone"
            id="phone"
            type="tel"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
          ></input>
        </div>
        <div className="group grow w-[45%] py-2 text-slate-400 text-sm border-b  ">
          <label className="w-full ps-2">Email Address</label>
          <input
            className="w-full ps-2 focus:outline-1 text-slate-800 text-base block bg-transparent rounded-lg"
            name="email"
            id="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
          ></input>
        </div>
        <div className="group grow w-[45%] py-2 text-slate-400 text-sm border-b  ">
          <label className="w-full ps-2">Bio</label>
          <input
            className="w-full ps-2 focus:outline-1 text-slate-800 text-base block bg-transparent rounded-lg"
            name="bio"
            id="bio"
            type="text"
            value={formik.values.bio}
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
          ></input>
        </div>
        <div className="group grow w-[45%] py-2  text-md  text-center ">
          <button
            type="submit"
            className="w-5/6 text-white py-3 px-4 rounded-xl bg-[#262626] font-light"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
