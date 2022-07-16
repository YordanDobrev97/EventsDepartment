

const NewEvent = () => {
    return (
        <div class="row">
            <h2>Create new event</h2>
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="Event name" id="first_name" type="text" class="validate" />
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s12">
                        <input placeholder="Event description" id="Description event" type="text" class="validate" />
                    </div>
                </div>

                <div className="row">
                    <div class="col s12">
                        <label>Event category</label>
                        <select className="event-select">
                            <option value="" disabled selected>Choose event category</option>
                            <option value="education">Education</option>
                            <option value="carrers">Carrers</option>
                            <option value="entertainment">Entertainment</option>
                        </select>
                    </div>
                </div>

               <div className="row">
               <p>
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span>Free event</span>
                    </label>
                </p>
               </div>

                <div className="row">
                    <div className="col s12">
                        <label>Event Date</label>
                        <input type="date" className="datepicker" />
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
}

export default NewEvent;