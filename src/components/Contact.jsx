'use client'
import Button from '@/components/Button'
import vector from '../app/vector-globe.svg'

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    // const form = e.target
    // const formData = new FormData(form)
    // const response = await fetch('http://localhost:3000/v1/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(Object.fromEntries(formData))
    // })
    // const data = await response.json()
    // console.log(data)
  }
  return (
    <div className="mx-5 w-[calc(100%-40px)] md:w-full relative rounded-2xl overflow-hidden border border-darkGray max-w-6xl lg:min-w-[50rem] md:mx-20 xl:w-[72rem]">
      <div className="flex flex-col gap-12 md:pl-8 md:py-12 pb-10 pt-16 px-4 xl:w-[72rem]">
        <div className="flex flex-col justify-between gap-4 w-full">
          <h3 id="contact">Connect with us</h3>
          <p className="body-2 w-5/6">
            Ask us about whether your workflow can be modeled in K3
          </p>
        </div>
        <form
          className="flex flex-col justify-between gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="email" className="subtitle-2">
              Your Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="from"
                required
                id="email"
                className="block body-3  w-full max-w-96 bg-transparent h-[48px] rounded-md border border-darkGray p-4  "
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
                name="text"
                required
                id="email"
                className=" body-3 w-full  max-w-96 min-h-[136px] bg-transparent rounded-md border border-darkGray p-4  "
                placeholder="More information"
              />
            </div>
          </div>
          <Button className="bg-blue self-center border-none py-3 px-4  ">
            Submit form
          </Button>
        </form>
      </div>
      <div
        className="w-3/5 h-full absolute -right-12  md:-right-40 -top-60 md:top-0  opacity-80  flex-grow"
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
