import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { Form, Field } from 'react-final-form';

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

    const submit = async (data) => {
        const res = await AuthService.signUp(data);
        if (res === EXIST_USER) {
            //message for exist user
            toast.error(res);
        } else {
            // message for success registration
            toast.success(SUCCESS_REGISTER);
            dispatch(setUser({
                fullName: data.fullName
            }))

            navigation("/sign-in")
        }
    }

    return (
        <>
            <Form
                onSubmit={submit}
                initialValues={{ fullName: '', email: '', phoneNumber: '' }}
                render={({ handleSubmit }) => {
                    return (
                        <>
                            <ToastContainer />
                            <div className="row card-content center">
                                <form className="col s12" onSubmit={handleSubmit}>
                                    <div className="row col s4 offset-s4">
                                        <div className="input-field col s12">
                                            <Field
                                                name="fullName"
                                                component="input"
                                                type="text">
                                                {({ input }) => {
                                                    return (
                                                        <input
                                                            {...input}
                                                            placeholder="Full Name"
                                                            id="fullName"
                                                        />
                                                    )
                                                }}
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="row col s4 offset-s4">
                                        <div className="input-field col s12">
                                            <Field name="email">
                                                {({ input }) => {
                                                    return (
                                                        <input
                                                            {...input}
                                                            id="email"
                                                            placeholder="Email"
                                                        />
                                                    )
                                                }}
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="row col s4 offset-s4">
                                        <div className="input-field col s12">
                                            <Field name="phoneNumber">
                                                {({ input }) => {
                                                    return (
                                                        <input
                                                            {...input}
                                                            placeholder="Phone number"
                                                            id="phoneNumber"
                                                        />
                                                    )
                                                }}
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="row col s4 offset-s4">
                                        <button className="waves-effect waves-light btn">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </>
                    )
                }}
            >
            </Form>
        </>
    )
}

export default SignUp;