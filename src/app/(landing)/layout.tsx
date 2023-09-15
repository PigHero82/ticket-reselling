import '../globals.css'

// React
import { Fragment, Suspense } from 'react'

// Components
import { Footer, Header } from "./components"

// Third-Party Libraries
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
      <Header />

      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>

      <Footer />
      <Toaster />
    </Fragment>
  )
}

function Loading() {
  return <p>Loading Data...</p>
}