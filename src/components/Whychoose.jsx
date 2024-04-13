import { motion } from "framer-motion";

function Whychoose() {

    const Motionx = {
        initial: { opacity: 0, y: -100 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.5, ease: "easeInOut" },
    };

    return (
        <div className="grid grid-cols-1 bg-gray-100 rounded-xl">
            <div className="my-auto ">
                <div className="px-10 lg:px-20 xl:px-20 2xl:px-32">
                    <div className='w-full'>
                        <motion.div {...Motionx}>
                            <div className="grid grid-cols-1">
                                <div className='space-y-4 bg-white p-3 rounded-xl'>
                                    <div className=''>
                                        <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-emerald-700 font-semibold">
                                            Why Choose Us
                                        </h1>
                                    </div>
                                    <div className="grid grid-cols-1 xl:grid-cols-4 p-2 xl:p-8 gap-5 rounded-2xl">
                                        <div className="">
                                            <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                                                <div>
                                                    <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-3xl text-center text-emerald-700 font-semibold">Pengalaman Yang Terbukti</h1>
                                                    <p className="text-center font-light text-xs xl:text-base 2xl:text-xl">
                                                        Dengan puluhan proyek sukses di bawah ikat pinggang kami, kami telah membuktikan kemampuan kami dalam menciptakan keindahan alam yang luar biasa.                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                                                <div>
                                                    <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-3xl text-center text-emerald-700 font-semibold">Kreativitas Tanpa Batas</h1>
                                                    <p className="text-center font-light text-xs xl:text-base 2xl:text-xl">
                                                        Setiap proyek yang kami buat adalah karya seni yang unik, dirancang sesuai dengan keinginan Anda dan dengan sentuhan kreatif kami yang tak terbatas.                                                                                                            </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                                                <div>
                                                    <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-3xl text-center text-emerald-700 font-semibold">Kualitas Tak Tertandingi</h1>
                                                    <p className="text-center font-light text-xs xl:text-base 2xl:text-xl">
                                                        Kami hanya menggunakan bahan-bahan terbaik dan teknik-teknik terbaru dalam setiap tahap pembuatan paludarium, menjamin hasil akhir yang tahan lama dan memukau.                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                                                <div>
                                                    <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-3xl text-center text-emerald-700 font-semibold">Perhatian Terhadap Detail</h1>
                                                    <p className="text-center font-light text-xs xl:text-base 2xl:text-xl">
                                                    Kami memperhatikan setiap detail kecil untuk memastikan bahwa paludarium Anda tidak hanya indah secara keseluruhan, tetapi juga menyelaraskan dengan kebutuhan.                                                 </p>
                                                </div>
                                            </div>
                                        </div>
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

export default Whychoose
