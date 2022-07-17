import firebase from "../firebase";

const newEvent = async (data) => {
    const responseEvent = await firebase.firestore.collection("events").add({
        ...data,
        participants: []
    })
    return responseEvent;
}

const getAll = async() => {
    const events = await (await firebase.firestore.collection('events').get()).docs.map((event => {
        return { id: event.id, ...event.data() }
      }))
    return events;
}

const getById = async (id) => {
    const event = await firebase.firestore.collection('events').doc(id).get();
    return event.data();
}

const joinParticipant = async (user, eventId) => {
    const event = await firebase.firestore.collection('events').doc(eventId)
    
    await event.update({
        participants: firebase.firebaseApp.firestore.FieldValue.arrayUnion(user)
    });
}

export default {
    newEvent,
    getAll,
    getById,
    joinParticipant
}