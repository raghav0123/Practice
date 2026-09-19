import React, { useContext } from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

export const Layout = () => {
    const { users, setUsers, posts, setPosts } = useContext(AppContext)

    return (
        <>

            <Navbar />
           
            <Outlet />
        </>
    )
}
