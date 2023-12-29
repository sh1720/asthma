class Prescription{
    constructor(daily,nightly,weekly){
        this.dailyPuffLimit = daily;
        this.nightlyPuffLimit = nightly;
        this.weeklyPuffLimit =weekly;
    }
    getDaily() {
        return dailyPuffLimit;
    }
    getNightly() {
        return nightlyPuffLimit;
    }
    getWeekly() {
        return weeklyPuffLimit;
    }

    resetDaily(newDaily){
        this.dailyPuffLimit = newDaily;
    }
    resetNightly(newDaily){
        this.dailyPuffLimit = newDaily;
    }
    resetWeekly(newDaily){
        this.dailyPuffLimit = newDaily;
    }
}

class Inhaler{
    static inhalers = [];

    constructor(perPuff,vol,inhalerName,expDate){
        this.dosePerPuff = perPuff;
        this.volume = vol;
        this.name = inhalerName;
        this.expiryDate = expDate;

        this.allIntakes = [];
        inhalers.add(this);
        this.checkExpiryDate();

        this.dailyTotal = 0;
        this.nightlyTotal = 0;
        this.weeklyTotal = 0;
    }

    checkExpiryDate(){
        if (this.expiryDate.isBefore(LocalDate.now())){
            console.log("This inhaler is expired!");
        }
        if (this.expiryDate.isBefore(LocalDate.now()+7)){
            console.log("This inhaler is almost expired!");
        }
    }

    setPrescriptions(day,night,week){
        this.prescriptions = new Prescription(day,night,week);
    }

    getPrescriptions(){
        return this.prescriptions;
    }

    resetDailyDose(){
        this.dailyTotal = 0;
    }
    resetNightlyDose(){
        this.nightlyTotal = 0;
    }
    resetWeeklyDose(){
        this.weeklyTotal = 0;
    }

    inputIntake(date,time,puff){
        if (date.isAfter(this.lastIntakeDate)){
            this.resetDailyDose();
            this.resetNightlyDose();
        }
        if (this.lastIntakeDate.getWeekNumber()<date.getWeekNumber()){
            this.resetWeeklyDose();
        }
        else this.weeklyTotal = this.weeklyTotal+1;

        this.lastIntake = [];
        this.lastIntakeDate = date;
        this.lastIntakeTime = time.withSecond(0).withNano(0);
        this.lastPuffsNum = puffs;

        this.lastIntake.add(this.lastIntakeDate);
        this.lastIntake.add(this.lastIntakeTime);
        this.lastIntake.add(this.lastPuffsNum);

        this.allIntakes.add(lastIntake);
        this.lastDoseTaken = this.lastPuffsNum*this.dosePerPuff;

        if (time.isAfter(LocalTime.of(18,00))&time.isBefore(LocalTime.of(6,00))){
            this.nightlyTotal = this.nightlyTotal + this.lastDoseTaken;
        }
        else this.dailyTotal = this.dailyTotal + this.lastDoseTaken;

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

    getInhalerList(){
        return inhalers;
    }
}