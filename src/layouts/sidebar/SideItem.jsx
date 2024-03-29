import { SearchSvg, Square, WalletSvg } from "../../components/Svgs";

const SideItem = ({ path, label, project }) => {
    return (
        <li className="flex px-3 py-3 max-md:py-2.5 items-center lg:justify-start md:justify-center gap-4">
            <div className={project ? "w-5 h-5" : "lg:w-5 lg:h-5 md:w-6 md:h-6 w-6 h-6"}>
                {path === "search" ?
                    <SearchSvg /> : !project ?
                        <WalletSvg /> :
                        <Square />
                }
            </div>
            <span className="text-sm text-[#ffffffb6] lg:block md:hidden">{label}</span>
        </li>
    );
}

export default SideItem;