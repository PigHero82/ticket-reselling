// Next
import Link from "next/link"

// Components
import { Button, CardSection, DataEmpty } from "@/components"

// Third-Party Libraries
import moment from "moment"
import pluralize from "pluralize"

type Event = {
  background: string
  name: string
  slug: string
  start_date: string
  ticket_available_count: number
}

async function getData(): Promise<Event[]> {
  const res = await fetch(`${process.env.BASE_URL_API}/event`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const result = await res.json()
  return result.data.map((item: Event) => {
    return {
      ...item,
      background: `${process.env.BASE_URL}/${item.background}`
    }
  })
}

export default async function EventList() {
  // Next Fetch
  const data = await getData()

  return (
    <div className="container my-3 flex flex-col gap-3">
      <CardSection>
        <CardSection.Header title="Upcoming Events" />
      </CardSection>

      {data.length === 0 ? (
        <CardSection>
          <CardSection.Body className="py-5 flex justify-center">
            <DataEmpty title="No Events Available" />
          </CardSection.Body>
        </CardSection>
      ) : data.map((item, key) => (
        <CardSection key={key}>
          <CardSection.Body className="flex xl:flex-row flex-col items-center xl:divide-x-2 divide-primary">
            <section className="p-6 flex flex-col justify-center items-center">
              <img src={item.background} alt={item.name} className="xl:max-w-[400px] h-full rounded-xl object-cover" />
            </section>

            <section className="grow p-6 flex flex-col justify-center text-center gap-5">
              <section className="font-bold prose">
                <h2 className="uppercase m-0">{item.name}</h2>
                <h3>{moment(item.start_date).format("MMMM D")}</h3>
              </section>

              <h5 className="text-xl font-normal"><span className="font-bold">{item.ticket_available_count} {pluralize("ticket", item.ticket_available_count)}</span> available</h5>

              <Link href={`/event/${item.slug}`}>
                <Button color="primary">BUY TICKET</Button>
              </Link>
            </section>
          </CardSection.Body>
        </CardSection>
      ))}
    </div>
  )
}