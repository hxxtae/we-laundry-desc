const BEFORE_LOGIN = "before-login-image";
const AFTER_LOGIN = "after-login-image";
const BEFORE_MAIN = "before-main-image";
const AFTER_MAIN = "after-main-image";
const BEFORE_ADDRESS = "before-address-image";
const AFTER_ADDRESS = "after-address-image";
const BEFORE_CUSTOMER = "before-customer-image";
const AFTER_CUSTOMER = "after-customer-image";
const BEFORE_PRODUCTS = "before-products-image";
const AFTER_PRODUCTS = "after-products-image";
const BEFORE_ORDER = "before-order-image";
const AFTER_ORDER = "after-order-image";
const BEFORE_HISTORY = "before-history-image";
const AFTER_HISTORY = "after-history-image";
const BEFORE_SALE = "before-sale-image";
const AFTER_SALE = "after-sale-image";

// dev
const MW_IMG_LOGIN =  "mw_address.76d49ea8.PNG";
const WE_IMG_LOGIN = "we_login.55d31020.PNG";
const MW_IMG_MAIN = "mw_main.0d904070.PNG";
const WE_IMG_MAIN = "we_main.560d9340.PNG";
const MW_IMG_ADDRESS = "mw_address.76d49ea8.PNG";
const WE_IMG_ADDRESS = "we_address.a1b07bd7.PNG";
const MW_IMG_CUSTOMER = "mw_customer.b0089598.PNG";
const WE_IMG_CUSTOMER = "we_customer.975c1046.PNG";
const MW_IMG_PRODUCTS = "mw_products.d6edd1f2.PNG";
const WE_IMG_PRODUCTS = "we_products.674e7d83.PNG";
const MW_IMG_ORDER = "mw_order.e9be7c4b.PNG";
const WE_IMG_ORDER = "we_record.61d3181c.PNG";
const MW_IMG_HISTORY = "mw_history.04caf80e.PNG";
const WE_IMG_HISTORY = "we_history.966db0ae.PNG";
const MW_IMG_SALE = "mw_sales.fe4712aa.PNG";
const WE_IMG_SALE = "we_sales.9a8f0865.PNG";
                  

// build
const MW_IMG_LOGIN_BUILD =  "mw_address.131beb94.PNG";
const WE_IMG_LOGIN_BUILD = "we_login.7e2fd9d0.PNG";
const MW_IMG_MAIN_BUILD = "mw_main.aedf805e.PNG";
const WE_IMG_MAIN_BUILD = "we_main.e8f08d9d.PNG";
const MW_IMG_ADDRESS_BUILD = "mw_address.131beb94.PNG";
const WE_IMG_ADDRESS_BUILD = "we_address.eca32eb5.PNG";
const MW_IMG_CUSTOMER_BUILD = "mw_customer.d62d0a76.PNG";
const WE_IMG_CUSTOMER_BUILD = "we_customer.9a89caf1.PNG";
const MW_IMG_PRODUCTS_BUILD = "mw_products.df55029b.PNG";
const WE_IMG_PRODUCTS_BUILD = "we_products.c684c2ea.PNG";
const MW_IMG_ORDER_BUILD = "mw_order.d5c5e74a.PNG";
const WE_IMG_ORDER_BUILD = "we_record.0e32baf9.PNG";
const MW_IMG_HISTORY_BUILD = "mw_history.PNG";
const WE_IMG_HISTORY_BUILD = "we_history.PNG";
const MW_IMG_SALE_BUILD = "mw_sales.21efd559.PNG";
const WE_IMG_SALE_BUILD = "we_sales.c6e9af81.PNG";


const pages = document.querySelector('.pages-scrollspy');
const popup = document.querySelector(".show-detail");

pages.addEventListener('click', (e) => {
  console.log('IMG Click !!');

  const popupImg = popup.children[0];
  const target = e.target;
  const altStr = target.getAttribute('alt');
  const attrStr = 'src';
  const state = 'dev';

  if (altStr === BEFORE_LOGIN) {
    const srcStr = configImgStr('before', state, 'login');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === AFTER_LOGIN) {
    const srcStr = configImgStr('after', state, 'login');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === BEFORE_MAIN) {
    const srcStr = configImgStr('before', state, 'main');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === AFTER_MAIN) {
    const srcStr = configImgStr('after', state, 'main');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === BEFORE_ADDRESS) {
    const srcStr = configImgStr('before', state, 'address');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === AFTER_ADDRESS) {
    const srcStr = configImgStr('after', state, 'address');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === BEFORE_CUSTOMER) {
    const srcStr = configImgStr('before', state, 'customer');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === AFTER_CUSTOMER) {
    const srcStr = configImgStr('after', state, 'customer');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === BEFORE_PRODUCTS) {
    const srcStr = configImgStr('before', state, 'products');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === AFTER_PRODUCTS) {
    const srcStr = configImgStr('after', state, 'products');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === BEFORE_ORDER) {
    const srcStr = configImgStr('before', state, 'order');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === AFTER_ORDER) {
    const srcStr = configImgStr('after', state, 'order');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === BEFORE_HISTORY) {
    const srcStr = configImgStr('before', state, 'history');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === AFTER_HISTORY) {
    const srcStr = configImgStr('after', state, 'history');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === BEFORE_SALE) {
    const srcStr = configImgStr('before', state, 'sale');
    popupImg.setAttribute(attrStr, srcStr);
  } else if (altStr === AFTER_SALE) {
    const srcStr = configImgStr('after', state, 'sale');
    popupImg.setAttribute(attrStr, srcStr);
  } else {
    popupImg.setAttribute(attrStr, '');
  }
});

function configImgStr(kind, state, name) {
  const kindChk = kind === 'before' ? 0 : 1;
  const devChk = state === 'dev' ? 1 : 0;

  if(name === 'login') {
    if(!kindChk) {
      return devChk ? MW_IMG_LOGIN : MW_IMG_LOGIN_BUILD;
    } else if(kindChk) {
      return devChk ? WE_IMG_LOGIN : WE_IMG_LOGIN_BUILD;
    }
  } else if(name === "main") {
    if(!kindChk) {
      return devChk ? MW_IMG_MAIN : MW_IMG_MAIN_BUILD;
    } else if(kindChk) {
      return devChk ? WE_IMG_MAIN : WE_IMG_MAIN_BUILD;
    }
  } else if(name === 'address') {
    if(!kindChk) {
      return devChk ? MW_IMG_ADDRESS : MW_IMG_ADDRESS_BUILD;
    } else if(kindChk) {
      return devChk ? WE_IMG_ADDRESS : WE_IMG_ADDRESS_BUILD;
    }
  } else if (name === 'customer') {
    if(!kindChk) {
      return devChk ? MW_IMG_CUSTOMER : MW_IMG_CUSTOMER_BUILD;
    } else if(kindChk) {
      return devChk ? WE_IMG_CUSTOMER : WE_IMG_CUSTOMER_BUILD;
    }
  } else if(name === 'products') {
    if(!kindChk) {
      return devChk ? MW_IMG_PRODUCTS : MW_IMG_CUSTOMER_BUILD;
    } else if(kindChk) {
      return devChk ? WE_IMG_PRODUCTS : WE_IMG_CUSTOMER_BUILD;
    }
  } else if(name === 'order') {
    if(!kindChk) {
      return devChk ? MW_IMG_ORDER : MW_IMG_CUSTOMER_BUILD;
    } else if(kindChk) {
      return devChk ? WE_IMG_ORDER : WE_IMG_CUSTOMER_BUILD;
    }
  } else if(name === 'history') {
    if(!kindChk) {
      return devChk ? MW_IMG_HISTORY : MW_IMG_CUSTOMER_BUILD;
    } else if(kindChk) {
      return devChk ? WE_IMG_HISTORY : WE_IMG_CUSTOMER_BUILD;
    }
  } else if(name === 'sale') {
    if(!kindChk) {
      return devChk ? MW_IMG_SALE : MW_IMG_CUSTOMER_BUILD;
    } else if(kindChk) {
      return devChk ? WE_IMG_SALE : WE_IMG_CUSTOMER_BUILD;
    }
  }

  return 'none';
}
