import DeployAnimations from '@/components/Deploy/DeployAnimations'
import DeployStepper from '@/components/Deploy/DeployStepper'
import Image from 'next/image'
import deployIcon from '../icons/deploy-icon.svg'

const Deploy = () => {
  return (
    <div className="flex flex-col items-center gap-12" id="deploy-nav">
      <div className="mx-5 md:mx-0 flex gap-4 md:gap-8  flex-col max-w-3xl  items-center ">
        <div className="flex gap-x-2 items-center">
          <Image
            src={deployIcon}
            alt="icon"
            className="h-6 w-6 md:h-10 md:w-10"
          />
          <h3 id="deploy">Deploy</h3>
        </div>
        <div className="flex gap-4    flex-col  items-center ">
          <h4 className=" text-center  ">
            Deploy simple functions or full-stack applications written in Web2
            languages on Web3 / decentralized hardware
          </h4>
          <p className="body-3 md:body-2 md:max-w-[463px]  text-gray text-center">
            Current support for <span className="text-purple">Rust</span>.
            Future-proof your builds by leveraging the inherent security and
            scalability of restaking.{' '}
            <span className="text-purple">Typescript</span>, and{' '}
            <span className="text-purple">Python</span> coming soon.
          </p>
        </div>
      </div>
      {/* <div className="flex gap-16">
        <TimeToMarket />
        <TCO />
      </div> */}
      <div className="mx-5 md:mx-0  w-[calc(100%-40px)] flex flex-col md:flex-row md:w-full justify-between max-w-6xl gap-6 items-center">
        <div className="max-w-[712px] justify-center rounded-lg md:rounded-[14.4px] border border-darkGray flex flex-col h-fit ">
          <div className="flex gap-0.5 md:gap-1 border-b border-darkGray md:p-4 p-2 ">
            <span className="rounded-full w-1 h-1 md:h-[8.8px] md:w-[8.8px] bg-red" />
            <span className="rounded-full w-1 h-1 md:h-[8.8px] md:w-[8.8px] bg-yellow" />
            <span className="rounded-full w-1 h-1 md:h-[8.8px] md:w-[8.8px] bg-greenDark" />
          </div>
          <DeployAnimations />
        </div>
        <div className="w-full md:w-[32%]">
          <DeployStepper />
        </div>
      </div>
    </div>
  )
}

export default Deploy
