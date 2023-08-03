import React,{ useState, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { resetRegistered,login } from '../redux/Slice';

import { useNavigate,Navigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading,isAuthenticated,registered,isSuperuser } = useSelector(state=>state.user);
  console.log("jhuuhuh");

  useEffect(()=>{

    if(registered)
    {
      dispatch(resetRegistered());
    }
  },[dispatch,registered]);
  
  const handleLogin =async (e)=>{
    e.preventDefault();
    try{
      dispatch(login({email,password}));
    }catch{
      toast.error("User Not Found.!")
    }
  }

  if (isAuthenticated) {
    if (isSuperuser){
     return <Navigate to='/admin'/>
    // navigate("/admin");
    }  
    navigate("/home");
    
  }

  const toSignup=()=>{
    navigate("/signup");
 }
  return (
    <>
    {loading ? (
      <div className='loading-container'>
        <div className="typing-indicator ">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        </div>
      </div>
    ):(
     
    <div className="flex h-full flex-wrap items-center justify-center lg:justify-between mt-20 px-6 py-12 lg:px-8 ">

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto w-auto" src="logo1.jpg" alt="Your Company"/>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleLogin}>
          

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
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
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <button
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                  Forgot password?
                </button>
              </div>
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
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member? 
          <button
            onClick={toSignup}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
             Sign up
          </button>
        </p>
      </div>
    </div>
     
    )}
  </>
  );
}

export default Login
