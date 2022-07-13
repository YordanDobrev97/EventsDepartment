import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import AuthService from "../../services/auth";
import { setUser } from "../../features/userSlice";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import {
    EXIST_USER,
    SUCCESS_REGISTER
} from "../../constants/auth";

if (typeof window !== "undefined") {
    injectStyle();
}

const SignUp = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch()
    
    const [formData, setData] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    })

    const { fullName, email, phoneNumber } = formData;
    
    const onChange = (e) => {
        setData((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    const submit = async (e) => {
        e.preventDefault();
        
        const res = await AuthService.signUp(formData);
        console.log(res)
        
        if (res === EXIST_USER) {
            //message for exist user
            toast.error(res);
        } else {
            // message for success registration
            toast.success(SUCCESS_REGISTER);
            dispatch(setUser({
                fullName: fullName
            }))

            navigation("/sign-in")
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
                                placeholder="Full Name"
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={fullName}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    
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
                        <div className="input-field col s12">
                            <input
                                placeholder="Phone number" 
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                value={phoneNumber}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="row col s4 offset-s4">
                        <button className="waves-effect waves-light btn">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp;