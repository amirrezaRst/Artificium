import { LinkSvg, MicSvg, SendSvg } from "../components/Svgs";

const Inbox = () => {
    return (
        <form
            className="w-full relative mt-2 bg-[#0d0f10] rounded-[.7rem] flex items-center lg:px-5 sm:px-3 px-2 md:py-2 py-1"
            onSubmit={e => e.preventDefault()}
        >
            <button className="py-4 sm:px-3 px-2 sm:mr-2" type="button">
                <MicSvg />
            </button>
            <input type="text" placeholder="You can ask me anything! I am here to help."
                className="flex-1 sm:py-4 sm:px-4 px-1 py-3 bg-cyan-100/0 focus:outline-none placeholder:text-[#414548] max-sm:text-base caret-[#848484] text-[#737678]"
            />
            <div className="">
                <button type="button" className="rounded-md px-2 py-4"><LinkSvg /></button>
                <button
                    type="submit" className="rounded-md bg-special-gray-2 hover:bg-[#131518] p-2 transition-all"
                    onSubmit={e => e.preventDefault()}
                >
                    <SendSvg />
                </button>
            </div>
        </form>
    );
}

export default Inbox;