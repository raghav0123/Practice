import React, {useContext,useState } from 'react'

import { AppContext } from '../context/AppContext';
export const UserForm = () => {
  const {users, createUser} = useContext(AppContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {name,email}
    createUser(user)
    alert('New User Created!')
  }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <div className="userForm flex flex-col gap-2 p-5 w-100 border-2 border-gray-600 m-auto rounded-xl  mt-50 ">

        <div className='text-center text-4xl'>UserForm</div>

        <label htmlFor="name">Name:</label>
        <input type="text"
          id="name"
          className='bg-gray-300 mx-2'
          value = {name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email" >Email:</label>
        <input type="email"
          id="email"
          className='bg-gray-300 mx-2'
          name="email"
          required
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button 
      
        className='px-4 bg-blue-500 hover:bg-blue-900 cursor-pointer rounded-md w-20 m-auto py-1'>Submit</button>

      </div>
</form>
    </>
  )
}
