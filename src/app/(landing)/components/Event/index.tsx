"use client"

// Next
import Image from "next/image"
import Link from "next/link"

// Components
import { DataEmpty } from "@/components"

// Utils
import { useEvents } from "./utils"

export function Event() {
  // Hooks
  const { data, isLoading } = useEvents()

  return (
    <div className="flex flex-wrap gap-3 justify-center py-10">
      {isLoading ? [...Array(3)].map((_, key) => (
        <div key={key} className="card card-compact w-80 shadow-xl">
          <div className="animate-pulse">
            <div className="bg-slate-200 rounded-t-lg w-full h-80" />

            <section className="card-body flex flex-col items-center gap-3">
              <div className="bg-slate-200 rounded-lg w-[90%] h-5" />
              <div className="bg-slate-200 rounded-lg w-[50%] h-10" />
            </section>
          </div>
        </div>
      )) : data.length === 0 ? (
        <DataEmpty title="No Events Available" />
      ) : data.map((item, key) => (
        <div key={key} className="card card-compact w-80 shadow-xl">
          <Image src={item.background} alt={item.name} width={318} height={318} className="rounded-t-lg" />

          <div className="card-body prose flex flex-col items-center gap-3">
            <h3 className="m-0 text-center line-clamp-3 uppercase" title={item.name}>{item.name}</h3>

            <Link href={`/event/${item.slug}`}>
              <button className="btn btn-primary">VIEW AVAILABLE TICKETS</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}