import { useState } from "react";
import { CirclePlusSvg, GearSvg, SearchSvg, WalletSvg } from "../../components/Svgs";
import SideItem from "./SideItem";
import SideProfile from "./SideProfile";
import SideWorkspace from "./SideWorkspace";

const generalNav = [
    { path: "search", label: "Search" },
    { path: "billing", label: "Billing" }
]

const Sidebar = ({ isOpen, setIsOpen }) => {

    return (
        <div className={`sidebar-parent ${isOpen ? "active" : "active"}`}>

            <div
                className={`sidebar-overlay ${isOpen ? "active" : ""}`}
                onClick={e => e.target === e.currentTarget && setIsOpen(!isOpen)}
            />

            <aside className={`sidebar flex flex-col justify-between z-10 md:h-full max-md:h-[95%]
        3xl:min-w-[300px] 2xl:min-w-[260px] lg:min-w-[260px] md:min-w-0 min-w-[250px] lg:relative max-md:absolute max-md:w-[200px]
                ${isOpen ? "active" : ""}`}>

                {/*!//! workspace section */}
                <SideWorkspace setIsOpen={setIsOpen} />

                {/*!//! navbar section */}
                <nav className="flex-1 overflow-y-auto">
                    <div className="content">
                        <h4 className="font-medium text-[#686b6eda] lg:block md:hidden max-md:text-sm">GENERAL</h4>
                        <ul className="mt-4 space-y-1">
                            {generalNav.map((item, index) =>
                                <SideItem key={index} path={item.path} label={item.label} />
                            )}
                        </ul>
                    </div>
                    <div className="content">
                        <h4 className="font-medium text-[#686b6eda] lg:block md:hidden max-md:text-sm">PROJECTS</h4>
                        <ul className="mt-4 space-y-1">
                            <SideItem key={1} project path={`/project`} label={"Orbital Oddysey"} />
                            <SideItem key={2} project path={`/project`} label={"Digital Product Launch"} />
                            <SideItem key={3} project path={`/project`} label={"Brand Refresh"} />
                            <SideItem key={4} project path={`/project`} label={"Social Media Strategy"} />
                            <li className="flex px-3 py-3 items-center lg:justify-start md:justify-center gap-4">
                                <div className="w-6 h-6">
                                    <CirclePlusSvg />
                                </div>
                                <span className="text-sm text-[#686B6E] lg:block md:hidden">Add new project</span>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/*!//! profile section */}
                <SideProfile />

            </aside>
        </div>
    );
}

export default Sidebar;