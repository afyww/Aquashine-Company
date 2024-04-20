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
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
    <div className="bg-white p-7 xl:p-8 rounded-b-xl">
    <div>
        <Slider {...settings}>
            <div>
            <img className="h-80 xl:h-96 w-auto p-2" src={momon} alt="" />
            <h1 className="text-center font-bold">Momon</h1>
            <h1 className="text-center font-light">Founder & Ceo</h1>
            </div>
            <div>
            <img className="h-80 xl:h-96 w-auto p-2" src={naufal} alt="" />
            <h1 className="text-center font-bold">Momon</h1>
            <h1 className="text-center font-light">Founder & Ceo</h1>
            </div>
            <div>
            <img className="h-80 xl:h-96 w-auto p-2" src={bili} alt="" />
            <h1 className="text-center font-bold">Momon</h1>
            <h1 className="text-center font-light">Founder & Ceo</h1>
            </div>
            <div>
            <img className="h-80 xl:h-96 w-auto p-2" src={restu} alt="" />
            <h1 className="text-center font-bold">Momon</h1>
            <h1 className="text-center font-light">Founder & Ceo</h1>
            </div>
        </Slider>
    </div>
</div>
)
}

export default Teamcard
