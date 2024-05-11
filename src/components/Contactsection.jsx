import Contactcard from "./Contactcard"
import Contactus from "./Contactus"
import { motion } from "framer-motion";

function Contactsection() {

  const Motionx = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.5, ease: "easeInOut" },
    viewport: { once: true },
  };

  const Motiony = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 2.0, ease: "easeInOut" },
    viewport: { once: true },
  };

  return (
    <section id="contact">
      <div className="grid grid-cols-1 bg-gray-100 py-20 xl:py-36">
        <div className="my-auto ">
          <div className="px-10 lg:px-20 xl:px-20 2xl:px-32 ">
            <div className='w-full space-y-5 xl:space-y-12'>
              <motion.div {...Motionx}>
                <div className="border-b-2 pb-6 xl:mx-36">
                  <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-emerald-700 font-normal">
                    Our Contact
                  </h1>
                  <p className="text-center font-light text-sm xl:text-lg 2xl:text-xl">Lets Talk</p>
                </div>
              </motion.div>
              <motion.div {...Motiony}>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                  <div className="my-auto h-full">
                    <Contactus />
                  </div>
                  <div className="my-auto">
                    <Contactcard />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactsection
