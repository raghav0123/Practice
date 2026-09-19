import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users');
            console.log(response.data.data)
            setUsers(response.data.data)
        } catch (error) {
            throw new Error(error.message)
        }
    }

    
    const getPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/posts');
                console.log("posts:",response.data.data)
                setPosts(response.data.data)
            } catch (error) {
                throw new Error(error.message)
            }
    }

    useEffect(() => {
        getUsers()

        getPosts()
    }
        , [])
    const createUser = async (user) => {
        try {
           
            const data = {
                    name: user.name,
                    email: user.email
                }
            const response = await axios.post('http://localhost:3000/users',data )
             setUsers((prev) => (
                [...prev, {
                    name: user.name,
                    email: user.email
                }]
            ))
            await getUsers()
        } catch (error) {
            throw new Error(`Error: ${error.message}`)
        }

    }
    const createPost = async (post) => {
        const data =  {
                title: post.title,
                content: post.content,
                userId: post.userId
            }
        const response = await axios.post('http://localhost:3000/posts', data)
        console.log("this is ",response)
        //  const newData =  {
        //         title: post.title,
        //         content: post.content,
        //         userDetails: response.data.data.userId
        //     } 
        alert('New Post Created!')
        // setPosts((prev) => (
        //     [...prev,
        //     newData
        //     ]
        // ))
        getPosts()
    }

    return (
        <AppContext.Provider
            value={{ users, posts, createUser, createPost }}
        >
            {children}
        </AppContext.Provider>
    )
}