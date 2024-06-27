import Image from 'next/image'

const Investors = () => {
  return (
    <div className="mx-5 md:mx-0 max-w-6xl flex flex-col items-center">
      <h3 className="text-center  font-semibold leading-8 text-white">
        Our investors
      </h3>
      <div className="mx-auto mt-10 grid w-full grid-cols-3 items-center gap-x-20   gap-y-10  ">
        <Image src="/bbf-logo.png" alt="bbf-logo" width={176} height={176} />
        <Image
          src="/finality-logo.png"
          alt="finality-logo"
          width={224}
          height={224}
        />
        <Image
          src="/aztlan-logo.png"
          alt="aztlan-logo"
          width={160}
          height={160}
        />
      </div>
    </div>
  )
}

export default Investors
