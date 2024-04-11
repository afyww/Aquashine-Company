import { motion } from "framer-motion";
import service1 from '../assets/images/project2.jpg'

function Servicesection() {

  const Motionx = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.5, ease: "easeInOut" },
  };

  const Motiony = {
    initial: { opacity: 0, y: 200 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 2.0, ease: "easeInOut" },
  };

  return (
    <section id='service'>
      <div className="grid grid-cols-1 bg-gray-100 py-20 xl:py-36">
        <div className="my-auto ">
          <div className="px-10 lg:px-20 xl:px-20 2xl:px-32 ">
            <div className='w-full space-y-5 xl:space-y-12'>
              <motion.div {...Motionx}>
                <div className="border-b-2 pb-6 xl:mx-36">
                  <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-emerald-700 font-normal">
                    Our Services
                  </h1>
                  <p className="text-center font-light text-sm xl:text-lg">What We Serve ?</p>
                </div>
              </motion.div>
              <motion.div {...Motiony}>
                <div className="grid grid-cols-1 xl:grid-cols-4 p-2 xl:p-8 gap-5 rounded-2xl">
                  <div className="">
                    <img className="rounded-t-xl h-1/2 w-full" src={service1} alt=""
                    />
                    <div className="p-4 space-y-4 xl:space-y-8 bg-white rounded-b-xl">
                      <div>
                        <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-7xl text-center text-emerald-700 font-semibold">Jasa Pembuatan Vivarium</h1>
                        <p className="text-center font-light text-xs xl:text-base">
                          Kami melayani Jasa Pembuatan Vivarium sesuai dengan kebutuhan pelanggan
                        </p>
                      </div>
                      <div className='border-b-2 border-blue-400 mx-16 xl:mx-12 text-center'>
                        <a className='px-2 xl:px-5 text-blue-600 text-sm xl:text-lg font-semibold' href="">Order Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <img className="rounded-t-xl h-1/2 w-full" src={service1} alt=""
                    />
                    <div className="p-4 space-y-4 xl:space-y-8 bg-white rounded-b-xl">
                      <div>
                        <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-7xl text-center text-emerald-700 font-semibold">Jasa Pembuatan Vivarium</h1>
                        <p className="text-center font-light text-xs xl:text-base">
                          Kami melayani Jasa Pembuatan Vivarium sesuai dengan kebutuhan pelanggan
                        </p>
                      </div>
                      <div className='border-b-2 border-blue-400 mx-16 xl:mx-12 text-center'>
                        <a className='px-2 xl:px-5 text-blue-600 text-sm xl:text-lg font-semibold' href="">Order Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <img className="rounded-t-xl h-1/2 w-full" src={service1} alt=""
                    />
                    <div className="p-4 space-y-4 xl:space-y-8 bg-white rounded-b-xl">
                      <div>
                        <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-7xl text-center text-emerald-700 font-semibold">Jasa Pembuatan Vivarium</h1>
                        <p className="text-center font-light text-xs xl:text-base">
                          Kami melayani Jasa Pembuatan Vivarium sesuai dengan kebutuhan pelanggan
                        </p>
                      </div>
                      <div className='border-b-2 border-blue-400 mx-16 xl:mx-12 text-center'>
                        <a className='px-2 xl:px-5 text-blue-600 text-sm xl:text-lg font-semibold' href="">Order Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <img className="rounded-t-xl h-1/2 w-full" src={service1} alt=""
                    />
                    <div className="p-4 space-y-4 xl:space-y-8 bg-white rounded-b-xl">
                      <div>
                        <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-7xl text-center text-emerald-700 font-semibold">Jasa Pembuatan Vivarium</h1>
                        <p className="text-center font-light text-xs xl:text-base">
                          Kami melayani Jasa Pembuatan Vivarium sesuai dengan kebutuhan pelanggan
                        </p>
                      </div>
                      <div className='border-b-2 border-blue-400 mx-16 xl:mx-12 text-center'>
                        <a className='px-2 xl:px-5 text-blue-600 text-sm xl:text-lg font-semibold' href="">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicesection
