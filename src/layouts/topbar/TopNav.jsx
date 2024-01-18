import { useNavigate } from "react-router";
import { ChatSvg, LibrarySvg, LogoSvg } from "../../components/Svgs";
import TopItem from "./TopItem";


const navOptions = [
    { path: "/", label: "Artificium" },
    { path: "/chat", label: "Chat" },
    { path: "/library", label: "Library" },
];


const TopNav = ({ page, changePage }) => {
    const navigation = useNavigate()

    const handlePage = (page) => {
        navigation(page);
        changePage(page);
    }

    return (
        <nav className="content flex max-sm:justify-between space-x-5"
            style={{ paddingBottom: "0" }}
        >

            {navOptions.map((item, index) => (
                <TopItem key={index} page={page} changePage={handlePage} path={item.path} label={item.label} />
            ))}

        </nav>
    );
}

export default TopNav;