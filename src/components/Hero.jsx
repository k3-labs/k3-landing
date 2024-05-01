'use client'

import Animation from '@/components/Animation/Animation'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { scrollIntoView } from '@/components/Navigation'
import vector from '../app/vector.svg'
import cryptoIcon from './icons/crypto-icon.svg'
import gasIcon from './icons/gas-icon.svg'
import nodeIcon from './icons/node-icon.svg'
import walletIcon from './icons/wallet-icon.svg'

const cards = [
  {
    icon: gasIcon,
    title: 'No gas'
  },
  {
    icon: walletIcon,
    title: 'No wallets'
  },
  {
    icon: nodeIcon,
    title: 'No nodes'
  },
  {
    icon: cryptoIcon,
    title: 'No crypto'
  }
]

const Hero = () => {
  return (
    <div
      className=" w-full md:w-screen lg:max-h-[1080px] h-screen lg:h-[calc(100vh-80px)] pt-20 md:pt-[250px]  "
      style={{
        backgroundImage: `url(${vector.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Animation />
      <div className="flex gap-6  md:gap-8 mt-6 md:mt-8 flex-col  items-center max-w-7xl mx-auto">
        <p className="align-center text-base   mx-5 md:text-[20px] max-w-[950px] text-center md:leading-[34px] font-normal">
          Easily design and deploy business workflows and applications that
          utilize the power of decentralized compute, storage, and execution.
        </p>

        <div className="flex gap-x-3 max-w-6xl">
          <a
            className={
              'bg-white hidden md:block text-blackLight w-fit font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize md:button   whitespace-nowrap rounded-lg border gap-2 py-2.5 px-3 border-gray'
            }
            href="https://app.k3-labs.com/"
          >
            Launch app
          </a>
          <Button
            className=" border-darkGray md:button bg-darkGray/80 "
            onClick={() => scrollIntoView('contact-nav')}
            // style={{
            //   background:
            //     'linear-gradient(171deg, rgba(255, 255, 255, 0.09) 36.08%, rgba(255, 255, 255, 0.072) 86.19%)'
            // }}
          >
            <span className="hidden md:block">Become a design partner</span>
            <span className="md:hidden">Connect with us</span>
          </Button>
        </div>
        <div className="max-w-6xl grid grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-2 w-full mt-8 md:mt-20">
          {cards.map((card, idx) => (
            <Card
              idx={idx}
              key={card.title}
              icon={card.icon}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
