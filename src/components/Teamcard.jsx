import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import momon from '../assets/images/momonceo.jpeg'
import naufal from '../assets/images/naufal.jpeg'
import bili from '../assets/images/bili.jpeg'
import restu from '../assets/images/restu.jpeg'


function Teamcard() {

    var settings = {
        dots: true,
        infinite: true, // Set infinite to true for auto-slide
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
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
    <div className="p-7 xl:p-8">
    <div>
        <Slider {...settings}>
            <div>
            <img className="h-80 xl:h-96 w-auto p-2 mx-auto" src={momon} alt="" />
            <h1 className="text-center font-bold">Momon</h1>
            <h1 className="text-center font-light">Founder & Ceo</h1>
            </div>
            <div>
            <img className="h-80 xl:h-96 w-auto p-2 mx-auto" src={naufal} alt="" />
            <h1 className="text-center font-bold">Momon</h1>
            <h1 className="text-center font-light">Founder & Ceo</h1>
            </div>
            <div>
            <img className="h-80 xl:h-96 w-auto p-2 mx-auto" src={bili} alt="" />
            <h1 className="text-center font-bold">Momon</h1>
            <h1 className="text-center font-light">Founder & Ceo</h1>
            </div>
            <div>
            <img className="h-80 xl:h-96 w-auto p-2 mx-auto" src={restu} alt="" />
            <h1 className="text-center font-bold">Momon</h1>
            <h1 className="text-center font-light">Founder & Ceo</h1>
            </div>
        </Slider>
    </div>
</div>
)
}

export default Teamcard
