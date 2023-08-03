import React from 'react'
import Sidebar from '../components/Admin/Sidebar'

const Dashboard = () => {
  return (
    <div className='flex'>
      <div className="basis-[20%] h-[100vh] border">
        <Sidebar/>
      </div>
      <div className="basis-[80%] border">

      </div>
      
    </div>
  )
}

export default Dashboard
