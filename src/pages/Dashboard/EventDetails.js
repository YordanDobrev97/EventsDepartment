import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsCalendarDate } from "react-icons/bs";
import { MdViewModule } from "react-icons/md";

import EventParticipants from "../../components/EventParticipants";

import eventService from "../../services/event";

const styles = {
    title: {
        fontSize: 42,
        fontFamily: "sans-serif",
        fontWeight: "bold"
    },
    description: {
        fontSize: "24px"
    },
    card: {
        position: "absolute",
        left: "35%"
    },
    date: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    dateInfo: {
        color: "white",
        fontSize: 20,
        marginLeft: 10,
    },
    icon: {
        margin: "10px auto",
        width: "100%"
    },
    category: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    categoryText: {
        fontSize: 19,
        color: "white"
    },
    button: {
        background: "#D78F23",
        color: "white",
        border: "none",
        padding: "20px",
        width: "100%",
        fontSize: 20
    },
    container: {
        background: "#235291",
        boxShadow: "1px 4px 7px 8px rgb(2 0 0 / 38%)"
    }
}
const EventDetails = () => {
    const params = useParams();
    const [event, setEvent] = useState({})

    const { id } = params;
    useEffect(() => {
        const fetchEvent = async () => {
            const response = await eventService.getById(id);
            return response;
        }

        fetchEvent()
            .then((ev) => {
                setEvent(ev)
            })
    }, [])

    return (
        <>
            <div class="row">
                <div class="col s12 m6" style={styles.card}>
                    <div class="card darken-1" style={styles.container}>
                        <div class="card-content white-text center">
                            <span class="card-title" style={styles.title}>{event.name}</span>
                            <p style={styles.description}>{event.description}</p>
                        </div>

                        <div>
                            <div style={styles.date}>
                                <div>
                                    <BsCalendarDate size={30} color="white" style={styles.icon} />
                                </div>
                                <span style={styles.dateInfo}>{event.date}</span>
                            </div>
                            <p style={styles.category}>
                                <MdViewModule size={28} color="white" />
                                <span style={styles.categoryText}>{event.category}</span>
                            </p>
                        </div>
                        <div class="card-action">
                            <button style={styles.button}>{event.isFree ? "FREE" : "PAID"}</button>
                        </div>
                    </div>

                    <div>
                        <EventParticipants participants={event.participants}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EventDetails;