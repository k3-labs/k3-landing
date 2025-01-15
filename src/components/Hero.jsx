'use client'
import { scrollIntoView } from '@/components/Navigation'
import Image from 'next/image'
import vectorSmall from '../app/vector-small.svg'
import vector from '../app/vector.svg'

const Hero = () => {
  return (
    <div className="w-full pb-6 border-b border-b-whiteStroke overflow-hidden">
      <div className="w-full  mx-auto mt-[72px] overflow-hidden">
        <Image
          className="w-full h-full max-h-[777px] absolute inset-0 top-8    flex-grow -z-10 md:top-[120px] lg:top-[0px] hidden lg:block"
          src={vector}
          // fill
          objectFit="cover"
          alt="vector"
          quality={100}
          unoptimized
        />
        <Image
          className="w-full h-full max-h-[777px] absolute inset-0 top-8    flex-grow -z-10 md:top-[120px] lg:top-[0px]  lg:hidden"
          src={vectorSmall}
          // fill
          objectFit="cover"
          alt="vector"
          quality={100}
          unoptimized
        />

        <div className="flex w-full flex-col  items-start pt-10   gap-16 lg:gap-36 lg:pt-36 ">
          <div className="flex flex-col gap-12 w-full px-6">
            <div className="flex flex-col gap-[22px] items-center">
              <h1 className="text-black text-5xl lg:text-[56px] lg:leading-[76px] font-bold text-center leading-[1.21]">
                Workflow Automations for {'\n'} Web3 
              </h1>
              <p className="m-0 max-w-[475px] text-[#232529] font-medium  leading-6 text-center lg:text-xl lg:leading-7 ">
                Radically reduce your time to market and cost of operations by
                automating day-to-day Web3 tasks
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 ">
              <a
                href="https://app.k3-labs.com/"
                className="bg-blackLight border border-darkGray rounded-lg  leading-5 h-10 py-2 px-[15px] flex items-center text-[#F3F4F6] text-[15px] font-medium "
              >
                Automate Now
              </a>
              <a
                onClick={() => scrollIntoView('connect')}
                className="bg-white border border-whiteStroke rounded-lg  leading-5 h-10 py-2 px-[15px] flex items-center text-grayText text-[15px] font-medium cursor-pointer "
              >
                Book a demo
              </a>
            </div>
          </div>
          <div className="relative w-[440px] mx-auto h-[262px] md:w-[682px] md:h-[406px]  lg:w-[1280px] lg:h-[763px] ">
            <Image
              src="/browser.svg"
              alt="builder"
              layout="fill"
              objectFit="contain"
              quality={100}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
