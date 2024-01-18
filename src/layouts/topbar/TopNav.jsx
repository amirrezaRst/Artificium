import { ChatSvg, LibrarySvg, LogoSvg } from "../../components/Svgs";
import TopItem from "./TopItem";

const TopNav = ({ page, changePage }) => {

    const handlePage = (page) => {
        // changePage
    }

    return (
        <nav className="content flex max-sm:justify-between space-x-5"
            style={{ paddingBottom: "0" }}
        >
            <div className="item flex flex-col">
                <div className="flex max-sm:px-2 px-4 cursor-pointer">
                    <div className="lg:h-9 lg:w-9 sm:w-8 sm:h-8 w-7 h-7">
                        <LogoSvg active />
                    </div>
                    <span className="font-semibold max-sm:text-sm text-[#B6F09C]">Artificium</span>
                </div>
                <div className={`w-full h-[3px] rounded-t-2xl mt-1 ${true ? "bg-[#B6F09C]" : ""}`}></div>
            </div>
            <div className="item flex flex-col">
                <div className="flex max-sm:px-2 px-4 cursor-pointer">
                    <div className="lg:h-9 lg:w-9 sm:w-8 sm:h-8 w-7 h-7">
                        <ChatSvg />
                    </div>
                    <span className={`font-semibold max-sm:text-sm ${false ? "text-[#B6F09C]" : "text-[#686b6e]"}`}>Chat</span>
                </div>
                <div className={`w-full h-[3px] rounded-t-2xl mt-1 ${false ? "bg-[#B6F09C]" : ""}`}></div>
            </div>
            <div className="item flex flex-col">
                <div className="flex max-sm:px-2 px-4 cursor-pointer">
                    <div className="lg:h-9 lg:w-9 sm:w-8 sm:h-8 w-7 h-7">
                        <LibrarySvg />
                    </div>
                    <span className={`font-semibold max-sm:text-sm ${false ? "text-[#B6F09C]" : "text-[#686b6e]"}`}>
                        Library
                    </span>
                </div>
                <div className={`w-full h-[3px] rounded-t-2xl mt-1 ${false ? "bg-[#B6F09C]" : ""}`}></div>
            </div>
            {/* <TopItem page={page} changePage={handlePage} /> */}
        </nav>
    );
}

export default TopNav;