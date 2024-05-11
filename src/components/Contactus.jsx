import { SiGmail } from "react-icons/si";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


function Contactus() {
    return (
        <div className="p-4 xl:p-8">
            <div className="">
                <div className="space-y-8 xl:space-y-16">
                    <div className="">
                        <h1 className="text-xl lg:text-2xl xl:text-4xl 2xl:text-7xl text-left text-emerald-700 font-semibold">
                            Contact Us
                        </h1>
                    </div>
                    <div className='space-y-8 text-left'>
                        <div className='flex space-x-4'>
                            <FaInstagram className="w-5 h-5 xl:w-8 xl:h-8 2xl:h-10 2xl:w-10" />
                            <h1 className='my-auto text-sm xl:text-lg 2xl:text-xl text-black'>shinecompany29</h1>
                        </div>
                        <div className='flex space-x-4'>
                            <FaFacebookSquare className="w-5 h-5 xl:w-8 xl:h-8 2xl:h-10 2xl:w-10" />
                            <h1 className='my-auto text-sm xl:text-lg 2xl:text-xl text-black'>shineshine</h1>
                        </div>
                        <div className='flex space-x-4'>
                            <IoLogoWhatsapp className="w-5 h-5 xl:w-8 xl:h-8 2xl:h-10 2xl:w-10" />
                            <h1 className='my-auto text-sm xl:text-lg 2xl:text-xl text-black'>089501899763</h1>
                        </div>
                        <div className='flex space-x-4'>
                            <SiGmail className="w-5 h-5 xl:w-8 xl:h-8 2xl:h-10 2xl:w-10" />
                            <h1 className='my-auto text-sm xl:text-lg 2xl:text-xl text-black'>aquashinesmg@gmail.com</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus
