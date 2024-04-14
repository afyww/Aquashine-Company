import service1 from "../assets/images/service4.jpg";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service5.jpg";
import service4 from "../assets/images/service1.jpg";
import service5 from "../assets/images/service3.jpg";
import service6 from "../assets/images/service6.jpg";
import service7 from "../assets/images/service7.jpg";
import service8 from "../assets/images/service8.jpg";
import service9 from "../assets/images/service9.jpg";

function Imgsection() {
    return (
        <div className="h-fit">
            <div className="mx-auto space-y-8 overflow-auto">
                <div className="flex space-x-4">
                    <img className="h-1/2 w-1/2 xl:h-fit xl:w-1/2 rounded-l-xl" src={service3} alt="" />
                    <img className="h-1/2 w-1/4 xl:h-fit xl:w-1/4" src={service4} alt="" />
                    <img className="h-1/2 w-1/5 xl:h-fit xl:w-1/5 my-auto" src={service8} alt="" />
                    <img className="h-1/2 w-1/3 xl:h-fit xl:w-1/3 rounded-r-xl" src={service2} alt="" />
                </div>
                <div className="flex space-x-4">
                    <img className="h-1/2 w-1/2 xl:h-fit xl:w-1/2 rounded-l-xl my-auto" src={service1} alt="" />
                    <img className="h-1/2 w-1/4 xl:h-fit xl:w-1/4" src={service7} alt="" />
                    <img className="h-1/2 w-1/4 xl:h-fit xl:w-1/4 my-auto" src={service6} alt="" />
                    <img className="h-1/2 w-1/3 xl:h-fit xl:w-1/3 rounded-r-xl" src={service5} alt="" />
                </div>

            </div>
        </div>
    );
}

export default Imgsection;
