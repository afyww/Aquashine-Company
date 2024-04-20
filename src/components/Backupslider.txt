import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import service1 from "../assets/images/service4.jpg";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service5.jpg";
import service4 from "../assets/images/service1.jpg";
import service5 from "../assets/images/service3.jpg";
import service6 from "../assets/images/service6.jpg";
import service7 from "../assets/images/service7.jpg";
import service8 from "../assets/images/service8.jpg";

function Imgsection() {
    const sliderRef = useRef(null); // Create a ref for the slider component

    var settings = {
        dots: true,
        infinite: true, // Set infinite to true for auto-slide
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 4000, // Set the autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    
    return (
        <div className="h-fit">
            <div>
                <Slider ref={sliderRef} {...settings}>
                    <img className="h-80 w-auto p-2" src={service3} alt="" />
                    <img className="h-80 w-auto p-2" src={service4} alt="" />
                    <img className="h-80 w-auto p-2" src={service8} alt="" />
                    <img className="h-80 w-auto p-2" src={service2} alt="" />
                    <img className="h-80 w-auto p-2" src={service1} alt="" />
                    <img className="h-80 w-auto p-2" src={service7} alt="" />
                    <img className="h-80 w-auto p-2" src={service6} alt="" />
                    <img className="h-80 w-auto p-2" src={service5} alt="" />
                </Slider>
            </div>
            <div className="my-10 flex">
                <button className="bg-emerald-600 text-white mx-auto p-2 rounded-full slick-arrow" onClick={() => sliderRef.current.slickPrev()}>
                    <AiOutlineLeft
                        className="w-8 h-8"
                    />
                </button>
                <button className="bg-emerald-600 text-white mx-auto p-2 rounded-full slick-arrow" onClick={() => sliderRef.current.slickNext()}>
                    <AiOutlineRight
                        className="w-8 h-8"
                    />
                </button>
            </div>
        </div>
    );
}

export default Imgsection;
