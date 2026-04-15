import { useSelector, useDispatch } from "react-redux";
import { register,login, logout} from '../redux/slices/authSlice'


export const useAuth = () => {
    const dispatch = useDispatch();
    const {isLoggedIn, currentUser, registeredUsers } = useSelector((state) => state.auth || {})

    const handleRegister = (email, password) => {
        dispatch(register({ email, password}))
    };

    const handleLogin = (user) => {
        dispatch(login(user))
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return { isLoggedIn : isLoggedIn || false, currentUser: currentUser || null, registeredUsers : registeredUsers || [], handleRegister, handleLogin, handleLogout};
}
