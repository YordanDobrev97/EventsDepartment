const styles = {
    participant: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    userIcon: {
        width: "66px",
        height: "56px",
        borderRadius: "30px",
        marginTop: 10
    },
    user: {
        fontSize: 20,
    }
}

const Participant = ({ name }) => {
    return (
        <div style={styles.participant}>
            <img style={styles.userIcon} src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="user" />
            <h3 style={styles.user}>{name}</h3>
        </div>
    )
}

export default Participant;