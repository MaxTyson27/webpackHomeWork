'use strict';

import one from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal';
import validate from './modules/validate';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc'
import sendForm from './modules/sendForm'

one('25 february 2022')
menu()
modal()
validate()
tabs()
slider('.portfolio-content', '.portfolio-item')
calc(100)
sendForm({
  formId: ['form1', 'form2', 'form3'],
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ] 
})