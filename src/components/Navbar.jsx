import { useState, useEffect } from 'react';
import logo from '../assets/images/logoaqua.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) { // Set your mobile breakpoint
                setIsMobileView(true);
            } else {
                setIsMobileView(false);
            }
        };

        handleResize(); // Check initial viewport width
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section>
            <div className='' />
            <nav className={`fixed z-50 top-0 right-0 left-0 shadow-xl ${scrolling || isMobileView ? 'bg-gray-800' : 'bg-transparent'}`}>
                <div className="mx-5 p-3.5 xl:mx-14">
                    <div className="flex justify-between">
                        <div className=''>
                            <a href="/" className="">
                                <img className='w-1/3' src={logo} alt="" />
                            </a>
                        </div>
                        <div className="hidden items-center md:flex xl:flex text-white">
                            <a href="#home" aria-label="Read more page home" onClick={closeMobileMenu} className="px-5 text-xl font-sans hover:underline">Home</a>
                            <a href="#about" aria-label="Read more page about" onClick={closeMobileMenu} className="px-5 text-xl font-sans hover:underline">About</a>
                            <a href="#service" aria-label="Read more page service" onClick={closeMobileMenu} className="px-5 text-xl font-sans hover:underline">Services</a>
                            <a href="#project" aria-label="Read more page project" onClick={closeMobileMenu} className="px-5 text-xl font-sans hover:underline">Projects</a>
                            <a href="#contact" aria-label="Read more page contact" onClick={closeMobileMenu} className="px-5 text-xl font-sans hover:underline">Contact</a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100px" height="100px">
                                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`mobile-menu md:hidden xl:hidden text-white ${isMobileMenuOpen ? '' : 'hidden'}`}>
                    <a href="#home" onClick={closeMobileMenu} className="block py-3 px-5 text-xs font-sans rounded-xl">Home</a>
                    <a href="#about" onClick={closeMobileMenu} className="block py-3 px-5 text-xs font-sans rounded-xl">About</a>
                    <a href="#service" onClick={closeMobileMenu} className="block py-3 px-5 text-xs font-sans rounded-xl">Services</a>
                    <a href="#project" onClick={closeMobileMenu} className="block py-3 px-5 text-xs font-sans rounded-xl">Projects</a>
                    <a href="#contact" onClick={closeMobileMenu} className="block py-3 px-5 text-xs font-sans rounded-xl">Contact</a>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
