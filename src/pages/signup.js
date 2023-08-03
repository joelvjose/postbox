import React ,{useState} from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { register } from '../redux/Slice';

import {toast} from 'react-toastify'

const Signup = () => {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password1, setPassword1] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { registered,loading }= useSelector(state=>state.user);
  

  if (registered) return <Navigate to='/' />

  const toLogin=() =>{
    navigate('/')
  }
  const userRegister = async(e)=>{
    e.preventDefault();
    if(password===password1){
      try{
          dispatch(register({username,email,password}));
    }catch{
        toast.error("User Registeration Failed")  
      }
    }else{
      toast.error("Password mis-match")
    }
  }

  return (
    <>
    {loading ? (
      <div className="typing-indicator">
      <div className="typing-circle"></div>
      <div className="typing-circle"></div>
      <div className="typing-circle"></div>
      <div className="typing-shadow"></div>
      <div className="typing-shadow"></div>
      <div className="typing-shadow"></div>
  </div>
    ):(

   
    <div className="flex h-full flex-wrap items-center justify-center lg:justify-between mt-20 px-6 py-12 lg:px-8 ">

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto w-auto" src="logo1.jpg" alt="Your Company"/>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6"  method="POST" onSubmit={userRegister}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User name
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password1"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password1"
                name="password1"
                type="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Our member? 
          <button
            onClick={toLogin}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
             Login
          </button>
        </p>
      </div>
    </div>
     )}
     </>
  )
}

export default Signup
