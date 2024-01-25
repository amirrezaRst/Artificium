import { useEffect, useState } from "react";
import Inbox from "../common/Inbox";
import Sidebar from "./sidebar";
import Topbar from "./topbar";




const MainLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`h-[100vh] main-layout 3xl:px-[8%] 2xl:px-[3%] xl:p-6 lg:p-4 sm:p-6 p-4 flex 2xl:gap-7 md:gap-4`}
        >

            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="w-full flex flex-col">
                <Topbar setIsOpen={setIsOpen} />
                <div className="flex flex-col flex-1 h-96 relative mt-2" >

                    <div className="overflow-y-scroll h-full px-4">
                        <div className="w-full h-[10%] absolute top-0  bg-gradient-to-b from-primary to-neutral-900/0"></div>

                        {children}

                    </div>
                    <Inbox />

                </div>
            </div>

        </div >
    );
}

export default MainLayout;