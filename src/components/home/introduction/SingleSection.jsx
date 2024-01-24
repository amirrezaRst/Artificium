import { ArrowRightSvg, HomeChatSvg } from "../../Svgs";
import Item from "./Item";

const SingleSection = ({ title, icon, items, color }) => {
    return (
        <div className="home-introduction">
            <div
                className={`logo w-12 h-12 p-3 rounded-full shadow-intro-${color}`}
            >
                {icon}
            </div>
            <h4 className="lg:text-xl text-[#ffffffe1] mt-2">{title}</h4>

            <div className="group mt-5 flex flex-col gap-3 ">

                {items.map(({ label }, index) => (
                    <Item key={index} label={label} />
                ))}

            </div>
        </div>
    );
}

export default SingleSection;