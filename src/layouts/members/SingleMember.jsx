import { OnlineStatus } from "../../components/Svgs";

const SingleMember = ({ path, offline }) => {
    return (
        <div className={`flex items-center gap-4 mb-5 ${offline && "opacity-55"}`}>
            <div className="w-11 h-11 rounded-2xl relative">
                <img src={`./images/${path}.png`} alt="avatar" />
                {/* <OnlineStatus /> */}
            </div>
            <div>
                <h4 className="text-white font-me">Adam Green</h4>
                <h5 className="text-special-gray text-sm opacity-85">Exploring <span className="text-blue-500">Library</span></h5>
            </div>
        </div>
    );
}

export default SingleMember;