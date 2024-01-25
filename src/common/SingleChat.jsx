import { CopySvg, EllipseSvg } from "../components/Svgs";
import ImageCard from "./ImageCard";

const SingleChat = ({ robot, user, time, text }) => {
    return (
        <section
            className="flex flex-col border-2 border-special-gray-2 rounded-custom xl:px-5 xl:py-5 sm:px-4 sm:py-4 py-4 px-5"
        >

            <div className="flex w-full">
                <div className="rounded-2xl w-11 h-11">
                    <img src={`./images/${robot ? "artificium" : "avatar15"}.png`} alt="avatar" />
                </div>
                <div className="flex flex-col flex-1 ml-4 md:gap-3">

                    <div className="flex items-baseline">
                        <h4 className="text-white mr-6" >{user}</h4>
                        <span className="text-special-gray-3 lg:text-sm text-xs">{time}</span>
                    </div>
                    <p className="lg:text-base md:text-sm">{text}</p>

                </div>
                <button className="w-7 h-7">
                    <CopySvg />
                </button>
            </div>
            {!!robot &&
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 sm:grid-cols-3 mt-6 mb-4 xl:gap-6 gap-3">

                    <ImageCard path={"art1"} />
                    <ImageCard path={"art2"} />
                    <ImageCard path={"art3"} />

                </div>
            }

        </section>
    );
}

export default SingleChat;