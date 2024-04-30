import Image from 'next/image'

import securityIcon from './icons/security-icon.svg'
import turnkeyIcon from './icons/turnkey-icon.svg'
import web2Icon from './icons/web2-icon.svg'

const About = () => {
  return (
    <div className="mx-5  max-w-6xl md:mx-20 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-darkGray  ">
        <div className="flex justify-between items-center md:col-span-12 p-4 md:py-8 md:px-6">
          <h4 className="text-[16px] md:text-[28px] text-gray">
            <span className="text-white">Launch to production</span> in{' '}
            <span className="text-white">hours</span> not days/weeks/months and
            radically
            <br />
            reduce direct and indirect costs versus cloud-based services
          </h4>

          <a
            className={
              'hidden md:block bg-white text-blackLight w-fit font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize   whitespace-nowrap rounded-lg border gap-2 py-2.5 px-3 border-gray'
            }
            href="https://app.k3-labs.com/"
          >
            Launch app
          </a>
        </div>
        {/* <div className="grid grid-cols-3 border-t border-darkGray"> */}
        <div className="flex flex-col p-4 md:p-6 border-t md:border-r border-darkGray gap-4">
          <h5 className="text-[14px] md:text-[18px]  subtitle">
            Turnkey middleware for Web3
          </h5>
          <Image src={turnkeyIcon} alt="icon" width={32} height={32} />

          <p className="body-3 text-[12px] md:text-[14px]">
            {' '}
            Integrate any decentralized middleware service, or build your own,
            using our enterprise-grade SDKs or point and click web-forms, all
            backed by SaaS
          </p>
        </div>
        <div className="flex flex-col p-4 md:p-6 border-t border-darkGray  gap-4">
          <h5 className="text-[14px] md:text-[18px]  subtitle">
            Built on Shared Security
          </h5>
          <Image src={securityIcon} alt="icon" width={32} height={32} />

          <p className="body-3 text-[12px] md:text-[14px]">
            {' '}
            Web3 app development desperately needs better middleware – shared
            security allows for pay-as-you-go, validation on-demand, radically
            lowering costs
          </p>
        </div>
        <div className="flex flex-col  p-4 md:p-6 border-t md:border-l border-darkGray gap-4">
          <h5 className="text-[14px] md:text-[18px] subtitle">
            Built with Web2 in mind
          </h5>
          <Image src={web2Icon} alt="icon" width={32} height={32} />

          <p className="body-3 text-[12px] md:text-[14px]">
            No need to learn Solidity, study node ops procedures, or worry about
            gas fees. Use simple point and click deployment workflows instead
          </p>
        </div>
      </div>
      {/* <a
        className={
          'md:hidden bg-white text-blackLight w-fit font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize   whitespace-nowrap rounded-lg border gap-2 py-2.5 px-3 mt-6 border-gray'
        }
        href="https://app.k3-labs.com/"
      >
        Launch app
      </a> */}
    </div>
    // </div>
  )
}

export default About
