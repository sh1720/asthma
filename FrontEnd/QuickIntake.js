//setting up for quick add intake
    const quickIntakeBtn = document.getElementById("quickIntakeBtn");
    let favInhaler = document.getElementById("favInhalerVar")

    quickIntakeBtn.addEventListener('click', function () {
        let quickIntakeDate = new Date();
        let quickIntakeTime = quickIntakeDate.getTime();
        favInhaler.addIntake(quickIntakeDate.toDateString(),quickIntakeTime,1); //default number of puff is one
        if (favInhaler.isOverused()) {
            new Notification("Warning:"+favInhaler.getName() + " is Overused!", {
                body: "It is recommended to space out this inhaler intake according to your registered dose.",
                icon: "./public/solid-warning@2x.png"
            })
        }
    })