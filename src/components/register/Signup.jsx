import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <main className="register-page">

            <article className="grid lg:grid-cols-3 h-full relative lg:p-0 p-4">

                <section
                    className="lg:col-span-2 container lg:py-10 py-3 lg:bg-transparent bg-[#131619] rounded-xl z-30 flex flex-col justify-between"
                >
 {/* 2xl:bg-slate-400 xl:bg-stone-500 lg:bg-orange-500 md:bg-yellow-300 sm:bg-indigo-500 bg-teal-300 */}
                    <div className="flex items-center justify-between">
                        <Link to={`/`}><img src="/./images/logo.png" alt="artificium" /></Link>
                        <Link to={`/login`} className="text-[#7dc6cb] cursor-pointer lg:text-xl sm:text-xl text-lg font-semibold">Log in</Link>
                    </div>

                    <div className="flex-1 lg:p-10 sm:px-8 sm:py-6 py-4">
                        <h3 className="lg:text-2xl md:text-3xl sm:text-2xl text-lg font-medium">Connect with your team and bring your creative ideas to life.</h3>
                        <form action=""
                            className="lg:py-7 sm:py-8 py-4 grid lg:grid-cols-2 lg:gap-8 sm:gap-6 gap-3"
                            onSubmit={e => e.preventDefault()}
                        >
                            <div>
                                <label htmlFor="first-name">First name</label>
                                <input type="text" id="first-name" className="w-full sm:mt-1 mt-2" placeholder="First name" />
                            </div>
                            <div>
                                <label htmlFor="last-name">Last name</label>
                                <input type="text" id="last-name" className="w-full sm:mt-1 mt-2" placeholder="Last name" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" className="w-full sm:mt-1 mt-2" placeholder="Password" />
                            </div>
                            <div>
                                <label htmlFor="repeat-password">Repeat password</label>
                                <input type="password" id="repeat-password" className="w-full sm:mt-1 mt-2" placeholder="Repeat password" />
                            </div>
                            <div>
                                <input type="checkbox" name="agree-terms" className="inline" id="" /> <label htmlFor="agree-terms">I agree with <span className="text-[#7dc6cb]">Terms and conditions</span></label>
                            </div>
                            <button className="w-full py-3 bg-[#2bd8b8] rounded-lg md:mt-8 sm:mt-3 mt-2 col-span-full">
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
                    <img src="./images/bg2.jpg" alt="ai image generator" className="w-full h-full lg:rounded-l-3xl" />
                </section>

            </article>

        </main>
    );
}

export default Signup;