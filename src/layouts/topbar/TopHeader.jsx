import { MenuSvg, PenSvg, ShareSvg } from "../../components/Svgs";
import WorkspaceUser from "./WorkspaceUser";

const TopHeader = ({ setIsOpen }) => {

    return (
        <div
            className="content pb-3 border-b flex max-md:flex-col items-center max-md:items-start gap-3 justify-between border-t-2
            3xl:border-cyan-500 2xl:border-slate-500 xl:border-stone-500 lg:border-red-400 md:border-orange-500 sm:border-violet-500 border-teal-400
            "
        >

            <div className="w-full">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl">Orbital Oddysey</h3>
                    <button
                        className="hidden max-md:block border border-[#131619] hover:bg-[#131619] transition-all h-9 w-9 p-2 rounded-md"
                        onClick={() => setIsOpen(true)}
                    >
                        <MenuSvg />
                    </button>

                </div>
                <p className="mt-2 mb-1 text-sm sm:text-base line-clamp-2">Marketing Campaign for a new TV series Launch</p>
            </div>
            <div className="flex flex-row max-md:items-center max-md:justify-between max-md:w-full max-sm:hidden">

                <WorkspaceUser />
                <div className="flex">
                    <button
                        className="rounded-lg max-md:p-1 px-4 ml-5 md:ml-3 md:border md:border-[#1A1D21] md:hover:bg-[#1a1d212d]"
                    >
                        <span className="text-[#686b6e] flex gap-1"><ShareSvg /> <span className="max-md:hidden">Share</span></span>
                    </button>
                    <button className="rounded-lg max-md:p-1 p-2 ml-2 md:bg-[#1A1D21] md:hover:bg-[#1a1d21d0]">
                        <span><PenSvg /></span>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default TopHeader;