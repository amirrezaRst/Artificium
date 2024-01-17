import { CirclePlusSvg, GearSvg, SearchSvg, WalletSvg } from "../../components/Svgs";
import SideItem from "./SideItem";
import SideProfile from "./SideProfile";
import SideWorkspace from "./SideWorkspace";

const generalNav = [
    { path: "search", label: "Search" },
    { path: "billing", label: "Billing" }
]

const Sidebar = () => {
    return (
        <aside className="sidebar flex flex-col justify-between">

            {/*!//! workspace section */}
            <SideWorkspace />

            {/*!//! navbar section */}
            <nav className="flex-1 overflow-y-auto">
                <div className="content">
                    <h4 className="font-medium text-[#686b6eda]">GENERAL</h4>
                    <ul className="mt-4 space-y-1">
                        {generalNav.map((item, index) =>
                            <SideItem key={index} path={item.path} label={item.label} />
                        )}
                    </ul>
                </div>
                <div className="content">
                    <h4 className="font-medium text-[#686b6eda]">PROJECTS</h4>
                    <ul className="mt-4 space-y-1">
                        <SideItem key={1} project path={`/project`} label={"Orbital Oddysey"} />
                        <SideItem key={2} project path={`/project`} label={"Digital Product Launch"} />
                        <SideItem key={3} project path={`/project`} label={"Brand Refresh"} />
                        <SideItem key={4} project path={`/project`} label={"Social Media Strategy"} />
                        <li className="flex px-3 py-3 items-center gap-4">
                            <div className="w-5 h-5">
                                <CirclePlusSvg />
                            </div>
                            <span className="text-sm" style={{ color: "#686B6E" }}>Add new project</span>
                        </li>
                    </ul>
                </div>
            </nav>

            {/*!//! profile section */}
            <SideProfile />

        </aside>
    );
}

export default Sidebar;