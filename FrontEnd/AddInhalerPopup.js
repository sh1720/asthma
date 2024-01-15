//AddInhalerPopup.js
// Import the functions needed from the SDKs you need
import { initializeApp } from "firebase/app";
import {child, get, getDatabase, push, ref, set} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Inhaler,Intake,Dosage} from "./Inhaler.js";


//Add Inhaler Page Code
function addInhalerPopup(firebaseConfig) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();
    let currentUser, currentUID, currentUserDB, inhalerDB;

    //identifying current logged in user
    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUser = user
            currentUID = user.uid;
            currentUserDB = ref(database,'/users/'+currentUID)
            inhalerDB = ref(database,'/users/'+currentUID+'/inhalers')
        }
    })

    //getting HTML buttons
    // const newInhalerCrisisBtn = document.getElementById("crisisInhalerBtn");
    // const newInhalerPreventionBtn = document.getElementById("preventionBtn");
    //
    // //initialise inhaler type in case user does not choose any
    const newInhalerType = "Crisis";
    //
    // //getting inhaler type button text display
    // let preventionBtnText = document.getElementById("preventionText")
    // let crisisBtnText = document.getElementById("crisisText")
    //
    // //choosing new inhaler type
    // newInhalerCrisisBtn.addEventListener('click', function () {
    //     newInhalerType = "Crisis";
    //     crisisBtnText.textContent = "Crisis (selected)"
    //     preventionBtnText.textContent = "Prevention"
    // })
    // newInhalerPreventionBtn.addEventListener('click', function () {
    //     newInhalerType = "Prevention";
    //     preventionBtnText.textContent = "Prevention (selected)"
    //     crisisBtnText.textContent = "Crisis"
    // })
    //
    // //setting up for dosage reminders added for new inhaler
    // const newInhalerDoseBtn = document.getElementById("addReminderBtn");
    // let reminderCount = 0;
    // let reminderTimes = [];
    //
    // //confirming dosage reminder time to be added for inhaler
    // newInhalerDoseBtn.addEventListener('click', function () {
    //     const newReminder = document.getElementById("newDose");
    //     let newInhalerDoseReminder = new Date(newReminder.value);
    //     if (newInhalerDoseReminder) {
    //         if ((newInhalerDoseReminder - Date.now()) > 0) {
    //             reminderTimes.push(newReminder.value)
    //             reminderCount++;
    //             let reminderSection = document.getElementById("dosagePrescriptionSection")
    //             let newReminderAdded = document.createElement('h3')
    //             newReminderAdded.className = "inhaler-name"
    //             newReminderAdded.textContent = "Dosage " + reminderCount.toString() + ": " + newInhalerDoseReminder.toLocaleTimeString()
    //             reminderSection.appendChild(newReminderAdded)
    //         } else {
    //             alert('Reminder submitted is in the past')
    //         }
    //     }
    //
    // })

    //set button to write inhaler, its fields, and reminders to user's database on click
    const addInhalerBtn = document.getElementById("applyBtn");
    if (addInhalerBtn) {
        addInhalerBtn.addEventListener('click', function (event) {
            event.preventDefault();
            inhalerForm();
        });
    } else {
        console.error("Inhaler form not found")
    }

    function inhalerForm() {
        if (!currentUserDB) {
            console.error("User database reference is not set")
            return;
        }

        const newInhalerName = document.getElementById("newInhalerName").value;
        const newInhalerVol = document.getElementById("newInhalerVolume").value;
        const newInhalerExpDate = document.getElementById("newInhalerExpDate").value;
        console.log(newInhalerExpDate)

        saveUserData(currentUserDB, newInhalerName, newInhalerVol, newInhalerType)
    }

    async function saveUserData(currentUserDB, newInhalerName, newInhalerVol, newInhalerType) {
        // const expiryTimestamp = new Date(newInhalerExpDate).getTime();
        // if (isNaN(expiryTimestamp)) {
        //     console.error('Invalid expiry date');
        //     alert("Invalid expiry date")
        //     return;
        // }


        const newInhaler = new Inhaler(newInhalerName, newInhalerVol, newInhalerType);
        console.log("Save user data")
        if (newInhaler.isExpired()) {
            alert("Inhaler " + newInhaler.getName() + " is expired, add a different one!");
            return; // Exit the function if the inhaler is expired
        }

        if (!currentUserDB) {
            console.error('User database reference not found');
            return; // Exit if the database reference is not found
        }

        // Create new child in list of inhalers with default as non-favourite
        const newInhalerDB = child(currentUserDB, '/' + newInhaler.getName());
        console.log(newInhaler)
        try {
            await push(newInhalerDB,
                {
                    inhaler: newInhaler,
                    fav: false,
                });
        } catch (error){
            console.error("Error saving inhaler data:", error);
        }

        // for (let i = 0; i < reminderTimes.length; i++) {
        //     newInhaler.setDose(new Date(reminderTimes[i]));
        //     let newDose = newInhaler.getNewDose();
        //
        //     if (newDose.getReminderTime().getTime() > Date.now()) {
        //         let dosageString = newDose.getReminderTime().getTime().toString();
        //         let dosageDB = child(newInhalerDB, '/dosage/reminder' + (i + 1).toString());
        //         await set(dosageDB, {
        //             time: dosageString
        //         });
        //     }
        // }

        console.log('Inhaler is successfully added to user database');
        alert('Inhaler is successfully added to user database')
        location.reload(); // Consider alternative methods to update UI without reloading
    }
}

export default addInhalerPopup;






