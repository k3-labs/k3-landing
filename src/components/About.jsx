import Button from '@/components/Button'
import Image from 'next/image'

import securityIcon from './icons/security-icon.svg'
import turnkeyIcon from './icons/turnkey-icon.svg'
import web2Icon from './icons/web2-icon.svg'

const About = () => {
  return (
    <div className="flex flex-col rounded-2xl bg-blackLight max-w-6xl mx-20">
      <div className="flex justify-between items-center py-10 px-12">
        <h4 className="text-gray">
          <span className="text-white">Launch to production</span> in{' '}
          <span className="text-white">hours</span> not days/weeks/months and
          radically
          <br />
          reduce direct and indirect costs versus cloud-based services
        </h4>
        <Button className="bg-white text-blackLight">Demo App</Button>
      </div>
      <div className="grid grid-cols-3 border-t border-darkGray">
        <div className="flex flex-col py-8 px-12 border-r border-darkGray gap-4">
          <h5 className="subtitle">Turnkey middleware for Web3</h5>
          <Image src={turnkeyIcon} alt="icon" width={32} height={32} />

          <p className="body-3 w-5/6">
            Integrate any decentralized middleware service, or build your own,
            using our enterprise-grade SDKs or point and click web-forms, all
            backed by SaaS
          </p>
        </div>
        <div className="flex flex-col py-8 px-12 gap-4">
          <h5 className="subtitle">Built on Shared Security</h5>
          <Image src={securityIcon} alt="icon" width={32} height={32} />

          <p className="body-3 w-5/6">
            Web3 app development desperately needs better middleware – shared
            security allows for pay-as-you-go, validation on-demand, radically
            lowering costs
          </p>
        </div>
        <div className="flex flex-col   py-8 px-12 border-l border-darkGray gap-4">
          <h5 className="subtitle">Built with Web2 in mind</h5>
          <Image src={web2Icon} alt="icon" width={32} height={32} />

          <p className="body-3 w-5/6">
            No need to learn Solidity, study node ops procedures, or worry about
            gas fees. Use simple point and click deployment workflows instead
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
