import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { Form, Field } from 'react-final-form';

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

    const submit = async ({email}) => {
        const res = await AuthService.signIn(email);
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

            navigation("/dashboard/home")
        }
    }

    return (
        <>
            <Form
                onSubmit={submit}
                initialValues={{email: ''}}
                render={({ handleSubmit }) => {
                    return (
                        <>
                            <ToastContainer />
                            <div className="row card-content center">
                                <form className="col s12" onSubmit={handleSubmit}>
                                    <div className="row col s4 offset-s4">
                                        <div className="input-field col s12">
                                            <Field
                                                name="email"
                                                component="input"
                                                type="text"
                                                placeholder="Email">
                                                {({ input, meta }) => {
                                                    return (
                                                        <>
                                                            <input
                                                            {...input}
                                                            placeholder="Email"
                                                            id="email"
                                                            type="text"
                                                        />
                                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                                        </>
                                                    )
                                                }}
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="row col s4 offset-s4">
                                        <button className="waves-effect waves-light btn">Sign In</button>
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

export default SignIn;