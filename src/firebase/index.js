import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCTLlslt4NeIfdFSTw2WqW7_dJQBpGdH9o",
  authDomain: "travel-29ab4.firebaseapp.com",
  projectId: "travel-29ab4",
  storageBucket: "travel-29ab4.appspot.com",
  messagingSenderId: "159547679140",
  appId: "1:159547679140:web:68991ed8fff9ab1fe7a131",
});

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export { provider, app, auth }