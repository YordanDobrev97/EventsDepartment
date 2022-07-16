import firebase from "../firebase";

const newEvent = async (data) => {
    const responseEvent = await firebase.firestore.collection("events").add({
        ...data
    })
    console.log(responseEvent)
}

export default {
    newEvent
}