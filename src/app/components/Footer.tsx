// Next
import Image from "next/image"

// Configs
import { Config } from "@/configs"

export function Footer() {
  return (
    <div className="bg-center bg-cover" style={{ backgroundImage: `url(/footer.jpg)` }}>
      <div className='container'>
        <div className='py-10 grid grid-cols-1 md:grid-cols-3'>
          <div className="mb-5 flex justify-center md:justify-start">
            <Image src={Config.Logo} alt="Logo" className="h-10 object-contain" />
          </div>

          <div className='prose text-center'>
            <p className="text-white">Head Office Address<br />Jl. Pantai Berawa, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80361</p>
            <p className="text-white">Phone: 623618446327<br />WhatsApp (Text Only): 6282147849839<br />Email: reservation@finnsbali.com</p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  )
}