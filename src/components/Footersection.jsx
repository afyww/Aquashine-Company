import logo from '../assets/images/logoaqua.png'

const Footersection = () => {
    return (
        <footer className="h-fit w-full bg-gray-800 mx-auto p-2 xl:p-10">
            <div className="space-y-5">
                <div className=" grid grid-cols-4">
                    <div className="col-span-2 xl:col-span-3 md:col-span-3 2xl:col-span-3">
                        <a href="/">
                            <img className='w-1/4' src={logo} alt="" />
                        </a>
                    </div>
                    <div className="col-span-2 xl:col-span-1 md:col-span-1 2xl:col-span-1 flex justify-between text-white text-xs xl:text-base 2xl:text-base">
                        <a href="#about" aria-label="Read more page About">About</a>
                        <a href="#service" aria-label="Read more page Service">Service</a>
                        <a href="#project" aria-label="Read more page Project">Projects</a>
                        <a href="#contact" aria-label="Read more page About">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footersection;
