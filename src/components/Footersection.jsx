import logo from '../assets/images/logoaqua.png'

const Footersection = () => {
    return (
        <footer className="h-fit w-full bg-gray-800 mx-auto">
            <div className="">
                <div className=" grid grid-cols-3 xl:grid-cols-4 p-3 xl:p-6 space-y-4 xl:space-y-0">
                    <div className="my-auto">
                        <a href="/">
                            <img className='w-3/4 h-3/4' src={logo} alt="" />
                        </a>
                    </div>
                    <div className='space-y-4 mx-auto'>
                        <div>
                            <h1 className='font-semibold text-emerald-600 text-xs xl:text-lg'>Our Address</h1>
                        </div>
                        <div className='space-y-2 text-left'>
                            <a className='block text-white text-xs' href="#home">Home</a>
                            <a className='block text-white text-xs' href="#about">About</a>
                            <a className='block text-white text-xs' href="#service">Services</a>
                            <a className='block text-white text-xs' href="#project">Projects</a>
                            <a className='block text-white text-xs' href="#contact">Contact</a>
                        </div>
                    </div>
                    <div className='space-y-4 mx-auto'>
                        <div>
                            <h1 className='font-semibold text-emerald-600 text-xs xl:text-lg'>Quick Link</h1>
                        </div>
                        <div className='space-y-2 text-left'>
                            <a className='block text-white text-xs' href="#home">Home</a>
                            <a className='block text-white text-xs' href="#about">About</a>
                            <a className='block text-white text-xs' href="#service">Services</a>
                            <a className='block text-white text-xs' href="#project">Projects</a>
                            <a className='block text-white text-xs' href="#contact">Contact</a>
                        </div>
                    </div>
                    <div className='space-y-4 mx-auto col-span-3 xl:col-span-1'>
                        <div>
                            <h1 className='font-semibold text-emerald-600 text-xs xl:text-lg'>News Letter</h1>
                        </div>
                        <div className='text-left space-y-3'>
                            <div>
                                <h1 className='text-white text-xs'>Subscribe Our News Letter & Get All News Latest</h1>
                            </div>
                            <div className='space-y-3'>
                                <div>
                                <input className='p-2 w-full rounded-xl' placeholder='Email' type="email" />
                                </div>
                                <div className=' bg-yellow-500 p-2 w-full text-center mx-auto rounded-xl'>
                                <button className='text-white'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center p-2.5 xl:p-5 my-auto border-t border-gray-100'>
                    <h1 className='text-white text-xs'>Copyright 2024</h1>
                </div>
            </div>
        </footer>
    );
};

export default Footersection;
