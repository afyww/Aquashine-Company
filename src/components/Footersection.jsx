import logo from '../assets/images/logoaqua.png'

const Footersection = () => {
    return (
        <footer className="h-fit w-full bg-gray-800 mx-auto">
            <div className="">
                <div className=" grid grid-cols-3 xl:grid-cols-4 p-3 xl:p-6 space-y-4 xl:space-y-0">
                    <div className="my-auto col-span-3 xl:col-span-1">
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
                    <div className='space-y-4 mx-auto'>
                        <div>
                            <h1 className='font-semibold text-emerald-600 text-xs xl:text-lg'>Connect With Us</h1>
                        </div>
                    </div>
                </div>
                <div className='text-center p-2.5 xl:p-5 my-auto border-t mx-10 border-gray-100'>
                    <h1 className='text-white text-xs'>Copyright 2024</h1>
                </div>
            </div>
        </footer>
    );
};

export default Footersection;
