import { useRef, useEffect } from "react";
import service1 from "../assets/images/service4.jpg";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service5.jpg";
import service4 from "../assets/images/service1.jpg";
import service5 from "../assets/images/service3.jpg";
import service6 from "../assets/images/service6.jpg";
import service7 from "../assets/images/service7.jpg";
import service8 from "../assets/images/service8.jpg";

function Imgsection() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let scrollInterval;

        const startScrolling = () => {
            scrollInterval = setInterval(() => {
                container.scrollLeft += 2; // Adjust the scroll speed as needed
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }, 50); // Adjust the interval as needed
        };

        const stopScrolling = () => {
            clearInterval(scrollInterval);
        };

        container.addEventListener("mouseenter", stopScrolling);
        container.addEventListener("mouseleave", startScrolling);

        startScrolling();

        return () => {
            container.removeEventListener("mouseenter", stopScrolling);
            container.removeEventListener("mouseleave", startScrolling);
            clearInterval(scrollInterval);
        };
    }, []);

    return (
        <div className="h-fit">
            <div
                ref={containerRef}
                className="mx-auto flex gap-4 overflow-hidden"
                style={{ whiteSpace: "nowrap", overflowX: "scroll" }}
            >
                <img className="h-1/2 w-1/2 xl:h-fit xl:w-1/2 my-auto" src={service3} alt="" />
                <img className="h-1/2 w-1/4 xl:h-fit xl:w-1/4 my-auto" src={service4} alt="" />
                <img className="h-1/2 w-1/5 xl:h-fit xl:w-1/5 my-auto" src={service8} alt="" />
                <img className="h-1/2 w-1/3 xl:h-fit xl:w-1/3 my-auto" src={service2} alt="" />
                <img className="h-1/2 w-1/2 xl:h-fit xl:w-1/2 my-auto" src={service1} alt="" />
                <img className="h-1/2 w-1/4 xl:h-fit xl:w-1/4 my-auto" src={service7} alt="" />
                <img className="h-1/2 w-1/4 xl:h-fit xl:w-1/4 my-auto" src={service6} alt="" />
                <img className="h-1/2 w-1/3 xl:h-fit xl:w-1/3 my-auto" src={service5} alt="" />
            </div>
        </div>
    );
}

export default Imgsection;
