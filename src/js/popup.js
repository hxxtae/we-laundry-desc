import { imgAlt, imgNames } from './popupConfig.js';


// dev
// const MW_IMG_LOGIN =  "mw_address.76d49ea8.PNG";
// const WE_IMG_LOGIN = "we_login.55d31020.PNG";
// const MW_IMG_MAIN = "mw_main.0d904070.PNG";
// const WE_IMG_MAIN = "we_main.560d9340.PNG";
// const MW_IMG_ADDRESS = "mw_address.76d49ea8.PNG";
// const WE_IMG_ADDRESS = "we_address.a1b07bd7.PNG";
// const MW_IMG_CUSTOMER = "mw_customer.b0089598.PNG";
// const WE_IMG_CUSTOMER = "we_customer.975c1046.PNG";
// const MW_IMG_PRODUCTS = "mw_products.d6edd1f2.PNG";
// const WE_IMG_PRODUCTS = "we_products.674e7d83.PNG";
// const MW_IMG_ORDER = "mw_order.e9be7c4b.PNG";
// const WE_IMG_ORDER = "we_record.61d3181c.PNG";
// const MW_IMG_HISTORY = "mw_history.04caf80e.PNG";
// const WE_IMG_HISTORY = "we_history.966db0ae.PNG";
// const MW_IMG_SALE = "mw_sales.fe4712aa.PNG";
// const WE_IMG_SALE = "we_sales.9a8f0865.PNG";
                  

// // build
// const MW_IMG_LOGIN_BUILD =  "mw_address.131beb94.PNG";
// const WE_IMG_LOGIN_BUILD = "we_login.7e2fd9d0.PNG";
// const MW_IMG_MAIN_BUILD = "mw_main.aedf805e.PNG";
// const WE_IMG_MAIN_BUILD = "we_main.e8f08d9d.PNG";
// const MW_IMG_ADDRESS_BUILD = "mw_address.131beb94.PNG";
// const WE_IMG_ADDRESS_BUILD = "we_address.eca32eb5.PNG";
// const MW_IMG_CUSTOMER_BUILD = "mw_customer.d62d0a76.PNG";
// const WE_IMG_CUSTOMER_BUILD = "we_customer.9a89caf1.PNG";
// const MW_IMG_PRODUCTS_BUILD = "mw_products.df55029b.PNG";
// const WE_IMG_PRODUCTS_BUILD = "we_products.c684c2ea.PNG";
// const MW_IMG_ORDER_BUILD = "mw_order.d5c5e74a.PNG";
// const WE_IMG_ORDER_BUILD = "we_record.0e32baf9.PNG";
// const MW_IMG_HISTORY_BUILD = "mw_history.3f67c26d.PNG";
// const WE_IMG_HISTORY_BUILD = "we_history.560572dc.PNG";
// const MW_IMG_SALE_BUILD = "mw_sales.21efd559.PNG";
// const WE_IMG_SALE_BUILD = "we_sales.c6e9af81.PNG";

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
