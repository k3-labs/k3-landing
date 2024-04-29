import Image from 'next/image'

import cloud from './icons/cloudBlue.svg'
import diamond from './icons/diamond.svg'
import hand from './icons/hand.svg'
import saas from './icons/saas.svg'

const Pricing = () => {
  return (
    <div className="flex flex-col relative bottom-16 rounded-2xl border border-darkGray md:border-blackLight  max-w-6xl md:mx-20">
      <div className="grid grid-cols-1 md:grid-cols-4  ">
        <div className="flex flex-col py-8 px-6 md:border-r border-blackLight gap-3">
          <Image src={diamond} alt="icon" width={32} height={32} />

          <p className="body-3 w-5/6">
            Get all of the best out of blockchain without the challenges it can
            bring
          </p>
        </div>
        <div className="flex flex-col py-8 px-6 md:border-y-0 border-y md:border-r border-darkGray md:border-blackLight   gap-3">
          <Image src={hand} alt="icon" width={32} height={32} />

          <p className="body-3 w-5/6">
            No gas, no wallets, no nodes, no keys, no crypto{' '}
          </p>
        </div>
        <div className="flex flex-col py-8 px-6  md:border-b-0 border-b  md:border-r border-darkGray md:border-blackLight  gap-3">
          <Image src={saas} alt="icon" width={32} height={32} />

          <p className="body-3 w-5/6">
            Traditional SaaS / fiat billing model and enterprise -grade SLAs
          </p>
        </div>
        <div className="flex flex-col py-8 px-6  gap-3">
          <Image src={cloud} alt="icon" width={32} height={32} />

          <p className="body-3 w-5/6">
            Interoperate with any public or private EVM chain through simple web
            forms and single
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pricing
