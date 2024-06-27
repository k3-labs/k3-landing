'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import eclipse from '../app/eclipse.svg'
import vector from '../app/vector-globe.svg'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('none')

  const handleSubmit = async (e) => {
    setIsLoading(true)
    setResult('none')
    try {
      e.preventDefault()
      const form = e.target
      const formData = new FormData(form)
      await fetch('https://k3-backend-bcg2tu5n4q-uc.a.run.app/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      })

      setIsLoading(false)
      setResult('success')
    } catch (error) {
      console.log(error)
      setResult('error')
      setIsLoading(false)
    }
  }
  return (
    <div className="mx-5 md:mx-0 w-[calc(100%-40px)] md:w-full  relative rounded-2xl overflow-hidden border border-darkGray max-w-6xl  ">
      <div className=" invisible" id="contact-nav" />

      <div className="flex flex-col gap-12 md:pl-8 md:py-12 pb-10 pt-16 px-4 relative z-20 ">
        <div className="flex flex-col justify-between gap-4 w-full">
          <h3 id="contact">Connect with us</h3>
          <p className="body-2 text-[14px] md:text-[16px] w-5/6">
            Ask us about whether your workflow can be modeled in K3
          </p>
        </div>
        <form
          className="flex flex-col justify-between gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="subtitle-2 text-[14px] md:text-[16px]"
            >
              Your Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="from"
                required
                id="email"
                className="block body-3 text-[12px] md:text-[14px] w-full max-w-96 bg-transparent h-[48px] rounded-md border border-darkGray p-4  "
                placeholder="Email"
              />
            </div>
          </div>{' '}
          <div>
            <label
              htmlFor="email"
              className="subtitle-2 text-[14px] md:text-[16px]"
            >
              How we can help you?
            </label>
            <div className="mt-2">
              <textarea
                type="textarea"
                name="text"
                required
                id="email"
                className=" body-3 text-[12px] md:text-[14px] w-full  max-w-96 min-h-[136px] bg-transparent rounded-md border border-darkGray p-4  "
                placeholder="More information"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button
              disabled={isLoading}
              className={twMerge(
                'bg-blue self-center md:self-start border-none py-3 px-4 hover:bg-blue/80',
                isLoading && 'animate-pulse cursor-not-allowed'
              )}
            >
              {isLoading ? 'Sending...' : 'Submit form'}
            </Button>
            {result === 'success' && (
              <p className="text-green">Your message has been sent</p>
            )}
            {result === 'error' && (
              <p className="text-red">An error occured, please try again</p>
            )}
          </div>
        </form>
      </div>
      <div
        className="w-full h-full md:h-[730px] md:w-[520px] absolute left-28 md:left-auto  md:-right-[70px] -top-64 md:top-[0px] opacity-80  flex-grow"
        style={{
          backgroundImage: `url(${vector.src})`,
          backgroundRepeat: 'no-repeat'
          // backgroundSize: 'cover'
        }}
      />

      <Image
        src={eclipse}
        alt="eclipse"
        width={420}
        height={400}
        className="absolute opacity-40 hidden md:block md:bottom-[50px] md:left-[730px] "
      />
    </div>
  )
}

export default Contact
