import { useState, useEffect } from "react";
import eventService from "../services/event";

const EventTable = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await eventService.getAll();
            setEvents(response)
        }
        fetchEvents();
    }, [])

    return (
        <div className="row event-table">
            <h3 className="center">Events</h3>

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
                        console.log(e)
                        return (
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.description}</td>
                                <td>{e.date}</td>
                                <td>
                                    <button className="waves-effect waves-light btn-small join-btn">Join</button>
                                    <button className="waves-effect waves-light btn-small details-btn">Details</button>
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