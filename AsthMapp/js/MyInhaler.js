import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, push, ref, onValue, child, get, set, update,orderByChild,equalTo} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Inhaler,Intake,Dosage} from "./Inhaler.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBy1dB-bUbRIQPsvMiO3nujknwP6ntdMes",
    authDomain: "asthmapp-121a8.firebaseapp.com",
    databaseURL: "https://asthmapp-121a8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "asthmapp-121a8",
    storageBucket: "asthmapp-121a8.appspot.com",
    messagingSenderId: "583573518616",
    appId: "1:583573518616:web:921a17f44e5fca27b3066d",
    measurementId: "G-PLRLWFR1X7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

const auth = getAuth();
const currentUser = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        const currentUID = currentUser.uid;
        const currentUserDB = ref(database,'/users/'+currentUID)
        const inhalerDB = ref(database,'/users/'+currentUID+'/inhalers')
    }
})
if (currentUser){
    var currentUID = currentUser.uid;
    var currentUserDB = ref(database,'/users/'+currentUID)
    var inhalerDB = child(currentUserDB, '/inhalers')
}
else {
    currentUID = 'testDosage2'
    currentUserDB = ref(database, '/users/' + currentUID)
    inhalerDB = child(currentUserDB, '/inhalers')
}
get(inhalerDB).then((snapshot) => {
    if (snapshot.exists()) {
        snapshot.forEach(function (childSnapshot) {
            let inhaler = childSnapshot.val().inhaler;
            let inhalerList = document.getElementById("mainMyInhaler")
            let inhalerType = document.createElement('h1');
            inhalerType.className = "reminders"
            inhalerType.textContent = inhaler.getType();
            inhalerList.appendChild(inhalerType)

            let inhalerField = document.createElement('ul')
            inhalerField.className = "inhalerfield"
            inhalerList.appendChild(inhalerField)

            let inhalerImage = document.createElement('button')
            inhalerImage.id = "editInhalerBtn"
            if (inhalerType.textContent === "Prevention") {
                inhalerImage.className = "inhalerimage"
            } else {
                inhalerImage.className = "inhalerimage2"
            }
            inhalerField.appendChild(inhalerImage)

            let favBtn = document.createElement('button');
            favBtn.className = "love"
            let favImg = document.createElement('img');
            favImg.src = "./public/love@2x.png"
            favImg.className = "love-icon"
            //favImg.alt = "Set as Favourite"
            favImg.addEventListener('click', () => {
                var thisInhalerKey = childSnapshot.key
                inhalerDB.child(thisInhalerKey).update({fav: 'yes'})
                get(inhalerDB).then((snapshot) => {
                    if (snapshot.exists()) {
                        snapshot.forEach(function (childSnapshot) {
                            var inhalerKey = childSnapshot.key
                            if (inhalerKey !== thisInhalerKey) {
                                inhalerDB.child(childSnapshot.key).update({fav: 'yes'})
                            }
                        })
                    }
                })
                favBtn.appendChild(favImg)
                inhalerField.appendChild(favBtn)

                let inhalerSection = document.createElement('section')
                inhalerSection.className = "inhalertext"
                inhalerField.appendChild(inhalerSection)
                let inhalerName = document.createElement('h2')
                inhalerName.className = "reminders"
                inhalerName.textContent = inhaler.getName()
                inhalerSection.appendChild(inhalerName)

                let inhalerStats = document.createElement('section')
                inhalerStats.className = "statsinhaler"
                inhalerSection.appendChild(inhalerStats)
                let lastUsageDiv = document.createElement('div')
                lastUsageDiv.className = "lastusagediv"
                inhalerSection.appendChild(lastUsageDiv)
                let lastUsage = document.createElement('h3')
                lastUsage.className = "lastusage"
                lastUsage.textContent = "Last Usage:"
                let lastUsageVar = document.createElement('b')
                lastUsageVar.className = "lastusagevar"
                lastUsageVar.textContent = inhaler.getNextDoseTime()
                lastUsageDiv.appendChild(lastUsage)
                lastUsageDiv.appendChild(lastUsageVar)

                let expDateDiv = document.createElement('div')
                expDateDiv.className = "lastusagediv"
                inhalerSection.appendChild(expDateDiv)
                let expDate = document.createElement('h3')
                expDate.className = "lastusage"
                expDate.textContent = "Expiry Date:"
                let expDateVar = document.createElement('b')
                expDateVar.className = "expirydatevar"
                let expiryDate = new Date(inhaler.getExpDate())
                expDateVar.textContent = expiryDate.toDateString()
                expDateDiv.appendChild(expDate)
                expDateDiv.appendChild(expDateVar)

                let usagesLeftDiv = document.createElement('div')
                usagesLeftDiv.className = "lastusagediv"
                inhalerSection.appendChild(usagesLeftDiv)
                let usagesLeft = document.createElement('h3')
                usagesLeft.className = "lastusage"
                usagesLeft.textContent = "Usage Left:"
                let usagesLeftVar = document.createElement('b')
                usagesLeftVar.className = "expirydatevar"
                usagesLeftVar.textContent = inhaler.getAllDoses().length.toString()
                usagesLeftDiv.appendChild(usagesLeft)
                usagesLeftDiv.appendChild(usagesLeftVar)

                inhalerStats.appendChild(lastUsageDiv)
                inhalerStats.appendChild(expDateDiv)
                inhalerStats.appendChild(usagesLeftDiv)

                let reminderSection = document.createElement('section')
                reminderSection.className = "reminderssection"
                inhalerStats.appendChild(reminderSection)
                let reminders = document.createElement('h2')
                reminders.className = "reminders"
                reminders.textContent = "Reminders:"
                reminderSection.appendChild(reminders)
                let remindersList = document.createElement('ul')
                remindersList.className = "reminderul1"
                reminderSection.appendChild(remindersList)

                let reminderDB = child(inhalerDB, '/dosage/reminder')
                get(inhalerDB).then((snapshot) => {
                    if (snapshot.exists()) {
                        snapshot.forEach(function (childSnapshot) {
                            let reminderVar = document.createElement('i')
                            reminderVar.className = "remindervar"
                            let reminder = new Date(snapshot.val())
                            reminderVar.textContent = reminder.toLocaleTimeString() + "||"
                            remindersList.append(reminderVar)
                        })
                    }
                })
            })
        })
    }
})


// Function to close a popup by traversing up the DOM tree
function closePopup(event) {
    let popup = event.currentTarget.parentNode;
    while (popup && !popup.classList.contains("popup-overlay")) {
        popup = popup.parentNode;
    }
    if (popup) {
        popup.style.display = "none";
    }
}

// Function to open a popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (!popup) return;

    const popupStyle = popup.style;
    popupStyle.display = "flex";
    popupStyle.zIndex = "100";
    popupStyle.backgroundColor = "rgba(30, 56, 95, 0.8)";
    popupStyle.alignItems = "center";
    popupStyle.justifyContent = "center";
    popup.setAttribute("closable", "");

    const onClick = function (e) {
        if (e.target === popup && popup.hasAttribute("closable")) {
            popupStyle.display = "none";
        }
    };
    popup.addEventListener("click", onClick);
}

// Attach event listeners
document.getElementById("closeBtn")?.addEventListener("click", closePopup);
document.getElementById("addIntakeBtn")?.addEventListener("click", closePopup);
document.getElementById("applyBtn")?.addEventListener("click", closePopup);
document.getElementById("newInhalerIntakeBtn")?.addEventListener("click", () => openPopup("addIntakePopup"));
document.getElementById("editInhalerBtn")?.addEventListener("click", () => openPopup("addInhalerPopup"));
document.getElementById("newInhalerBtn")?.addEventListener("click", () => openPopup("addInhalerPopup"));
document.getElementById("usageHistoryBtn")?.addEventListener("click", () => window.location.href = "./MyUsageLog.html");
document.getElementById("homeBtn")?.addEventListener("click", () => window.location.href = "./Home.html");
document.getElementById("cloudContainer")?.addEventListener("click", () => window.location.href = "./AirQuality01.html");
document.getElementById("emergencyBtn")?.addEventListener("click", () => window.location.href = "./Emergency1.html");



