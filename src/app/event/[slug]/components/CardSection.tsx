// React
import { PropsWithChildren } from "react"

// Components
import { Card } from "@/components"

function CardSection(props: PropsWithChildren<{}>) {
  return (
    <Card>
      {props.children}
    </Card>
  )
}

function Body(props: PropsWithChildren<{
  className?: string
}>) {
  return (
    <Card.Body className={`bg-[#F7F5F4] dark:bg-slate-400 lg:px-48 ${props.className}`}>
      {props.children}
    </Card.Body>
  )
}

function Header(props: {
  title: string
}) {
  return <Card.Header className="py-3 bg-[#1a1632] text-center text-xl font-bold text-[#8cbcc6] uppercase">{props.title}</Card.Header>
}

CardSection.Body = Body
CardSection.Header = Header

export { CardSection }