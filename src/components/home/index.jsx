import { CirclePlusSvg, GearSvg, SearchSvg, WalletSvg } from "../Svgs";

const Home = () => {
    return (

        <div className="main-layout lg:p-4 p-20 flex gap-4">

            <aside className="sidebar flex flex-col justify-between">

                {/*!//todo workspace section */}
                <div className="content">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src="./images/avatar1.jpg" className="w-10 h-10 rounded-full bg-gray-300"></img>
                            <div className="ml-3">
                                <h3 className="text-base font-semibold">Username</h3>
                                <p className="text-sm]">12 members</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*!//todo navbar section */}
                <div className="flex-1 overflow-y-auto">
                    <div className="content">
                        <h4>GENERAL</h4>
                        <ul className="mt-4 space-y-1">
                            <li className="flex px-3 py-3 items-center gap-4">
                                <div className="w-5 h-5">
                                    <SearchSvg />
                                </div>
                                <span className="text-sm text-[white]">Search</span>
                            </li>
                            <li className="flex px-3 py-3 items-center gap-4">
                                <div className="w-5 h-5">
                                    <WalletSvg />
                                </div>
                                <span className="text-sm text-[white]">Billing</span>
                            </li>
                        </ul>
                    </div>
                    <div className="content">
                        <h4>PROJECTS</h4>
                        <ul className="mt-4 space-y-1">
                            <li className="flex px-3 py-3 items-center gap-4">
                                <div className="w-5 h-5">
                                    <SearchSvg />
                                </div>
                                <span className="text-sm text-[white]">Orbital Oddysey</span>
                            </li>
                            <li className="flex px-3 py-3 items-center gap-4">
                                <div className="w-5 h-5">
                                    <WalletSvg />
                                </div>
                                <span className="text-sm text-[white]">Digital Product Launch</span>
                            </li>
                            <li className="flex px-3 py-3 items-center gap-4">
                                <div className="w-5 h-5">
                                    <SearchSvg />
                                </div>
                                <span className="text-sm text-[white]">Brand Refresh</span>
                            </li>
                            <li className="flex px-3 py-3 items-center gap-4">
                                <div className="w-5 h-5">
                                    <WalletSvg />
                                </div>
                                <span className="text-sm text-[white]">Social Media Strategy</span>
                            </li>
                            <li className="flex px-3 py-3 items-center gap-4">
                                <div className="w-5 h-5">
                                    <CirclePlusSvg />
                                </div>
                                <span className="text-sm text-red-400" style={{ color: "#686B6E" }}>Add new project</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*!//todo profile section */}
                <div className="content">
                    <div className="profile">
                        <div className="flex flex-1 items-center justify-between p-3">
                            <div className="flex items-center">
                                <img src="./images/avatar7.png" className="w-10 h-10 rounded-full bg-gray-300"></img>
                                <div className="ml-3">
                                    <h3 className="text-base font-semibold">Ryan lee</h3>
                                    <p className="text-sm]">Premium</p>
                                </div>
                            </div>
                            <div>
                                <button className="w-5 h-5">
                                    <GearSvg />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </aside>

            <main className="">
                {/*//! Top Bar */}
                <div className="topbar"></div>

                {/*//! Main Content */}
                <div></div>
            </main>

        </div>
    );
}

export default Home;