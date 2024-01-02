    Notification.requestPermission().then(permission => {
        if (permission === 'denied') {
            alert("You need to allow notifications to receive dosage reminders.")
        }
    })
    const addInhalerBtn = document.getElementById("applyBtn");
    const newInhalerCrisisBtn = document.getElementById("crisisInhalerBtn");
    const newInhalerPreventionBtn = document.getElementById("preventionBtn");

    const newInhalerName = document.getElementById("newInhalerName");
    const newInhalerDose = document.getElementById("newInhalerVolume");
    const newInhalerExpDate = document.getElementById("newInhalerExpDate");
    let newInhalerType = "Type Unknown";
    let newInhaler = 0;

    newInhalerCrisisBtn.addEventListener('click', function () {
        let newInhalerType = "Crisis";
    })
    newInhalerPreventionBtn.addEventListener('click', function () {
        let newInhalerType = "Prevention";
    })
    addInhalerBtn.addEventListener('click', function () {
        let newInhaler = new Inhaler(newInhalerName,newInhalerDose,50,newInhalerExpDate,newInhalerType);
    })