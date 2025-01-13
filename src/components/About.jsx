import Image from 'next/image'
import aim from '../assets/aim.svg'
import extend from '../assets/extend.svg'
import meter from '../assets/meter.svg'
import rocket from '../assets/rocket.svg'

const About = () => {
  return (
    <div className="w-full  border-b border-b-whiteStroke  ">
      <div className="flex flex-col gap-5  mx-auto  ">
        <div className="pt-[50px] lg:pt-[100px]  flex justify-between px-5 items-center">
          <h2
            className="text-xs font-semibold leading-[14px] text-gray uppercase tracking-[0.72px]"
            id="innovate"
          >
            [02]
          </h2>
          <span className="text-xs font-semibold leading-[14px] text-gray uppercase tracking-[0.72px]">
            Create custom functions
          </span>
        </div>
        <div className="relative h-[2px] w-full">
          <Image src="/dashed-line.svg" alt="dashed line" fill />
        </div>
      </div>
      <div className="flex justify-center relative border-b border-whiteStroke flex-col px-12 py-20 gap-10  lg:py-[75px] lg:px-[148px] lg:h-[376px] overflow-hidden order-1 ">
        <span className="bg-white border border-purple rounded-lg  leading-5 h-9 px-2  flex items-center text-black text-[14px] font-medium w-fit">
          Innovate
        </span>
        <p className="m-0 text-[#8F99A8] max-w-[470px] text-[28px] lg:text-3xl font-medium  leading-10 -tracking-[0.4px]">
          Launch custom code{' '}
          <span className="text-blackLight">
            in hours rather than days/weeks/months
          </span>
        </p>
        <div className="-z-10 absolute -right-56 md:right-0 lg:-right-10 -top-28 lg:-top-32  h-[510px] w-[637px] md:w-[702px]  lg:h-[660px] lg:w-[758px]">
          <Image src="/vector-globe.svg" alt="dashed line" fill />
        </div>
      </div>

      <div className="grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10">
        <div className="flex flex-col justify-between p-8 gap-10 lg:pb-2 lg:h-[500px] lg:w-[308px] ">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold leading-[26px] -tracking-[0.2px] text-black">
              Why use K3?
            </span>
            <p className="m-0 text-base leading-6 -tracking-[0.16px] text-grayText">
              Whether you’re a DeFi trader, a Web2 enterprise, or a Web3
              developer, our platform empowers you to automate day-to-day
              operations and focus instead on innovation.
            </p>
          </div>
          <a
            href="https://app.k3-labs.com/"
            className="bg-blackLight border border-darkGray rounded-lg  leading-5 h-10 py-2 px-[15px]  items-center text-[#F3F4F6] text-[15px] font-medium  w-fit"
          >
            Try Now
          </a>
        </div>
        {/* <div className="basis-full" /> */}
        <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 md:order-3 lg:order-2 col-span-2 px-12 py-5 lg:p-0 ">
          <div className="flex flex-col gap-10 px-6 py-7 border border-whiteStroke bg-white rounded-lg ">
            <Image src={meter} width={56} height={56} alt="meter" />

            <div className="flex flex-col gap-2">
              <span className="text-grayText text-lg font-semibold leading-[26px] -tracking-[0.2px]">
                Instantly integrate
              </span>
              <p className="text-grayText text-sm leading-5 -tracking-[0.35px] m-0">
                With common Web3 primitives across multiple blockchain
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 px-6 py-7 border border-whiteStroke bg-white rounded-lg">
            <Image src={rocket} width={56} height={56} alt="rocket" />
            <div className="flex flex-col gap-2">
              <span className="text-grayText text-lg font-semibold leading-[26px] -tracking-[0.2px]">
                Get to market faster
              </span>
              <p className="text-grayText text-sm leading-5 -tracking-[0.35px] m-0">
                With significantly lower costs and enhanced Web3 scalability
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 px-6 py-7 border-2 border-blue bg-white rounded-lg">
            <Image src={aim} width={56} height={56} alt="aim" />
            <div className="flex flex-col gap-2">
              <span className="text-grayText text-lg font-semibold leading-[26px] -tracking-[0.2px]">
                Focus on your value prop
              </span>
              <p className="text-grayText text-sm leading-5 -tracking-[0.35px] m-0">
                And leave basic blockchain dev tasks and operations to us
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 px-6 py-7 border border-whiteStroke bg-white rounded-lg">
            <Image src={extend} width={56} height={56} alt="extend" />
            <div className="flex flex-col gap-2">
              <span className="text-grayText text-lg font-semibold leading-[26px] -tracking-[0.2px]">
                Embrace Extensibility
              </span>
              <p className="text-grayText text-sm leading-5 -tracking-[0.35px] m-0">
                By interoperating with any public or private chain or adding
                custom
              </p>
            </div>
          </div>
        </div>

        <div className=" flex justify-end p-8 pr-0  md:order-2 lg:order-3 ">
          <div className=" flex items-center w-[280px] h-[325px]  lg:h-[500px] lg:w-[308px] ">
            <Image
              src="/functions.svg"
              alt="available functions"
              height={330}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
