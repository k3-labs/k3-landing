'use client'
import { motion } from 'framer-motion'

const TimeToMarket = () => {
  return (
    <div>
      <h5 className="subtitle-2  mb-3">Time to market</h5>
      <div className="flex justify-between gap-6 ">
        <div className="flex flex-col items-center gap-1">
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
                  'linear-gradient(180deg, #008375 0%, rgba(0, 131, 117, 0) 118.18%)'
              }}
            />
          </div>
          <p className="caption-2">In house</p>
        </div>
        <div className="flex flex-col items-center gap-1">
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
                  'linear-gradient(180deg, #008375 0%, rgba(0, 131, 117, 0) 118.18%)'
              }}
            />
          </div>
          <p className="relative  caption-2">K3-Labs</p>
        </div>
      </div>
    </div>
  )
}

export default TimeToMarket
