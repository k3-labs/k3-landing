import Image from 'next/image'
import salesIcon from '../assets/sales.svg'
import supportIcon from '../assets/support.svg'
import telegram from '../assets/telegram.svg'
import twitter from '../assets/twitter.svg'

const Connect = () => {
  return (
    <div>
      <div className="py-12 px-6 md:px-16 lg:px-5 border-y lg:border-b-0 border-whiteStroke">
        <h2
          className="text-[28px] font-semibold leading-[40px]  text-grayText -tracking-[0.4px]"
          id="connect"
        >
          Connect with us
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-6 md:px-16 md:py-12 lg:px-5">
        <div className="flex flex-col gap-10 px-6 py-7 border border-whiteStroke bg-white rounded-lg ">
          <Image src={salesIcon} width={56} height={56} alt="sales" />
          <div className="flex flex-col gap-2">
            <span className="text-grayText text-lg font-semibold leading-[26px] -tracking-[0.2px]">
              Chat To Sales
            </span>
            <p className="text-grayText text-sm leading-5 -tracking-[0.35px] m-0">
              Speak to our team.
            </p>
          </div>
          <a
            href="mailto: sales@k3-labs.com"
            className="text-sm font-semibold leading-5 -tracking-[0.35px] text-grayText underline"
          >
            sales@k3-labs.com
          </a>
        </div>
        <div className="flex flex-col gap-10 px-6 py-7 border border-whiteStroke bg-white rounded-lg ">
          <Image src={supportIcon} width={56} height={56} alt="support" />
          <div className="flex flex-col gap-2">
            <span className="text-grayText text-lg font-semibold leading-[26px] -tracking-[0.2px]">
              Chat To Support
            </span>
            <p className="text-grayText text-sm leading-5 -tracking-[0.35px] m-0">
              We&apos;re here to help you.
            </p>
          </div>
          <a
            href="mailto: hello@k3-labs.com"
            className="text-sm font-semibold leading-5 -tracking-[0.35px] text-grayText underline"
          >
            hello@k3-labs.com
          </a>
        </div>
        <div className="flex flex-col gap-10 px-6 py-7 border border-whiteStroke bg-white rounded-lg ">
          <Image src={twitter} width={56} height={56} alt="twitter" />
          <div className="flex flex-col gap-2">
            <span className="text-grayText text-lg font-semibold leading-[26px] -tracking-[0.2px]">
              Follow us on X
            </span>
            <p className="text-grayText text-sm leading-5 -tracking-[0.35px] m-0">
              To stay up to date on our latest news.
            </p>
          </div>
          <a
            href="https://x.com/k3_labs"
            className="text-sm font-semibold leading-5 -tracking-[0.35px] text-grayText underline"
          >
            Magic Link
          </a>
        </div>
        <div className="flex flex-col gap-10 px-6 py-7 border border-whiteStroke bg-white rounded-lg ">
          <Image src={telegram} width={56} height={56} alt="telegram" />
          <div className="flex flex-col gap-2">
            <span className="text-grayText text-lg font-semibold leading-[26px] -tracking-[0.2px]">
              Join Our Community
            </span>
            <p className="text-grayText text-sm leading-5 -tracking-[0.35px] m-0">
              Our team is here to help.
            </p>
          </div>
          <a
            href="https://t.me/k3labscoms"
            className="text-sm font-semibold leading-5 -tracking-[0.35px] text-grayText underline"
          >
            Magic Link
          </a>
        </div>
      </div>
    </div>
  )
}

export default Connect
