import { useState } from "react";
import { MembersChatSvg, MembersSvg } from "../../components/Svgs";


const SwitchButton = () => {

    const [group, setGroup] = useState("members");

    const handleGroup = prop => {
        setGroup(prop);
    }

    return (
        <div className="w-full flex border border-special-gray-2 rounded-custom overflow-hidden relative">
            <div
                className={`w-2/4 bg-special-gray-2 h-full absolute rounded-custom transition-all
                 border border-special/15 ${group === "members" ? "right-0" : "left-0"}`}
            ></div>
            <div
                className={`flex items-center gap-2 w-2/4 px-2 py-3 text-sm font-medium ${group == "chats" ? "text-white/85" : "text-special-gray-3"} z-10 cursor-pointer`}
                onClick={() => handleGroup("chats")}
            >
                <div className="w-5 h-5"><MembersChatSvg active={group == "chats"} /></div>
                Chats
            </div>
            <div
                className={`flex items-center gap-2 w-2/4 px-2 py-3 text-sm font-medium ${group == "members" ? "text-white/85" : "text-special-gray-3"} z-10 cursor-pointer`}
                onClick={() => handleGroup("members")}
            >
                <div className="w-5 h-5"><MembersSvg active={group == "members"} /></div>
                Members
            </div>
        </div>
    );
}

export default SwitchButton;