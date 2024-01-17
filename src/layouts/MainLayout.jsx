import Sidebar from "./sidebar";
import Topbar from "./topbar";




const MainLayout = ({ children }) => {
    return (
        <div className="main-layout lg:p-4 p-20 flex gap-4">

            <Sidebar />

            <main className="flex-1">
                {/*//! Top Bar */}
                <Topbar />

                {/* //! Main Content */}
                <div></div>
            </main>

        </div>
    );
}

export default MainLayout;