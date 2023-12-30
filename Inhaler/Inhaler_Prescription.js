class Prescription{
    constructor(daily,nightly,weekly){
        this.dailyPuffLimit = daily;
        this.nightlyPuffLimit = nightly;
        this.weeklyPuffLimit =weekly;
    }
    getDaily() {return this.dailyPuffLimit;}
    getNightly() {return this.nightlyPuffLimit;}
    getWeekly() {return this.weeklyPuffLimit;}

    resetDaily(newDaily){this.dailyPuffLimit = newDaily;}
    resetNightly(newNightly){this.dailyPuffLimit = newNightly;}
    resetWeekly(newWeekly){this.dailyPuffLimit = newWeekly;}
}

class Inhaler{
    static inhalers = [];

    constructor(inhalerName,perPuff,vol,expDate,type){
        this.dosePerPuff = perPuff;
        this.volume = vol;
        this.name = inhalerName;
        this.expiryDate = new Date(expDate);
        this.type = type;

        this.allIntakes = [];
        Inhaler.inhalers.push(this);
        this.checkExpiryDate();
    }

    checkExpiryDate(){
        if (new Date(this.expiryDate.toDateString())<(new Date(new Date().toDateString()))){
            console.log("This inhaler is expired!");
        }
        if (new Date(this.expiryDate.toDateString())<((new Date(new Date().toDateString()))+7)){
            console.log("This inhaler is almost expired!");
        }
    }

    setPrescriptions(day,night,week){
        this.prescriptions = new Prescription(day,night,week);
        this.dailyLeft = day;
        this.nightlyLeft = night;
        this.weeklyLeft = week;
    }

    getPrescriptions(){
        return this.prescriptions;
    }
    getType(){return this.type;}

    //setFavourite(){
        //Inhaler.inhalers.remove(Inhaler.inhalers.indexOf(this));
        //Inhaler.inhalers.unshift(this);
    //}


    resetDailyDose(){
        this.dailyTotal = this.getPrescriptions().getDaily();
    }
    resetNightlyDose(){
        this.nightlyTotal = this.getPrescriptions().getNightly();
    }
    resetWeeklyDose(){
        this.weeklyTotal = this.getPrescriptions().getWeekly();
    }

    addIntake(date,time,puff){
        if (new Date(this.lastIntakeDate.toDateString())<(new Date(new Date().toDateString()))){
            this.resetDailyDose();
            this.resetNightlyDose();
        }
        if (this.lastIntakeDate.getWeekNumber()<date.getWeekNumber()){
            this.resetWeeklyDose();
        }
        else this.weeklyLeft = this.weeklyLeft-1;

        this.lastIntake = [];
        this.lastIntakeDate = date;
        this.lastIntakeTime = time.withSecond(0).withNano(0);
        this.lastPuffsNum = puffs;

        this.lastIntake.push(this.lastIntakeDate);
        this.lastIntake.push(this.lastIntakeTime);
        this.lastIntake.push(this.lastPuffsNum);

        this.allIntakes.push(lastIntake);
        this.lastDoseTaken = this.lastPuffsNum*this.dosePerPuff;

        if (time.isAfter(LocalTime.of(18,0))&time.isBefore(LocalTime.of(6,0))){ // need editing??
            this.nightlyLeft = this.nightlyLeft - this.lastDoseTaken;
        }
        else this.dailyLeft = this.dailyLeft - this.lastDoseTaken;

        this.volume = this.volume - this.lastDoseTaken;
        this.checkContent();
    }

    checkDose(){
        if(this.dailyTotal > (this.getPrescriptions().getDaily()-1)){
            console.log("Warning, you used your inhaler too often today!");
            console.log("Spacing out your inhaler intake is recommended.");
        }

        if(this.nightlyTotal > (this.getPrescriptions().getNightly()-1)){
            console.log("Warning, you used your inhaler too often tonight!");
            console.log("Spacing out your inhaler intake is recommended.");
        }

        if (weeklyTotal > (this.getPrescriptions().getWeekly()-1)) {
            console.log("Warning, you used your inhaler too often this week!");
            console.log("Spacing out the days of inhaler intake is recommended.");
        }
    }

    checkContent(){
        if (this.volume<5*this.dosePerPuff){
            console.log("You need to replace your inhaler soon!");
        }
    }

    static getInhaler(index){
        return Inhaler.inhalers[index];
    }
}

//setting up for add inhaler function
    const addInhalerBtn = document.getElementById("applyBtn");
    const newInhalerCrisisBtn = document.getElementById("crisisInhalerBtn");
    const newInhalerPreventionBtn = document.getElementById("preventionBtn");

    const newInhalerName = document.getElementById("inhalerNameVar");
    const newInhalerDose = document.getElementById("nbDosesInhalerVar");
    const newInhalerExpDate = document.getElementById("expiryDateVar");
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

    const newInhalerDoseBtn = document.getElementById("addReminderBtn");
    let newInhalerDailyDose = 0; //pending id??
    let newInhalerNightlyDose = 0; //pending id??
    let newInhalerWeeklyDose = 0; //pending id??

    newInhalerDoseBtn.addEventListener('click', function () {
        newInhaler.setPrescriptions(newInhalerDailyDose,newInhalerNightlyDose,newInhalerWeeklyDose);
    })

//setting up for add intake function
    const addIntakeBtn = document.getElementById("addIntakeBtn");
    const newIntakeTime = document.getElementById("intakeTimeVar");
    const newIntakePuffs = document.getElementById("nbPuffsVar");
    const selectInhaler1Btn = document.getElementById("inhaler1Btn");
    const selectInhaler2Btn = document.getElementById("inhaler2Btn");
    let newIntakeInhaler = 0;

    selectInhaler1Btn.addEventListener('click', function () {
        newIntakeInhaler = Inhaler.getInhaler(0);
    })
    selectInhaler2Btn.addEventListener('click', function () {
        newIntakeInhaler = Inhaler.getInhaler(1);
    })
    addIntakeBtn.addEventListener('click', function () {
        newIntakeInhaler.addIntake(new Date(new Date().toDateString()),newIntakeTime,newIntakePuffs);
        newIntakeInhaler.checkDose()
    })

//setting up for inhalers list (My Inhaler)

    const setFavBtn = document.getElementById("FavBtn"); //need to be more specific to which inhaler, assumed as inhaler1
    let favInhaler = Inhaler.getInhaler(0); //set first inhaler added as default favourite

    setFavBtn.addEventListener('click', function () {
        favInhaler = Inhaler.getInhaler(0);
    })

//setting up for quick add intake
    const quickIntakeBtn = document.getElementById("quickIntakeBtn");

    quickIntakeBtn.addEventListener('click', function () {
        let quickIntakeDate = new Date();
        let quickIntakeTime = quickIntakeDate.getTime();
        favInhaler.addIntake(quickIntakeDate.toDateString(),quickIntakeTime,1); //default number of puff is one
        favInhaler.checkDose();
    })



