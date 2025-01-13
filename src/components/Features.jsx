import Image from 'next/image'

import myImage from '../app/workflow-background.svg'

const Features = () => {
  return (
    <div className="w-full  border-b border-b-whiteStroke  ">
      <div className="flex flex-col gap-5  mx-auto  ">
        <div className="pt-[50px] xl:pt-[100px] flex justify-between px-5 items-center">
          <h2 className="text-xs font-semibold leading-[14px] text-gray uppercase tracking-[0.72px]">
            [01]
          </h2>
          <span className="text-xs font-semibold leading-[14px] text-gray uppercase tracking-[0.72px]">
            Design and deploy
          </span>
        </div>
        <div className="relative h-[2px] w-full">
          <Image src="/dashed-line.svg" alt="dashed line" fill />
        </div>
      </div>
      <div className="flex justify-center border-b border-whiteStroke flex-col p-12 gap-10 md:px-16 xl:py-[75px] xl:px-[148px] xl:h-[376px] ">
        <a
          href="#"
          className="bg-white border border-blue rounded-lg  leading-5 h-9 px-2  flex items-center text-black text-[14px] font-medium w-fit"
        >
          Automate
        </a>
        <p className="m-0 text-[#8F99A8] max-w-[640px] text-xl xl:text-3xl font-medium leading-[30px] xl:leading-10 -tracking-[0.4px]">
          <span className="text-blackLight">A simple</span>,{' '}
          <span className="text-blackLight"> template driven approach to</span>{' '}
          building <span className="text-blackLight"> Web3</span> automations
          workflows that read and write between on and off-chain data sources,
          and instantly trigger processes or alerts.
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-between p-8 xl:h-[558px] xl:w-[320px] ">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold leading-[26px] -tracking-[0.2px] text-black">
              Automate Trading
            </span>
            <p className="m-0 text-base font-medium leading-6 -tracking-[0.16px] text-gray">
              Automatically Buy or Sell crypto in the DeFi ecosystem through
              Uniswap when a target price is reached.
            </p>
          </div>
          <a
            href="#"
            className="bg-blackLight border border-darkGray rounded-lg  leading-5 h-10 py-2 px-[15px]  items-center text-[#F3F4F6] text-[15px] font-medium hidden xl:flex w-fit"
          >
            Try Now
          </a>
        </div>
        <div
          className="border-x border-whiteStroke relative h-[550px] w-full"
          style={{
            backgroundImage: `url(${myImage.src})`
          }}
        >
          <Image src="/test-functions.svg" alt="icon" fill />
        </div>

        <div className="flex flex-col justify-between p-8 xl:h-[558px] xl:w-[320px] ">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold leading-[26px] -tracking-[0.2px] text-black">
              Automate Trading
            </span>
            <p className="m-0 text-base font-medium leading-6 -tracking-[0.16px] text-gray">
              Automatically Buy or Sell crypto in the DeFi ecosystem through
              Uniswap when a target price is reached.
            </p>
          </div>
          <a
            href="#"
            className="bg-blackLight border border-darkGray rounded-lg  leading-5 h-10 py-2 px-[15px]  items-center text-[#F3F4F6] text-[15px] font-medium hidden xl:flex w-fit"
          >
            Try Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Features
