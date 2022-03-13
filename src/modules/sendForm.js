const sendForm = ({ formId = [], someElem = [] }) => {
  let form;
  const statusBlock = document.createElement('div')
  const loadText = 'Загрузка...'
  const errorText = 'Ошибка...'
  const successText = 'Спасибо, наш менеджер с вами свяжется!'
  
  const getForm = (formId) => {
    formId.forEach(item => {
      let countForm = document.getElementById(item)
      countForm.addEventListener('submit', (e) => {
        e.preventDefault()

        form = e.target
        
        submitForm()
      })
    });
  }

  const validate = (list) => {
    let success = false
    let bool = []

    list.forEach(input => {
      if(input.getAttribute('type') === 'text' ) {
        if(/[^а-яёА-ЯЁ]+/g.test(input.value)) {
          bool.push(false)
        } else {
          bool.push(true)
        }
      } else if(input.getAttribute('type') === 'email') {
        if(/[^a-zA-z\d\@\-\.\!\~\*\']+/g.test(input.value) || input.value.length === 0) {
          bool.push(false)
        } else {
          bool.push(true)
        }
      } else if(input.getAttribute('type') === 'tel') {
        if(/[^\d\)\(\+)]+/g.test(input.value)) {
          bool.push(false)
        } else {
          bool.push(true)
        }
      }
    });


    const isBool = bool.every(item => {
      if(item){
        return true
      } else {
        return false
      }
    })

    if(isBool){
      success = true
    }
  
    return success
  }

  const sendData = (data) => {
    return fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input')
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.textContent = loadText
    form.append(statusBlock)

    formData.forEach((val, key) => {
      formBody[key] = val
    });

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id)
      if(elem.type === 'block') {
        if(+element.textContent > 0){
          formBody[elem.id] = element.textContent
        }
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value
      }
    });

    if(validate(formElements)) {
      sendData(formBody)
      .then(data => {
        statusBlock.textContent = successText

        setTimeout(() =>{
          statusBlock.textContent = ''
        }, 4000)

        formElements.forEach(value => {
          value.value = ''
        });
      })
      .catch(error => {
        statusBlock.textContent = errorText
      })
    } else {
      console.log('Данные не верны');
      statusBlock.textContent = errorText
    }
  }

  try {
    // if(!form) {
    //   throw new Error('Верните форму на место, пж')
    // }
    getForm(formId)

  } catch (error) {
    console.log(error.message);
  }
}

export default sendForm