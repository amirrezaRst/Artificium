import Sidebar from "./sidebar";
import Topbar from "./topbar";




const MainLayout = ({ children }) => {
    return (
        <div
            className="main-layout xl:p-6 2xl:px-[8%] lg:p-4 p-6 flex gap-4">

            {/* <Sidebar /> */}

            <div className="flex-1">
                {/*//! Top Bar */}
                <Topbar />

                {/* //! Main Content */}
                <main className="home">

                </main>
            </div>

        </div>
    );
}

export default MainLayout;