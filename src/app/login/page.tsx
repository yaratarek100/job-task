import React from "react";
import Image from "next/image";
import logo from "../../../public/e7003b653626b4899b379c517657a039.png";

export default function Login() {
  

function login (){

}

  return (
    <div className="w-full bg-[#F8F8F8]  h-screen flex flex-col justify-center items-center">
      <Image src={logo} alt="logo alt" className="mx-auto w-[225px]" />

      <form className=" border rounded-2xl shadow-sm  w-3/4  md:w-1/2 lg:w-5/12 px-7 py-12  flex flex-col justify-center items-center mx-auto">
        <div className="inp-group w-11/12 mb-9">
          <label className="text-[#262626]  ">Email Address</label>
          <input
            className="placeholder:text-[#CDCDCD] px-3 p-1 mt-2 rounded-lg w-full bg-transparent border focus:outline-slate-500 "
            placeholder="nouran@cyparta.com"
          />
        </div>
        <div className="inp-group w-11/12 mb-9">
          <label className="text-[#262626]  ">Password</label>
          <input
            className="placeholder:text-[#CDCDCD] px-3 p-1 mt-2 rounded-lg w-full bg-transparent border focus:outline-slate-500 "
            placeholder="************"
          />
        </div>

        <button className="bg-[#262626] text-white block mx-auto p-2 rounded-lg w-9/12 mt-9">
          Login
        </button>
      </form>

      
    </div>
  );
}

