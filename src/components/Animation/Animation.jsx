'use client'

import { useEffect } from 'react'
import './animation.css'

const Animation = () => {
  useEffect(() => {
    const maskOne = document.querySelector('.mask-one')
    const maskTwo = document.querySelector('.mask-two')
    let intervalOne, intervalTwo, timeoutId

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
    }, 3000) // Change this to the desired duration for maskTwo
    timeoutId = setTimeout(() => {
      intervalOne = setInterval(() => {
        moveOne()
      }, 3000) // Change this to the desired duration for maskOne
    }, 1500) // Delay the start of intervalOne by 1 second

    // Clear intervals on component unmount
    return () => {
      clearInterval(intervalOne)
      clearInterval(intervalTwo)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <h2 className=" flex w-full   mx-auto  text-white">
        <div className="mask mask-one  justify-end">
          <span data-show>Blockchain</span>
          <span>Deployment</span>
          <span>Decentralization</span>
          <span>Web 3.0</span>
          <span>Blockchain</span>
        </div>
        .
        <span className="text-blue">
          {''}Made{''}
        </span>
        .
        <div className="mask mask-two text-start">
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
