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

    var settings1 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false // This line removes the arrows
    };
    var settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 5000,
        rtl: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false // This line removes the arrows
    };

    return (
        <div className="h-fit">
            <div>
                <Slider {...settings1}>
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service3} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service4} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service8} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service2} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service1} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service7} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service5} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service9} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service10} alt="" />
                </Slider>
            </div>
            <div>
                <Slider {...settings2}>
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service11} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service12} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service13} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service14} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service15} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service16} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service17} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service18} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service19} alt="" />
                    <img className="xl:h-96 h-52 w-auto p-2 mx-auto" src={service20} alt="" />
                </Slider>
            </div>
        </div>
    );
}

export default Imgsection;
