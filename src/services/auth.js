import firebase from "../firebase"

const DEFAULT_PASSWORD = "DEFAULT_PASSWORD"; // 

const signUp = async (data) => {
    const { fullName, email, phoneNumber } = data;
    try {
        // register user with email
        const res = await firebase.auth.createUserWithEmailAndPassword(email, DEFAULT_PASSWORD);

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

const signIn = async (data) => {
    const { email } = data;

    try {
        await firebase.auth.signInWithEmailAndPassword(email, DEFAULT_PASSWORD);
        
        const user = await (await firebase.firestore.collection("users").where("email", "==", email).get()).docs.map((u) => u.data());
        console.log(user[0])
        return user[0];
    } catch (e) {

        return e.message;
    }
}

export default {
    signUp,
    signIn
}