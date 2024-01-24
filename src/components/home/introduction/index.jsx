import { ArrowRightSvg, HomeChatSvg } from "../../Svgs";
import Item from "./Item";

const Introduction = () => {
    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-5">

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

                    <Item />
                    <Item />
                    {/* <Item />
                    <Item /> */}
                    {/* <div className="item w-full rounded-md py-3 px-4 flex items-center justify-between">
                        <h4 className="text-white">UI wireframe</h4> <span><ArrowRightSvg /></span>
                    </div>
                    <div className="item w-full rounded-md py-3 px-4 flex items-center justify-between">
                        <h4 className="text-white">Brochure design</h4> <span><ArrowRightSvg /></span>
                    </div> */}

                </div>
            </div>

        </div>
    );
}

export default Introduction;