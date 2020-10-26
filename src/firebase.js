import * as firebase from "firebase";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCHRfqPxX9dYZ3sDvY-6CTWt95J6RJoiLQ",
    authDomain: "althea-82667.firebaseapp.com",
    databaseURL: "https://althea-82667.firebaseio.com",
    projectId: "althea-82667",
    storageBucket: "althea-82667.appspot.com",
    messagingSenderId: "700031920809 ",
    appId: "1:700031920809:web:fb2eea298514ed481bd7b8"
};

firebase.initializeApp(config);

export default firebase.firestore();