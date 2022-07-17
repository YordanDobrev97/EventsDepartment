import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import eventService from "../services/event";
import { appState } from "../store/store";

import { ToastContainer, toast } from "react-toastify";

const EventTable = () => {
    const [events, setEvents] = useState([])
    const { user: { fullName } } = appState()

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await eventService.getAll();
            console.log(response)
            setEvents(response)
        }
        fetchEvents();
    }, [])

    const joinToEvent = async (eventId) => {
        
        await eventService.joinParticipant(fullName, eventId);
        toast.success("You have successfully joined the event");
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
                    {events && events.map((e) => {
                        return (
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.description}</td>
                                <td>{e.date}</td>
                                <td>
                                    <button onClick={() => joinToEvent(e.id)} className="waves-effect waves-light btn-small join-btn">
                                        {e.participants.includes(fullName) ? "Joined": "Join" }
                                    </button>
                                    <Link to={`/dashboard/event/${e.id}`} className="waves-effect waves-light btn-small details-btn">Details</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

                <tfoot>
                    <ul className="pagination">
                        <li className="active"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!">2</a></li>
                        <li className="waves-effect"><a href="#!">3</a></li>
                        <li className="waves-effect"><a href="#!">4</a></li>
                        <li className="waves-effect"><a href="#!">5</a></li>
                    </ul>
                </tfoot>
            </table>
        </div>
    )
}

export default EventTable;