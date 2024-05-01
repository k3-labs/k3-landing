'use client'
import Pricing from '@/components/Pricing'
import Stepper from '@/components/Stepper'
import Image from 'next/image'
import { useEffect } from 'react'
import image from '../app/Platform_Concept.png'
import eclipse from '../app/eclipse.svg'
import designIcon from './icons/design-icon.svg'

const Design = () => {
  useEffect(() => {
    const checkScroll = () => {
      const designHeader = document.getElementById('design')
      const rect = designHeader?.getBoundingClientRect()
      if (!rect) return

      if (rect.top <= 300) {
        const firstStep = document.getElementById('design-step-0')
        firstStep.style.opacity = 1
        const svgElement = firstStep.querySelector('svg')
        if (svgElement) {
          svgElement.style.color = '#0070F3'
        }
      }
      if (rect.top < 150) {
        const firstStep = document.getElementById('design-step-1')
        firstStep.style.opacity = 1
        const svgElement = firstStep.querySelector('svg')
        if (svgElement) {
          svgElement.style.color = '#0070F3'
        }
      }
      if (rect.top < 0) {
        const firstStep = document.getElementById('design-step-2')
        firstStep.style.opacity = 1
        const svgElement = firstStep.querySelector('svg')
        if (svgElement) {
          svgElement.style.color = '#0070F3'
        }
      }
      if (rect.top < -0) {
        const firstStep = document.getElementById('design-step-3')
        firstStep.style.opacity = 1
        const svgElement = firstStep.querySelector('svg')
        if (svgElement) {
          svgElement.style.color = '#0070F3'
        }
      }
    }

    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <div id="design-nav" className="mx-5  md:mx-0  flex flex-col  items-center">
      <div className="flex gap-8 mb-16 md:mb-0 flex-col max-w-3xl  items-center ">
        <div className="flex gap-x-2 items-center ">
          <Image src={designIcon} alt="icon" width={40} height={40} />
          <h3 id="design">Design</h3>
        </div>
        <div className="flex gap-4    flex-col  items-center ">
          <h4 className=" text-center ">
            A simple, template-driven approach to interconnectivity between
            traditional systems and the Web3 world
          </h4>
          <p className="body-3 md:body-2 text-gray text-center">
            Design business and technical workflows and applications to{' '}
            <span className="text-blue">Read</span> from,{' '}
            <span className="text-blue">Write</span> to, and{' '}
            <span className="text-blue">Monitor</span> data on and off-chain,
            and utilize event-based Triggers to downstream processes. Deploy
            services that are monitored and executed by Web3 node operators
            rather than precious internal resources
          </p>
        </div>
      </div>
      <div className=" w-full relative  justify-between items-center max-w-6xl flex flex-col-reverse md:flex-row md:overflow-hidden  mb-36 md:mb-0 md:h-[550px] ">
        <div className="md:w-[32%] pt-10 md:pt-0">
          <Stepper />
        </div>

        <Image
          src={eclipse}
          alt="eclipse"
          width={600}
          height={800}
          className="absolute bottom-[50px] md:-bottom-[50px] md:left-[300px] "
        />

        <div className=" bg-black relative z-10 max-w-[712px] justify-center rounded-lg md:rounded-[14.4px] border border-darkGray flex flex-col h-fit ">
          <div className="flex gap-0.5 md:gap-1 border-b border-darkGray md:p-4 p-2 ">
            <span className="rounded-full w-1 h-1 md:h-[8.8px] md:w-[8.8px] bg-red" />
            <span className="rounded-full w-1 h-1 md:h-[8.8px] md:w-[8.8px] bg-yellow" />
            <span className="rounded-full w-1 h-1 md:h-[8.8px] md:w-[8.8px] bg-greenDark" />
          </div>
          <Image
            src={image}
            alt="image"
            className="w-fit  md:w-[650px] p-2   rounded-xl  "
          />
        </div>
      </div>
      <Pricing />
    </div>
  )
}

export default Design
