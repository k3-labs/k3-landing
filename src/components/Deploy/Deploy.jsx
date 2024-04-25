import DeployAnimations from '@/components/Deploy/DeployAnimations'
import DeployStepper from '@/components/Deploy/DeployStepper'
import Image from 'next/image'
import deployIcon from '../icons/deploy-icon.svg'

const Deploy = () => {
  return (
    <>
      <div className="flex gap-8  flex-col max-w-3xl  items-center ">
        <div className="flex gap-x-2">
          <Image src={deployIcon} alt="icon" width={40} height={40} />
          <h3 id="deploy">Deploy</h3>
        </div>
        <div className="flex gap-4    flex-col  items-center ">
          <h4 className=" text-center ">
            Deploy simple functions or full-stack applications written
            <br />
            in Web2 languages on Web3 / decentralized hardware
          </h4>
          <p className="text-[14px] leading-[25.2px] text-gray text-center">
            Current support for Rust. Future-proof your builds by leveraging the
            inherent security and scalability of restaking. <br />{' '}
            <span className="text-purple">
              Typescript, and Javascript coming soon.
            </span>
          </p>
        </div>
      </div>
      {/* <div className="flex gap-16">
        <TimeToMarket />
        <TCO />
      </div> */}
      <div className="flex w-full justify-between max-w-6xl gap-14">
        <div className="w-[712px] justify-center rounded-[14.4px] border border-darkGray flex flex-col ">
          <div className="flex gap-1 border-b border-darkGray p-4 ">
            <span className="rounded-full h-[8.8px] w-[8.8px] bg-darkGray" />
            <span className="rounded-full h-[8.8px] w-[8.8px] bg-darkGray" />
            <span className="rounded-full h-[8.8px] w-[8.8px] bg-darkGray" />
          </div>
          <DeployAnimations />
        </div>
        <div className="w-2/5">
          <DeployStepper />
        </div>
      </div>
    </>
  )
}

export default Deploy
