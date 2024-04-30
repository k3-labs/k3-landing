import Image from 'next/image'

import cloud from './icons/cloudBlue.svg'
import diamond from './icons/diamond.svg'
import hand from './icons/hand.svg'
import saas from './icons/saas.svg'

const Pricing = () => {
  return (
    <div className="flex flex-col relative bottom-16 mt-20 rounded-2xl border border-darkGray   max-w-6xl md:mx-20">
      <div className="grid grid-cols-1 md:grid-cols-4  ">
        <div className="flex flex-col p-4 md:p-6 md:border-r border-darkGray gap-3">
          <Image src={diamond} alt="icon" className="w-6 h-8 md:w-8 md:h-8" />

          <p className="body-3 ">
            Get all of the best out of blockchain without the challenges it can
            bring
          </p>
        </div>
        <div className="flex flex-col p-4 md:p-6 md:border-y-0 border-y md:border-r border-darkGray   gap-3">
          <Image src={hand} alt="icon" className="w-6 h-8 md:w-8 md:h-8" />

          <p className="body-3 ">
            No gas, no wallets, no nodes, no keys, no crypto{' '}
          </p>
        </div>
        <div className="flex flex-col p-4 md:p-6  md:border-b-0 border-b  md:border-r border-darkGray  gap-3">
          <Image src={saas} alt="icon" className="w-6 h-8 md:w-8 md:h-8" />

          <p className="body-3 ">
            Traditional SaaS / fiat billing model and enterprise -grade SLAs
          </p>
        </div>
        <div className="flex flex-col p-4 md:p-6  gap-3">
          <Image src={cloud} alt="icon" className="w-6 h-8 md:w-8 md:h-8" />

          <p className="body-3 ">
            Interoperate with any public or private EVM chain through simple web
            forms and single
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pricing
