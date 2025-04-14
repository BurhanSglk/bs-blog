import { useEffect, useState } from 'react'

type Heading = {
  id: string
  text: string
  level: number
}

export const useTableOfContents = () => {
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('article h2, article h3')) as HTMLHeadingElement[]

    const newHeadings = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.innerText,
      level: parseInt(heading.tagName.replace('H', '')),
    }))

    setHeadings(newHeadings)
  }, [])

  return { headings }
}
