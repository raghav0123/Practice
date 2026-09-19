import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

export const PostForm = () => {
  const { users, posts, createPost } = useContext(AppContext)
  const [selectedUser, setSelectedUser] = useState('');
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  const handleSubmit = (e) => {
   e.preventDefault()
   const user = users.find((each) => each.name == selectedUser)
    const post = {
      title,
      content,
      userId: user.id}
    createPost(post)
    
  }
  return (
    <>
      <form action=""
      onSubmit={handleSubmit}
      >
      <div className="container flex flex-col gap-5 w-full items-center mt-30">
        <div>
          <label htmlFor="">Select User:</label>
          <select value={selectedUser}
            className='border p-1 mx-2'
            onChange={(e) => setSelectedUser(e.target.value)}
            required
          >
            <option value="">Select a user</option>
            {users.map((each) => (<option key={each.id} value={each.name}>{each.name}</option>))}
          </select>
          {/* <label>Select User: </label>

          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="border p-2"
          >
            <option value="">Select a user</option>

            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select> */}
        </div>
      
          <div className="PostForm flex flex-col gap-2 p-5 w-100 border-2 border-gray-600 m-auto rounded-xl  ">

            <div className='text-center text-4xl'>PostForm</div>

            <label htmlFor="title">Title:</label>
            <input type="text"
              id="title"
              className='bg-gray-300 mx-2'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className='bg-gray-300 mx-2'
              required
            />


            <button
              type = "submit"
              className='px-4 bg-blue-500 hover:bg-blue-900 cursor-pointer rounded-md w-20 m-auto my-2 py-1'>Submit</button>

          </div>
 
      </div>
   </form >
    </>
  )
}


