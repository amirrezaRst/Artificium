import { PenSvg, ShareSvg } from "../../components/Svgs";
import WorkspaceUser from "./WorkspaceUser";

const TopHeader = () => {
    return (
        <div
            className="content pb-3 border-b flex items-center gap-3 justify-between border-t-2
            3xl:border-cyan-500 2xl:border-slate-500 xl:border-stone-500 lg:border-red-400 md:border-orange-500 sm:border-violet-500 border-teal-400
            "
        >
            <button className="bg-[#1A1D21] h-10 w-10 p-2.5 rounded-md absolute top-0 left-0 m-2.5">
                
            </button>
            <div>
                <h3 className="text-xl">Orbital Oddysey</h3>
                <p className="mt-2">Marketing Campaign for a new TV series Launch</p>
            </div>
            <div className="flex items-center">

                <WorkspaceUser />
                <div className="flex">
                    <button
                        className="rounded-lg lg:px-4 px-2 py-2 ml-5 md:ml-3 border border-[#1A1D21] hover:bg-[#1a1d212d]"
                    >
                        <span className="text-[#686b6e]"><ShareSvg /> <span className="lg:inline hidden ">Share</span></span>
                    </button>
                    <button className="rounded-lg px-2 py-2 ml-2 bg-[#1A1D21] hover:bg-[#1a1d21d0]">
                        <span><PenSvg /></span>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default TopHeader;