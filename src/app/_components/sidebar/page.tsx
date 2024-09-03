"use client"
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/e7003b653626b4899b379c517657a039.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faClipboardCheck, faCreditCard, faCircleDollarToSlot, faFileLines, faTableColumns, faUser, faUsersLine, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";


export default function Sidebar() {
  let pathName =usePathname()
  
    
// let [list, setlist] = useState("close");

//   function slidList() {
//     setlist("open");
//   }

//   onClick={slidList()}
//   ${list=="open" ?"h-36 my-0" : "h-0 -my-3"} 

  return (
    <div className="border rounded-3xl  py-5 w-[20%] min-w-72 sidebar text-[#242223] shadow-md">
      <Image src={logo} alt="logo" className="w-3/4 mx-auto -my-3" />
      <ul className="m-0 p-0">

        <li className = { ` ${pathName=="/login" ? "active" : null} cursor-pointer  my-1 ps-16 text-xl font-bold text-center text-red-400  py-4 w-full flex  items-center gap-2 transition-all duration-200 border-s-4 border-transparent hover:border-[#EC232B] hover:bg-[#F9EAEB] hover:rounded-e-full hover:text-[#EC232B] `} >
          {/* <FontAwesomeIcon icon={faTableColumns}  /> */}
          <Link href="/login"> Login </Link>
        </li>
        <li className = { ` ${pathName=="/dashboard" ? "active" : null} cursor-pointer  my-1 ps-16 text-lg font-medium  py-4 w-full flex  items-center gap-2 transition-all duration-200 border-s-4 border-transparent hover:border-[#EC232B] hover:bg-[#F9EAEB] hover:rounded-e-full hover:text-[#EC232B] `} >
          <FontAwesomeIcon icon={faTableColumns}  />
          <Link href="/dashboard"> Dashboard </Link>
        </li>
        <li  className = { `cursor-pointer  my-1 ps-16 text-lg font-medium  py-4 w-full flex  items-center gap-2 transition-all duration-200 border-s-4 border-transparent hover:border-[#EC232B] hover:bg-[#F9EAEB] hover:rounded-e-full hover:text-[#EC232B] `}  >
          <FontAwesomeIcon icon={faUsersLine} />
          <span >Employees</span>
          <div className="arrow  relative grow">
          <FontAwesomeIcon  icon={faChevronRight} /> 
          </div>
        </li>
          <ul className={`sublist relative `}>
            <li className = { ` ${pathName.includes("/profile") ? "active" : null}  cursor-pointer  my-0.5 ps-28 text-lg font-normal  py-2 w-full flex  items-center gap-2 transition-all duration-200 border-s-4 border-transparent hover:border-[#EC232B] hover:bg-[#F9EAEB] hover:rounded-e-full hover:text-[#EC232B] `}>
              <FontAwesomeIcon icon={faUser} />
              <Link href="/profile">Profile</Link>
            </li>
            <li className = { ` ${pathName=="/attendance" ? "active" : null}  cursor-pointer  my-0.5 ps-28 text-lg font-normal  py-2 w-full flex  items-center gap-2 transition-all duration-200 border-s-4 border-transparent hover:border-[#EC232B] hover:bg-[#F9EAEB] hover:rounded-e-full hover:text-[#EC232B] `}>
              <FontAwesomeIcon icon={faCalendarCheck} />
              <Link href="/attendance">Attendance</Link>
            </li>
            <li className = {` ${pathName=="/tasks" ? "active" : null}  cursor-pointer  my-0.5 ps-28 text-lg font-normal  py-2 w-full flex  items-center gap-2 transition-all duration-200 border-s-4 border-transparent hover:border-[#EC232B] hover:bg-[#F9EAEB] hover:rounded-e-full hover:text-[#EC232B] `}>
              <FontAwesomeIcon icon={faFileLines} />
              <Link href="/tasks">Tasks</Link>
            </li>
          </ul>
        <li className = { ` ${pathName=="/payroll" ? "active" : null} cursor-pointer  my-1 ps-16 text-lg font-medium  py-4 w-full flex  items-center gap-2 transition-all duration-200 border-s-4 border-transparent hover:border-[#EC232B] hover:bg-[#F9EAEB] hover:rounded-e-full hover:text-[#EC232B] `} >
        <FontAwesomeIcon icon={faCircleDollarToSlot} />
          <Link href="/payroll">Payroll</Link>
        </li>
        <li className = { ` ${pathName=="/holidays" ? "active" : null} cursor-pointer  my-1 ps-16 text-lg font-medium  py-4 w-full flex  items-center gap-2 transition-all duration-200 border-s-4 border-transparent hover:border-[#EC232B] hover:bg-[#F9EAEB] hover:rounded-e-full hover:text-[#EC232B] `} >
          <FontAwesomeIcon icon={faClipboardCheck} />
          <Link href="/holidays">Holidays</Link>
          <div className="arrow  relative grow">
          <FontAwesomeIcon  icon={faChevronRight} /> 
          </div>
        </li>
        <li className = { ` ${pathName=="/payment" ? "active" : null} cursor-pointer  my-1 ps-16 text-lg font-medium  py-4 w-full flex  items-center gap-2 transition-all duration-200 border-s-4 border-transparent hover:border-[#EC232B] hover:bg-[#F9EAEB] hover:rounded-e-full hover:text-[#EC232B] `} >
          <FontAwesomeIcon icon={faCreditCard} />
          <Link href="/payment">Advanced Payment</Link>
        </li>
      </ul>
    </div>
  );
}

// {/*       
// <FontAwesomeIcon icon={faChevronDown} />   //^
//  */}


