'use client'
import hamburger from '@/components/icons/hamburger.svg'
import logo from '@/components/icons/logo-black.svg'
import x from '@/components/icons/x.svg'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const scrollIntoView = (id) => {
  if (id === 'home') {
    window.scrollTo(0, 0, 'smooth')
    return
  }

  const element = document.getElementById(id)
  const rect = element?.getBoundingClientRect()
  if (!rect) return

  const y = rect.top + window.scrollY - 100
  console.log(y)

  window.scrollTo({ top: y, behavior: 'smooth' })
}

// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { PlusIcon } from '@heroicons/react/20/solid'

export default function Example() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure as="nav" className="w-screen h-fit fixed inset-0 z-50 ">
      {({ open, close }) => (
        <>
          <div className="w-full fixed  border-b border-whiteStroke">
            <nav className=" bg-white h-[72px] py-[18px]  max-w-[1390px] mx-auto  px-6 flex justify-between items-center  ">
              <Image
                priority
                src={logo}
                alt="K3 Labs logo"
                className="cursor-pointer"
                onClick={() => scrollIntoView('home')}
              />
              <div className="hidden md:flex md:items-center lg:grow lg:justify-between lg:px-[50px] ">
                <div className=" flex items-center   ">
                  <a
                    className="cursor-pointer text-[#2E3238] leading-5 p-2 text-[15px] font-medium flex items-center"
                    onClick={() => scrollIntoView('automate')}
                  >
                    Automate
                  </a>
                  <a
                    className="cursor-pointer text-[#2E3238] leading-5 p-2 text-[15px] font-medium flex items-center"
                    onClick={() => scrollIntoView('innovate')}
                  >
                    Innovate
                  </a>
                  <a
                    className="cursor-pointer text-[#2E3238] leading-5 p-2 text-[15px] font-medium flex items-center"
                    onClick={() => scrollIntoView('examples')}
                  >
                    Examples
                  </a>
                </div>
                <div className=" flex items-center  ">
                  <a
                    className="cursor-pointer text-[#2E3238] leading-5 p-2 text-[15px] font-medium flex items-center"
                    onClick={() => scrollIntoView('connect')}
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://k3-labs.gitbook.io"
                    className="cursor-pointer text-[#2E3238] leading-5 p-2 text-[15px] font-medium flex items-center"
                  >
                    Docs
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="https://app.k3-labs.com/"
                  className={twMerge(
                    'bg-blackLight border border-darkGray rounded-lg  leading-5 h-9 py-2 px-[15px] flex items-center text-[#F3F4F6] text-[15px] font-medium ',
                    open && 'hidden'
                  )}
                >
                  Automate Now
                </a>
                <DisclosureButton className="w-4 h-4 md:hidden">
                  {!open ? (
                    <Image src={hamburger} alt="Menu" />
                  ) : (
                    <Image src={x} alt="Close" />
                  )}
                </DisclosureButton>
              </div>
            </nav>
          </div>
          <DisclosurePanel className="  mt-[72px] w-full h-screen ">
            <div className="flex flex-col gap-2 pb-4 items-start justify-center bg-white ">
              <a
                className="w-full py-4 flex items-center justify-center text-xl leading-none font-medium text-[#2E3238]"
                onClick={() => {
                  scrollIntoView('automate')
                  close()
                }}
              >
                Automate
              </a>
              <a
                className="w-full py-4 flex items-center justify-center text-xl leading-none font-medium text-[#2E3238]"
                onClick={() => {
                  scrollIntoView('innovate')
                  close()
                }}
              >
                Innovate
              </a>
              <a
                className="w-full py-4 flex items-center justify-center text-xl leading-none font-medium text-[#2E3238]"
                onClick={() => {
                  scrollIntoView('examples')
                  close()
                }}
              >
                Examples
              </a>
              <a
                className="w-full py-4 flex items-center justify-center text-xl leading-none font-medium text-[#2E3238]"
                onClick={() => {
                  scrollIntoView('connect')
                  close()
                }}
              >
                Contact Us
              </a>
              <a
                className="w-full py-4 flex items-center justify-center text-xl leading-none font-medium text-[#2E3238]"
                href="https://k3-labs.gitbook.io"
              >
                Docs
              </a>
            </div>
            <div
              className="h-full bg-black bg-opacity-20"
              style={{
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)'
              }}
            />
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
