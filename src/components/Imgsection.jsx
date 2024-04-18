import { useState } from 'react';
import service1 from "../assets/images/service4.jpg";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service5.jpg";
import service4 from "../assets/images/service1.jpg";
import service5 from "../assets/images/service3.jpg";
import service6 from "../assets/images/service6.jpg";
import service7 from "../assets/images/service7.jpg";

function Imgsection() {
    const [offset, setOffset] = useState(0);
    const totalImages = 4; // Total number of images

    const handleLeftArrowClick = () => {
        if (offset < 0) {
            setOffset(prevOffset => {
                const newOffset = prevOffset + 100;
                return newOffset > 0 ? 0 : newOffset;
            });
        }
    };

    const handleRightArrowClick = () => {
        const lastOffset = -100 * (totalImages - 1); // Calculate the last offset
        if (offset > lastOffset) {
            setOffset(prevOffset => {
                const newOffset = prevOffset - 100;
                return newOffset < lastOffset ? lastOffset : newOffset;
            });
        }
    };

    return (
        <div className="relative h-fit overflow-hidden">
            <div className="flex space-x-4" style={{ transform: `translateX(${offset}%)` }}>
                <div className="w-0 flex-1"></div>
                <img className="h-full w-3/4 my-auto" src={service3} alt="" />
                <img className="h-full w-1/3 my-auto" src={service4} alt="" />
                <img className="h-full w-1/2 my-auto" src={service2} alt="" />
                <img className="h-full w-1/2 my-auto" src={service1} alt="" />
                <img className="h-full w-1/3 my-auto" src={service7} alt="" />
                <img className="h-full w-1/3 my-auto" src={service6} alt="" />
                <img className="h-full w-1/3 my-auto" src={service5} alt="" />
                <div className="w-0 flex-1"></div>
            </div>
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-md" onClick={handleLeftArrowClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-md" onClick={handleRightArrowClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}

export default Imgsection;
