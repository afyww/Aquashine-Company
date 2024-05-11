import logo from '../assets/images/logoaqua.png'
import { SiGmail } from "react-icons/si";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footersection = () => {
    return (
        <footer className="h-fit w-full bg-gray-800 mx-auto rounded-t-xl">
            <div className="">
                <div className=" grid grid-cols-3 xl:grid-cols-4 p-3 xl:p-6 space-y-4 xl:space-y-0">
                    <div className="my-auto col-span-3 xl:col-span-1">
                        <a href="/">
                            <img className='w-3/4 h-3/4' src={logo} alt="" />
                        </a>
                    </div>
                    <div className='space-y-4 mx-auto'>
                        <div>
                            <h1 className='font-semibold text-emerald-600 text-center text-xs xl:text-lg 2xl:text-xl'>Our Address</h1>
                        </div>
                        <div className='text-center'>
                            <h1 className='block text-white text-xs xl:text-sm 2xl:text-lg'>Jl. Raya Kauman Kudu No.39, Penggaron Lor, Kec. Genuk, Kota Semarang, Jawa Tengah 50113</h1>
                        </div>
                    </div>
                    <div className='space-y-4 mx-auto col-span-2 xl:col-span-1'>
                        <div>
                            <h1 className='font-semibold text-emerald-600 text-center text-xs xl:text-lg 2xl:text-xl'>Quick Link</h1>
                        </div>
                        <div className='space-y-2 text-left'>
                            <a className='block text-white text-xs xl:text-sm 2xl:text-lg' href="#home">Home</a>
                            <a className='block text-white text-xs xl:text-sm 2xl:text-lg' href="#about">About</a>
                            <a className='block text-white text-xs xl:text-sm 2xl:text-lg' href="#service">Services</a>
                            <a className='block text-white text-xs xl:text-sm 2xl:text-lg' href="#project">Projects</a>
                            <a className='block text-white text-xs xl:text-sm 2xl:text-lg' href="#contact">Contact</a>
                        </div>
                    </div>
                    <div className='space-y-4 mx-auto col-span-3 xl:col-span-1'>
                        <div>
                            <h1 className='font-semibold text-emerald-600 text-center text-xs xl:text-lg 2xl:text-xl'>Connect With Us</h1>
                        </div>
                        <div className='flex gap-4 xl:gap-8'>
                            <a href="https://www.instagram.com/shinecompany29/">
                                <FaInstagram className='text-white w-8 h-8' />
                            </a>
                            <a href="https://www.facebook.com/vian.bastian.188?locale=id_ID">
                                <FaFacebookSquare className='text-white w-8 h-8' />
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=6289501899763&text&type=phone_number&app_absent=0">
                                <IoLogoWhatsapp className='text-white w-8 h-8' />
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aquashinesmg@gmail.com">
                                <SiGmail className="text-white w-8 h-8" />
                            </a>
                        </div>

                    </div>
                </div>
                <div className='text-center p-2.5 xl:p-5 my-auto border-t mx-10 border-gray-100'>
                    <h1 className='text-white text-xs'>©  2024 Copyright | Aquashine Company</h1>
                </div>
            </div>
        </footer>
    );
};

export default Footersection;
