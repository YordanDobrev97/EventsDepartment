import firebase from "../firebase"

const signUp = async (data) => {
    const { fullName, email, phoneNumber } = data;
    try {
        // register user with email
        const res = await firebase.auth.createUserWithEmailAndPassword(email, "Missing");

        // add new user to users collection with fullName and phone
        const user = await firebase.firestore.collection("users").add({
            fullName,
            email,
            phoneNumber
        })
        console.log(user)
    } catch (e) {
        return e.message;
    }
}

export default {
    signUp
}