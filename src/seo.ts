import { seo } from './config'

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

export function initSeo() {
  document.title = seo.title
  setMeta('meta[name="description"]', 'name', 'description', seo.description)
  setMeta('meta[property="og:title"]', 'property', 'og:title', seo.openGraph.title)
  setMeta('meta[property="og:description"]', 'property', 'og:description', seo.openGraph.description)
  setMeta('meta[property="og:type"]', 'property', 'og:type', seo.openGraph.type)
  setMeta('meta[property="og:image"]', 'property', 'og:image', seo.openGraph.image)

  const schema = document.createElement('script')
  schema.type = 'application/ld+json'
  schema.text = JSON.stringify(seo.schema)
  document.head.appendChild(schema)
}
