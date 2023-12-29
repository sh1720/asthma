class Prescription{
    constructor(daily,nightly,weekly){
        this.dailyPuffLimit = daily;
        this.nightlyPuffLimit = nightly;
        this.weeklyPuffLimit =weekly;
    }
    getDaily() {return dailyPuffLimit;}
    getNightly() {return nightlyPuffLimit;}
    getWeekly() {return weeklyPuffLimit;}

    resetDaily(newDaily){this.dailyPuffLimit = newDaily;}
    resetNightly(newDaily){this.dailyPuffLimit = newDaily;}
    resetWeekly(newDaily){this.dailyPuffLimit = newDaily;}
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

    setFavourite(){
        Inhaler.inhalers.remove(Inhaler.inhalers.indexOf(this));
        Inhaler.inhalers.unshift(this);
    }


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

        if (time.isAfter(LocalTime.of(18,0))&time.isBefore(LocalTime.of(6,0))){
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

    getInhalerList(){
        return inhalers;
    }
}
