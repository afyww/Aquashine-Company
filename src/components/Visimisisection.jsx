import { motion } from "framer-motion";

function Visimisisection() {

    const Motionx = {
        initial: { opacity: 0, y: -100 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.5, ease: "easeInOut" },
        viewport: { once: true },
    };

    return (

        <div className="grid grid-cols-1 bg-gray-100 rounded-xl">
            <div className="my-auto ">
                <div className="px-10 lg:px-20 xl:px-20 2xl:px-32">
                    <div className='w-full'>
                    <motion.div {...Motionx}>
                        <div className="space-y-6 xl:space-y-0 grid grid-cols-1 xl:grid-cols-2 xl:gap-5">
                            <div className='space-y-4 bg-white p-3 rounded-xl'>
                                <div className=''>
                                    <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-emerald-700 font-semibold">
                                        Visi
                                    </h1>
                                </div>
                                <p className='text-black mx-10 font-light text-xs xl:text-xl 2xl:text-2xl text-left'>Menjadi perusahaan jasa pembuatan pembuatan aquascape, taman, aviary, dan vertical garden yang inovasi dan menginspirasi khalayak umum.</p>
                            </div>
                            <div className='space-y-4 bg-white p-3 rounded-xl'>
                            <div className=''>
                                    <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-emerald-700 font-semibold">
                                        Misi
                                    </h1>
                                </div>
                                <div className='text-black mx-10 font-light text-xs xl:text-xl 2xl:text-2xl text-left'>
                                    <p>1.	Memberikan layanan berkualitas tinggi melalui komitmen terhadap kepuasan pelanggan
                                    </p>
                                    <p>2.	Menggabungkan kreativitas dan keahlian desain untuk menciptakan lingkungan hidup buatan yang estetik dan fungsional
                                    </p>
                                    <p>3.	Berkomitmen untuk menjaga kelestarian lingkungan alam dan meminimalkan dampak negatif pada ekosistem dan sumber daya alam
                                    </p>
                                </div>
                            </div>
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visimisisection
