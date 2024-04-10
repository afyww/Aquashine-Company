import { motion } from "framer-motion";

function Servicesection() {

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
    <section id='service'>
      <div className="grid grid-cols-1 bg-gray-100 py-20 xl:py-36">
        <div className="my-auto ">
          <div className="px-10 lg:px-20 xl:px-20 2xl:px-32 ">
            <div className='w-full space-y-5 xl:space-y-12'>
              <motion.div {...Motionx}>
                <div className="border-b-2 pb-6 xl:mx-36">
                  <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-emerald-700 font-normal">
                    Our Services
                  </h1>
                  <p className="text-center font-light text-sm xl:text-lg">What We Serve ?</p>
                </div>
              </motion.div>
              <motion.div {...Motiony}>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 p-2 xl:p-8 rounded-2xl">
                <div className="space-y-4 xl:space-y-10 bg-white px-2 xl:px-10 p-3 rounded-xl">
                    <h1 className="text-black text-lg xl:text-4xl font-extrabold">Paludarium</h1>
                    <p className="text-xs xl:text-sm text-extralight text-black line-clamp-6 text-left">
                      Paludarium adalah sebuah habitat yang merupakan perpaduan antara akuarium dan vivarium. Dalam paludarium, terdapat elemen air dan darat yang menciptakan lingkungan semi-aquatic, yang idealnya cocok untuk beberapa jenis tanaman air, reptil, amfibi, dan serangga. Biasanya, paludarium memiliki bagian air yang cukup besar untuk menyediakan ruang bagi ikan atau makhluk air lainnya, serta area daratan yang cukup luas untuk tanaman dan hewan yang lebih suka hidup di darat</p>
                    <div className="">
                      <a className="text-blue-600 text-sm xl:text-2xl font-semibold border-blue-400 border-b-2" href="">Learn more</a>
                    </div>
                  </div>
                  <div className="space-y-4 xl:space-y-10 bg-emerald-600 px-2 xl:px-10 p-3 rounded-xl">
                    <h1 className="text-white text-lg xl:text-4xl font-extrabold">Aquascape</h1>
                    <p className="text-xs xl:text-sm text-extralight text-white line-clamp-6 text-left">Aquascape adalah seni menciptakan dan merancang taman air di dalam akuarium. Ini melibatkan penataan tanaman air, batu, kayu, substrat, dan elemen dekoratif lainnya secara estetis untuk menciptakan lanskap air yang menarik dan alami. Aquascape biasanya dilakukan dalam akuarium yang dirancang khusus untuk meniru lingkungan alami seperti hutan, sungai, dan danau.
                      Dalam praktiknya, aquascaping merupakan kombinasi antara seni dan ilmu pengetahuan, di mana para aquascaper</p>
                      <div className="">
                      <a className="text-white text-sm xl:text-2xl font-semibold border-blue-400 border-b-2" href="">Learn more</a>
                    </div>
                  </div>
                  <div className="space-y-4 xl:space-y-10 bg-white px-2 xl:px-10 p-3 rounded-xl">
                    <h1 className="text-black text-lg xl:text-4xl font-extrabold">Paludarium</h1>
                    <p className="text-xs xl:text-sm text-extralight text-black line-clamp-6 text-left">
                      Paludarium adalah sebuah habitat yang merupakan perpaduan antara akuarium dan vivarium. Dalam paludarium, terdapat elemen air dan darat yang menciptakan lingkungan semi-aquatic, yang idealnya cocok untuk beberapa jenis tanaman air, reptil, amfibi, dan serangga. Biasanya, paludarium memiliki bagian air yang cukup besar untuk menyediakan ruang bagi ikan atau makhluk air lainnya, serta area daratan yang cukup luas untuk tanaman dan hewan yang lebih suka hidup di darat</p>
                      <div className="">
                      <a className="text-blue-600 text-sm xl:text-2xl font-semibold border-blue-400 border-b-2" href="">Learn more</a>
                    </div>
                  </div>
                  <div className="space-y-4 xl:space-y-10 bg-emerald-600 px-2 xl:px-10 p-3 rounded-xl">
                    <h1 className="text-white text-lg xl:text-4xl font-extrabold">Terrarium</h1>
                    <p className="text-xs xl:text-sm text-extralight text-white line-clamp-6 text-left">
                      Terrarium adalah wadah transparan yang digunakan untuk menanam dan menampilkan tanaman serta kadang-kadang hewan kecil dalam lingkungan yang dikontrol. Terrarium sering kali terbuat dari kaca atau plastik yang memungkinkan cahaya masuk dan memungkinkan pengamatan tanaman atau hewan di dalamnya. Lingkungan di dalam terrarium, termasuk kelembaban, suhu, dan cahaya, dapat dikendalikan untuk menciptakan kondisi optimal.</p>
                      <div className="">
                      <a className="text-white text-sm xl:text-2xl font-semibold border-blue-400 border-b-2" href="">Learn more</a>
                    </div>
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

export default Servicesection
