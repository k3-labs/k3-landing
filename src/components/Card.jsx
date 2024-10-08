import Image from 'next/image'

const Card = (props) => {
  const { icon, title, idx } = props
  return (
    <div
      className="flex flex-col  w-[146px] xs:w-[170px] sm:w-full justify-center items-start py-3 px-4 md:p-6 gap-2 md:gap-4 max-w-72  h-[76px] md:h-[120px] rounded-2xl "
      style={{
        justifySelf: idx % 2 === 0 ? 'end' : 'start',
        background:
          'linear-gradient(177.86deg, #121212 -4.21%, #FFFFFF 1108.06%)'
      }}
    >
      <Image src={icon} alt="icon" className="md:w-10 md:h-10 w-6 h-6 " />
      <h3 className="text-white body-3  md:subtitle-2 ">{title}</h3>
    </div>
  )
}

export default Card
