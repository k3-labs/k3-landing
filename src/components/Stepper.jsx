import Image from 'next/image'
import arrowIcon from './icons/arrow-icon.svg'
import favoriteIcon from './icons/favorite.svg'
import flashIcon from './icons/flash.svg'
import internalIcon from './icons/internal.svg'
const steps = [
  {
    content:
      'Drag & Drop tool allowing you to design and deploy your on-chain workflow',
    icon: arrowIcon
  },
  {
    content:
      'Utilise pre-made functions, such as Read, Write, Transform and others',
    icon: flashIcon
  },
  {
    content:
      'Create your workflows in minutes, using use case-specific templates',
    icon: favoriteIcon
  },
  {
    content: 'Connect your Internal Data / Systems with on-chain operations',
    icon: internalIcon
  }
]

const Stepper = () => {
  return (
    <ol role="list" className=" flex flex-col overflow-hidden gap-4 ">
      {steps.map((step, stepIdx) => (
        <>
          <li
            key={stepIdx}
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
              <Image
                src={step.icon}
                className=" fill-blue "
                alt="icon"
                width={20}
                height={20}
              />
            </span>
            <p className="body-3 line-clamp-2 text-white">{step.content}</p>
          </li>
        </>
      ))}
    </ol>
  )
}
export default Stepper
