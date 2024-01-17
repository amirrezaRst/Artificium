import { GearSvg } from "../../components/Svgs";

const SideProfile = () => {
    return (
        <div className="content">
            <div className="profile">
                <div className="flex flex-1 items-center justify-between p-3">
                    <div className="flex items-center">
                        <img src="./images/avatar7.png" alt="avatar" className="w-10 h-10 rounded-full bg-gray-300"></img>
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
    );
}

export default SideProfile;