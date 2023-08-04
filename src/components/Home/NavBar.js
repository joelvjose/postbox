import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaCompass,FaUser,FaHome,FaSearch,FaEnvelope,FaBell,FaPlusSquare,FaPowerOff} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/Slice';


const NavBar = () => {
  
  const dispatch = useDispatch()

  const handleLogout=()=>{
    dispatch(logout())
   }
  

  return (
    
    <div className="basis-[20%] h-[100vh] border  text-black"> 
      <div className="bg-white  h-screen px-8">
        <div className="px-2 py-10 flex flex-col items-center justify-center border-b-2 border-gray-200">
          {/* <h1 className=" text-[20px] leading-[25px] font-extrabold cursor-pointer ">
            {" "}
            Admin Panel{" "}
          </h1> */}
          <img className='h-16 ' src='post box.png' alt='postbox_logo'/>
          <img className='mt-4 w-24 rounded-full' src='logo1.jpg' alt='' ></img>
          <p className='mt-2'>Welcome, username</p>
        </div>
        
        <div className="flex items-center gap-4 py-4 border-b-2  border-gray-200">
          <FaHome className="text-xl" />
          <NavLink
            to="/admin"
            className="text-sm leading-5 font-normal"
          >
            Home
          </NavLink>
        </div>
        <div className="flex items-center gap-4 py-4 border-b-2  border-gray-200">
          <FaSearch  />
          <NavLink
            to="/adminprofile"
            className="text-sm leading-5 font-normal"
          >
            Search
          </NavLink>
        </div>
        <div className="flex items-center gap-4 py-4 border-b-2  border-gray-200">
          <FaEnvelope  />
          <NavLink
            to="/adminprofile"
            className="text-sm leading-5 font-normal"
          >
            Messages
          </NavLink>
        </div>
        <div className="flex items-center gap-4 py-4 border-b-2  border-gray-200">
          <FaBell  />
          <NavLink
            to="/adminprofile"
            className="text-sm leading-5 font-normal"
          >
            Notifications
          </NavLink>
        </div>
        <div className="flex items-center gap-4 py-4 border-b-2  border-gray-200">
          <FaCompass  />
          <NavLink
            to="/adminprofile"
            className="text-sm leading-5 font-normal"
          >
            Explore
          </NavLink>
        </div>
        <div className="flex items-center gap-4 py-4 border-b-2  border-gray-200">
          <FaPlusSquare  />
          <NavLink
            to="/adminprofile"
            className="text-sm leading-5 font-normal"
          >
            Create
          </NavLink>
        </div>
        <div className="flex items-center gap-4 py-4 border-b-2  border-gray-200">
          <FaUser  />
          <NavLink
            to="/adminprofile"
            className="text-sm leading-5 font-normal"
          >
            Profile
          </NavLink>
        </div>
          <button
            onClick={handleLogout}
            className="text-sm leading-5 font-normal flex items-center gap-4 py-4  "
          >
          <FaPowerOff />
            Logout
          </button>

      </div>
    </div>
  );
}

export default NavBar
