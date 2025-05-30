import { db } from './firebase.js';
import {
  collection, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const panel = document.getElementById("data-panel");

async function loadData() {
  const usersSnap = await getDocs(collection(db, "users"));
  const ridesSnap = await getDocs(collection(db, "rides"));

  panel.innerHTML = "<h3>Users:</h3>";
  usersSnap.forEach(doc => {
    const d = doc.data();
    panel.innerHTML += `<p>${d.email} – Role: ${d.role}</p>`;
  });

  panel.innerHTML += "<h3>Rides:</h3>";
  ridesSnap.forEach(doc => {
    const r = doc.data();
    panel.innerHTML += `<p>Pickup: ${r.pickupLocation}, Dropoff: ${r.dropoffLocation}, Status: ${r.status}</p>`;
  });
}

loadData();