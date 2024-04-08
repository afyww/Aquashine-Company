import service1 from "../assets/images/service4.jpg";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service5.jpg";

function Imgsection() {
    return (
        <div className="h-fit">
            <div className="grid grid-cols-2 mx-auto space-x-8">
                <div className="space-y-8">
                    <img className="h-fit w-fit rounded-l-xl" src={service1} alt="" />
                    <img className="h-fit w-fit rounded-l-xl" src={service3} alt="" />
                </div>
                <div>
                    <img className="h-full w-fit rounded-r-xl" src={service2} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Imgsection;
