import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxPDH9H19nYNSV7hDsAJ6KgW9DMHLQgSTU",
  authDomain: "cueride-4f920.firebaseapp.com",
  databaseURL: "https://cueride-4f920-default-rtdb.firebaseio.com",
  projectId: "cueride-4f920",
  storageBucket: "cueride-4f920.appspot.com",
  messagingSenderId: "60426676624",
  appId: "1:60426676624:web:3860a48331e291b06feb15"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };