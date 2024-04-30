'use client'
import Button from '@/components/Button'
import hamburger from '@/components/icons/hamburger.svg'
import logo from '@/components/icons/logo-white.svg'
import x from '@/components/icons/x.svg'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// const Navigation = () => {
//   return (
// ;<nav className="flex max-w-6xl fixed justify-between items-center    w-full px-8 xl:w-[1151px] min-h-11 top-6  ">
//   <Image priority src={logo} alt="Follow us on Twitter" />

//   <ul className="flex flex-row justify-between items-center p-0 gap-10 ">
//     <li className="text-white font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize">
//       <a href="#">Home</a>
//     </li>
//     <li className="text-white font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize">
//       <a href="#">Deploy</a>
//     </li>
//     <li className="text-white font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize">
//       <a href="#">Design</a>
//     </li>
//     <li className="text-white font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize">
//       <a href="#">Documentation</a>
//     </li>
//   </ul>
//   <a
//     className={
//       'bg-white text-blackLight w-fit font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize   whitespace-nowrap rounded-lg border gap-2 py-2.5 px-3 border-gray'
//     }
//     href="https://app.k3-labs.com/"
//   >
//     Launch app
//   </a>
// </nav>
//   )
// }

// export default Navigation

export const scrollIntoView = (id) => {
  if (id === 'home') {
    window.scrollTo(0, 0, 'smooth')
    return
  }

  const element = document.getElementById(id)
  const y = element.getBoundingClientRect().top + window.scrollY - 100

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
    <Disclosure as="nav" className="w-full fixed z-50">
      {({ open, close }) => (
        <div
          id="full-nav"
          className="flex flex-col z-50 fixed justify-between items-center w-full   "
          style={{
            backgroundColor: open || scrollY > 100 ? '#010101' : 'transparent',
            borderBottom: open || scrollY > 100 ? '1px solid #1A1A1A' : 'none'
          }}
        >
          <div className="h-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex h-16 justify-between items-center">
              <Image
                priority
                src={logo}
                className="w-20 md:w-32"
                alt="Follow us on Twitter"
              />

              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                <ul className="flex flex-row justify-between items-center p-0 gap-10 ">
                  <li className="text-white font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize">
                    <a href="#home" onClick={() => scrollIntoView('home')}>
                      Home
                    </a>
                  </li>
                  <li className="text-white font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize">
                    <a href="#deploy" onClick={() => scrollIntoView('deploy')}>
                      Deploy
                    </a>
                  </li>
                  <li className="text-white font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize">
                    <a href="#home" onClick={() => scrollIntoView('design')}>
                      Design
                    </a>
                  </li>
                  <li className="text-white font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize">
                    <a href="https://docs.k3-labs.com/introduction">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
              <a
                className={
                  'bg-white hidden md:block text-blackLight w-fit font-normal  text-[14px] leading-5 tracking-[-0.01em] capitalize   whitespace-nowrap rounded-lg border gap-2 py-2.5 px-3 border-gray'
                }
                href="https://app.k3-labs.com/"
              >
                Launch app
              </a>

              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Image
                      alt="close menu icon"
                      className="block h-8 w-8"
                      src={x}
                      aria-hidden="true"
                    />
                  ) : (
                    <Image
                      alt="hamburger menu icon"
                      className="block h-8 w-8"
                      src={hamburger}
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden mt-10 w-full gap-6 h-screen flex flex-col items-center">
            <Button
              className=" border-darkGray  w-[calc(100%-40px)] mx-auto  "
              onClick={() => {
                close()
                scrollIntoView('contact')
              }}
              style={{
                background:
                  'linear-gradient(171deg, rgba(255, 255, 255, 0.09) 36.08%, rgba(255, 255, 255, 0.072) 86.19%)'
              }}
            >
              Connect with us
            </Button>
            <ul className="bg-black  w-full flex flex-col justify-between items-center pb-12 gap-4 ">
              <li className="text-white flex button w-[calc(100%-40px)] border-darkGray border-b pb-2">
                <a
                  href="#home"
                  className="w-full"
                  onClick={() => {
                    close()
                    scrollIntoView('home')
                  }}
                >
                  Home
                </a>
              </li>
              <li className="text-white flex button w-[calc(100%-40px)] border-darkGray border-b pb-2">
                <a
                  href="#deploy"
                  className="w-full"
                  onClick={() => {
                    close()
                    scrollIntoView('deploy')
                  }}
                >
                  Deploy
                </a>
              </li>
              <li className="text-white flex button w-[calc(100%-40px)] border-darkGray border-b pb-2">
                <a
                  href="#design"
                  className="w-full"
                  onClick={() => {
                    close()
                    scrollIntoView('design')
                  }}
                >
                  Design
                </a>
              </li>
              <li className="text-white flex button w-[calc(100%-40px)] border-darkGray border-b pb-2">
                <a
                  href="https://docs.k3-labs.com/introduction"
                  className="w-full"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}
