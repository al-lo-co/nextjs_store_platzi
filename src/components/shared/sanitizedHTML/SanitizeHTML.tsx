import { createElement, HTMLAttributes } from "react"
import sanitize from "sanitize-html"

type sanitizedHTMLProps = {
  tag: string,
  children: String
} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({ tag, children, ...rest }: sanitizedHTMLProps) => {
  const sanitizedHTML = sanitize(children, {
    allowedTags: ['b', 'i', 'm', 'strong '] // for security disable this tag to not allow any html tag
  })

  return createElement(
    tag,
    { ...rest },
    sanitizedHTML
  )
}