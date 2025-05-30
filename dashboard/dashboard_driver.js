import { db, auth } from './firebase.js';
import {
  collection, query, where, onSnapshot, updateDoc, doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const rideList = document.getElementById("ride-list");

auth.onAuthStateChanged(user => {
  if (!user) return;

  const q = query(collection(db, "rides"), where("status", "==", "pending"));
  onSnapshot(q, snapshot => {
    rideList.innerHTML = "";
    snapshot.forEach(docSnap => {
      const data = docSnap.data();
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>Pickup:</strong> ${data.pickupLocation} <br>
        <strong>Dropoff:</strong> ${data.dropoffLocation}</p>
        <button onclick="acceptRide('${docSnap.id}')">Accept Ride</button>
        <hr>
      `;
      rideList.appendChild(div);
    });
  });
});

window.acceptRide = async (rideId) => {
  const rideRef = doc(db, "rides", rideId);
  await updateDoc(rideRef, {
    status: "accepted",
    driverId: auth.currentUser.uid
  });
  alert("Ride accepted!");
};