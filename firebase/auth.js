import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

window.login = async function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    alert("Welcome " + userCred.user.email);
  } catch (error) {
    alert("Login failed: " + error.message);
  }
};