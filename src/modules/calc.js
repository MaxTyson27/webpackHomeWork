const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block')
  const calcType = document.querySelector('.calc-type')
  const calcSquare = document.querySelector('.calc-square')
  const calcCount = document.querySelector('.calc-count')
  const calcDay = document.querySelector('.calc-day')
  const total = document.getElementById('total')

  const coutCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value
    const calcSquareValue = +calcSquare.value
    
    let totalValue = 0
    let calcCountValue = 1
    let calcDayValue = 1

    function animateNumbers (num, elem) {
      let count = 0;
      let interval = setInterval(() => {
        if(num > count) {
          count += 5
          elem.textContent = count
        } else if(count >= num) {
          clearInterval(interval);
          elem.textContent = count
        } 
        
      },0.1)
    }


    if(calcDay.value && calcDay.value < 5){
      calcDayValue = 2
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5
    }

    if(calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10
    }

    if(calcType.value && calcSquare.value) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue
    } else {
      totalValue = 0
    }

    animateNumbers(totalValue, total);
    


  }

  calcBlock.addEventListener('input', e => {
    if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
      coutCalc()
    }
  })
}

export default calc