import { ChatSvg, LibrarySvg, LogoSvg } from "../../components/Svgs";

const TopItem = ({ page, changePage, path, label }) => {
    return (
        <div className="item flex flex-col">
            <div className="flex max-sm:px-2 px-4 cursor-pointer" onClick={() => changePage(path)}>
                <div className="lg:h-9 lg:w-9 sm:w-8 sm:h-8 w-7 h-7">
                    {/* active={page === path} */}
                    {path === "/" ? <LogoSvg active={page === path} /> :
                        path === "/chat" ? <ChatSvg active={page === path} /> :
                            <LibrarySvg active={page === path} />
                    }
                </div>
                <span className={`font-semibold max-sm:text-sm ${page === path ? "text-[#B6F09C]" : "text-[#686b6e]"}`}>{label}</span>
            </div>
            <div className={`w-full h-[3px] rounded-t-2xl mt-1 ${page === path ? "bg-[#B6F09C]" : ""}`}></div>
        </div>
    );
}

export default TopItem;