import { Helmet } from "react-helmet-async";
import SingleChat from "../../common/SingleChat";
import MainLayout from "../../layouts/MainLayout";
import { ArrowRightSvg, ChatSvg, CopySvg, HomeChatSvg, LinkSvg, MicSvg, SendSvg } from "../Svgs";
import Introduction from "./introduction";

const Home = () => {
    return (
        <main className="home overflow-hidden py-8 flex flex-col gap-4">

            <Helmet>
                <title>Artificium - Home</title>
            </Helmet>

            {/*//! if you haven't messaged yet show introduction */}
            {/* <div>
                <h3 className="text-white text-center text-3xl font-medium mb-2 max-sm:text-2xl">Innovation Starter Pack</h3>
                <p className="text-special-gray text-center lg:mb-10 mb-6 max-sm:text-sm">Kickstart your innovation process with our comprehensive selection of predefined prompts.</p>

                <Introduction />
            </div> */}

            <SingleChat user="Ryan Lee" time="4 sec ago" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, enim!" />
            <SingleChat user="Artificium" time="4 sec ago" text="Here are a few concept arts that also might inspire you. Take a look!" robot />
            <SingleChat user="Ryan Lee" time="4 sec ago" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, enim!" />
            <SingleChat user="Artificium" time="4 sec ago" text="Here are a few concept arts that also might inspire you. Take a look!" robot />


        </main>
    );
}

export default Home;