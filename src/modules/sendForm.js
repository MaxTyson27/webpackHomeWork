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
    let success = true


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
        formBody[elem.id] = element.textContent
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value
      }
    });

    if(validate(formElements)) {
      sendData(formBody)
      .then(data => {
        statusBlock.textContent = successText

        formElements.forEach(value => {
          value.value = ''
        });
      })
      .catch(error => {
        statusBlock.textContent = errorText
      })
    } else {
      console.log('Данные не верны');
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