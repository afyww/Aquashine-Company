import hero from '../assets/images/momon.jpeg'

const Aboutsection = () => {
    return (
        <section id="about">
            <div className="grid grid-cols-1 bg-gray-100 py-20 xl:py-36">
                <div className="my-auto ">
                    <div className="px-10 lg:px-20 xl:px-20 2xl:px-32 ">
                        <div className='w-full space-y-5 xl:space-y-12'>
                            <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-left text-emerald-700 font-semibold">
                                About Us
                            </h1>
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                                <div className="space-y-5 order-2 xl:order-1">
                                    <div className='w-3/4'>
                                    <h1 className='text-2xl xl:text-4xl font-extrabold text-left'>Berpengelaman Lebih Dari 4 Tahun</h1>
                                    </div>
                                    <h1 className="font-light text-xs lg:text-xl xl:text-xl 2xl:text-2xl justify-center text-black">Aquashine berdiri pada tahun 2019 yang didirikan oleh Devian Rizky Ananta,
                                        tahun 2019 akhir.Aquashine mendirikan toko pertamanya yang terletak di Jl.Kauman Kudu Raya.
                                        Pada awal berdiriya aquashine mengerjakan proyek-proyek aquarium, seperti merancang aquascape,
                                        palidarium, terrarium dan vivarium. Seiring berkembangnya pasar aquashine mencoba mengerjakan
                                        proyek pembangunan kolam ditahun 2020. Di tahun 2022 aquashine membuka jabang di jalan woltermonginsidi
                                        yang berfokus menjual peralatan aquarium, ikan, dan lain debagainya. Di tahun itu juga aquashine mulai
                                        menggerjakan proyek lanjutan yaitu pembuatan lingkungan hutan buatan di dalam maupun di luar ruangan seperti
                                        taman, aviary, dan vertical garden.
                                    </h1>
                                    <div className='flex space-x-3'>
                                        <a className='p-2 rounded-xl bg-green-500 px-2 xl:px-5 text-white text-lg font-light' href="#contact">Lets Talk</a>
                                        <a className='p-2 rounded-xl bg-blue-500 px-2 xl:px-5 text-lg text-white font-light' href="#project">See Our Projects</a>
                                    </div>
                                </div>
                                <div className='order-1 xl:order-2 my-auto'>
                                    <img className='rounded-xl' src={hero} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Aboutsection