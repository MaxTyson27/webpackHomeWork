const timer = (deadline) => {
  const timeHours = document.querySelector('#timer-hours')
  const timeMinutes = document.querySelector('#timer-minutes')
  const timeSeconds = document.querySelector('#timer-seconds')
  
  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000
    // let days = Math.floor(timeRemaining / 60 / 60 / 24)
    let hours = Math.floor(timeRemaining / 60 / 60)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60);
    // console.log(days)

    return {timeRemaining, hours, minutes, seconds,}
    
  }

  const updateClock = () => {
    let getTime = getTimeRemaining()
    for(let key in getTime) {
      if(getTime[key] < 10) {
        getTime[key] = "0" + getTime[key]
      }
    }

    if(getTime.timeRemaining > 0) {
      timeHours.textContent = getTime.hours
      timeMinutes.textContent = getTime.minutes
      timeSeconds.textContent = getTime.seconds

    } else {
      clearInterval(intervalId);
    }
  
  }

  const intervalId = setInterval(updateClock, 1000);

} 

export default timer