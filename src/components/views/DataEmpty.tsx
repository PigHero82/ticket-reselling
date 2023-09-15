// Next
import Image from "next/image"

// Assets
import Empty from "@/assets/images/empty-box.png"

export function DataEmpty(props: {
  title?: string
}) {
  return (
    <section className="prose flex flex-col items-center">
      <Image src={Empty} alt="Data Empty" className="w-48" />
      <h2 className="m-0">{props.title ?? "No Data Available"}</h2>
    </section>
  )
}