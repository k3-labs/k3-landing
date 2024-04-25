import logo from '@/components/icons/logo-white.svg'
import facebook from '@/components/icons/socials/facebook.svg'
import github from '@/components/icons/socials/github.svg'
import linkedin from '@/components/icons/socials/linkedin.svg'
import twitter from '@/components/icons/socials/twitter.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="w-full bg-blackLight">
      <div className="py-12 px-16 flex  max-w-7xl   mx-auto  gap-16 bg-transparent">
        <div className="flex flex-col gap-8  w-80  ">
          <Image
            src={logo}
            alt="K3-Lab"
            width={120}
            height={44}
            className="py-4"
          />
          <p className="body-3">
            Easily design and deploy business workflows and applications that
            utilize the power of decentralized compute, storage, and execution.
          </p>
        </div>
        <div className="grid grid-cols-3 flex-grow">
          <div className="flex flex-col gap-4">
            <h4 className="button  text-gray">Product</h4>
            <ul className="flex flex-col gap-3">
              <li className="button-small">Home</li>
              <li className="button-small">Deploy</li>
              <li className="button-small">Design</li>
              <li className="button-small">Become a design partner</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="button text-gray">Social</h4>
            <ul className="flex flex-col gap-3">
              <li className="button-small">Twitter</li>
              <li className="button-small">LinkedIn</li>
              <li className="button-small">X</li>
              <li className="button-small">GitHub</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="button text-gray">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li className="button">Terms</li>
              <li className="button">Privacy</li>
              <li className="button-small">Documentation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" h-20 border-t  border-darkGray">
        <div className="px-16  max-w-7xl  h-full  mx-auto  flex  items-center justify-between ">
          <p className="button-small">© 2024 K3-Lab</p>
          <div className="flex gap-4 ">
            <Image
              src={twitter}
              width={16}
              height={16}
              alt="Follow us on Twitter"
            />
            <Image
              src={facebook}
              width={16}
              height={16}
              alt="Follow us on Facebook"
            />
            <Image
              src={linkedin}
              width={16}
              height={16}
              alt="Follow us on Linkedin"
            />
            <Image
              src={github}
              width={16}
              height={16}
              alt="Follow us on Github"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
