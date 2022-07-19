import Participant from "./Participant";

const styles = {
    container: {
        background: "rgb(238 240 244)",
        height: "90vh",
        textAlign: "center",
        width: "36em",
        margin: "0 20px",
        boxShadow: "1px 4px 7px 8px rgb(2 0 0 / 38%)",
        fontFamily: "sans-serif",
    },
    title: {
        borderBottom: "1px solid black",
        paddingBottom: "20px",
        textTransform: "capitalize"
    },
    participantContainer: {
        maxHeight: "15em",
        overflowY: "scroll"
    }
}

const EventParticipants = ({ participants }) => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>participants</h1>

            <div style={styles.participantContainer}>
                {participants && participants.map((p) => {
                    return (
                        <Participant name={p}/>
                    )
                })}
            </div>
        </div>
    )
}

export default EventParticipants;