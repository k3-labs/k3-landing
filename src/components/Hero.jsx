import Animation from '@/components/Animation/Animation'
import Button from '@/components/Button'
import Card from '@/components/Card'
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
      className="flex w-full max-h-[1080px] h-[calc(100vh-80px)] pt-[250px] gap-8  flex-col  items-center "
      style={{
        backgroundImage: `url(${vector.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Animation />

      <p className="align-center  text-[20px] text-center leading-[34px] font-normal">
        Easily design and deploy business workflows and applications that
        utilize the power of decentralized
        <br /> compute, storage, and execution.
      </p>

      <div className="flex gap-x-3">
        <a
          className={
            'bg-white text-blackLight w-fit font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize   whitespace-nowrap rounded-lg border gap-2 py-2.5 px-3 border-gray'
          }
          href="https://app.k3-labs.com/"
        >
          Launch app
        </a>
        <Button className="bg-black border-darkGray ">
          Become a design partner
        </Button>
      </div>
      <div className="flex gap-x-5 mt-20">
        {cards.map((card) => (
          <Card key={card.title} icon={card.icon} title={card.title} />
        ))}
      </div>
    </div>
  )
}

export default Hero
