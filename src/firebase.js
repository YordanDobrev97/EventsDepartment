import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD9CKRYckjWv89NzNeiF0MICH0lKH0wRTA",
    authDomain: "eventdepartment-2c840.firebaseapp.com",
    projectId: "eventdepartment-2c840",
    storageBucket: "eventdepartment-2c840.appspot.com",
    messagingSenderId: "570171866772",
    appId: "1:570171866772:web:1dbe24a265fa61f2387e81"
  };

firebase.default.initializeApp(firebaseConfig);
const auth = firebase.default.auth()
const firestore = firebase.default.firestore()

export default {
  auth,
  firestore
}