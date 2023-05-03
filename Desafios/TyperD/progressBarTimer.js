
class ProgressBarTimer{
    constructor(time, timeIntervals=1000,progressBar,callback){
        this.timeIntervals = timeIntervals;
        this.progressBar = progressBar;
        this.callback = callback;
        this.time = time;
        this.currentTime = time;
        this.intervalId;
    }
    
    
    start(){
        this.intervalId = setInterval(this.timerRoutine, this.timeIntervals);
    }

    stop(){
        clearInterval(this.intervalId)
    }

    restart(){
        this.currentTime = this.time;
    }

    setTime(time){
        this.time = time;
    }

    onTimeOver(){
        clearInterval(this.timeInterval)
        this.callback()
    }

    updateProgressBar(){
        this.progressBar.style.width = `${this.currentTime*10}%`
        if(this.timeIsOnSuccesRange()){
            if(!this.progressBar.classList.contains("bg-success"))
            {
                this.progressBar.classList.remove("bg-warning")
                this.progressBar.classList.remove("bg-danger")
                this.progressBar.classList.add("bg-success")
            }
        }
        else if(this.timeIsOnWarningRange){
            if(this.progressBar.classList.contains("bg-success"))
            {
                this.progressBar.classList.remove("bg-success")
                this.progressBar.classList.add("bg-warning")
            }
        }
        else{
            if(this.progressBar.classList.contains("bg-warning"))
            {
                this.progressBar.classList.remove("bg-warning")
                this.progressBar.classList.add("bg-danger")
            }
        }
    }

    thirdOfTime(){
        return this.time/3
    }

    timeIsOnSuccesRange(){
        
        return this.currentTime > 2*this.thirdOfTime()
    }
    timeIsOnWarningRange(){
        return this.currentTime < 2*this.thirdOfTime() && this.currentTime > this.thirdOfTime()
    }

    timerRoutine(){
        this.timer.currentTime -= 1;
        this.timer.updateProgressBar();
        if(this.timer.currentTime === 0){
            this.timer.onTimeOver();
        }
    }
}