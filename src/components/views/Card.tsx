// React
import { PropsWithChildren } from "react"

const Card = (props: PropsWithChildren<{
  className?: string
  noShadow?: boolean
}>) => {
  return (
    <div {...props} className={`bg-white ${!props.noShadow && "drop-shadow-lg"} border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 ${props.className}`}>
      {props.children}
    </div>
  )
}

const Header = (props: PropsWithChildren<{
  className?: string
  noShadow?: boolean
}>) => (
  <div className={`px-5 py-3 border-b ${props.className}`}>
    {props.children}
  </div>
)

const Body = (props: PropsWithChildren<{
  className?: string
  noShadow?: boolean
}>) => (
  <div className={`px-5 py-3 ${props.className}`}>
    {props.children}
  </div>
)

const Footer = (props: PropsWithChildren<{
  className?: string
  noShadow?: boolean
}>) => (
  <div className={`px-5 py-3 border-t ${props.className}`}>
    {props.children}
  </div>
)

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export { Card }