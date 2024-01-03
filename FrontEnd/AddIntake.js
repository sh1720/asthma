    const addIntakeBtn = document.getElementById("addIntakeBtn");
    const newIntakeTime = document.getElementById("intakeTimeVar");
    const newIntakePuffs = document.getElementById("nbPuffsVar");

    addIntakeBtn.addEventListener('click', function () {
        newIntakeInhaler.addIntake(newIntakeTime, newIntakePuffs);
        if (newIntakeInhaler.isOverused()) {
            new Notification("Warning:"+newIntakeInhaler.getName() + " is Overused!", {
                body: "It is recommended to space out this inhaler intake according to your registered dose.",
                icon: "./public/solid-warning@2x.png"
            })
        }
    })