import { useState } from 'react'
import { ClipboardCopy, Check } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'


type Props = {
  language: string
  value: string
}

const CodeBlock = ({ language, value }: Props) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 z-10 bg-gray-800 text-white p-1 rounded hover:bg-gray-700 transition"
      >
        {copied ? <Check size={16} /> : <ClipboardCopy size={16} />}
      </button>
      <SyntaxHighlighter
        language={language}
        PreTag="div"
        className="rounded-lg overflow-x-auto my-4"
        showLineNumbers
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
