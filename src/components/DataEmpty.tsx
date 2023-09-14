// Assets
import Empty from "@/assets/lotties/empty.json"

// Third-Party Libraries
import Lottie from "lottie-react"

export function DataEmpty() {
  return (
    <section className="prose flex flex-col items-center">
      <Lottie animationData={Empty} className="w-48" loop />
      <h2 className="m-0">No Data Available</h2>
    </section>
  )
}