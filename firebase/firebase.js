// Firebase Core + Auth + Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {'apiKey': 'AIzaSyDXpHQHj9nYNSV7hDsAJ6KqW9DMHLQqSTU', 'authDomain': 'cueride-4f920.firebaseapp.com', 'databaseURL': 'https://cueride-4f920-default-rtdb.firebaseio.com', 'projectId': 'cueride-4f920', 'storageBucket': 'cueride-4f920.appspot.com', 'messagingSenderId': '60426676624', 'appId': '1:60426676624:web:360c4a0331e291b06feb15'};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };