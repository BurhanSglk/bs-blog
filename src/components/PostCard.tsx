import React from 'react'

type PostCardProps = {
  title: string
  excerpt: string
  image: string
  slug: string
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt, image, slug }) => {
  return (
    <a href={`/post/${slug}`} className="block bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{excerpt}</p>
    </a>
  )
}

export default PostCard
