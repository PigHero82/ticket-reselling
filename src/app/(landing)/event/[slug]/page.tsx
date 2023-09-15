/*---------------------------------*/
/* Belum Implementasi Daftar Tiket */
/*---------------------------------*/

// React
import Image from "next/image"

// Components
import { CardSection } from "./components"

// Third-Party Libraries
import moment from "moment"
import { StepAssets } from "@/configs"
import { DataEmpty } from "@/components"

type Data = {
  name: string
  background: string
  start_date: string
}

async function getData(slug: string): Promise<Data> {
  const res = await fetch(`${process.env.BASE_URL_API}/event/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const result = await res.json()
  return {
    ...result.data,
    background: `${process.env.BASE_URL}/${result.data.background}`
  }
}

async function getService(slug: string): Promise<{
  name: string
  ticket: any[]
}[]> {
  const res = await fetch(`${process.env.BASE_URL_API}/service-ticket/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const result = await res.json()
  return result.data
}

export default async function EventDetail(route: {
  params: { slug: string }
}) {
  // Next Fetch
  const item = await getData(route.params.slug)
  const service = await getService(route.params.slug)

  // Variables
  const ticket_total = service.reduce((prev, value) => prev + value.ticket.length, 0)

  return (
    <div className="container my-3 flex flex-col gap-3">
      <CardSection>
        <CardSection.Header title={item.name} />
      </CardSection>
      
      <CardSection>
        <CardSection.Body className="flex flex-col gap-3 text-center">
          <section className="flex justify-center">
            <Image src={item.background} alt={item.name} width={0} height={0} sizes="100vw" className="w-full" />
          </section>

          <section className="text-[28px] font-bold">
            <div className="uppercase">{item.name}</div>
            <div>{moment(item.start_date).format("MMMM D")}</div>
          </section>

          <div className="py-3 border-2 border-primary bg-white dark:bg-transparent font-bold">MORE INFO</div>

          <section className="flex justify-center divide-x">
            <section className="px-10 text-[24px]">
              <div>Available Tickets</div>
              <div className="font-bold">{ticket_total}</div>
            </section>

            <section className="px-10 text-[24px]">
              <div>Wanted Tickets</div>
              <div className="font-bold">5</div>
            </section>
          </section>
        </CardSection.Body>
      </CardSection>

      <CardSection>
        <CardSection.Body className="flex justify-between items-center gap-3">
          <Image src={StepAssets.light.step6} alt="Ticket Alerts" className="w-28 h-28" />

          <section>
            <div className="font-bold">TICKET ALERTS</div>
            <div>Get notified when a new ticket is available for this event</div>
          </section>

          <input type="checkbox" className="toggle toggle-lg toggle-primary" />
        </CardSection.Body>
      </CardSection>

      <CardSection>
        <CardSection.Body>
          {service.length === 0 ? (
            <section className="flex justify-center">
              <DataEmpty title="No services available" />
            </section>
          ) : service.map((item, key) => {
            // Variables
            const ticket_total = item.ticket.length

            return (
              <div key={key} tabIndex={0} className="collapse collapse-arrow rounded-none border-b-2 border-primary">
                <input type="checkbox" />
                <div className="collapse-title">
                  <ul className="list-disc">
                    <li className="ml-3 text-xl font-medium">
                      <div>{item.name}</div>
                      {ticket_total > 0 && <div className="font-bold">{ticket_total} tickets</div>}
                    </li>
                  </ul>
                </div>

                <div className="collapse-content">
                  <div className="text-center">No tickets available</div>
                </div>
              </div>
            )
          })}
        </CardSection.Body>
      </CardSection>
    </div>
  )
}