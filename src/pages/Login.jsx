import Logo from "../components/atoms/Logo";

function Login(){
    return(
    <main className=" w-full min-h-screen bg-blue-600 flex font-montserrat">
        <section className="left w-full md:w-1/2 flex justify-center px-8 md:px-32 py-10 md:rounded-r-4xl bg-white
        flex-col gap-2">
            <Logo
                textColor={`text-blue-600`}/>

            <div className="desc">
                <h1 className="font-montserrat text-lg font-medium">
                    Hello Welcome Back 👋
                </h1>
                <p className="font-montserrat text-sm text-gray-700">
                    Fill out the form correctly or you can login with several option.
                </p>
            </div>

            <div className="social-login flex md:flex-col justify-between gap-4">
                <button className="btn-google flex justify-center items-center gap-2 border border-gray-600 py-2 px-4 rounded-full hover:bg-gray-200 cursor-pointer flex-1">
        
                    <img src="../src/assets/flat-color-icons_google.png" alt="icon google" className="text-center" />
                    <span className="hidden md:block">Sign In With Google</span>
                </button>

                <button className="btn-fb btn-google flex justify-center items-center gap-2 border border-gray-600 py-2 px-4 rounded-full hover:bg-gray-200 cursor-pointer flex-1 ">
                    <img src="../src/assets/bx_bxl-facebook-circle.png" alt="icon FB" />
                    <span className="hidden md:block">Sign In With Facebook</span>
                </button>
            </div>

            <div className="divider flex justify-center items-center gap-4 mb-4">
        
                <hr className="w-full border border-gray-500 flex-1 "/>
                <span className="font-montserrat text-gray-500">Or</span>
                <hr className="w-full border border-gray-500 flex-1 "/>
            </div>

            <form>
                <div className="form-group mb-3">
                
                    <label htmlFor="email" className="font-montserrat font-medium">EMail</label>
                    <div className="input-box flex items-center gap-3 border p-2 border-gray-600 rounded-sm focus-within:border-blue-600">
                        <span className="icon"><img src="../src/assets/Vector.svg" alt="icon_email" /></span>
                        <input type="email" id="email" className="flex-1 font-montserrat text-xs outline-none" placeholder="Enter Your Email" />
                    </div>
                </div>

                <div className="form-group mb-2">
                
                    <label htmlFor="password" className="font-montserrat font-medium">Password</label>
                    <div className="input-box flex items-center gap-3 border p-2 border-gray-600 rounded-sm focus-within:border-blue-600">
                        <span className="icon"><img src="../src/assets/Password.png" alt="icon_password" /></span>
                        <input type="password" placeholder="Enter Your Password" id="password" className="flex-1 w-full font-montserrat text-xs outline-none" />
                        <span><img src="../src/assets/EyeSlash.png" alt="icon_eyeslash" className="focus:outline-none cursor-pointer" /></span>
                    </div>
                    
                </div>
            </form>

            <button className="btn-submit border border-blue-600 p-2 rounded-md bg-blue-600 text-white font-montserrat">Login</button>

            <div className="register text-center">
                <p className="font-montserrat text-gray-600">Not Have An Account? <a className="text-blue-600">Register</a></p>
            </div>
        </section>

        
        <aside className="hidden md:flex w-1/2 bg-blue-600 items-center justify-center relative overflow-hidden flex-1/2">
            <img src="../src/assets/pay_regist.png" alt="illustration" />
        </aside>

    </main>
    )
}

export default Login;