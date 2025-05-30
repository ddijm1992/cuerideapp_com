import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Registered successfully");
    console.log(userCredential.user);
  } catch (error) {
    alert("Registration error: " + error.message);
  }
}

async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful");
    console.log(userCredential.user);
  } catch (error) {
    alert("Login error: " + error.message);
  }
}

function logout() {
  signOut(auth).then(() => alert("Signed out")).catch((error) => alert(error.message));
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in as:", user.email);
  } else {
    console.log("User is logged out");
  }
});

window.register = register;
window.login = login;
window.logout = logout;