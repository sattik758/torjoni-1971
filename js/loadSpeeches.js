import { db } from "./firebase-config.js";
import { collection, getDocs } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const container = document.getElementById("speechContainer");

async function loadSpeeches() {
  if (!container) return;

  try {
    const querySnapshot = await getDocs(collection(db, "speeches"));

    querySnapshot.forEach((docSnap) => {
      const speech = docSnap.data();

      const card = document.createElement("div");
      card.classList.add("speech-card");

      card.innerHTML = `
        <h3>${speech.title}</h3>
        <p>${speech.year}</p>
        <p>${speech.location}</p>
      `;

      card.addEventListener("click", () => {
        window.location.href = `speech.html?id=${docSnap.id}`;
      });

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading speeches:", error);
  }
}

loadSpeeches();