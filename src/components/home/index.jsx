import MainLayout from "../../layouts/MainLayout";
import { ArrowRightSvg, ChatSvg, HomeChatSvg, LinkSvg, MicSvg, SendSvg } from "../Svgs";
import Introduction from "./introduction";

const Home = () => {
    return (
        <main className="home overflow-hidden py-8">

            {/* if you haven't messaged yet show introduction */}
            <div>
                <h3 className="text-white text-center text-3xl font-medium mb-2 max-sm:text-2xl">Innovation Starter Pack</h3>
                <p className="text-special-gray text-center lg:mb-10 mb-6 max-sm:text-sm">Kickstart your innovation process with our comprehensive selection of predefined prompts.</p>

                <Introduction />
            </div>

        </main>
    );
}

export default Home;