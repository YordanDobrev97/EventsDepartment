import firebase from "../firebase";

const newEvent = async (data) => {
    const responseEvent = await firebase.firestore.collection("events").add({
        ...data
    })
    return responseEvent;
}

const getAll = async() => {
    const events = await (await firebase.firestore.collection('events').get()).docs.map((event => {
        return { id: event.id, ...event.data() }
      }))
    return events;
}

export default {
    newEvent,
    getAll,
}