import { useState } from "react";

import TopHeader from "./TopHeader";
import TopNav from "./TopNav";
import { useLocation } from "react-router";


const Topbar = () => {

    const location = useLocation();
    const [page, setPage] = useState(location.pathname);

    return (
        <div className="topbar">

            <TopHeader />

            <TopNav page={page} changePage={setPage} />

        </div>
    );
}

export default Topbar;