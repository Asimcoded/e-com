import React from 'react'
import { useNavigate, Outlet } from 'react-router'
import { Button } from '../components'

function AuthLayout() {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen flex flex-col items-center  bg-gray-100 dark:bg-gray-900'>
      <div className='flex justify-start w-full max-w-md my-5'>
        < Button value={"< Back to home"} onClick={()=>{
          navigate('/')
        }}/>
      </div>
    <Outlet />
    </div>
  )
}

export default AuthLayout