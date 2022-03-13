const validate = () => {
  const inputsNumber = document.querySelectorAll('.calc-block>input[type="text"]');
  // const formTop = document.querySelector('#form1');
  // const formModal = document.querySelector('#form3')
  // const formFooter = document.querySelector('#form2')
  // const forms = {formTop,formModal}

  function inputsReplaceValue () {
    const inputs = [...document.querySelectorAll('input[type="text"]')]
    const inputsMail = [...document.querySelectorAll('input[type="email"]')]
    const inputsPhone = [...document.querySelectorAll('input[type="tel"]')]


    inputsNumber.forEach(item => {
      item.addEventListener('input', ()=> {
        item.value = item.value.replace(/[^\d]/g, '');
      });
    });

    inputsMail.forEach(item => {
      item.addEventListener('input', function () {
        this.value = this.value.replace(/[^a-zA-z\d\@\-\.\!\~\*\']+/gi, '')
      })
    });

    inputsPhone.forEach(item => {
      item.addEventListener('input', function () {
        this.value = this.value.replace(/[^\d\(\)\-\+]+/gi, '')
      })
    });

    
    inputs.splice(1,3)
    inputs.forEach(item => {
      item.addEventListener('input', function () {
        if(this.value.length == 1) {
          this.value = this.value.toUpperCase()
        }
        this.value = this.value.replace(/[^а-яёА-ЯЁ\-\ ]+/gi, '')
      })
    });
  }

  // function inputsValid (name, phone, mail, mes) {
  //   let isError = false
  //   if(!/[^а-яёА-ЯЁ\-\ ]+/g.test(name.value)) {
  //     return true
  //   } else {
  //     isError = true
  //   }

  //   if(!/[^\d\(\)\-]+/g.test(phone.value)) {
  //     return true
  //   } else {
  //     isError = true
  //   }

  //   if(!/[^a-zA-z\d\@\-\.\!\~\*\']+/g.test(mail.value)) {
  //     return true
  //   } else {
  //     isError = true
  //   }

  //   if(arguments[3] != undefined) {
  //     if(!/[^а-яёА-ЯЁ\-\ ]+/g.test(mes.value)) {
  //       return true
  //     } else {
  //       isError = true
  //     }
  //   }

  //   if(!isError) {
  //     alert('Ваша заявка была успешно отправлена!')
  //   } else {
  //     console.log('fail');
  //   }
  // }

  // const formsValidate = () => {
  //   for(let key in forms){
  //     forms[key].addEventListener('submit', (e) => {
  //       e.preventDefault();
  //       const inputName = e.target.querySelector('input[type="text"]');
  //       const inputPhone = e.target.querySelector('input[type="tel"]');
  //       const inputEmail = e.target.querySelector('input[type="email"]');
  //       inputsValid(inputName, inputPhone, inputEmail)

  //     })
  //   }
  //   formFooter.addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     const name = e.target.querySelector('input[type="text"]');
  //     const phone = e.target.querySelector('input[type="tel"]');
  //     const email = e.target.querySelector('input[type="email"]');
  //     const message = e.target.querySelector('#form2-message');
  //     inputsValid(name, phone, email, message);
  //   })
  // }

  
  inputsReplaceValue()
}

export default validate