

const Aboutsection = () => {
    return (
        <section id="about">
            <div className="grid grid-cols-1 bg-gray-100 py-28 xl:py-36">
                <div className="my-auto ">
                    <div className="px-10 lg:px-20 xl:px-20 2xl:px-32 ">
                        <div className='w-full space-y-5 xl:space-y-24'>
                            <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-left text-emerald-700 font-semibold  border-black border-b-2">
                                " About "
                            </h1>
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                                <div className="">
                                    <h1 className="font-light text-xs lg:text-xl xl:text-xl 2xl:text-6xl text-left text-black">"Aquashine berdiri pada tahun 2019 yang didirikan oleh Devian Rizky Ananta,
                                        tahun 2019 akhir.Aquashine mendirikan toko pertamanya yang terletak di Jl.Kauman Kudu Raya.
                                        Pada awal berdiriya aquashine mengerjakan proyek-proyek aquarium, seperti merancang aquascape,
                                        palidarium, terrarium dan vivarium. Seiring berkembangnya pasar aquashine mencoba mengerjakan
                                        proyek pembangunan kolam ditahun 2020. Di tahun 2022 aquashine membuka jabang di jalan woltermonginsidi
                                        yang berfokus menjual peralatan aquarium, ikan, dan lain debagainya. Di tahun itu juga aquashine mulai
                                        menggerjakan proyek lanjutan yaitu pembuatan lingkungan hutan buatan di dalam maupun di luar ruangan seperti
                                        taman, aviary, dan vertical garden".
                                    </h1>
                                </div>
                                <div className="border-2 border-black p-6 rounded-xl my-auto space-y-4">
                                    <div>
                                        <h1 className="font-light text-xs lg:text-xl xl:text-xl 2xl:text-6xl text-left text-black">
                                            Ingin membuat halaman rumah kamu menakjubkan ?
                                        </h1>
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="w-fit p-2 px-5 xl:px-10 bg-green-500 rounded-xl">
                                            <a className="text-light text-gray-100 font-light" href="">Lets Talk </a>
                                        </div>
                                        <div className="w-fit p-2 px-5 xl:px-10 bg-sky-500 rounded-xl">
                                            <a className="text-light text-gray-100 font-light" href="">Our services</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Aboutsection