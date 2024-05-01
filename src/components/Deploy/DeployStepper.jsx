'use client'

import {
  Arrow,
  Cloud,
  FlashOff,
  Market,
  Odometer
} from '@/components/icons/icons'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
const steps = [
  {
    content:
      'Get Instant, turnkey integration of the most common Web3-native services on multiple EVM ecosystems',
    icon: Cloud
  },
  {
    content: 'Reduce operational risk',
    icon: Odometer
  },
  {
    content:
      'Focus on your project’s value-add rather than basic blockchain dev tasks and operations',
    icon: Arrow
  },
  {
    content: 'SaaS not IaaS',
    icon: FlashOff
  },
  {
    content: 'Get to market faster and at significantly lower costs',
    icon: Market
  }
]

const DeployStepper = () => {
  return (
    <>
      <MobileStepper />
      <ol
        role="list"
        className=" hidden md:flex flex-col overflow-hidden gap-4 "
      >
        {steps.map((step, stepIdx) => (
          <li
            key={step.content}
            id={`deploy-step-${stepIdx}`}
            className="relative gap-4 flex py-3  h-[74px] opacity-30 transition-opacity ease-in delay-150"
          >
            {stepIdx !== steps.length - 1 ? (
              <div
                className="absolute left-[18px] top-12 h-[54px] w-[1px] bg-white"
                aria-hidden="true"
              />
            ) : null}

            <span
              className=" rounded-full   min-w-9 min-h-9 w-9 h-9 flex items-center justify-center "
              style={{
                background:
                  'linear-gradient(171deg, rgba(255, 255, 255, 0.09) 36.08%, rgba(255, 255, 255, 0.072) 86.19%)'
              }}
            >
              <step.icon className="w-5 h-5 text-white" />
              {/* <Image
              src={step.icon}
              className=" fill-blue "
              alt="icon"
              width={20}
              height={20}
            /> */}
            </span>
            <p className="body-3  text-white">{step.content}</p>
          </li>
        ))}
      </ol>
    </>
  )
}
export default DeployStepper

const MobileStepper = () => {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((currentStep) => (currentStep + 1) % steps.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className=" relative md:hidden flex flex-col gap-4 justify-center">
      <nav aria-label="deploy-step">
        <ol role="list" className="flex items-center justify-center">
          {steps.map((step, stepIdx) => (
            <li
              key={step.content}
              className={twMerge(
                stepIdx !== steps.length - 1 ? 'pr-10 sm:pr-24' : '',
                'relative'
              )}
            >
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div
                    className={twMerge(
                      'h-0.5 w-full transition-colors ease-in-out delay-150',
                      stepIdx < currentStep ? 'bg-blue' : 'bg-darkGray'
                    )}
                  />
                </div>

                <span className="rounded-full relative  min-w-9 min-h-9 w-9 h-9 flex items-center justify-center bg-blackLight">
                  <step.icon
                    className={twMerge(
                      'w-5 h-5 transition-colors ease-in-out delay-150',
                      stepIdx === currentStep ? 'text-blue' : 'text-gray'
                    )}
                  />
                </span>
              </>
            </li>
          ))}
        </ol>
      </nav>
      <p className="caption relative  h-8  text-white text-center">
        {steps?.[currentStep]?.content}
      </p>
    </div>
  )
}
