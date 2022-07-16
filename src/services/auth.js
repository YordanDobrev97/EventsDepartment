import firebase from "../firebase"

const DEFAULT_PASSWORD = "DEFAULT_PASSWORD";

const signUp = async (data) => {
    const { fullName, email, phoneNumber } = data;
    try {
        // register user with email and default password
        const res = await firebase.auth.createUserWithEmailAndPassword(email, DEFAULT_PASSWORD);

        // Create a User collection in which I keep the full name and telephone number of the user so that I can avoid 2-factor authentication with firebase phone verify
        const user = await firebase.firestore.collection("users").add({
            fullName,
            email,
            phoneNumber
        })
    } catch (e) {
        return e.message;
    }
}

const signIn = async (email) => {
    try {
        await firebase.auth.signInWithEmailAndPassword(email, DEFAULT_PASSWORD);
        const user = await (await firebase.firestore.collection("users").where("email", "==", email).get()).docs.map((u) => u.data());
        return user[0];
    } catch (e) {
        return e.message;
    }
}

export default {
    signUp,
    signIn
}