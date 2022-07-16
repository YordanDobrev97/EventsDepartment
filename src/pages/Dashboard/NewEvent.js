import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import eventService from "../../services/event";

import { ToastContainer, toast } from "react-toastify";

const NewEvent = () => {
    const navigation = useNavigate();

    const submit = async (data) => {
        try {
            const response = await eventService.newEvent(data);
            if (response) {
                navigation("/dashboard/home");
            }
        } catch (error) {
            toast.error("Your event has not been created. Please, try again later!");
        }
    }

    return (
        <Form
            onSubmit={submit}
            initialValues={{}}
            render={({ handleSubmit }) => {
                return (
                    <div className="row">
                        <h2>Create new event</h2>
                        <ToastContainer />
                        <form className="col s12" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <Field name="name">
                                        {({ input }) => {
                                            return (
                                                <input {...input} placeholder="Event name" id="name" type="text" className="validate" />
                                            )
                                        }}
                                    </Field>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <Field name="description">
                                        {({ input }) => {
                                            return (
                                                <input {...input} placeholder="Description" id="description" type="text" className="validate" />
                                            )
                                        }}
                                    </Field>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12">
                                    <label>Event category</label>
                                    <Field name="category" component="select" className="event-select">
                                        <option value="" disabled>Choose event category</option>
                                        <option value="education">Education</option>
                                        <option value="carrers">Carrers</option>
                                        <option value="entertainment">Entertainment</option>
                                    </Field>
                                </div>
                            </div>

                            <div className="row" style={{
                                padding: "12px",
                                fontSize: "22px",
                                display: "flex",
                            }}>
                                <Field name="isFree">
                                    {({ input }) => {
                                        return (
                                            <>
                                                <label style={{ fontSize: "22px" }}>Free Event</label>
                                                <input style={{
                                                        opacity: 1,
                                                        pointerEvents: "auto",
                                                        width: "60px",
                                                        margin: "5px",
                                                        position: "relative",
                                                        height: "25px",
                                                }} {...input} type="checkbox" />
                                            </>
                                        )
                                    }}
                                </Field>
                            </div>

                            <div className="row">
                                <div className="col s12">
                                    <Field name="date">
                                        {({ input }) => {
                                            return (
                                                <>
                                                    <label>Event Date</label>
                                                    <input {...input} type="date" className="datepicker" />
                                                </>
                                            )
                                        }}
                                    </Field>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12">
                                    <button
                                        className="btn waves-effect waves-teal"
                                        style={{ width: "100%" }}>
                                        Add
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )
            }}
        >
        </Form>
    )
}

export default NewEvent;