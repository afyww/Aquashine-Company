import Contactcard from "./Contactcard"
import Contactus from "./Contactus"


function Contactsection() {
  return (
    <section id="contact">
      <div className="grid grid-cols-1 bg-gray-100 py-20 xl:py-36">
        <div className="my-auto ">
          <div className="px-10 lg:px-20 xl:px-20 2xl:px-32 ">
            <div className='w-full space-y-5 xl:space-y-16'>
              <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-left text-emerald-700 font-semibold">
                Our Contact
              </h1>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                <div>
                <Contactcard />
                </div>
                <div className="my-auto">
                  <Contactus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
)
}

export default Contactsection
