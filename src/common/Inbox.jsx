import { LinkSvg, MicSvg, SendSvg } from "../components/Svgs";

const Inbox = () => {
    return (
        <form
            className="w-full relative mt-2 bg-[#0d0f10] rounded-[.7rem] flex items-center xl:px-5 py-2"
        // onSubmit={e => e.preventDefault()}
        >
            <button className="py-4 px-3 mr-2" type="button">
                <MicSvg />
            </button>
            <input type="text" placeholder="You can ask me anything! I am here to help."
                className="flex-1 py-4 px-4 bg-transparent focus:outline-none placeholder:text-[#414548] caret-[#848484] text-[#737678]"
            />
            <div>
                <button type="button" className="rounded-md px-2 py-4"><LinkSvg /></button>
                <button type="submit" className="rounded-md bg-[#1A1D21] p-2"><SendSvg /></button>
            </div>
        </form>
    );
}

export default Inbox;