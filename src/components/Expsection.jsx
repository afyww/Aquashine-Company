import { motion } from "framer-motion";

function Expsection() {
    return (
        <div className="grid grid-cols-1 bg-gray-100 rounded-xl py-8 xl:py-16">
            <div className="my-auto">
                <div className="px-10 lg:px-20 xl:px-20 2xl:px-32">
                    <div className="w-full">
                        <div className="bg-white p-3 rounded-xl">
                            <motion.div
                                className='grid grid-cols-3 rounded-xl text-center'
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport= {{ once: true }}
                            >
                                <motion.div>
                                    <motion.h1
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport= {{ once: true }}
                                        className='text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-emerald-700 font-semibold'
                                    >
                                        4+
                                    </motion.h1>
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport= {{ once: true }}
                                        className='text-black font-light text-xs xl:text-xl 2xl:text-2xl text-center'
                                    >
                                        Experience
                                    </motion.span>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport= {{ once: true }}
                                    className='border-r-2 border-l-2'
                                >
                                    <motion.h1
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.8 }}
                                        viewport= {{ once: true }}
                                        className='text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-emerald-700 font-semibold'
                                    >
                                        99^
                                    </motion.h1>
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 1 }}
                                        viewport= {{ once: true }}
                                        className='text-black font-light text-xs xl:text-xl 2xl:text-2xl text-center'
                                    >
                                        Projects
                                    </motion.span>
                                </motion.div>

                                <motion.div>
                                    <motion.h1
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: 1.2 }}
                                        viewport= {{ once: true }}
                                        className='text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-emerald-700 font-semibold'
                                    >
                                        99
                                    </motion.h1>
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 1.4 }}
                                        viewport= {{ once: true }}
                                        className='text-black font-light text-xs xl:text-xl 2xl:text-2xl text-center'
                                    >
                                        Customers
                                    </motion.span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expsection
