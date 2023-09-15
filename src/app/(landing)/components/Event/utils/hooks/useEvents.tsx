// React
import { useEffect, useState } from "react"

// API
import { services } from "@/services"

// Third-Party Libraries
import { toast } from "react-hot-toast"

// Types
import type { ErrorFetch, SuccessFetch } from "@/types"

type Event = {
  background: string
  name: string
  slug: string
}[]

export function useEvents() {
  // Hooks
  const [data, setData] = useState<Event>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    services.get("/event").then((res: SuccessFetch<{ data: Event }>) => {
      setData(res.data.data.map(item => {
        return {
          background: `${process.env.NEXT_PUBLIC_BASE_URL}/${item.background}`,
          slug: item.slug,
          name: item.name
        }
      }))
    }).catch((err: ErrorFetch) => {
      setData([])
      toast.error(err.response.data.message)
    }).finally(() => {
      setLoading(false)
    })

    return () => {
      setData([])
      setLoading(true)
    }
  }, [])

  return { data, isLoading }
}