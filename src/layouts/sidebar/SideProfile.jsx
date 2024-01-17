import { GearSvg } from "../../components/Svgs";

const SideProfile = () => {
    return (
        <div className="content">
            <div className="profile">
                <div className="flex lg:flex-row md:flex-col flex-1 items-center justify-between lg:p-3 md:py-3 md:px-2">
                    <div className="flex lg:flex-row sm:flex-col items-center">
                        <img src="./images/avatar7.png" alt="avatar" className="w-10 h-10 rounded-full bg-gray-300"></img>
                        <div className="lg:ml-3 md:ml-0 md:text-center lg:text-left md:pt-1 lg:pt-0">
                            <h3 className="lg:text-base text-sm font-semibold">Ryan lee</h3>
                            <p className="lg:text-sm md:text-xs">Premium</p>
                        </div>
                    </div>
                    <div>
                        <button className="lg:w-5 lg:h-5 md:w-6 md:h-6 lg:mt-0 md:mt-5">
                            <GearSvg />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideProfile;