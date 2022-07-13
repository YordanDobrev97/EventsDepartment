import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import AuthService from "../../services/auth";
import { setUser } from "../../features/userSlice";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import {
    SUCCESS_SIGN_IN,
    WRONG_EMAIL
} from "../../constants/auth";

if (typeof window !== "undefined") {
    injectStyle();
}

const SignIn = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch()
    
    const [formData, setData] = useState({
        email: '',
    })

    const { email } = formData;
    
    const onChange = (e) => {
        setData((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    const submit = async (e) => {
        e.preventDefault();
        
        const res = await AuthService.signIn(formData);
        console.log(res)
        
        if (res === WRONG_EMAIL) {
            //message for wrong email
            toast.error(res);
        } else {
            // message for success logged in
            toast.success(SUCCESS_SIGN_IN);
            dispatch(setUser({
                fullName: res.fullName
            }))

            setTimeout(() => {
                navigation("/dashboard")
            }, 5000)
        }
        
    }

    return (
        <>
            <ToastContainer />
            <div className="row card-content center">
                <form className="col s12" onSubmit={submit}>
                    
                    <div className="row col s4 offset-s4">
                        <div className="input-field col s12">
                            <input
                                placeholder="Email" 
                                id="email"
                                name="email"
                                type="text"
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="row col s4 offset-s4">
                        <button className="waves-effect waves-light btn">Sign In</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn;