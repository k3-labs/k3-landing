'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import first from './first.svg'
import second from './second.svg'
import third from './third.svg'

const DeployAnimations = () => {
  useEffect(() => {
    const checkScroll = () => {
      const deployHeader = document.getElementById('deploy')
      const rect = deployHeader?.getBoundingClientRect()
      if (!rect) return

      if (rect.top <= 500) {
        const firstStep = document.getElementById('deploy-step-0')
        firstStep.style.opacity = 1
        const svgElement = firstStep.querySelector('svg')
        if (svgElement) {
          svgElement.style.color = '#0070F3'
        }

        const second = document.getElementById('second')
        second.style.opacity = 1
      }
      if (rect.top < 300) {
        const secondStep = document.getElementById('deploy-step-1')
        const thirdStep = document.getElementById('deploy-step-2')
        secondStep.style.opacity = 1
        thirdStep.style.opacity = 1
        const third = document.getElementById('third')
        third.style.opacity = 1

        const thirdSvg = thirdStep.querySelector('svg')
        if (thirdSvg) {
          thirdSvg.style.color = '#0070F3'
        }
        const secondSvg = secondStep.querySelector('svg')
        if (secondSvg) {
          secondSvg.style.color = '#0070F3'
        }
      }
      if (rect.top < 100) {
        const fourthStep = document.getElementById('deploy-step-3')
        const fifthStep = document.getElementById('deploy-step-4')
        fourthStep.style.opacity = 1
        fifthStep.style.opacity = 1
        const fourthSvg = fourthStep.querySelector('svg')
        if (fourthSvg) {
          fourthSvg.style.color = '#0070F3'
        }
        const fifthSvg = fifthStep.querySelector('svg')
        if (fifthSvg) {
          fifthSvg.style.color = '#0070F3'
        }

        const first = document.getElementById('first')
        first.style.opacity = 1
      }
    }

    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <div className="w-full gap-2 justify-between md:pl-3 md:py-3 py-0.5 pl-0.5 flex items-center">
      <div className="flex flex-col w-/12 ">
        <Image
          src={first}
          id="first"
          alt="icon"
          className="opacity-20 w-full transition duration-1000 ease-in-out"
        />
        <Image
          src={second}
          id="second"
          alt="icon"
          className="opacity-20 w-full transition duration-1000 ease-in-out"
        />
      </div>
      <Image
        src={third}
        id="third"
        alt="icon"
        className="opacity-20 w-1/2 transition duration-1000 ease-in-out"
      />
    </div>
  )
}

export default DeployAnimations
