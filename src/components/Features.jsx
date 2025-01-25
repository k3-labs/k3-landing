'use client'
import Image from 'next/image'

import { Button } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import myImage from '../app/workflow-background.svg'
import autoClaimRewards from '../assets/auto-claim.svg'
import automateTrading from '../assets/automate-trading.svg'
import bridgeOffChainAndOnChain from '../assets/bridge.svg'
import cryptoBalanceReporting from '../assets/crypto-balance-reporting.svg'
import monitorLiquidityPools from '../assets/monitor-liquidity.svg'
import rule from '../assets/rule.svg'
import walletOperations from '../assets/wallet-operations.svg'

const Templates = {
  AutomateWalletOperations: {
    title: 'Automate Wallet Operations',
    description:
      'Monitor the balance on a specific wallet, and each time it falls below a given threshold initiate a fund transfer request from a pre-connected Operations wallet to top it off.',
    src: rule,
    template: walletOperations
  },
  AutomateTrading: {
    title: 'Automate Trading',
    description:
      'Automatically Buy or Sell crypto in the DeFi ecosystem through Uniswap when a target price is reached.',
    src: rule,
    template: automateTrading
  },
  AutoClaimRewards: {
    title: 'Auto Claim Rewards',
    description:
      'Automatically claim your liquidity provider rewards on Uniswap, eliminating the need for manual intervention and ensuring you never miss out on your earnings.',
    src: rule,
    template: autoClaimRewards
  },
  MonitorLiquidityPools: {
    title: 'Monitor Liquidity Pools',
    description:
      'Keep track of liquidity pools by monitoring large transfers in and out. Get instant alerts for significant liquidity changes, helping you stay informed and react promptly.',
    src: rule,
    template: monitorLiquidityPools
  },
  CryptoBalanceReporting: {
    title: 'Crypto Balance Reporting',
    description:
      "Generate a scheduled report showing a given wallet's total current crypto balance and its total market value at the time the report is created.",
    src: rule,
    template: cryptoBalanceReporting
  },
  BridgeOffChainAndOnChain: {
    title: 'Bridge Off-Chain & On-Chain',
    description:
      'Streamline data interoperability by continually reading blockchain data and passing it through to your internal API for use downstream.',
    src: rule,
    template: bridgeOffChainAndOnChain
  }
}

const Features = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(
    Templates.AutomateWalletOperations
  )
  const [manual, setManual] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const keys = Object.entries(Templates)

      setSelectedTemplate((template) => {
        const index = keys.findIndex((t) => {
          return t[1].title === template.title
        })
        if (index === keys.length - 1) {
          return Templates[keys[0][0]]
        }
        return Templates[keys[index + 1][0]]
      })
    }, 5000)
    if (manual) {
      clearInterval(interval)
    }
    return () => clearInterval(interval) // Cleanup function to clear interval
  }, [manual])

  return (
    <div className="w-full  border-b border-b-whiteStroke  ">
      <div className="flex flex-col gap-5  mx-auto  ">
        <div className="pt-[50px] lg:pt-[100px] flex justify-between px-5 items-center">
          <h2
            className="text-xs font-semibold leading-[14px] text-gray uppercase tracking-[0.72px]"
            id="automate"
          >
            [01]
          </h2>
          <span className="text-xs font-semibold leading-[14px] text-gray uppercase tracking-[0.72px]">
            Design and deploy
          </span>
        </div>
        <div className="relative h-[2px] w-full">
          <Image src="/dashed-line.svg" alt="dashed line" fill />
        </div>
      </div>
      <div className="flex justify-center  border-b border-whiteStroke flex-col p-12 gap-10 md:px-16 lg:py-[75px] lg:px-[148px] lg:h-[376px]  ">
        <a
          href="#"
          className="bg-white border border-blue rounded-lg  leading-5 h-9 px-2  flex items-center text-black text-[14px] font-medium w-fit"
        >
          Automate
        </a>
        <p className="m-0 text-[#8F99A8] max-w-[640px] text-xl lg:text-3xl font-medium leading-[30px] lg:leading-10 -tracking-[0.4px]">
          <span className="text-blackLight">
            A simple, template driven approach to
          </span>{' '}
          building <span className="text-blackLight">Web3</span> workflows that
          read and write between on and off-chain data sources, and instantly
          trigger processes or alerts.
        </p>
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col order-1 justify-between p-8 lg:h-[550px] lg:min-w-[300px] lg:w-[300px]  ">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold leading-[26px] -tracking-[0.2px] text-black">
              {selectedTemplate.title}
            </span>
            <p className="m-0 text-base font-medium leading-6 -tracking-[0.16px] text-gray">
              {selectedTemplate.description}
            </p>
          </div>
          <a
            href="https://app.k3-labs.com/"
            className="bg-blackLight border border-darkGray rounded-lg  leading-5 h-10 py-2 px-[15px]  items-center text-[#F3F4F6] text-[15px] font-medium hidden md:flex w-fit"
          >
            Try Now
          </a>
        </div>
        <div
          className="md:border-l lg:border-x  my-8 md:my-0 mx-2 md:mx-0 order-2 lg:col-span-2 md:row-span-2 lg:row-span-1 flex justify-center border-whiteStroke relative h-[400px] md:h-[550px] md:w-full"
          style={{
            backgroundImage: `url(${myImage.src})`
          }}
        >
          <Image
            src={selectedTemplate.template}
            alt="icon"
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
            unoptimized
            style={{ width: 'auto', height: '100%' }}
          />
        </div>

        <div
          className="flex flex-wrap lg:flex-col order-[0] md:order-3 p-8 lg:h-[550px] lg:min-w-[300px] lg:w-[300px] gap-2 "
          id="examples"
        >
          {Object.entries(Templates).map(([key, value]) => (
            <div
              key={key}
              className={twMerge(
                'rounded-lg p-px h-[50px] border border-[#E4E7EC] from-blue to-transparent',
                selectedTemplate === value &&
                  'bg-blue md:bg-transparent  bg-gradient-to-bl'
              )}
            >
              <Button
                className={twMerge(
                  'text-blackLight text-sm font-medium leading-5 items-center hover:bg-whiteSurface relative flex gap-2 h-[46px] w-fit lg:w-[235px] p-[9px]  rounded-[7px]  bg-white ',
                  selectedTemplate === value && 'text-blue md:text-blackLight '
                )}
                onClick={() => {
                  setManual(true)
                  setSelectedTemplate(value)
                }}
              >
                <Image
                  src={value.src}
                  alt="icon"
                  width={16}
                  height={16}
                  className=" hidden md:block"
                />
                {value.title}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
