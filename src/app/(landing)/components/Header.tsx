// Next
import Image from "next/image"
import Link from "next/link"

// Configs
import { Config } from "@/configs"

export function Header() {
  return (
    <div className="bg-slate-900 dark:bg-gray-800 text-white">
      <div className="container">
        <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost xl:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                  <li><a>Featured Events</a></li>
                  <li>
                    <Link href="/event">
                      Buy Tickets
                    </Link>
                  </li>
                  <li><a>Sell Tickets</a></li>
                  <li><a>Register</a></li>
                  <li><a>Login</a></li>
                </ul>
              </div>

              <Link href="/">
                <Image src={Config.Logo} alt="Logo" height={35} />
              </Link>
            </div>
            <div className="navbar-end hidden xl:flex">
              <ul className="navbar-menu menu menu-horizontal px-1 items-center">
                <li><a>Featured Events</a></li>
                <li>
                  <Link href="/event">
                    Buy Tickets
                  </Link>
                </li>
                <li><a>Sell Tickets</a></li>
                <li><a className="py-0"><button className="btn btn-primary btn-outline">Register</button></a></li>
                <li><a className="py-0"><button className="btn btn-primary">Login</button></a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}