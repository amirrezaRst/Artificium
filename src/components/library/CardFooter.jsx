import { ChatSvg } from "../Svgs";
import MembersList from "./MembersList";

const CardFooter = () => {
    return (
        <div className="md:py-4 sm:px-4 sm:py-3 px-5 py-4 border-t-2 border-special-gray-2 flex justify-between items-center">
            <div>
                <MembersList />
            </div>
            <div className="flex gap-2">
                <span className="text-white/80">14</span>
                <div className="w-7 h-7">
                    <ChatSvg />
                </div>
            </div>
        </div>
    );
}

export default CardFooter;