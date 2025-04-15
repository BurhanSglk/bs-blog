// src/pages/BlogDetail.tsx

import { useParams, Link } from 'react-router-dom'
import { blogData } from '../data/blogData'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from '../components/CodeBlock'


import { useTableOfContents } from '../hooks/useTableOfContents'

const BlogDetail = () => {
    const { slug } = useParams()
    const post = blogData.find((b) => b.slug === slug)
    const { headings } = useTableOfContents()
  
    if (!post) {
      return <div className="text-center py-20 text-xl">Blog bulunamadı 😢</div>
    }
  
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[3fr_1fr] gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-8 hover:underline">
            <ArrowLeft size={18} /> Geri Dön
          </Link>
  
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-10">
            Yazar: <span className="font-medium text-gray-800 dark:text-gray-200">Burhan Sağlık</span> — {post.date}
          </div>
  
          <article className="prose prose-custom dark:prose-invert max-w-none space-y-6">
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      code({ node, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
          <CodeBlock language={match[1]} value={String(children).replace(/\n$/, '')} />
        ) : (
          <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>
            {children}
          </code>
        )
      },
      // Özelleştirilmiş listeler
      ul({ children }) {
        return <ul className="space-y-4 pl-6">{children}</ul>
      },
      ol({ children }) {
        return (
          <ol className="space-y-4 pl-6 list-decimal text-lg text-gray-800 dark:text-gray-300">
            {children}
          </ol>
        )
      },
      li({ children }) {
        return <li className="my-2 text-lg">{children}</li>
      },
    }}
  >
    {post.content}
  </ReactMarkdown>
</article>

        </div>
  
        {/* TOC (Table of Contents) */}
        <aside className="sticky top-24 hidden md:block h-fit">
          <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">İçindekiler</h2>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {headings.map((heading) => (
              <li key={heading.id} className={`ml-${(heading.level - 2) * 4}`}>
                <a href={`#${heading.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    )
  }

export default BlogDetail
