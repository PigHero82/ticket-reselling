// React
import { Fragment } from "react"

// Next
import Image from "next/image"

// Assets
import Ticket from "@/assets/images/ticket.png"

// Components
import { Event, HeroStep } from "./components"

// Configs
import { StepAssets } from "@/configs"

export default function Home() {
  return (
    <Fragment>
      <section className="bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url(/assets/images/hero-banner.jpg)" }}>
        <div className="min-h-[550px] container flex flex-col lg:flex-row justify-center items-center">
          <Image src={Ticket} alt="Ticket Icon" className="m-5" priority />

          <div className="m-5 text-center">
            <h1 className="mb-2 lg:mb-5 font-bold text-4xl lg:text-7xl text-white dark:text-white">FINNS TICKET<br/>RESELL MARKETPLACE</h1>
            <h2 className="font-bold lg:text-xl italic text-white dark:text-white">UNABLE TO ATTEND OUR UPCOMING EVENT BUT ALREADY HAVE YOUR TICKETS PURCHASED? RE-SELL YOUR TICKETS WITH US!</h2>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-slate-400 py-8">
        <div className='container text-center text-lg font-bold italic mb-3 flex flex-col gap-3'>
          <p className="text-[#2d2b69]">With Finns Beach Club events now continually selling out, we're offering you the opportunity to both securely sell and purchase legitimate Finns events tickets.</p>
          <p className="text-[#2d2b69]">This is the only service that can guarantee the legitimate resale of tickets. Finns takes no responsibility for fraudulent tickets purchased outside of this website.</p>
        </div>
      </section>

      <section>
        <HeroStep
          title="HOW IT WORKS AS A SELLER"
          button={{
            text: "UPLOAD YOUR TICKET NOW",
            link: "/upload-ticket"
          }}
          items={[
            {
              image: {
                dark: StepAssets.dark.step1,
                light: StepAssets.light.step1
              },
              title: "CREATE AN ACCOUNT"
            },
            {
              image: {
                dark: StepAssets.dark.step2,
                light: StepAssets.light.step2
              },
              title: "UPLOAD YOUR TICKET"
            },
            {
              image: {
                dark: StepAssets.dark.step3,
                light: StepAssets.light.step3
              },
              title: "VERIFY YOUR ID"
            },
            {
              image: {
                dark: StepAssets.dark.step4,
                light: StepAssets.light.step4
              },
              title: "FINNS FACILITATES TRANSACTION WITH BUYER"
            },
            {
              image: {
                dark: StepAssets.dark.step5,
                light: StepAssets.light.step5
              },
              title: "RECEIVE YOUR CASH / FINNS CREDIT"
            }
          ]}
        />
      </section>

      <section>
        <HeroStep
          title="HOW IT WORKS AS A BUYER"
          button={{
            link: "#",
            text: "PURCHASE YOUR TICKET NOW"
          }}
          items={[
            {
              image: {
                dark: StepAssets.dark.step6,
                light: StepAssets.light.step6
                },
              title: "VIEW AVAILABLE TICKETS FOR ALL FINNS EVENTS"
            },
            {
              image: {
                dark: StepAssets.dark.step7,
                light: StepAssets.light.step7
                },
              title: "PURCHASE YOUR FAVOURITE TICKET"
            },
            {
              image: {
                dark: StepAssets.dark.step8,
                light: StepAssets.light.step8
                },
              title: "RECEIVE YOUR TICKET IMMEDIATELY"
            },
            {
              image: {
                dark: StepAssets.dark.step9,
                light: StepAssets.light.step9
                },
              title: "ENJOY THE EVENT!"
            }
          ]}
        />
      </section>

      <section className="bg-gray-100 dark:bg-slate-600">
        <div className='container'>
          <Event />
        </div>
      </section>
    </Fragment>
  )
}