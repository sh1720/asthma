import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://scrimba-162f5-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

// edit contact
function editContact(contactID) {
    const contactRef = ref(database, 'contactList/${contactID}');

    onValue(contactRef, function (snapshot) {
        if (snapshot.exists()) {
            const contactData = snapshot.val();
            const phonenbInput = document.getElementById('phonenb');
            phonenbInput.value = contactData.phonenb;
        } else {
            console.error(`Contact with ID ${contactID} not found`);
        }
    });

    // set functions for update, delete and back button
    const updateButton = document.getElementById('update-button');
    const backButton = document.getElementById('back-button');
    const resetButton = document.getElementById('reset-button');

    updateButton.addEventListener('click', function () {
        const updatedPhonenb = document.getElementById('phonenb').value;
        // update contact
        const updatedContactData = {
            phonenb: updatedPhonenb,

        };

        set(ref(database, `contactList/${contactID}`), updatedContactData)
            .then(() => {
                const successMessage = document.createElement('p');
                successMessage.textContent = `Contact with ID ${contactID} updated successfully`;
                successMessage.style.color = "green"; // Customize the style if needed
                updateButton.parentNode.appendChild(successMessage);
            })
            .catch((error) => {
                console.error(`Error updating contact with ID ${contactID}:`, error);
                const errorMessage = document.createElement('p');
                errorMessage.textContent = `Error updating contact with ID ${contactID}`;
                errorMessage.style.color = "red"; 
                updateButton.parentNode.appendChild(errorMessage);
            });
    });

    backButton.addEventListener('click', function () {
        window.location.href = 'emergencypg.html';
    });

    resetButton.addEventListener('click', function () {
        if (confirm(`Are you sure you want to reset contact with ID ${contactID}?`)) {
            const updatedContactData = {
                name: '',
                phonenb: '',
                relationship: ''
            };

            set(ref(database, `contactList/${contactID}`), updatedContactData)
                .then(() => {
                    console.log(`Contact data with ID ${contactID} cleared successfully`);
                
                })
                .catch((error) => {
                    const errorMessage = document.createElement('p');
                    errorMessage.textContent = `Error clearing contact data with ID ${contactID}`;
                    errorMessage.style.color = "red"; // Customize the style if needed
                    resetButton.parentNode.appendChild(errorMessage);
                });
        }
    });
}

const urlParams = new URLSearchParams(window.location.search);
const contactID = urlParams.get('id');


if (contactID) {
    editContact(contactID);
} else {
    console.error("Contact ID not provided in the URL parameters");
}
