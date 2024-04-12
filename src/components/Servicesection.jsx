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
                  <p className="text-center font-light text-sm xl:text-lg 2xl:text-xl">What We Serve ?</p>
                </div>
              </motion.div>
              <motion.div {...Motiony}>
                <div className="grid grid-cols-1 xl:grid-cols-4 p-2 xl:p-8 gap-5 rounded-2xl">
                  <div className="">
                    <img className="rounded-xl h-1/2 w-full" src={service1} alt=""
                    />
                    <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                      <div>
                        <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-3xl text-left text-emerald-700 font-semibold">Jasa Pembuatan Vivarium</h1>
                        <p className="text-left font-light text-xs xl:text-base 2xl:text-xl">
                          Kami melayani Jasa Pembuatan Vivarium sesuai dengan kebutuhan pelanggan
                        </p>
                      </div>
                      <div className=" flex justify-end">
                        <div className='border-b-2 border-blue-400 w-fit'>
                          <div className="">
                            <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="">Order Now
                              <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <img className="rounded-xl h-1/2 w-full" src={service1} alt=""
                    />
                    <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                      <div>
                        <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-3xl text-left text-emerald-700 font-semibold">Jasa Pembuatan Vivarium</h1>
                        <p className="text-left font-light text-xs xl:text-base 2xl:text-xl">
                          Kami melayani Jasa Pembuatan Vivarium sesuai dengan kebutuhan pelanggan
                        </p>
                      </div>
                      <div className=" flex justify-end">
                        <div className='border-b-2 border-blue-400 w-fit'>
                          <div className="">
                            <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="">Order Now
                              <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <img className="rounded-xl h-1/2 w-full" src={service1} alt=""
                    />
                    <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                      <div>
                        <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-3xl text-left text-emerald-700 font-semibold">Jasa Pembuatan Vivarium</h1>
                        <p className="text-left font-light text-xs xl:text-base 2xl:text-xl">
                          Kami melayani Jasa Pembuatan Vivarium sesuai dengan kebutuhan pelanggan
                        </p>
                      </div>
                      <div className=" flex justify-end">
                        <div className='border-b-2 border-blue-400 w-fit'>
                          <div className="">
                            <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="">Order Now
                              <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <img className="rounded-xl h-1/2 w-full" src={service1} alt=""
                    />
                    <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                      <div>
                        <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-3xl text-left text-emerald-700 font-semibold">Jasa Pembuatan Vivarium</h1>
                        <p className="text-left font-light text-xs xl:text-base 2xl:text-xl">
                          Kami melayani Jasa Pembuatan Vivarium sesuai dengan kebutuhan pelanggan
                        </p>
                      </div>
                      <div className=" flex justify-end">
                        <div className='border-b-2 border-blue-400 w-fit'>
                          <div className="">
                            <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="">Order Now
                              <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-4 p-2 xl:p-8 gap-5 rounded-2xl">
                  
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
