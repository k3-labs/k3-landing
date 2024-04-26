import Button from '@/components/Button'
import vector from '../app/vector-globe.svg'

const Contact = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-darkGray max-w-6xl min-w-[50rem] mx-20 xl:w-[72rem]">
      <div className="flex flex-col gap-12 pl-8 py-12 xl:w-[72rem]">
        <div className="flex flex-col justify-between gap-4 w-full">
          <h3>Connect with us</h3>
          <p className="body-2 w-5/6">
            Ask us about whether your workflow can be modeled in K3
          </p>
        </div>
        <div className="flex flex-col justify-between  gap-4">
          <div>
            <label htmlFor="email" className="subtitle-2">
              Your Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block body-3   w-96 bg-transparent h-[48px] rounded-md border border-darkGray p-4  "
                placeholder="Email"
              />
            </div>
          </div>{' '}
          <div>
            <label htmlFor="email" className="subtitle-2">
              How we can help you?
            </label>
            <div className="mt-2">
              <textarea
                type="textarea"
                name="email"
                id="email"
                className=" body-3  w-96 min-h-[136px] bg-transparent rounded-md border border-darkGray p-4  "
                placeholder="More information"
              />
            </div>
          </div>
          <Button className="bg-blue border-none py-3 px-4  ">
            Submit form
          </Button>
        </div>
      </div>
      <div
        className="w-3/5 h-full absolute  -right-40 top-0  opacity-80  flex-grow"
        style={{
          backgroundImage: `url(${vector.src})`,
          backgroundRepeat: 'no-repeat'
          // backgroundSize: 'cover'
        }}
      />
    </div>
  )
}

export default Contact
