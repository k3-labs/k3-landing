import Image from 'next/image'

const Card = (props) => {
  const { icon, title } = props
  return (
    <div
      className="flex flex-col justify-center items-start p-6 gap-4 w-72 h-36 rounded-2xl"
      style={{
        background:
          'linear-gradient(177.86deg, #121212 -4.21%, #FFFFFF 1108.06%);'
      }}
    >
      <Image src={icon} alt="icon" width={40} height={40} />
      <h3 className="text-white  font-medium  text-lg tracking-[0.7px] ">
        {title}
      </h3>
    </div>
  )
}

export default Card
