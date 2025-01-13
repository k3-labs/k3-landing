import Image from 'next/image'

const Investors = () => {
  return (
    <div className="bg-[#FBFBFB] p-12 md:p-14 xl:p-[120px] xl:flex xl:justify-center ">
      <div className="flex  justify-center w-full xl:w-fit">
        <Image src="/bbf-logo.png" alt="bbf-logo" width={123} height={75} />
        <Image
          src="/bbf-logo.png"
          alt="finality-logo"
          width={123}
          height={75}
        />
      </div>
      <div className="flex  justify-center w-full xl:w-fit">
        <Image src="/bbf-logo.png" alt="aztlan-logo" width={123} height={75} />
        <Image src="/bbf-logo.png" alt="aztlan-logo" width={123} height={75} />
        <Image src="/bbf-logo.png" alt="aztlan-logo" width={123} height={75} />
      </div>
    </div>
  )
}

export default Investors
