import { Link } from 'react-router-dom'
import { BlogPost } from '../data/blogData'

interface BlogCardProps {
  post: BlogPost
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{post.summary}</p>
      <Link
        to={`/post/${post.slug}`}
        className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
      >
        Devamını Oku →
      </Link>
    </div>
  )
}
