import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <main className="register-page">

            <article className="grid lg:grid-cols-2 h-full relative lg:p-0 p-4">

                <section className="container lg:py-10 py-2 lg:bg-transparent bg-[#131619] rounded-xl z-30">
                    <Link to={`/`}>
                        <img src="/./images/logo.png" alt="artificium" />
                    </Link>
                    {/* <div className="w-full h-[3px] 2xl:bg-slate-500 xl:bg-stone-500 lg:bg-orange-500 md:bg-amber-400 sm:bg-violet-600 bg-teal-500"></div> */}

                    <div className="xl:px-16 sm:px-10 px-6 sm:py-3 py-7">
                        <h3 className="text-3xl">Let's get <span>creative!</span></h3>
                        <h4 className="sm:text-lg text-sm sm:mt-1 mt-2">Log in to Artificium to start creating magic.</h4>

                        <form action=""
                            onSubmit={e => e.preventDefault()}
                            className="lg:mt-14 mt-8"
                        >
                            <input type="email" placeholder="Email" className="focus:ring-2 ring-[#2E464E] mb-6" />
                            <input type="password" placeholder="Password" className="focus:ring-2 ring-[#2E464E]" />

                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center">
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label htmlFor="remember" className="text-white">Remember me</label>
                                </div>
                                <span className="text-[#7dc6cb] cursor-pointer">Forgot Password?</span>
                            </div>

                            <button
                                className="w-full py-3 bg-[#2bd8b8] rounded-lg mt-8"
                                type="submit"
                            >
                                Log in
                            </button>

                            <div className="flex items-center justify-between mt-8">
                                <div className="flex-1 w-full bg-[#363A3D] h-[1px]"></div>
                                <span className="text-[#686B6E] px-4">or continue with</span>
                                <div className="flex-1 w-full bg-[#363A3D] h-[1px]"></div>
                            </div>

                            <div className="w-full flex items-center lg:gap-6 sm:gap-3 gap-2 mt-6">
                                <button className="w-full bg-[#1A1D21] py-3 lg:px-5 sm:px-3 px-2 rounded-md flex lg:gap-5 gap-2 transition-all hover:bg-[#212428]">
                                    <img src="./images/google-logo.png" alt="google login" /> <span className="text-[#686B6E] lg:text-lg text-xs">Google Account</span>
                                </button>
                                <button className="w-full bg-[#1A1D21] py-3 lg:px-5 sm:px-3 px-2 rounded-md flex lg:gap-5 gap-2 transition-all hover:bg-[#212428]">
                                    <img src="./images/apple-logo.png" alt="apple login" /> <span className="text-[#686B6E] lg:text-lg text-xs">Apple Account</span>
                                </button>
                            </div>

                        </form>

                    </div>
                    <span className="text-[#686B6E]">Don't have an account? <Link to={`/signup`} className="text-[#7dc6cb] cursor-pointer">Sign up</Link></span>

                </section>
                <section className="w-full h-full overflow-hidden lg:relative fixed top-0 left-0 z-10">
                    <img src="./images/bg1.jpg" alt="ai image generator" className="w-full h-full lg:rounded-l-3xl" />
                </section>

            </article>

        </main>
    );
}

export default Login;