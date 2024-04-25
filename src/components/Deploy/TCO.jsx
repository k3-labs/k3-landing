'use client'
import { motion } from 'framer-motion'

const TCO = () => {
  return (
    <div className="text-center">
      <h5 className="subtitle-2  mb-3">TCO</h5>
      <div className="flex relative justify-between gap-6 w-[104px] ">
        <div className="flex flex-col items-center gap-1 w-10">
          <div className="relative w-[26px] max-w-[26px] h-20 bg-blackLight rounded-[4.36px]  flex-grow">
            <motion.div
              className="w-full absolute bottom-0  "
              initial={{
                height: 0
              }}
              animate={{
                height: '70%'
              }}
              transition={{ duration: 2.5 }}
              style={{
                background:
                  'linear-gradient(183.53deg, #0070F3 -6.14%, rgba(0, 163, 255, 0.32) 88.6%)'
              }}
            />
          </div>
          <p className="caption-2">In house</p>
        </div>
        <div className="absolute w-[66px]  border-t-[1.09px] border-r-[1.09px] top-6 h-8 z-10  left-1/2 transform -translate-x-1/2 rounded-tr-sm border-yellow flex justify-center ">
          <div className="h-[8.71px]  absolute -bottom-[4.35px]  -right-[4.9px]  w-[8.71px] rounded-full flex justify-center items-center bg-yellow/25">
            <div className="w-[4.36px] h-[4.36px]   rounded-full  bg-yellow z-20" />
          </div>
          <div className="h-[8.71px]  absolute -left-[4.35px]  -top-[4.9px]  w-[8.71px] rounded-full flex justify-center items-center bg-yellow/25">
            <div className="w-[4.36px] h-[4.36px]   rounded-full  bg-yellow z-20" />
          </div>
        </div>
        {/* <div className="absolute w-[66px]  border-t-[1.09px] border-r-[1.09px] top-6 h-8 z-10  left-1/2 transform -translate-x-1/2 rounded-tr-sm border-blue/60 flex justify-center " /> */}

        <div className="flex flex-col items-center gap-1 w-10">
          <div className="relative w-[26px] max-w-[26px] h-20 bg-blackLight rounded-[4.36px] flex-grow">
            <motion.div
              className="w-full absolute bottom-0  "
              initial={{
                height: 0
              }}
              animate={{
                height: '30%'
              }}
              transition={{ duration: 1 }}
              style={{
                background:
                  'linear-gradient(183.53deg, #0070F3 -6.14%, rgba(0, 163, 255, 0.32) 88.6%)'
              }}
            />
          </div>
          <p className="relative  caption-2">K3-Labs</p>
        </div>
      </div>
    </div>
  )
}

export default TCO
