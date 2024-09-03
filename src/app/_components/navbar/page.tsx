"use client"
import { faBriefcase, faFile, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
let pathName =usePathname ()


  return (
    <ul className="py-2 font-semibold border-b flex">
          <li  className ={`${pathName=="/profile/personal" ? "activeTab" : null } hover:text-red-300 cursor-pointer transition-all duration-200 shrink inline mr-9 p-2 `}>
            <Link href='/profile/personal' >
            <FontAwesomeIcon icon={faUser} />
            Personal Information
            </Link>
            
          </li>
          <li className={`${pathName=="/profile/professional" ? "activeTab" : null } hover:text-red-300 cursor-pointer transition-all duration-200 shrink inline mr-9 p-2 `}>
            <Link href='/profile/professional'>
            <FontAwesomeIcon icon={faBriefcase} />
            Professional Information
            </Link>
          </li>
          <li className={`${pathName=="/profile/documents" ? "activeTab" : null } hover:text-red-300 cursor-pointer transition-all duration-200 shrink inline mr-9 p-2 `}>
            <Link href='/profile/documents'>
            <FontAwesomeIcon icon={faFile} />
            Documents
            </Link>
          </li>
          <li className={`${pathName=="/profile/access" ? "activeTab" : null } hover:text-red-300 cursor-pointer transition-all duration-200 shrink inline mr-9 p-2 `}>
            <Link href='/profile/access'>
            <FontAwesomeIcon icon={faLock} />
            Account Access
            </Link>
          </li>
        </ul>
  )
}
