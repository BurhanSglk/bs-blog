
import { useParams } from 'react-router-dom'
import { blogData } from '../data/blogData'

 const BlogDetail = () => {
  const { slug } = useParams()
  const post = blogData.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6">
        <h2 className="text-2xl font-semibold text-red-600">Blog bulunamadı 😢</h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">{post.title}</h1>
      <article className="prose dark:prose-invert">
        {post.content.split('\n').map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </article>
    </div>
  )
}

export default BlogDetail;
