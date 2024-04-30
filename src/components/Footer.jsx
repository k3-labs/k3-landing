'use client'

import { scrollIntoView } from '@/components/Navigation'
import arrowUp from '@/components/icons/arrow-up.svg'
import logo from '@/components/icons/logo-white.svg'
import github from '@/components/icons/socials/github.svg'
import telegram from '@/components/icons/socials/telegram.svg'
import twitter from '@/components/icons/socials/twitter.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="w-full bg-blackLight">
      <div className="md:py-12 md:px-16  flex flex-col md:flex-row  max-w-7xl   mx-auto  gap-16 bg-transparent">
        <div className="flex py-6 px-5 md:p-0 flex-col gap-8  md:w-80  ">
          <Image src={logo} alt="K3-Lab" className="py-4 w-20 md:w-32" />
          <p className="body-3 text-[12px] md:text-[14px]">
            Easily design and deploy business workflows and applications that
            utilize the power of decentralized compute, storage, and execution.
          </p>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 flex-grow">
          <div className="flex flex-col gap-4">
            <h4 className="button  text-gray">Product</h4>
            <ul className="flex flex-col gap-3">
              <li className="button-small">
                <a href="#home" onClick={() => scrollIntoView('home')}>
                  Home
                </a>
              </li>
              <li className="button-small">
                <a href="#deploy" onClick={() => scrollIntoView('deploy')}>
                  Deploy
                </a>
              </li>
              <li className="button-small">
                <a href="#design" onClick={() => scrollIntoView('design')}>
                  Design
                </a>
              </li>
              <li className="button-small">
                <a href="#home" onClick={() => scrollIntoView('contact')}>
                  Become a design partner
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="button text-gray">Social</h4>
            <ul className="flex flex-col gap-3">
              <li className="button-small">
                <a href="https://t.me/k3labscoms">Telegram</a>
              </li>
              <li className="button-small">
                <a href="https://twitter.com/k3_labs">X</a>
              </li>
              <li className="button-small">
                <a href="https://github.com/k3-labs">GitHub</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="button text-gray">Resources</h4>
            <ul className="flex flex-col gap-3">
              <li className="button-small">Terms</li>
              <li className="button-small">Privacy</li>
              <li className="button-small">
                <a href="https://docs.k3-labs.com/introduction">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" md:hidden border-y border-darkGray  ">
          <details className="px-5 py-3 group">
            <summary className="flex items-center justify-between cursor-pointer">
              <h5
                className="button   width={120}
            height={44} text-gray"
              >
                Product
              </h5>
              <Image
                src={arrowUp}
                alt="arrow"
                className="h-4 w-4 transform rotate-180 group-open:rotate-0 "
              />
            </summary>

            <ul className="flex flex-col gap-3 pt-2">
              <li className="button-small">
                <a href="#home" onClick={() => scrollIntoView('home')}>
                  Home
                </a>
              </li>
              <li className="button-small">
                <a href="#deploy" onClick={() => scrollIntoView('deploy')}>
                  Deploy
                </a>
              </li>
              <li className="button-small">
                <a href="#design" onClick={() => scrollIntoView('design')}>
                  Design
                </a>
              </li>
              <li className="button-small">
                <a href="#contact" onClick={() => scrollIntoView('contact')}>
                  Become a design partner
                </a>
              </li>
            </ul>
          </details>
          <details className="px-5 py-3 group">
            <summary className="flex items-center justify-between cursor-pointer">
              <h5 className="button text-gray">Social</h5>
              <Image
                src={arrowUp}
                alt="arrow"
                className="h-4 w-4 transform rotate-180 group-open:rotate-0 "
              />
            </summary>

            <ul className="flex flex-col gap-3 pt-2">
              <li className="button-small">
                <a href="https://t.me/k3labscoms">Telegram</a>
              </li>
              <li className="button-small">
                <a href="https://twitter.com/k3_labs">X</a>
              </li>
              <li className="button-small">
                <a href="https://github.com/k3-labs">GitHub</a>
              </li>
            </ul>
          </details>
          <details className="px-5 py-3 group">
            <summary className="flex items-center justify-between cursor-pointer">
              <h5 className="button text-gray">Resources</h5>
              <Image
                src={arrowUp}
                alt="arrow"
                className="h-4 w-4 transform rotate-180 group-open:rotate-0 "
              />
            </summary>

            <ul className="flex flex-col gap-3 pt-2">
              <li className="button-small">Terms</li>
              <li className="button-small">Privacy</li>
              <li className="button-small">
                <a href="https://docs.k3-labs.com/introduction">
                  Documentation
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className=" h-20 border-t  border-darkGray">
        <div className="  px-5 md:px-16  max-w-7xl  h-full  mx-auto  flex  items-center justify-between ">
          <p className="button-small">© 2024 K3 Labs</p>
          <div className="flex gap-4 ">
            <a href="https://twitter.com/k3_labs">
              <Image
                src={twitter}
                width={16}
                height={16}
                alt="Follow us on X"
              />
            </a>
            <a href="https://t.me/k3labscoms">
              <Image
                src={telegram}
                width={16}
                height={16}
                alt="Follow us on Telegram"
              />
            </a>

            <a href="https://github.com/k3-labs">
              <Image
                src={github}
                width={16}
                height={16}
                alt="Follow us on Github"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
