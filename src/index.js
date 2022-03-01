'use strict';

import one from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal';
import validate from './modules/validate';
import tabs from './modules/tabs';
import slider from './modules/slider';

one('25 february 2022')
menu()
modal()
validate()
tabs()
slider('.portfolio-content', '.portfolio-item')