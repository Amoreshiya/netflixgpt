import React from 'react'
import Header from './Header';

const Login = () => {


  return (
    <div>
        <Header/>
        <div className="absolute bg-center">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
             alt='Background Page'/>
        </div>

        <form className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white opacity-85">
          
          <h1 className="font-bold text-3xlxl py-5">Sign In</h1>
          <input type="text" placeholder="Email Address"className="p-4 my-4 w-full bg-gray-700"/>
          <input type="text" placeholder="password"className="p-4 my-4 w-full bg-gray-700"/>
          <button className="p-4 my-4 bg-red-700 w-full rounded-lg">Sign In</button>
          <p>Are you New to Netflix</p>


          </form>    
    </div>
  )
}

export default Login;