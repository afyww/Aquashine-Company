import { motion } from "framer-motion";

function Meetsection() {

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
                                Meet Our Teams
                            </h1>
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

export default Meetsection