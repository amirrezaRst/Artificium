import { useState } from "react";

import TopHeader from "./TopHeader";
import TopNav from "./TopNav";
import { useLocation } from "react-router";


const Topbar = ({ setIsOpen }) => {

    const location = useLocation();
    const [page, setPage] = useState(location.pathname);

    return (
        <div className="topbar">

            <TopHeader setIsOpen={setIsOpen} />

            <TopNav page={page} changePage={setPage} />

        </div>
    );
}

export default Topbar;