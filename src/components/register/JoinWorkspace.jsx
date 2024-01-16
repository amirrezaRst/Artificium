import { Link } from "react-router-dom";

const JoinWorkspace = () => {
    return (
        <main className="register-page">

            <article className="grid lg:grid-cols-3 h-full relative lg:p-0 p-4">

                <section
                    className="lg:col-span-2 container lg:py-10 py-5 max-sm:px-6 lg:bg-transparent bg-[#131619] rounded-xl z-30 flex flex-col justify-between"
                >

                    <div className="flex items-center justify-between">
                        <Link to={`/`}><img src="/./images/logo.png" alt="artificium" /></Link>
                    </div>

                    <div className="flex-1 lg:px-28 lg:py-10 sm:px-8 sm:py-6 py-8">
                        <h3 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-medium">Join or Create a Workspace</h3>
                        <h4 className="sm:text-lg text-sm md:mt-3 sm:mt-1 mt-3">
                            Connect with others by joining an existing workspace or create a new one to collaborate with your team.
                        </h4>
                        <form action=""
                            className="lg:py-7 sm:py-8 py-4"
                            // grid lg:grid-cols-2 lg:gap-8 sm:gap-6 gap-3
                            onSubmit={e => e.preventDefault()}
                        >
                            <div className="flex mt-4 sm:flex-row flex-col items-end gap-4">
                                <div className="flex-1 w-full">
                                    <div className="relative">
                                        <input type="text" id="first-name" className="sm:mt-1 mt-2" placeholder="Your workspace URL" />
                                        <span className="absolute px-8 right-0 top-0 h-full flex items-center text-[#686B6E]">.artificium.app</span>
                                    </div>
                                </div>
                                <button
                                    className="bg-[#2bd8b8] px-10 rounded-[.3rem] py-[.85rem] max-[639px]:w-full"
                                    type="submit"
                                >
                                    Join Workspace
                                </button>
                            </div>

                            <div className="flex items-center justify-between mt-10">
                                <div className="flex-1 w-full bg-[#363A3D] h-[1px]"></div>
                                <span className="text-[#686B6E] px-4">or</span>
                                <div className="flex-1 w-full bg-[#363A3D] h-[1px]"></div>
                            </div>

                            <button className="w-full py-3 bg-[#1A1D21] border border-[#ffffff2d] hover:bg-[#1e2125] transition-all text-white rounded-lg md:mt-8 sm:mt-3 mt-2 col-span-full">
                                Create free account
                            </button>
                        </form>
                    </div>

                    <div className="flex items-center justify-between text-[#9B9C9E]">
                        <span>Artificium.app © 2023</span>
                        <Link to={`/privacy`} className="hover:underline">Privacy Policy</Link>
                    </div>

                </section>
                <section className="w-full h-full overflow-hidden lg:relative fixed top-0 left-0 z-10">
                    <img src="./images/bg3.jpg" alt="ai image generator" className="w-full h-full lg:rounded-l-3xl" />
                </section>

            </article>

        </main>
    );
}

export default JoinWorkspace;