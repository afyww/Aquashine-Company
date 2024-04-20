import { motion } from "framer-motion";

function Mapsection() {

    const Motionx = {
        initial: { opacity: 0, y: -100 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.5, ease: "easeInOut" },
        viewport: { once: true },
    };

    return (
        <div className="grid grid-cols-1 bg-gray-100 rounded-xl py-16">
            <div className="my-auto ">
                <div className="px-10 lg:px-20 xl:px-20 2xl:px-32">
                    <div className='w-full'>
                        <motion.div {...Motionx}>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15841.117154466934!2d110.5018478!3d-6.9763379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d7fec185481%3A0xd68f4bb574c1b0d8!2sAQUASHINE%20SEMARANG!5e0!3m2!1sid!2sid!4v1712839609026!5m2!1sid!2sid"
                                    width="500"
                                    height="300"
                                    style={{ border: "0" }}
                                    allowfullscreen="1"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full">
                                </iframe>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Mapsection
