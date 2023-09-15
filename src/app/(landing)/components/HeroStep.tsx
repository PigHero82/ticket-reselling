// React
import { Fragment } from "react"

// Next
import Image from "next/image"
import Link from "next/link"

export function HeroStep(props: {
  button: {
    link: string
    text: string
  }
  items: {
    image: {
      dark: any
      light: any
    }
    title: string
  }[]
  title: string
}) {
  return (
    <Fragment>
      <div className="bg-[#1A1632] py-3">
        <p className="container text-[#8CBCC6] text-center text-xl font-bold uppercase">
          {props.title}
        </p>
      </div>

      <div className="container flex flex-row flex-wrap justify-center">
        {props.items.map((item, key) => (
          <section key={key} className="w-56 mt-5 text-center">
            <div className="flex items-center">
              <div className={`h-1 w-12 ${key === 0 ? "bg-transparent" : "bg-black"}`} />
              <Image alt={item.title} src={item.image.dark} className="hidden dark:flex h-32 w-32" />
              <Image alt={item.title} src={item.image.light} className="dark:hidden flex h-32 w-32" />
              <div className={`h-1 w-12 ${key + 1 === props.items.length ? "bg-transparent" : "bg-black"}`} />
            </div>

            <h6 className="mt-8 px-3 font-bold uppercase">{item.title}</h6>
          </section>
        ))}
      </div>

      <div className="my-8 text-center">
        <Link href={props.button.link}>
          <button className="btn btn-primary">{props.button.text}</button>
        </Link>
      </div>
    </Fragment>
  )
}