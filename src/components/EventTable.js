import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import eventService from "../services/event";
import { 
    setEvents,
    setLoading,
    joinToEvent,
    leaveEvent,
} from "../features/eventSlice";
import { appState } from "../store/store";

import { ToastContainer, toast } from "react-toastify";

const styles = {
    loading: {
        color: "#397eed",
        position: "relative",
        left: "10em",
        fontSize: 22
    }
}
const EventTable = () => {
    const dispatch = useDispatch();
    const {
        user: { fullName },
    } = appState();

    const events = useSelector(state => state.event.events);
    const isLoading = useSelector(state => state.event.loading);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await eventService.getAll();
            dispatch(setEvents(response))
            dispatch(setLoading(false))
        }
        fetchEvents();
    }, [])

    const joinToEventHandler = async (eventId) => {
        await eventService.joinParticipant(fullName, eventId);
        dispatch(joinToEvent({ eventId, fullName }))
        toast.success("You have successfully joined the event");
    }

    const leaveEventHandler = async (eventId) => {
        await eventService.leaveEvent(fullName, eventId);
        dispatch(leaveEvent({ eventId, fullName }))
        toast.success("You have successfully leave the event");
    }

    return (
        <div className="row event-table">
            <h3 className="center">Events</h3>

            <ToastContainer />
            <table className="highlight centered responsive-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {isLoading ? (
                        <div style={styles.loading}>Loading...</div>
                    ) : (
                        <>
                            {events.map((e) => {
                                console.log(e)

                                return (
                                    <tr key={e.id}>
                                        <td>{e.name}</td>
                                        <td>{e.description}</td>
                                        <td>{e.date}</td>
                                        <td>
                                            {e.participants.includes(fullName) ?
                                                (
                                                    <button onClick={() => leaveEventHandler(e.id)} className="waves-effect btn-small join-btn red">
                                                        Leave
                                                    </button>
                                                ) :
                                                (
                                                    <button onClick={() => joinToEventHandler(e.id)} className="waves-effect waves-light btn-small join-btn">
                                                        {e.participants.includes(fullName) ? "Joined" : "Join"}
                                                    </button>
                                                )}

                                            <Link to={`/dashboard/event/${e.id}`} className="waves-effect waves-light btn-small details-btn">Details</Link>
                                        </td>
                                    </tr>
                                )
                            }
                            )}
                        </>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default EventTable;