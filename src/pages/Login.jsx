import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useNavigate, Link } from "react-router";
import Logo from "../components/atoms/Logo";

const loginSchema = Joi.object({
    email: Joi.string()
        .email({tlds: {allow: false}})
        .required()
        .messages({
            "string.empty": "Email tidak boleh kosong",
            "string.email": "Format email salah",
        }),
    password: Joi.string().min(6).required()
        .messages({
            "string.empty": "Password tidak boleh kosong",
            "string.min": "Password minimal 6 karakter",

    })
})

function Login(){
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
    } = useForm ({
        resolver: joiResolver(loginSchema)
    });

    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem ("users") || '[] ')
        const foundUser = users.find((u) => u.email === data.email )

        if(!foundUser){
            setError("email", {message: "Email belum terdaftar"})
            return
        }

        if(foundUser.password !== data.password){
            setError("password", {message :"Password salah"});
            return
        }

        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("currentUser", JSON.stringify(foundUser));
        navigate("/Dashboard");
    }

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
        
                    <img src="/flat-color-icons_google.png" alt="icon google" className="text-center" />
                    <span className="hidden md:block">Sign In With Google</span>
                </button>

                <button className="btn-fb btn-google flex justify-center items-center gap-2 border border-gray-600 py-2 px-4 rounded-full hover:bg-gray-200 cursor-pointer flex-1 ">
                    <img src="/bx_bxl-facebook-circle.png" alt="icon FB" />
                    <span className="hidden md:block">Sign In With Facebook</span>
                </button>
            </div>

            <div className="divider flex justify-center items-center gap-4 mb-4">
        
                <hr className="w-full border border-gray-500 flex-1 "/>
                <span className="font-montserrat text-gray-500">Or</span>
                <hr className="w-full border border-gray-500 flex-1 "/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div 
                className="form-group mb-3">
                
                    <label htmlFor="email" className="font-montserrat font-medium">EMail</label>
                    <div className="input-box flex items-center gap-3 border p-2 border-gray-600 rounded-sm focus-within:border-blue-600">
                        <span className="icon"><img src="/Vector.svg" alt="icon_email" /></span>
                        <input 
                        {...register("email")}
                        type="email"
                         id="email" 
                         className="flex-1 font-montserrat text-xs outline-none" placeholder="Enter Your Email" />
                    </div>
                    {errors.email && (
                        <p className=" text-red-500 text-[10px] mt-1">{errors.email.message}
                        </p>
                    )}
                </div>

                <div className="form-group mb-2">
                
                    <label htmlFor="password" className="font-montserrat font-medium">Password</label>
                    <div 
                    className={`input-box flex items-center gap-3 border p-2 border-gray-600 rounded-sm focus-within:border-primary ${errors.password ? "border-red-500" : "border-gray-600 "} ` }>
                        <span className="icon"><img src="/Password.png" alt="icon_password" /></span>
                        <input 
                        {...register("password")}
                        type="password"                       
                        placeholder="Enter Your Password" id="password" className="flex-1 w-full font-montserrat text-xs outline-none" />
                        <span><img src="/EyeSlash.png" alt="icon_eyeslash" className="focus:outline-none cursor-pointer" /></span>
                    </div>
                    {errors.password && (
                        <p className="text-red-500 text-[10px] mt-1">{errors.password.message}</p>
                    )}
                </div>
            <button className="btn-submit md:w-full border border-blue-600 p-2 rounded-md bg-blue-600 text-white font-montserrat">Login</button>
            </form>


            <div className="register text-center">
                <p className="font-montserrat text-gray-600">Not Have An Account? <Link to="/register" className="text-blue-600">Register</Link></p>
            </div>
        </section>

        
        <aside className="hidden md:flex w-1/2 bg-blue-600 items-center justify-center relative overflow-hidden flex-1/2">
            <img src="/pay_regist.png" alt="illustration" />
        </aside>

    </main>
    )
}

export default Login;