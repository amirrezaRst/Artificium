import SingleMember from "./SingleMember";
import SwitchButton from "./SwitchButton";

const Members = () => {
    return (
        <div className="h-full flex flex-col gap-3 lg:block hidden">
            <div className="flex-1 relative overflow-y-scroll lg:min-w-[210px] py-3 pr-2">

                <div className="flex justify-between items-baseline mb-5">
                    <h4 className="text-special-gray">Currently Online</h4>
                    <h4 className="text-special-gray-3">4</h4>
                </div>

                <div className="">
                    <SingleMember path={"avatar1"} />
                    <SingleMember path={"avatar11"} />
                    <SingleMember path={"avatar3"} />
                    <SingleMember path={"avatar15"} />
                </div>
                <div className="flex justify-between items-baseline mt-8 mb-5">
                    <h4 className="text-special-gray">Offline</h4>
                    <h4 className="text-special-gray-3">3</h4>
                </div>

                <div className="">
                    <SingleMember path={"avatar3"} offline />
                    <SingleMember path={"avatar12"} offline />
                    <SingleMember path={"avatar16"} offline />
                </div>


                {/* bg-gradient-to-t from-primary to-primary-900/0 */}
                {/* <div className="w-full h-6 bg-cyan-300/10 absolute bottom-0"></div> */}
            </div>

            <SwitchButton />

        </div>
    );
}

export default Members;