import { PenSvg, ShareSvg } from "../../components/Svgs";
import WorkspaceUser from "./WorkspaceUser";

const TopHeader = () => {
    return (
        <div className="content pb-3 border-b flex items-center justify-between">
            <div>
                <h3 className="text-xl">Orbital Oddysey</h3>
                <p className="mt-2">Marketing Campaign for a new TV series Launch</p>
            </div>
            <div className="flex items-center">

                <WorkspaceUser />
                <button
                    className="rounded-lg px-4 py-2 ml-5 border border-[#1A1D21] hover:bg-[#1a1d212d]"
                >
                    <span className="text-[#686b6e]"><ShareSvg /> Share</span>
                </button>
                <button className="rounded-lg px-2 py-2 ml-2 bg-[#1A1D21] hover:bg-[#1a1d21d0]">
                    <span><PenSvg /></span>
                </button>

            </div>
        </div>
    );
}

export default TopHeader;