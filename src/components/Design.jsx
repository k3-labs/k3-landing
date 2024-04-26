'use client'
import Pricing from '@/components/Pricing'
import Stepper from '@/components/Stepper'
import Image from 'next/image'
import { useEffect } from 'react'
import eclipse from '../app/eclipse.svg'
import image from '../app/image.png'
import designIcon from './icons/design-icon.svg'

const Design = () => {
  useEffect(() => {
    const checkScroll = () => {
      const designHeader = document.getElementById('design')
      const rect = designHeader.getBoundingClientRect()

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
    <div className="flex flex-col  items-center">
      <div className="flex gap-8 mb-16 flex-col max-w-3xl  items-center ">
        <div className="flex gap-x-2">
          <Image src={designIcon} alt="icon" width={40} height={40} />
          <h3 id="design">Design</h3>
        </div>
        <div className="flex gap-4    flex-col  items-center ">
          <h4 className=" text-center ">
            A simple, template-driven approach to interconnectivity
            <br />
            between traditional systems and the Web3 world
          </h4>
          <p className="body-2 text-gray text-center">
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
      <div className=" w-full relative items-center max-w-6xl flex overflow-hidden h-[700px] ">
        <div className="w-2/5">
          <Stepper />
        </div>

        <Image
          src={eclipse}
          alt="eclipse"
          width={600}
          height={800}
          className="absolute -bottom-[90px] left-[300px] "
        />

        <Image
          src={image}
          alt="image"
          className="min-w-[1152px] w-[1152px] h-[580px]  bg-black border border-darkGray rounded-xl py-8 absolute px-10  -right-[500px] top-0 "
        />
      </div>
      <Pricing />
    </div>
  )
}

export default Design
