import Contactcard from "./Contactcard"


function Contactsection() {
  return (
    <section id="contact">
      <div className="grid grid-cols-1 bg-gray-100 py-28 xl:py-36">
        <div className="my-auto ">
          <div className="px-10 lg:px-20 xl:px-20 2xl:px-32 ">
            <div className='w-full space-y-5 xl:space-y-24'>
              <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-black font-semibold  border-black border-b-2">
                " Our Contact "
              </h1>
              <div className="grid grid-cols-1 xl:grid-cols-2">
                <Contactcard />
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
)
}

export default Contactsection
