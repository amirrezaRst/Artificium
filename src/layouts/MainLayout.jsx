import { useEffect, useState } from "react";
import Inbox from "../common/Inbox";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Members from "./members";
import { useLocation } from "react-router";




const MainLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = useLocation().pathname;
    console.log(pathname)
    return (
        <div
            className={`h-[100vh] main-layout 3xl:px-[8%] 2xl:px-[3%] xl:p-6 lg:p-4 sm:p-6 p-4 flex 2xl:gap-7 md:gap-4`}
        >

            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="h-full w-full flex flex-col">
                <Topbar setIsOpen={setIsOpen} />
                <div className="flex flex-1 gap-4 overflow-y-hidden">
                    <div className="flex flex-col flex-1 relative mt-2"
                        style={{ height: "calc(500px-100px)" }}
                    >

                        <div className="overflow-y-scroll md:px-3 sm:px-2 px-0 border-r border-special-gray-2">
                            <div className="w-full h-[10%] absolute top-0  bg-gradient-to-b from-primary to-primary-900/0"></div>

                            {children}

                        </div>

                        <Inbox />
                    </div>
                    {pathname == "/chat" &&
                        <Members />
                    }

                </div>
            </div>

        </div >
    );
}

export default MainLayout;