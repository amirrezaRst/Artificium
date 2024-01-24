const SideWorkspace = () => {
    return (
        <div className="content">
            <div className="flex lg:justify-between items-center md:justify-center">
                <div className="flex lg:flex-row md:flex-col items-center">
                    <img src="./images/avatar1.png" alt="avatar" className="w-10 h-10 rounded-full bg-gray-300"></img>
                    <div className="lg:ml-3">
                        <h3 className="text-base font-semibold lg:block sm:hidden">Username</h3>
                        <p className="lg:text-sm md:text-[10px] mt-1">12 members</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideWorkspace;