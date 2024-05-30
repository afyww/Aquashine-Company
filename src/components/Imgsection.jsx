import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import service1 from "../assets/images/service4.jpg";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service5.jpg";
import service4 from "../assets/images/service1.jpg";
import service5 from "../assets/images/service3.jpg";
import service7 from "../assets/images/service7.jpg";
import service8 from "../assets/images/service8.jpg";
import service9 from '../assets/images/IMG_0117.jpg';
import service10 from '../assets/images/IMG_0358.jpg';
import service11 from '../assets/images/IMG_1274.jpg';
import service12 from '../assets/images/IMG_1392.jpg';
import service13 from '../assets/images/IMG_1745.jpg';
import service14 from '../assets/images/IMG_1893.jpg';
import service15 from '../assets/images/IMG_2033.jpg';
import service16 from '../assets/images/IMG_2220.jpg';
import service17 from '../assets/images/IMG_2488.jpg';
import service18 from '../assets/images/IMG_2492.jpg';
import service19 from '../assets/images/IMG_2830.jpg';
import service20 from '../assets/images/IMG_2834.jpg';

function Imgsection() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // Tablet breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const settings1 = {
        ...settings,
        rtl: false
    };

    const settings2 = {
        ...settings,
        rtl: true
    };

    const images1 = [service3, service4, service8, service2, service1, service7, service5, service9, service10];
    const images2 = [service11, service12, service13, service14, service15, service16, service17, service18, service19, service20];

    return (
        <div className="h-fit">
            <div>
                <Slider {...settings1}>
                    {images1.map((src, index) => (
                        <img key={index} className="xl:h-96 h-52 w-full p-2 mx-auto" src={src} alt="" />
                    ))}
                </Slider>
            </div>
            <div>
                <Slider {...settings2}>
                    {images2.map((src, index) => (
                        <img key={index} className="xl:h-96 h-52 w-full p-2 mx-auto" src={src} alt="" />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Imgsection;
