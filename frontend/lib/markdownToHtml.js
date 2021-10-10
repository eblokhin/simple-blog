import remark from 'remark'
import html from 'remark-html'

async function markdownToHtml(markdown) {
  const remarkParser = remark().use(html)
  const result = await remarkParser.process(markdown)
  return result.toString()
}

export default markdownToHtml
