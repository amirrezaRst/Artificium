import { useState } from "react";
import { ChatSvg, LibrarySvg, LogoSvg, PenSvg, SearchSvg, ShareSvg, WalletSvg } from "../../components/Svgs";
import TopHeader from "./TopHeader";
import TopNav from "./TopNav";


const Topbar = () => {
    const [page, setPage] = useState("home");

    return (
        <div className="topbar">

            <TopHeader />

            <TopNav page={page} changePage={setPage} />

        </div>
    );
}

export default Topbar;