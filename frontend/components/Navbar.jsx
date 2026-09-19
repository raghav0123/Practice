import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const Navbar = () => {
    return (
        <>
            <div className="navbar fixed top-0 left-0 z-50  flex bg-gray-300 p-4 gap-5 w-full">
                <div className='basis-[40%]'>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (
                            !isActive ? "text-2xl text-gray-800 hover:text-red-600" : "text-2xl text-red-600"
                        )}>
                        BASIC APP
                    </NavLink>
                </div>
                <div className='basis-[30%]'>
                    <NavLink
                        to='/userForm'
                        className={({ isActive }) => (
                            !isActive ? "text-2xl text-gray-800 hover:text-red-600" : "text-2xl text-red-600"
                        )}>
                        User
                    </NavLink>
                </div>

                <div className='basis-[30%]'>
                    <NavLink
                        to='/postForm'
                        className={({ isActive }) => (
                            !isActive ? "text-2xl text-gray-800 hover:text-red-600" : "text-2xl text-red-600"
                        )}>
                        Post
                    </NavLink>
                </div>
            </div>
        </>

    )
}
