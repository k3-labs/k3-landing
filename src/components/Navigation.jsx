import Button from '@/components/Button'
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

      <Button className="bg-white text-blackLight">Demo App</Button>
    </nav>
  )
}

export default Navigation
