// React
import { PropsWithChildren, Suspense } from "react"

// Components
import { CardSection } from "@/components"

export default function EventLayout(props: PropsWithChildren<{}>) {
  return (
    <Suspense fallback={<Loading />}>
      {props.children}
    </Suspense>
  )
}

function Loading() {
  return (
    <div className="container my-3 flex flex-col gap-3">
      <div className="animate-pulse bg-slate-200">
        <CardSection>
          <CardSection.Body className="h-96" />
        </CardSection>
      </div>
    </div>
  )
}