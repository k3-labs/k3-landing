'use client'

import { useEffect } from 'react'
import './animation.css'

const Animation = () => {
  useEffect(() => {
    const maskOne = document.querySelector('.mask-one')
    const maskTwo = document.querySelector('.mask-two')
    let intervalOne, intervalTwo, timeoutId

    const setIntervals = () => {
      function moveTwo() {
        const show = maskTwo.querySelector('span[data-show]')
        const next = show.nextElementSibling || maskTwo.firstElementChild
        const up = document.querySelector('span[data-up]')

        up?.removeAttribute('data-up')
        show.removeAttribute('data-show')
        show.setAttribute('data-up', '')
        next.setAttribute('data-show', '')
      }
      function moveOne() {
        const show = maskOne.querySelector('span[data-show]')
        const next = show.nextElementSibling || maskOne.firstElementChild
        const up = document.querySelector('span[data-up]')

        up?.removeAttribute('data-up')
        show.removeAttribute('data-show')
        show.setAttribute('data-up', '')
        next.setAttribute('data-show', '')
      }
      intervalTwo = setInterval(() => {
        moveTwo()
      }, 3000)
      timeoutId = setTimeout(() => {
        intervalOne = setInterval(() => {
          moveOne()
        }, 3000) //
      }, 1500) // Delay the start of intervalOne by 1 second
    }

    setIntervals()

    const resetInterval = setInterval(() => {
      clearInterval(intervalOne)
      clearInterval(intervalTwo)
      clearTimeout(timeoutId)

      setIntervals()
    }, 16500)
    // Clear intervals on component unmount
    return () => {
      clearInterval(intervalOne)
      clearInterval(intervalTwo)
      clearTimeout(timeoutId)
      clearInterval(resetInterval)
    }
  }, [])

  return (
    <>
      <div className="mx-auto md:hidden w-full max-w-7xl  ">
        <h2 className="  flex flex-col items-center text-[40px] gap-2    text-white bottom-20">
          Blockchain.
          <div>
            <span className="text-blue"> Made</span>.Simple.
          </div>
        </h2>
      </div>
      <h2 className=" hidden md:flex  w-full items-center justify-center  mx-auto  text-white">
        <div className="mask mask-one items-center justify-end">
          <span data-show>Blockchain</span>
          <span>Deployment</span>
          <span>Decentralization</span>
          <span>Web 3.0</span>
        </div>
        .
        <span className="text-blue pl-2 h-[77px]">
          {''}Made{''}
        </span>
        .
        <div className="pl-2 mask mask-two items-center text-start">
          <span data-show>Simple</span>
          <span>Inexpensive</span>
          <span>Faster</span>
          <span>Efficient</span>
          <span>Invisible</span>
        </div>
      </h2>
    </>
  )
}

export default Animation
