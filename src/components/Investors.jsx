import Image from 'next/image'
import aztlan from '../assets/aztlan.png'
import bff from '../assets/bff.png'
import cubist from '../assets/cubist.svg'
import eigenlayer from '../assets/eigenlayer.png'
import finality from '../assets/finality.png'
import novanet from '../assets/nova-net.png'
import othenthic from '../assets/othenthic.png'
import stability from '../assets/stability.svg'
import uniblock from '../assets/uniblock.png'

const Investors = () => {
  return (
    <div className="bg-[#FBFBFB] p-12 md:p-14 lg:p-[120px]  ">
      <div className="flex  justify-center w-full  gap-12 flex-wrap">
        <Image src={bff} alt="bbf-logo" height={75} />
        <Image src={finality} alt="finality-logo" height={75} />
        <Image src={eigenlayer} alt="eigenlayer-logo" height={75} />
        <Image src={aztlan} alt="aztlan-logo" height={75} />
        <Image src={novanet} alt="nova-net-logo" height={75} />
        <Image src={stability} alt="stability-logo" height={45} />
        <div className="flex gap-2 items-center">
          <Image src={cubist} alt="cubist-logo" height={45} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.26rem"
            height="2.1rem"
            fill="currentColor"
            viewBox="0 0 133 34"
          >
            <path
              fill="currentColor"
              d="M.777 21.802c0-6.64 4.92-11.957 11.834-11.957 4.033 0 6.481 1.371 7.898 2.382v4.788h-.096a11.925 11.925 0 0 0-7.154-2.382c-3.985 0-6.961 2.333-6.961 7.17 0 4.835 2.976 7.265 6.961 7.265 3.313 0 5.785-1.323 7.298-2.574h.096v4.836c-1.368 1.083-3.697 2.526-8.09 2.526-6.817 0-11.786-5.124-11.786-12.054Zm37.424-11.236h5.45V33.11h-4.226l-.48-3.609c-1.224 2.094-3.6 4.187-7.201 4.187-5.497 0-8.474-3.946-8.474-9.865V10.591h5.449v12.005c0 4.884 1.896 6.496 4.489 6.496s4.969-2.045 4.969-6.833V10.591l.024-.025Zm32.093 10.972c0 7.073-4.537 12.198-10.658 12.198-3.793 0-6.337-1.997-7.61-4.235l-.528 3.61h-4.224V2.746h5.449v10.995c1.368-2.141 3.84-3.801 7.201-3.801 5.93 0 10.37 4.884 10.37 11.573v.024Zm-5.497.337c0-3.754-2.136-7.267-6.241-7.267-4.105 0-6.05 3.561-6.05 7.218s2.09 7.266 6.098 7.266c4.009 0 6.193-3.464 6.193-7.217Z"
            />
            <path
              fill="currentColor"
              d="M70.294 21.537c0 7.074-4.537 12.198-10.658 12.198-3.793 0-6.337-1.997-7.61-4.234l-.528 3.609h-4.224V2.747h5.449v10.995c1.368-2.142 3.84-3.802 7.201-3.802 5.93 0 10.37 4.885 10.37 11.573v.024Zm-5.497.337c0-3.753-2.136-7.266-6.241-7.266-4.105 0-6.05 3.56-6.05 7.218 0 3.657 2.09 7.266 6.098 7.266 4.009 0 6.193-3.465 6.193-7.218Zm7.178-18.43C71.975 1.64 73.39.27 75.48.27c2.088 0 3.456 1.371 3.456 3.175 0 1.805-1.464 3.176-3.456 3.176-1.993 0-3.505-1.42-3.505-3.176Zm.768 29.642v-22.52h5.45V33.11h-5.45v-.024Zm8.162-1.733v-4.595h.096c1.753 1.179 4.537 2.55 7.61 2.55 2.544 0 4.129-.89 4.129-2.43 0-4.042-11.643-2.045-11.643-9.816 0-4.33 3.457-7.074 8.57-7.074 3.12 0 5.593 1.083 6.962 1.95v4.546h-.096c-1.417-.89-3.601-1.9-6.434-1.9-2.472 0-3.84.89-3.84 2.285 0 3.657 11.642 1.805 11.642 9.769 0 4.643-3.889 7.073-8.57 7.073-3.505 0-6.577-1.275-8.426-2.382v.024ZM113.84 14.97h-6.529v9.166c0 3.032.384 4.884 2.88 4.884 1.177 0 2.497-.48 3.169-.818h.096v4.042c-.768.626-2.784 1.42-5.161 1.42-6.433 0-6.433-5.799-6.433-7.218V14.969h-3.841v-4.402h3.841V6.428l5.353-3.705h.096v7.82h6.529v4.426Z"
            ></path>
          </svg>
        </div>
        <Image src={uniblock} alt="uniblock-logo" height={75} />
        <div className="flex gap-1 items-center">
          <Image src={othenthic} alt="othenthic-logo" height={50} />
          <h5 className="text-grayText text-4xl font-medium leading-5 -tracking-[0.07px]">
            Othenthic
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Investors
