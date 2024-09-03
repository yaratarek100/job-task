"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBriefcase,
  faChevronRight,
  faEnvelope,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../_components/navbar/page";
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Personal from "./personal/page";

export default function ProfileBody({ children }: any) {
  const [user, setuser] = useState({});
  function getUserData() {
    let Url = "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/";
    let userToken = localStorage.getItem("userToken");

    axios
      .get(Url, {
        headers: { Authorization: `Bearer ${userToken}` },
      })

      .then((response) => {
        let data = response.data;
        setuser(data);

        localStorage.setItem("userData",JSON.stringify(data))
      })

      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>

      <div className="profileHeader  p-5 border-b text-[#262626]">
        <div className="top flex gap-2 justify-end items-center">
          <FontAwesomeIcon icon={faBell} />
          <Image
            src={user.image}
            alt="user img"
            width={64}
            height={64}
            className="rounded-full  object-cover object-center"
          />
        </div>

        <h3 className="mb-5 font-semibold">
          Employees <FontAwesomeIcon icon={faChevronRight} className="inline" />{" "}
          Profile
        </h3>

        <div className="flex justify-between items-end">
          <div className="flex gap-5 ">
            <Image
              src={user.image}
              width={100}
              height={100}
              alt="user img"
              className="rounded-md  object-cover object-center block"
            />
            <div className="userInfo flex flex-col gap-2">
              <h2 className="font-semibold text-2xl">{user.name}</h2>
              <div className="flex  items-center">
                <FontAwesomeIcon icon={faBriefcase} /> <span>{user.bio}</span>
              </div>
              <div className="flex  items-center">
                <FontAwesomeIcon icon={faEnvelope} /> <span>{user.email}</span>
              </div>
            </div>
          </div>

          <div>
            <button className="text-white p-2 px-4 rounded-xl bg-[#262626] font-light" 
            onClick={()=>{window.location.href = '/profile/edit';}}>
              <FontAwesomeIcon icon={faPen} className="inline" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="profileBody my-2 p-5">
        <Navbar></Navbar>

        {children}

      </div>

    </>
  );
}
