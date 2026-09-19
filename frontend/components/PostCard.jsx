import React from 'react'

export const PostCard = ({ title, content, userName }) => {
    return (
        <div className="w-full border-2 border-gray-600 rounded-xl p-5">
            <div className="text-center text-4xl">
                {title}
            </div>

            <div className="content">
                {content}
            </div>

            <div className="user">
                Created By: {userName}
            </div>
        </div>
    )
}