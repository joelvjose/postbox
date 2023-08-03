import React from 'react'
import {FaTachometerAlt,FaUser,FaMailBulk,FaPowerOff,FaUsers} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-gray-700 h-screen px-8'>
      <div className='px-2 py-8 flex items-center justify-center border-b-2 border-[#EDEDED]/[0.3]'>
        <h1 className='text-white text-[20px] leading-[25px] font-extrabold cursor-pointer '> Admin Panel </h1>
      </div>
      <div className='flex items-center gap-4 py-4 border-b-2  border-[#EDEDED]/[0.3]'>
        <FaTachometerAlt color='white' className='text-xl' />
        <NavLink to='/admin' className='text-sm leading-5 font-bold text-white'>Dashboard</NavLink>
      </div>
      <div className='flex items-center gap-4 py-4 border-b-2  border-[#EDEDED]/[0.3]'>
        <FaUser color='white'/>
        <NavLink to='/adminprofile' className='text-sm leading-5 font-bold text-white'>Profile</NavLink>
      </div>
      <div className='py-2 border-b-2  border-[#EDEDED]/[0.3]'>
        <h3 className='text-white text-xs font-mono'>MANAGE</h3>
        <div className='flex items-center gap-4 py-4 '>
          <FaUsers color='white'/>
          <NavLink to='/users' className='text-sm leading-5 font-bold text-white'>Users</NavLink>
        </div>
        <div className='flex items-center gap-4 py-4 '>
          <FaMailBulk color='white'/>
          <NavLink to='/posts' className='text-sm leading-5 font-bold text-white'>Post</NavLink>
        </div>
      </div>
      <div className='flex items-center gap-4 py-4 border-b-2  border-[#EDEDED]/[0.3]'>
        <FaPowerOff color='white'/>
        <NavLink to='/dashboard' className='text-sm leading-5 font-bold text-white'>Logout</NavLink>
      </div>
      
      
    </div>
  )
}

export default Sidebar
