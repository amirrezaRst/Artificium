import { SearchSvg, Square, WalletSvg } from "../../components/Svgs";

const SideItem = ({ path, label, project }) => {
    return (
        <li className="flex px-3 py-3 items-center gap-4">
            <div className="w-5 h-5">
                {path == "search" ?
                    <SearchSvg /> : !project ?
                        <WalletSvg /> :
                        <Square />
                }
            </div>
            <span className="text-sm text-[#ffffffb6]">{label}</span>
        </li>
    );
}

export default SideItem;