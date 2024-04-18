import service1 from "../assets/images/service4.jpg";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service5.jpg";
import service4 from "../assets/images/service1.jpg";
import service5 from "../assets/images/service3.jpg";
import service6 from "../assets/images/service6.jpg";
import service7 from "../assets/images/service7.jpg";

function Imgsection() {
    return (
        <div className="h-fit">
            <div className="space-y-8 overflow-auto">
                <div className="flex space-x-4">
                    <img className="h-full w-3/4 my-auto" src={service3} alt="" />
                    <img className="h-full w-1/2 my-auto" src={service4} alt="" />
                    <img className="h-full w-1/2 my-auto" src={service2} alt="" />
                    <img className="h-full w-1/2 my-auto" src={service1} alt="" />
                    <img className="h-full w-1/3 my-auto" src={service7} alt="" />
                    <img className="h-full w-1/3 my-auto" src={service6} alt="" />
                    <img className="h-full w-1/3 my-auto" src={service5} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Imgsection;
