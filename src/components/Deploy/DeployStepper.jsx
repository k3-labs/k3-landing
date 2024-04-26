import {
  Arrow,
  Cloud,
  FlashOff,
  Market,
  Odometer
} from '@/components/icons/icons'

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
    <ol role="list" className=" flex flex-col overflow-hidden gap-4 ">
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
          <p className="body-3 line-clamp-2 text-white">{step.content}</p>
        </li>
      ))}
    </ol>
  )
}
export default DeployStepper
