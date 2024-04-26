import { DragDrop, Favorite, Flash, Internal } from '@/components/icons/icons'

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
    <ol role="list" className=" flex flex-col overflow-hidden gap-4 ">
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
  )
}
export default Stepper
