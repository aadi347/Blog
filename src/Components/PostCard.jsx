import React from 'react'
import { Link } from 'react-router-dom';

const PostCard = ({post}) => {
    return (
        <div>
            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <img src={post.image} alt={post.title} className="rounded-lg mb-2" />
      <h2 className="text-lg font-semibold">{post.title}</h2>
      <p className="text-gray-500 text-sm mb-2">{post.category}</p>
      <p className="text-gray-700">{post.excerpt}</p>
      <Link to={`/post/${post.id}`} className="text-[#FF0B55] mt-2 inline-block">Read More</Link>
    </div>
        </div>
    )
}

export default PostCard
