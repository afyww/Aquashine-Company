import hero from '../assets/images/momon.jpeg'
import { motion } from "framer-motion";

const Aboutsection = () => {

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
                                    <p className='text-center font-light text-sm xl:text-lg'>Our company history</p>
                                </div>
                            </motion.div>
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 my-auto">
                                <motion.div {...Motiony}>
                                    <div className='my-auto'>
                                        <img className='rounded-xl' src={hero} alt="" />
                                    </div>
                                </motion.div>
                                <motion.div {...Motionx}>
                                <div className="space-y-5">
                                    <div className=''>
                                        <h1 className='text-xl lg:text-2xl xl:text-4xl 2xl:text-7xl text-left text-emerald-700 font-semibold'>Berpengelaman Lebih Dari 4 Tahun</h1>
                                    </div>
                                    <h1 className="font-light text-xs lg:text-xl xl:text-xl 2xl:text-2xl text-black">Aquashine berdiri pada tahun 2019 yang didirikan oleh Devian Rizky Ananta,
                                        tahun 2019 akhir.Aquashine mendirikan toko pertamanya yang terletak di Jl.Kauman Kudu Raya.
                                        Pada awal berdiriya aquashine mengerjakan proyek-proyek aquarium, seperti merancang aquascape,
                                        palidarium, terrarium dan vivarium. Seiring berkembangnya pasar aquashine mencoba mengerjakan
                                        proyek pembangunan kolam ditahun 2020. Di tahun 2022 aquashine membuka jabang di jalan woltermonginsidi
                                        yang berfokus menjual peralatan aquarium, ikan, dan lain debagainya. Di tahun itu juga aquashine mulai
                                        menggerjakan proyek lanjutan yaitu pembuatan lingkungan hutan buatan di dalam maupun di luar ruangan seperti
                                        taman, aviary, dan vertical garden.
                                    </h1>
                                    <div className='flex space-x-3'>
                                        <div className='border-b-2 border-emerald-400'>
                                        <a className='px-2 xl:px-5 text-emerald-600 text-sm xl:text-lg font-light' href="#contact">Lets Talk</a>
                                        </div>
                                        <div className='border-b-2 border-blue-400'>
                                        <a className='px-2 xl:px-5 text-blue-600 text-sm xl:text-lg font-light' href="#project">See Our Projects</a>
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