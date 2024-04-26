import logo from '@/components/icons/logo-white.svg'
import Image from 'next/image'

const Navigation = () => {
  return (
    <nav className="flex fixed justify-between items-center    w-full px-8 xl:w-[1151px] h-11 top-6  ">
      <Image priority src={logo} alt="Follow us on Twitter" />

      <ul className="flex flex-row justify-between items-center p-0 gap-10 ">
        <li className="text-white font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize">
          <a href="#">Home</a>
        </li>
        <li className="text-white font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize">
          <a href="#">Deploy</a>
        </li>
        <li className="text-white font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize">
          <a href="#">Design</a>
        </li>
        <li className="text-white font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize">
          <a href="#">Documentation</a>
        </li>
      </ul>
      <a
        className={
          'bg-white text-blackLight w-fit font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize   whitespace-nowrap rounded-lg border gap-2 py-2.5 px-3 border-gray'
        }
        href="https://app.k3-labs.com/"
      >
        Launch app
      </a>
    </nav>
  )
}

export default Navigation
