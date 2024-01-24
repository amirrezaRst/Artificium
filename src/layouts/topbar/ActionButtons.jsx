import { PenSvg, ShareSvg } from "../../components/Svgs";

const ActionButtons = () => {
    return (
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
    );
}

export default ActionButtons;