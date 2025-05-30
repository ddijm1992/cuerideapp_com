import { auth, db } from './firebase.js';
import {
  addDoc, collection, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.bookRide = async function () {
  const pickup = document.getElementById('pickup').value;
  const dropoff = document.getElementById('dropoff').value;

  if (!pickup || !dropoff) {
    alert("Please fill in both pickup and drop-off locations.");
    return;
  }

  try {
    await addDoc(collection(db, "rides"), {
      riderId: auth.currentUser.uid,
      pickupLocation: pickup,
      dropoffLocation: dropoff,
      timestamp: serverTimestamp(),
      status: "pending",
      driverId: null
    });
    alert("Ride request submitted!");
  } catch (error) {
    alert("Error booking ride: " + error.message);
  }
};