import Image from 'next/image'

import turnkeyIcon from './icons/turnkey-icon.svg'

const Pricing = () => {
  return (
    <div
      className="flex flex-col rounded-2xl border border-darkGray  max-w-6xl mx-20"
      style={{
        background:
          'linear-gradient(171deg, rgba(255, 255, 255, 0.09) 36.08%, rgba(255, 255, 255, 0.072) 86.19%)'
      }}
    >
      <div className="grid grid-cols-4 ">
        <div className="flex flex-col py-8 px-6 border-r border-darkGray gap-3">
          <Image src={turnkeyIcon} alt="icon" width={32} height={32} />

          <p className="body-3 w-5/6">
            Get all of the best out of blockchain without the challenges it can
            bring
          </p>
        </div>
        <div className="flex flex-col py-8 px-6 border-r border-darkGray gap-3">
          <Image src={turnkeyIcon} alt="icon" width={32} height={32} />

          <p className="body-3 w-5/6">
            Traditional SaaS / fiat billing model and enterprise -grade SLAs
          </p>
        </div>
        <div className="flex flex-col py-8 px-6 border-r border-darkGray gap-3">
          <Image src={turnkeyIcon} alt="icon" width={32} height={32} />

          <p className="body-3 w-5/6">
            Traditional SaaS / fiat billing model and enterprise -grade SLAs
          </p>
        </div>
        <div className="flex flex-col py-8 px-6  gap-3">
          <Image src={turnkeyIcon} alt="icon" width={32} height={32} />

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
