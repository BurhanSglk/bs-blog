import PostCard from "../components/PostCard"
import { posts } from '../data/postData'

const Home = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Yazıları</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
