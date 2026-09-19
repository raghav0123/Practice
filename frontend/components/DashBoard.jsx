import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { PostCard } from './PostCard'
export const DashBoard = () => {
    const { users, setUsers, posts, setPosts } = useContext(AppContext)
    
    return (
        <div className='mt-20 flex flex-col gap-20 justify-center items-center w-full p-5 '>
            {posts.length > 0 ? (
                <>
                    <div className="postCont grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-20 w-full p-5 ">
                        {posts.map((each) => (
                            <PostCard key={each.id}
                                title={each.title}
                                content={each.content}
                                userName={each.userId.name} ></PostCard>
                        ))}
                    </div>
                </>
            ) : (
                <div className="text-5xl">No Post Available!</div>
            )}
        </div>
    )
}
