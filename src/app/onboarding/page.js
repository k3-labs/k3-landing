'use client'

import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Image from 'next/image'
import alertIcon from '../../components/icons/alert.svg'
import copyIcon from '../../components/icons/copy.svg'
import hashtagIcon from '../../components/icons/hashtag.svg'

const text = {
  1: 'docker pull k3official/k3-labs-avs-operator:latest',
  2: `L1_RPC= # Your Holesky RPC
L2_RPC= # Your AMOY RPC 

PRIVATE_KEY= # Operator private key

# You can leave the below values as is.

L1_CHAIN=17000
L2_CHAIN=80002

PINATA_API_KEY=d358585196381e27025f
PINATA_SECRET_API_KEY=27980e9073bceed412ba702dd4a4f18e0ee716b27ba800da3674323e09c32e3c

TASK_PERFORMER=0x3c7a1a9c769009D21fe2FCfb08c7334919F641fe 


ATTESTATION_CENTER_ADDRESS=0x1902fF411F388C5ae4555260E25B9d43288f5FaE
OTHENTIC_REGISTRY_ADDRESS=0x41994741eD86Ec48e9578d0f64839E3F546466Fa
AVS_GOVERNANCE_ADDRESS=0x2662e4774fbF5dEE8cDDAC2b0B17E8B4C458300a

IPFS_HOST=https://gateway.pinata.cloud/ipfs/
IPFS_API=https://api.pinata.cloud
IPFS_JWT=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmNjA0ZWQxZi0zMzI0LTQ2OTUtYjE0Yy1lOGIxNTZkZTk2ZmIiLCJlbWFpbCI6Imhhc3NhYW4uYWhtZWRAazMtbGFicy5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZDM1ODU4NTE5NjM4MWUyNzAyNWYiLCJzY29wZWRLZXlTZWNyZXQiOiIyNzk4MGU5MDczYmNlZWQ0MTJiYTcwMmRkNGE0ZjE4ZTBlZTcxNmIyN2JhODAwZGEzNjc0MzIzZTA5YzMyZTNjIiwiaWF0IjoxNzE1MTQ5MzQ1fQ.Va5CCTPTLMRagz2hTDwEjBbeIJSB57Q7jsVk00AYkds


OTHENTIC_BOOTSTRAP_ID=12D3KooWBNFG1QjuF3UKAKvqhdXcxh9iBmj88cM5eU2EK5Pa91KB
OTHENTIC_BOOTSTRAP_SEED=97a64de0fb18532d4ce56fb35b730aedec993032b533f783b04c9175d465d9bf

APP_ID=1234

OTHENTIC_CLIENT_RPC_ADDRESS=http://34.133.156.140:8545
OTHENTIC_CLIENT_IP=34.133.156.140
OTHENTIC_AGGREGATOR_P2P_PORT=9876

AVS_WEBAPI_URL=http://localhost

AVS_WEBAPI_PORT=4002
PERFORMER_PORT=3000
AGGREGATOR_PORT=8000

ST_ETH_CONTRACT_ADDRESS=0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034
ST_ETH_STAKE_AMOUNT=10000000000000000
EL_STRATEGY_MANAGER_ADDRESS=0xA744429bf286789225308a81A5a4b8049562A362
EL_DELETEGATION_MANAGER_ADDRESS=0xA44151489861Fe9e3055d95adC98FbD462B948e7`,
  3: 'docker run --env-file .env k3official/k3-labs-avs-operator register',
  4: 'docker run --env-file .env --network host  k3official/k3-labs-avs-operator attester',
  5: 'docker run --env-file .env --network host  k3official/k3-labs-avs-operator performer'
}
const copy = (id) => {
  navigator.clipboard.writeText(text[id])
}

export default function Onboarding() {
  return (
    <main className=" overflow-x-hidden bg-transparent text-white  flex min-h-screen w-full md:w-[calc(100vw-12px]  flex-col items-center gap-y-16 md:gap-y-32 md:px-20  ">
      <Navigation />
      <div className=" w-full  pt-20 flex flex-col  grow max-w-5xl gap-20 px-8 md:px-20 ">
        <div className="flex flex-col gap-2 border-b border-blackLight pb-7">
          <h3 className>Operator onboarding</h3>
          <p className=" button text-gray">
            K3 AVS Operator Configuration Guide
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-normal">Step 1</h5>
          <p className=" button text-gray">
            Pull the docker image from the Docker Hub
          </p>
          <div className="flex flex-col bg-black w-full rounded-md border border-blackLight  ">
            <div className="border-b flex border-black px-4 py-3 gap-2">
              <Image src={hashtagIcon} alt="icon" className="h-6 w-6" />
              <span className="button text-gray grow">Terminal</span>
              <Image
                src={copyIcon}
                alt="icon"
                className="h-6 w-6 cursor-pointer"
                onClick={() => copy(1)}
              />
            </div>
            <div className="px-4 py-3 font-code bg-blackLight border border-blackLight">
              <span className="text-blue ">
                <span className="text-greenDark">docker</span> pull
                k3official/k3-labs-avs-operator:latest
              </span>{' '}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-normal">Step 2</h5>
          <p className=" button text-gray font">
            Populate the{' '}
            <span className="text-black bg-blueGray p-1 border border-blackLight rounded-md">
              .env
            </span>{' '}
            file with all the required information. Copy the below template.
            Ensure no variable are encapsulated in double quotes (“ “)
          </p>
          <div className="flex flex-col bg-black w-full rounded-md border border-blackLight  ">
            <div className="border-b flex border-black px-4 py-3 gap-2">
              <Image src={hashtagIcon} alt="icon" className="h-6 w-6" />
              <span className="button text-gray grow">Terminal</span>
              <Image
                src={copyIcon}
                alt="icon"
                className="h-6 w-6 cursor-pointer"
                onClick={() => copy(3)}
              />
            </div>
            <div className="bg-[#703F00] p-4 flex flex-col gap-2 text-[#FFAE00]">
              <div className="flex gap-1">
                <Image src={alertIcon} alt="icon" className="h-6 w-6" />
                <span className="button">
                  Fascinating piece of information.
                </span>
              </div>
              <p className="button-small ">
                You can leave below configuration as is. For testnet purposes we
                are covering part of the usage
              </p>
            </div>
            <pre className="px-4 flex flex-col gap-2 py-3 font-code button-small text-gray bg-blackLight border border-blackLight overflow-auto">
              <span>
                &emsp;<span className="select-none">1</span>{' '}
                <span className="text-[#FF4C8D]">L1_RPC = </span># Your Holesky
                RPC
              </span>
              <span>
                &emsp;<span className="select-none">2</span>{' '}
                <span className="text-[#FF4C8D]">L1_RPC = </span># Your AMOY RPC
                RPC
              </span>
              <br />
              <span>
                &emsp;<span className="select-none">3</span>{' '}
                <span className="text-[#FF4C8D]">PRIVATE_KEY= </span># Operator
                private key
              </span>
              <br />
              <span>
                &emsp;<span className="select-none">4</span> # You can leave the
                below values as is.
              </span>
              <br />
              <span>
                &emsp;<span className="select-none">5</span>{' '}
                <span className="text-[#FF4C8D]">L1_CHAIN= </span>
                <span className="text-greenDark">17000</span>
              </span>
              <span>
                &emsp;<span className="select-none">6</span>{' '}
                <span className="text-[#FF4C8D]">L2_CHAIN= </span>
                <span className="text-greenDark">80002</span>
              </span>
              <br />
              <span>
                &emsp;<span className="select-none">7</span>{' '}
                <span className="text-[#FF4C8D]">PINATA_API_KEY= </span>
                <span className="text-greenDark">d358585196381e27025f</span>
              </span>
              <span>
                &emsp;<span className="select-none">8</span>{' '}
                <span className="text-[#FF4C8D]">PINATA_SECRET_API_KEY= </span>
                <span className="text-greenDark">
                  27980e9073bceed412ba702dd4a4f18e0ee716b27ba800da3674323e09c32e3c
                </span>
              </span>
              <br />
              <span>
                &emsp;<span className="select-none">9</span>{' '}
                <span className="text-[#FF4C8D]">TASK_PERFORMER= </span>
                <span className="text-greenDark">
                  0x3c7a1a9c769009D21fe2FCfb08c7334919F641fe
                </span>
              </span>
              <br />
              <span>
                &emsp;<span className="select-none">10</span>{' '}
                <span className="text-[#FF4C8D]">
                  ATTESTATION_CENTER_ADDRESS{' '}
                </span>
                <span className="text-greenDark">
                  0x1902fF411F388C5ae4555260E25B9d43288f5FaE
                </span>
              </span>
              <span>
                &emsp;<span className="select-none">11</span>{' '}
                <span className="text-[#FF4C8D]">
                  OTHENTIC_REGISTRY_ADDRESS{' '}
                </span>
                <span className="text-greenDark">
                  0x41994741eD86Ec48e9578d0f64839E3F546466Fa
                </span>
              </span>
              <span>
                &emsp;<span className="select-none">12</span>{' '}
                <span className="text-[#FF4C8D]">AVS_GOVERNANCE_ADDRESS= </span>
                <span className="text-greenDark">
                  0x2662e4774fbF5dEE8cDDAC2b0B17E8B4C458300a
                </span>
              </span>
              <br />
              <span>
                &emsp;<span className="select-none">13</span>{' '}
                <span className="text-[#FF4C8D]">IPFS_HOST= </span>
                <span className="text-greenDark">
                  https://gateway.pinata.cloud/ipfs/
                </span>
              </span>
              <span>
                &emsp;<span className="select-none">14</span>{' '}
                <span className="text-[#FF4C8D]">IPFS_API= </span>
                <span className="text-greenDark">https://api.pinata.cloud</span>
              </span>
              <span>
                &emsp;<span className="select-none">15</span>{' '}
                <span className="text-[#FF4C8D]">IPFS_JWT= </span>
                <span className="text-greenDark"></span>
              </span>
              <br />
              <span>
                &emsp;<span className="select-none">16</span>{' '}
                <span className="text-[#FF4C8D]">OTHENTIC_BOOTSTRAP_ID= </span>
                <span className="text-greenDark">
                  12D3KooWBNFG1QjuF3UKAKvqhdXcxh9iBmj88cM5eU2EK5Pa91KB
                </span>
              </span>
              <span>
                &emsp;<span className="select-none">17</span>{' '}
                <span className="text-[#FF4C8D]">OTHENTIC_BOOTSTRAP_SEED </span>
                <span className="text-greenDark">
                  97a64de0fb18532d4ce56fb35b730aedec993032b533f783b04c9175d465d9bf
                </span>
              </span>
              <br />
              <span>
                &emsp;<span className="select-none">18</span>{' '}
                <span className="text-[#FF4C8D]">APP_ID= </span>
                <span className="text-greenDark">1234</span>
              </span>
              <br />
              <span>
                &emsp;<span className="select-none">19</span>{' '}
                <span className="text-[#FF4C8D]">
                  OTHENTIC_CLIENT_RPC_ADDRESS{' '}
                </span>
                <span className="text-greenDark">
                  http://34.133.156.140:8545
                </span>
              </span>
              <span>
                &emsp;<span className="select-none">20</span>{' '}
                <span className="text-[#FF4C8D]">OTHENTIC_CLIENT_IP= </span>
                <span className="text-greenDark"></span>
              </span>
              <span>
                &emsp;<span className="select-none">21</span>{' '}
                <span className="text-[#FF4C8D]">
                  OTHENTIC_AGGREGATOR_P2P_PORT{' '}
                </span>
                <span className="text-greenDark">9876</span>
              </span>
              <br />
              <span>
                &emsp;<span className="select-none">22</span>{' '}
                <span className="text-[#FF4C8D]">AVS_WEBAPI_URL= </span>
                <span className="text-greenDark">http://localhost</span>
              </span>
              <span>
                &emsp;<span className="select-none">23</span>{' '}
                <span className="text-[#FF4C8D]">AVS_WEBAPI_PORT= </span>
                <span className="text-greenDark">4002</span>
              </span>
              <span>
                &emsp;<span className="select-none">24</span>{' '}
                <span className="text-[#FF4C8D]">PERFORMER_PORT= </span>
                <span className="text-greenDark">3000</span>
              </span>
              <span>
                &emsp;<span className="select-none">25</span>{' '}
                <span className="text-[#FF4C8D]">AGGREGATOR_PORT= </span>
                <span className="text-greenDark">8000</span>
              </span>
              <br />
              <span>
                &emsp;<span className="select-none">27</span>{' '}
                <span className="text-[#FF4C8D]">ST_ETH_CONTRACT_ADDRESS </span>
                <span className="text-greenDark">
                  0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034
                </span>
              </span>
              <span>
                &emsp;<span className="select-none">28</span>{' '}
                <span className="text-[#FF4C8D]">ST_ETH_STAKE_AMOUNT= </span>
                <span className="text-greenDark">10000000000000000</span>
              </span>
              <span>
                &emsp;<span className="select-none">29</span>{' '}
                <span className="text-[#FF4C8D]">
                  EL_STRATEGY_MANAGER_ADDRESS{' '}
                </span>
                <span className="text-greenDark">
                  0xA744429bf286789225308a81A5a4b8049562A362
                </span>
              </span>
              <span>
                &emsp;<span className="select-none">30</span>{' '}
                <span className="text-[#FF4C8D]">
                  EL_DELETEGATION_MANAGER_ADDRESS{' '}
                </span>
                <span className="text-greenDark">
                  0xA44151489861Fe9e3055d95adC98FbD462B948e7
                </span>
              </span>
            </pre>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-normal">Step 3</h5>

          <p className=" button text-gray leading-9 ">
            Before you can run the docker image, you have to first register
            yourself as an operator on the eignelayer holesky testnet network.
            To do this, run the following command.
          </p>
          <div className="flex flex-col bg-black w-full rounded-md border border-blackLight  ">
            <div className="border-b flex border-black px-4 py-3 gap-2">
              <Image src={hashtagIcon} alt="icon" className="h-6 w-6" />
              <span className="button text-gray grow">Terminal</span>
              <Image
                src={copyIcon}
                alt="icon"
                className="h-6 w-6 cursor-pointer"
                onClick={() => copy(3)}
              />
            </div>
            <div className="bg-[#703F00] p-4 flex flex-col gap-2 text-[#FFAE00]">
              <div className="flex gap-1">
                <Image src={alertIcon} alt="icon" className="h-6 w-6" />
                <span className="button">
                  Fascinating piece of information.
                </span>
              </div>
              <p className="button-small ">
                You can leave below configuration as is. For testnet purposes we
                are covering part of the usage
              </p>
            </div>
            <div className="px-4 py-3 font-code bg-blackLight border border-blackLight">
              <span className="text-blue">
                <span className="text-greenDark">docker</span> run --env-file
                .env k3official/k3-labs-avs-operator register
              </span>
            </div>
          </div>
          <p className=" button text-gray leading-9 ">
            By default, this script will stake{' '}
            <span className="text-black bg-blueGray p-1 border border-blackLight rounded-md">
              0.01ETH
            </span>{' '}
            and use it to register your address on the eigenlayer network. If
            you wish to stake a different amount of{' '}
            <span className="text-black bg-blueGray p-1 border border-blackLight rounded-md">
              ETH
            </span>{' '}
            add the{' '}
            <span className="text-black bg-blueGray p-1 border border-blackLight rounded-md">
              ST_ETH_STAKE_AMOUNT
            </span>{' '}
            variable to the{' '}
            <span className="text-black bg-blueGray p-1 border border-blackLight rounded-md">
              .env
            </span>{' '}
            file, specifying the amount of{' '}
            <span className="text-black bg-blueGray p-1 border border-blackLight rounded-md">
              ETH
            </span>{' '}
            you’d like to stake in{' '}
            <span className="text-black bg-blueGray p-1 border border-blackLight rounded-md">
              WEI
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-normal">Step 4</h5>
          <p className=" button text-gray leading-9 ">
            After step 3 is complete, you are ready to run one of 2 modes of
            serving our network. Either as an attester or a performer (you
            can&apos;t use both with the same{' '}
            <span className="text-black bg-blueGray p-1 border border-blackLight rounded-md">
              PRIVATE KEY
            </span>
            )
          </p>
          <div className="flex flex-col bg-black w-full rounded-md border border-blackLight  ">
            <div className="border-b flex border-black px-4 py-3 gap-2">
              <Image src={hashtagIcon} alt="icon" className="h-6 w-6" />
              <span className="button text-gray grow">Terminal</span>
            </div>
            <div className="px-4 py-3 mb-[1px] font-code bg-blackLight border border-blackLight flex justify-between">
              <span className="text-blue">
                <span className="text-greenDark">docker</span> run --env-file
                .env --network host k3official/k3-labs-avs-operator attester
              </span>
              <Image
                src={copyIcon}
                alt="icon"
                className="h-6 w-6 cursor-pointer"
                onClick={() => copy(4)}
              />
            </div>
            <div className="px-4 py-3 font-code bg-blackLight border border-blackLight flex justify-between">
              <span className="text-blue">
                <span className="text-greenDark">docker</span> run --env-file
                .env --network host k3official/k3-labs-avs-operator performer
              </span>
              <Image
                src={copyIcon}
                alt="icon"
                className="h-6 w-6 cursor-pointer"
                onClick={() => copy(5)}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
