import Imgsection from "./Imgsection"
import { motion } from "framer-motion";

function Projectsection() {

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
    <section id="project">
      <div className="grid grid-cols-2 bg-gray-100 py-20 xl:py-36">
        <div className="my-auto px-1 lg:px-20 xl:px-44 2xl:px-32 ">
          <motion.div {...Motionx}>
            <div className="">
              <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-emerald-700 font-normal">
              Pojects That We Have Worked On
              </h1>
            </div>
          </motion.div>
        </div>
        <motion.div {...Motiony}>
                <div className="h-full">
                  <Imgsection />
                </div>
              </motion.div>
      </div>
    </section>
  )
}

export default Projectsection
