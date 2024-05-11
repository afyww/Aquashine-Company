import hero from '../assets/images/momon3.jpg'
import { motion } from "framer-motion";

const Aboutsection = () => {

    const Motionx = {
        initial: { opacity: 0, y: -100 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.5, ease: "easeInOut" },
        viewport: { once: true },
    };

    const Motiony = {
        initial: { opacity: 0, y: 200 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.5, ease: "easeInOut" },
        viewport: { once: true },
    };

    return (
        <section id="about">
            <div className="grid grid-cols-1 bg-gray-100 py-20 xl:py-36">
                <div className="my-auto ">
                    <div className="px-10 lg:px-20 xl:px-20 2xl:px-32 ">
                        <div className='w-full space-y-5 xl:space-y-12'>
                            <motion.div {...Motionx}>
                                <div className='border-b-2 pb-6 xl:mx-36'>
                                    <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-emerald-700 font-normal">
                                        About Us
                                    </h1>
                                    <p className='text-center font-light text-sm xl:text-lg 2xl:text-xl'>Our company history</p>
                                </div>
                            </motion.div>
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 my-auto">
                                <motion.div {...Motiony}>
                                    <div className='my-auto'>
                                        <img className='rounded-xl my-auto' src={hero} alt="" />
                                    </div>
                                </motion.div>
                                <motion.div {...Motionx}>
                                    <div className="space-y-5">
                                        <div className=''>
                                            <h1 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl text-left text-emerald-700 font-semibold'>Berpengalaman Mengerjakan Berbagai Project Art Construction Di Seluruh Indonesia</h1>
                                        </div>
                                        <h1 className="font-light text-xs lg:text-xl xl:text-xl 2xl:text-3xl text-black">Aquashine berdiri pada tahun 2019 yang didirikan oleh Devian Rizky Ananta, tahun 2019 akhir. Aquashine mendirikan toko pertamanya yang terletak di Jl.Kauman Kudu Raya. Sebelum nya Devian Rizky Ananta telah belajar mengenai bidang <span className='text-emerald-700'> Art Construction</span> sejak bangku sma. Pada awal berdirinya aquashine mengerjakan proyek-proyek aquarium, seperti merancang aquascape, paludarium, terrarium dan vivarium. Seiring berkembangnya pasar, aquashine mencoba mengerjakan proyek pembangunan kolam ditahun 2020. Di tahun 2022 aquashine membuka jabang di jalan woltermonginsidi yang berfokus menjual peralatan aquarium, ikan, dan lain sebagainya. Di tahun itu juga aquashine mulai menggerjakan proyek lanjutan yaitu pembuatan lingkungan hutan buatan di dalam maupun di luar ruangan seperti taman, aviary, dan vertical garden.
                                        </h1>
                                        <div className='flex space-x-6'>
                                            <div className='border-b-2 border-emerald-400'>
                                                <div className=''>
                                                    <a className=' text-emerald-600 flex gap-2 text-sm xl:text-lg 2xl:text-2xl font-light' href="#contact">Lets Talk
                                                        <svg className='my-auto bg-emerald-400 p-1 h-6 w-5 xl:w-7 xl:h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='border-b-2 border-blue-400'>
                                                <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-2xl font-light' href="#project">See Our Projects
                                                    <svg className='my-auto bg-blue-400 p-1 h-6 w-5 xl:w-7 xl:h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Aboutsection