import { motion } from "framer-motion";
import landscape from '../assets/images/IMG_20240416_215017.jpg'
import paludarium from '../assets/images/paludarium.jpeg'
import aviary from '../assets/images/IMG_9488.jpg'
import aquascape from '../assets/images/IMG_2883.jpg'
import sungai from '../assets/images/IMG_4688.jpg'
import maintenance from '../assets/images/IMG_4680.jpg'
import kandang from '../assets/images/IMG-20240416-WA0009.jpg'
import kolam from '../assets/images/kolammm.jpeg'

function Servicesection() {

  const Motionx = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.5, ease: "easeInOut" },
    viewport: { once: true },
  };

  const Motiony = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.5, ease: "easeInOut" },
    viewport: { once: true },
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
                  <p className="text-center font-light text-sm xl:text-lg 2xl:text-xl">What We Serve ?</p>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 xl:grid-cols-4 p-2 xl:p-8 gap-5 rounded-2xl">
                <div className="">
                  <motion.div {...Motiony}>
                    <img className="rounded-xl h-1/2 w-full" src={aquascape} alt=""
                    />
                  </motion.div>
                  <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                    <div>
                      <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-2xl text-left text-emerald-700 font-semibold">Jasa Pembuatan Aquascape</h1>
                      <p className="text-left font-light text-xs xl:text-base 2xl:text-xl line-clamp-6">
                      Aquascape adalah seni menciptakan lanskap air dalam wadah seperti akuarium, dengan menggunakan tanaman, batu, kayu, dan dekorasi untuk menciptakan taman air yang indah dan sehat.
                      </p>
                    </div>
                    <div className=" flex justify-end">
                      <div className='border-b-2 border-blue-400 w-fit'>
                        <div className="">
                          <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="https://api.whatsapp.com/send/?phone=6289501899763&text&type=phone_number&app_absent=0">Order Now
                            <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <motion.div {...Motiony}>
                    <img className="rounded-xl h-1/2 w-full" src={paludarium} alt=""
                    />
                  </motion.div>
                  <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                    <div>
                      <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-2xl text-left text-emerald-700 font-semibold">Jasa Pembuatan Paludarium</h1>
                      <p className="text-left font-light text-xs xl:text-base 2xl:text-xl line-clamp-6">
                      Paludarium adalah habitat buatan yang mencakup area darat dan air dalam satu wadah, seperti akuarium atau terrarium. Ini adalah lingkungan yang meniru ekosistem alami yang terdapat di antara darat dan air, sering kali digunakan untuk memelihara tanaman air, reptil, amfibi, dan serangga.
                      </p>
                    </div>
                    <div className=" flex justify-end">
                      <div className='border-b-2 border-blue-400 w-fit'>
                        <div className="">
                          <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="https://api.whatsapp.com/send/?phone=6289501899763&text&type=phone_number&app_absent=0">Order Now
                            <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <motion.div {...Motiony}>
                    <img className="rounded-xl h-1/2 w-full" src={landscape} alt=""
                    />
                  </motion.div>
                  <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                    <div>
                      <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-2xl text-left text-emerald-700 font-semibold">Jasa Pembuatan Landscape</h1>
                      <p className="text-left font-light text-xs xl:text-base 2xl:text-xl line-clamp-6">
                      Landscape adalah tata letak dan karakteristik alami atau buatan dari sebuah area tertentu, terutama dalam konteks visual dan estetika. Ini mencakup fitur-fitur seperti tanah, air, tumbuhan, dan elemen-elemen lainnya yang membentuk tampilan keseluruhan suatu wilayah, baik dalam skala besar seperti pegunungan dan lembah, maupun dalam skala kecil seperti taman atau kebun.
                      </p>
                    </div>
                    <div className=" flex justify-end">
                      <div className='border-b-2 border-blue-400 w-fit'>
                        <div className="">
                          <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="https://api.whatsapp.com/send/?phone=6289501899763&text&type=phone_number&app_absent=0">Order Now
                            <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <motion.div {...Motiony}>
                    <img className="rounded-xl h-1/2 w-full" src={aviary} alt=""
                    />
                  </motion.div>
                  <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                    <div>
                      <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-2xl text-left text-emerald-700 font-semibold">⁠Pembuatan Ekosistem Aviary</h1>
                      <p className="text-left font-light text-xs xl:text-base 2xl:text-xl line-clamp-6">
                      Pembuatan ekosistem aviary adalah proses merancang dan membangun habitat buatan untuk burung agar mirip dengan lingkungan alami mereka. Ini melibatkan pemilihan tumbuhan, struktur, dan elemen lainnya agar burung dapat bergerak bebas dan merasa aman.
                      </p>
                    </div>
                    <div className=" flex justify-end">
                      <div className='border-b-2 border-blue-400 w-fit'>
                        <div className="">
                          <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="https://api.whatsapp.com/send/?phone=6289501899763&text&type=phone_number&app_absent=0">Order Now
                            <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-4 p-2 xl:p-8 gap-5 rounded-2xl">
              <div className="">
                  <motion.div {...Motiony}>
                    <img className="rounded-xl h-1/2 w-full" src={sungai} alt=""
                    />
                  </motion.div>
                  <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                    <div>
                      <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-2xl text-left text-emerald-700 font-semibold">⁠Pembuatan Sungai Buatan</h1>
                      <p className="text-left font-light text-xs xl:text-base 2xl:text-xl line-clamp-6">
                      Sungai buatan adalah aliran air buatan manusia yang meniru sungai alami, sering kali digunakan untuk tujuan estetika, pengaturan tata air, atau perlindungan dari banjir. Sungai buatan dapat dirancang untuk menciptakan lingkungan yang indah dan fungsional, baik di dalam ruangan maupun di luar ruangan.
                      </p>
                    </div>
                    <div className=" flex justify-end">
                      <div className='border-b-2 border-blue-400 w-fit'>
                        <div className="">
                          <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="https://api.whatsapp.com/send/?phone=6289501899763&text&type=phone_number&app_absent=0">Order Now
                            <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="">
                  <motion.div {...Motiony}>
                    <img className="rounded-xl h-1/2 w-full" src={landscape} alt=""
                    />
                  </motion.div>
                  <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                    <div>
                      <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-2xl text-left text-emerald-700 font-semibold">⁠Pembuatan Taman</h1>
                      <p className="text-left font-light text-xs xl:text-base 2xl:text-xl line-clamp-6">
                      Pembuatan taman adalah proses merancang dan membangun ruang luar yang ditanami dengan tumbuhan, jalan setapak, dan elemen dekoratif lainnya untuk tujuan estetika, rekreasi, atau fungsional.
                      </p>
                    </div>
                    <div className=" flex justify-end">
                      <div className='border-b-2 border-blue-400 w-fit'>
                        <div className="">
                          <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="https://api.whatsapp.com/send/?phone=6289501899763&text&type=phone_number&app_absent=0">Order Now
                            <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="">
                  <motion.div {...Motiony}>
                    <img className="rounded-xl h-1/2 w-full" src={kolam} alt=""
                    />
                  </motion.div>
                  <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                    <div>
                      <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-2xl text-left text-emerald-700 font-semibold">⁠Pembuatan Kolam Ikan</h1>
                      <p className="text-left font-light text-xs xl:text-base 2xl:text-xl line-clamp-6">
                      Proses membangun kolam khusus untuk menampung ikan, baik untuk hobi, budidaya, atau tujuan komersial. Proses ini melibatkan pemilihan lokasi, perencanaan desain, pembangunan kolam, instalasi sistem air, penambahan ikan, dan perawatan berkala.
                      </p>
                    </div>
                    <div className=" flex justify-end">
                      <div className='border-b-2 border-blue-400 w-fit'>
                        <div className="">
                          <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="https://api.whatsapp.com/send/?phone=6289501899763&text&type=phone_number&app_absent=0">Order Now
                            <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="">
                  <motion.div {...Motiony}>
                    <img className="rounded-xl h-1/2 w-full" src={maintenance} alt=""
                    />
                  </motion.div>
                  <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                    <div>
                      <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-2xl text-left text-emerald-700 font-semibold">⁠Maintenance/Perawatan</h1>
                      <p className="text-left font-light text-xs xl:text-base 2xl:text-xl line-clamp-6">
                      Maintenance adalah tindakan menjaga atau memperbaiki agar sesuatu tetap berfungsi dengan baik, berfungsi dengan optimal dan memenuhi standar tertentu. Ini bisa mencakup perawatan rutin, perbaikan, pembersihan, dan penggantian.                      </p>
                    </div>
                    <div className=" flex justify-end">
                      <div className='border-b-2 border-blue-400 w-fit'>
                        <div className="">
                          <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="https://api.whatsapp.com/send/?phone=6289501899763&text&type=phone_number&app_absent=0">Order Now
                            <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <motion.div {...Motiony}>
                    <img className="rounded-xl h-1/2 w-full" src={kandang} alt=""
                    />
                  </motion.div>
                  <div className="p-4 space-y-4 xl:space-y-8 rounded-b-xl">
                    <div>
                      <h1 className="text-xs lg:text-base xl:text-lg 2xl:text-2xl text-left text-emerald-700 font-semibold">⁠Pembuatan Kandang Aviary</h1>
                      <p className="text-left font-light text-xs xl:text-base 2xl:text-xl line-clamp-6">
                      Pembuatan kandang aviary melibatkan desain dan konstruksi kandang besar yang meniru lingkungan alami burung. Ini termasuk pemilihan material yang aman, ruang terbuka yang cukup untuk terbang, tempat berteduh, dan area untuk makan serta minum.
                      </p>
                    </div>
                    <div className=" flex justify-end">
                      <div className='border-b-2 border-blue-400 w-fit'>
                        <div className="">
                          <a className='text-blue-600 flex gap-2 text-sm xl:text-lg 2xl:text-xl font-semibold' href="https://api.whatsapp.com/send/?phone=6289501899763&text&type=phone_number&app_absent=0">Order Now
                            <svg className='my-auto bg-blue-400 p-1 h-6 w-6 xl:w-7 xl:h-8 2xl:h-9 2xl:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicesection
