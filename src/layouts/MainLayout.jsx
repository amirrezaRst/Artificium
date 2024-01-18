import Sidebar from "./sidebar";
import Topbar from "./topbar";




const MainLayout = ({ children }) => {
    return (
        <div
            className="main-layout 2xl:px-[8%] xl:p-6 lg:p-4 sm:p-6 p-4 flex gap-4">

            {/* <Sidebar /> */}

            <div className="flex-1">
                {/*//! Top Bar */}
                <Topbar />

                {/* //! Main Content */}
                <main className="home">
                    {/* {children} */}
                </main>
            </div>

        </div>
    );
}

export default MainLayout;