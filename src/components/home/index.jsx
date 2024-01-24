import MainLayout from "../../layouts/MainLayout";
import { ArrowRightSvg, ChatSvg, HomeChatSvg, LinkSvg, MicSvg, SendSvg } from "../Svgs";
import Introduction from "./introduction";

const Home = () => {
    return (
        <main className="home bg-slate-500 h-full overflow-hidden">

            <h3 className="text-white text-center text-3xl mb-2">Innovation Starter Pack</h3>
            <p className="text-[#9B9C9E] text-center lg:mb-8">Kickstart your innovation process with our comprehensive selection of predefined prompts.</p>

            {/* <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-5">

                <div className="home-introduction">
                    <div
                        className="logo w-12 h-12 p-3 rounded-full"
                    >
                        <HomeChatSvg />
                    </div>
                    <h4 className="lg:text-xl text-[#ffffffe1] mt-2">Create Assets</h4>

                    <div className="group mt-5 flex flex-col gap-3">

                        <div className="item w-full rounded-md py-3 px-4 flex items-center justify-between">
                            <h4 className="text-white">UI wireframe</h4> <span><ArrowRightSvg /></span>
                        </div>
                        <div className="item w-full rounded-md py-3 px-4 flex items-center justify-between">
                            <h4 className="text-white">Brochure design</h4> <span><ArrowRightSvg /></span>
                        </div>

                    </div>
                </div>
                <div className="home-introduction">
                    <div
                        className="logo w-12 h-12 p-3 rounded-full"
                    >
                        <HomeChatSvg />
                    </div>
                    <h4 className="lg:text-xl text-[#ffffffe1] mt-2">Create Assets</h4>

                    <div className="group mt-5 flex flex-col gap-3">

                        <div className="item w-full rounded-md py-3 px-4 flex items-center justify-between">
                            <h4 className="text-white">UI wireframe</h4> <span><ArrowRightSvg /></span>
                        </div>
                        <div className="item w-full rounded-md py-3 px-4 flex items-center justify-between">
                            <h4 className="text-white">Brochure design</h4> <span><ArrowRightSvg /></span>
                        </div>

                    </div>
                </div>

            </div> */}

            <Introduction />

        </main>
    );
}

export default Home;