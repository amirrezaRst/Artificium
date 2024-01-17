import { ChatSvg, LibrarySvg, LogoSvg } from "../../components/Svgs";
import TopItem from "./TopItem";

const TopNav = ({ page, changePage }) => {

    const handlePage = (page) => {
        // changePage
    }

    return (
        <nav className="content flex space-x-5">
            <div className="item flex flex-col">
                <div className="flex px-4 cursor-pointer">
                    <div className="h-11 w-11">
                        <LogoSvg active />
                    </div>
                    <span className="font-semibold text-[#B6F09C]">Artificium</span>
                </div>
                <div className={`w-full h-[3px] ${true ? "bg-[#B6F09C]" : ""}`}></div>
            </div>
            <div className="item flex flex-col">
                <div className="flex px-4 cursor-pointer">
                    <div className="h-11 w-11">
                        <ChatSvg />
                    </div>
                    <span className={`font-semibold ${false ? "text-[#B6F09C]" : "text-[#686b6e]"}`}>Chat</span>
                </div>
                <div className={`w-full h-[3px] ${false ? "bg-[#B6F09C]" : ""}`}></div>
            </div>
            <div className="item flex flex-col">
                <div className="flex px-4 cursor-pointer">
                    <div className="h-11 w-11">
                        <LibrarySvg />
                    </div>
                    <span className={`font-semibold ${false ? "text-[#B6F09C]" : "text-[#686b6e]"}`}>
                        Library
                    </span>
                </div>
                <div className={`w-full h-[3px] ${false ? "bg-[#B6F09C]" : ""}`}></div>
            </div>
            <TopItem page={page} changePage={handlePage} />
        </nav>
    );
}

export default TopNav;