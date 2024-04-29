'use client'

import { DragDrop, Favorite, Flash, Internal } from '@/components/icons/icons'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const steps = [
  {
    content:
      'Drag & Drop tool allowing you to design and deploy your on-chain workflow',
    icon: DragDrop
  },
  {
    content:
      'Utilise pre-made functions, such as Read, Write, Transform and others',
    icon: Flash
  },
  {
    content:
      'Create your workflows in minutes, using use case-specific templates',
    icon: Favorite
  },
  {
    content: 'Connect your Internal Data / Systems with on-chain operations',
    icon: Internal
  }
]

const Stepper = () => {
  return (
    <>
      <MobileStepper />
      <ol
        role="list"
        className="hidden md:flex flex-col overflow-hidden gap-4 "
      >
        {steps.map((step, stepIdx) => (
          <li
            key={step.content}
            id={`design-step-${stepIdx}`}
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
            </span>
            <p className="body-3 line-clamp-2 text-white">{step.content}</p>
          </li>
        ))}
      </ol>
    </>
  )
}
export default Stepper

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
        <ol role="list" className="flex items-center">
          {steps.map((step, stepIdx) => (
            <li
              key={step.content}
              className={twMerge(
                stepIdx !== steps.length - 1 ? 'pr-16 sm:pr-32' : '',
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
      <p className="caption line-clamp-2 absolute top-12 text-white text-center">
        {steps?.[currentStep]?.content}
      </p>
    </div>
  )
}
