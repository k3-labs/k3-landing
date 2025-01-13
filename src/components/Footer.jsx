'use client'

import { scrollIntoView } from '@/components/Navigation'
import Link from 'next/link'

// import logo from '@/components/icons/logo-white.svg'

const Footer = () => {
  return (
    <div className="w-full bg-[#FBFBFB]">
      <div className="flex w-full   py-9 px-6 flex-wrap  md:justify-between lg:justify-normal gap-8">
        <div className="flex flex-col gap-3 w-32 sm:w-40 ">
          <span className="text-blackLight text-sm font-medium leading-5 -tracking-[0.07px] pb-0.5">
            Product
          </span>
          <a
            className="text-grayText text-sm leading-5 -tracking-[0.07px] cursor-pointer "
            onClick={() => scrollIntoView('home')}
          >
            Home
          </a>
          <a
            className="text-grayText text-sm leading-5 -tracking-[0.07px] cursor-pointer "
            onClick={() => scrollIntoView('automate')}
          >
            Automate
          </a>
          <a
            className="text-grayText text-sm leading-5 -tracking-[0.07px] cursor-pointer "
            onClick={() => scrollIntoView('innovate')}
          >
            Innovate
          </a>
          <a
            className="text-grayText text-sm leading-5 -tracking-[0.07px] cursor-pointer "
            onClick={() => scrollIntoView('examples')}
          >
            Examples
          </a>
        </div>
        <div className="flex flex-col gap-3 w-32 sm:w-40 ">
          <span className="text-blackLight text-sm font-medium leading-5 -tracking-[0.07px] pb-0.5">
            Resources
          </span>
          <Link
            className="text-grayText text-sm leading-5 -tracking-[0.07px] cursor-pointer "
            href="/tos"
          >
            Terms
          </Link>
          <a
            href="https://k3-labs.gitbook.io"
            className="text-grayText text-sm leading-5 -tracking-[0.07px] "
          >
            Documentation
          </a>
        </div>
        <div className="flex flex-col gap-3 w-32 sm:w-40">
          <span className="text-blackLight text-sm font-medium leading-5 -tracking-[0.07px] pb-0.5">
            Social
          </span>
          <a
            className="text-grayText text-sm leading-5 -tracking-[0.07px] "
            href="https://t.me/k3labscoms"
          >
            Telegram
          </a>
          <a
            className="text-grayText text-sm leading-5 -tracking-[0.07px]  "
            href="https://twitter.com/k3_labs"
          >
            X
          </a>
          <a
            className="text-grayText text-sm leading-5 -tracking-[0.07px]  "
            href="https://github.com/k3-labs"
          >
            GitHub
          </a>
       
        </div>
      </div>
      <div className="flex flex-col border-t border-whiteStroke justify-center items-center p-6 lg:py-8 gap-2 md:flex-row md:justify-between ">
        <span className="text-grayText text-xs leading-[16.8px] -tracking-[0.12px]">
          © 2025 K3-Labs Ltd. All rights reserved.
        </span>
        <div className="flex items-center gap-6 justify-between w-full md:w-auto">
          {/* <span className="text-grayText text-xs ">Privacy Policy</span> */}
          <span className="text-grayText text-xs ">
            <Link href="/tos">Terms of Service</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
