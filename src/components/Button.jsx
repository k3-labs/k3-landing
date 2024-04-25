import { twMerge } from 'tailwind-merge'

const Button = (props) => {
  const { children, className } = props
  return (
    <button
      className={twMerge(
        'text-white w-fit font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize   whitespace-nowrap rounded-lg border gap-2 py-2.5 px-3 border-gray',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
