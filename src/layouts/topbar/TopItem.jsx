import { ChatSvg } from "../../components/Svgs";

const TopItem = ({ page, changePage }) => {
    return (
        <div className="item flex flex-col">
            <div className="flex px-4 cursor-pointer">
                <div className="h-11 w-11">
                    <ChatSvg active />
                </div>
                <span className="font-semibold text-[#B6F09C]">Artificium</span>
            </div>
            <div className={`w-full h-[3px] ${true ? "bg-[#B6F09C]" : ""}`}></div>
        </div>
    );
}

export default TopItem;