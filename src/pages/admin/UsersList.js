import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import { BASE_URL } from '../../utils/constants';
import { toast } from 'react-toastify';


const UsersList = () => {

  const [users,setUsers] = useState([])
  
  useEffect(()=>{
    const fetchUsers =async ()=>{
      const accessToken = localStorage.getItem('access_token');
      try{
      const response = await fetch(`${BASE_URL}/userslist/`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    })
    const data = await response.json();
    console.log(data);
    if  (response.status === 200) {
        setUsers(data)
    }else{
      toast.error("Status code is not success")
    }
    }catch(err){
      toast.error("Failed fetching user details.!")
    }
  }
    fetchUsers();
  },[]);

  const blockUser = async (id) => {
    const accessToken = localStorage.getItem('access_token');
    try {
        const response = await fetch(`${BASE_URL}/blockuser/${id}`, {
          method:'GET',
          headers:{
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        })
        console.log(response)
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === id ? { ...user, is_active: !user.is_active } : user
            )
        );

    } catch {
        console.log("error")

    }


}

  return (
    <div className="flex">
      <div className="basis-[20%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[80%] border">
        <div className="p-4 ">
          <div className='flex justify-center items-center bg-gray-400 h-20 my-4'>
          <h1 className='font-sans font-extrabold text-xl'>Users List</h1>
          </div>
          <table className="table-auto w-full border-collapse border border-gray-300 shadow-md">
            <thead className="bg-gray-700">
              <tr className="">
                <th className="px-4 py-2  text-white ">Image</th>
                <th className="px-4 py-2  text-white">Username</th>
                <th className="px-4 py-2  text-white ">Email</th>
                <th className="px-4 py-2  text-white ">Name</th>
                <th className="px-4 py-2  text-white ">Edit</th>
              </tr>
            </thead>

            <tbody>
              {users.map((item) => (
                <tr key={item.id} className="bg-gray-100 text-center ">
                  <td className=" flex justify-center px-4 py-2 "><img className='w-16 h-16 rounded-full' alt={item.username} src={`${BASE_URL}${item.display_pic}`}/></td>
                  <td className=" px-4 py-2 ">{item.username}</td>
                  <td className="px-4 py-2 ">{item.email}</td>
                  <td className="px-4 py-2 ">{item.first_name} {item.last_name}</td>
                  <td className="px-4 py-2 ">
                    <button className="bg-gray-500 rounded-md p-2 text-white font-bold hover:bg-red-600 relative" onClick={() => blockUser(item.id)}>
                        {item.is_active ? 'Block' : 'unblock'}
                    </button>
                  </td>
                </tr>
               ))} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersList
