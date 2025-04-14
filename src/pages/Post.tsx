import { useParams } from 'react-router-dom'

const Post = () => {
  const { slug } = useParams()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Blog Detayı: {slug}</h1>
    </div>
  )
}

export default Post
