import { imgAlt, imgNames } from './popupConfig.js';

const pages = document.querySelector('.pages-scrollspy');
const popup = document.querySelector(".show-detail");
const attrStr = 'src'; /* only src */
const state = 'dev'; /* choose dev & build */

const { LOGIN, MAIN, ADDRESS, CUSTOMER, PRODUCTS, ORDER, HISTORY, SALE } = imgAlt;
const { DEV, BUILD } = imgNames;

const setSrcStr = (altStr, stateStr) => {
  let srcStr = '';

  if (altStr === LOGIN.BEFORE) { // LOGIN (before)
    srcStr = stateStr === 'dev' ?
      DEV.LOGIN.BEFORE :
      BUILD.LOGIN.BEFORE;
  } else if (altStr === LOGIN.AFTER) { // LOGIN (after)
    srcStr = stateStr === 'dev' ?
      DEV.LOGIN.AFTER :
      BUILD.LOGIN.AFTER;
  } else if (altStr === MAIN.BEFORE) { // MAIN (before)
    srcStr = stateStr === 'dev' ?
      DEV.MAIN.BEFORE :
      BUILD.MAIN.BEFORE;
  } else if (altStr === MAIN.AFTER) { // MAIN (after)
    srcStr = stateStr === 'dev' ?
      DEV.MAIN.AFTER :
      BUILD.MAIN.AFTER;
  } else if (altStr === ADDRESS.BEFORE) { // ADDRESS (before)
    srcStr = stateStr === 'dev' ?
      DEV.ADDRESS.BEFORE :
      BUILD.ADDRESS.BEFORE;
  } else if (altStr === ADDRESS.AFTER) { // ADDRESS (after)
    srcStr = stateStr === 'dev' ?
      DEV.ADDRESS.AFTER :
      BUILD.ADDRESS.AFTER;
  } else if (altStr === CUSTOMER.BEFORE) { // CUSTOMER (before)
    srcStr = stateStr === 'dev' ?
      DEV.CUSTOMER.BEFORE :
      BUILD.CUSTOMER.BEFORE;
  } else if (altStr === CUSTOMER.AFTER) { // CUSTOMER (after)
    srcStr = stateStr === 'dev' ?
      DEV.CUSTOMER.AFTER :
      BUILD.CUSTOMER.AFTER;
  } else if (altStr === PRODUCTS.BEFORE) { // PRODUCTS (before)
    srcStr = stateStr === 'dev' ?
      DEV.PRODUCTS.BEFORE :
      BUILD.PRODUCTS.BEFORE;
  } else if (altStr === PRODUCTS.AFTER) { // PRODUCTS (after)
    srcStr = stateStr === 'dev' ?
      DEV.PRODUCTS.AFTER :
      BUILD.PRODUCTS.AFTER;
  } else if (altStr === ORDER.BEFORE) { // ORDER (before)
    srcStr = stateStr === 'dev' ?
      DEV.ORDER.BEFORE :
      BUILD.ORDER.BEFORE;
  } else if (altStr === ORDER.AFTER) { // ORDER (after)
    srcStr = stateStr === 'dev' ?
      DEV.ORDER.AFTER :
      BUILD.ORDER.AFTER;
  } else if (altStr === HISTORY.BEFORE) { // HISTORY (before)
    srcStr = stateStr === 'dev' ?
      DEV.HISTORY.BEFORE :
      BUILD.HISTORY.BEFORE;
  } else if (altStr === HISTORY.AFTER) { // HISTORY (after)
    srcStr = stateStr === 'dev' ?
      DEV.HISTORY.AFTER :
      BUILD.HISTORY.AFTER;
  } else if (altStr === SALE.BEFORE) { // SALE (before)
    srcStr = stateStr === 'dev' ?
      DEV.SALE.BEFORE :
      BUILD.SALE.BEFORE;
  } else if (altStr === SALE.AFTER) { // SALE (after)
    srcStr = stateStr === 'dev' ?
      DEV.SALE.AFTER :
      BUILD.SALE.AFTER;
  }

  return srcStr;
}

pages.addEventListener('click', (e) => {
  console.log('IMG Click !!');

  const popupImg = popup.children[0];
  const target = e.target;
  const altStr = target.getAttribute('alt');
  const srcStr = setSrcStr(altStr, state);

  popupImg.setAttribute(attrStr, srcStr);
});
