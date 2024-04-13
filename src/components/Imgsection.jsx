import service1 from "../assets/images/service4.jpg";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service5.jpg";
import service4 from "../assets/images/service1.jpg";
import service5 from "../assets/images/service3.jpg";

function Imgsection() {
    return (
        <div className="h-fit">
            <div className="mx-auto space-y-8 overflow-auto">
                <div className="flex space-x-4">
                    <img className="h-fit w-1/2 xl:h-fit xl:w-1/2 rounded-l-xl" src={service3} alt="" />
                    <img className="h-fit w-1/3 xl:h-fit xl:w-1/3" src={service2} alt="" />
                    <img className="h-fit w-1/4 xl:h-fit xl:w-1/4" src={service4} alt="" />
                    <img className="h-fit w-1/4 xl:h-fit xl:w-1/4 rounded-r-xl" src={service5} alt="" />
                </div>
                <div className="flex ">
                <img className="h-fit xl:h-fit w-1/2 rounded-l-xl" src={service1} alt="" />

                </div>
            </div>
        </div>
    );
}

export default Imgsection;
