const BEFORE_LOGIN = "before-login-image";
const AFTER_LOGIN = "after-login-image";
const BEFORE_MAIN = "before-main-image";
const AFTER_MAIN = "after-main-image";
const BEFORE_ADDRESS = "before-address-image";
const AFTER_ADDRESS = "after-address-image";

// dev
const MW_IMG_LOGIN =  "mw_address.76d49ea8.PNG";
const WE_IMG_LOGIN = "we_login.55d31020.PNG";
const MW_IMG_MAIN = "mw_main.0d904070.PNG";
const WE_IMG_MAIN = "we_main.560d9340.PNG";
const MW_IMG_ADDRESS = "mw_address.PNG";
const WE_IMG_ADDRESS = "we_address.PNG";

// build
const MW_IMG_LOGIN_BUILD =  "mw_address.131beb94.PNG";
const WE_IMG_LOGIN_BUILD = "we_login.7e2fd9d0.PNG";
const MW_IMG_MAIN_BUILD = "mw_main.aedf805e.PNG";
const WE_IMG_MAIN_BUILD = "we_main.e8f08d9d.PNG";
const MW_IMG_ADDRESS_BUILD = "mw_address.131beb94.PNG";
const WE_IMG_ADDRESS_BUILD = "we_address.eca32eb5.PNG";

const pages = document.querySelector('.pages-scrollspy');
const popup = document.querySelector(".show-detail");

pages.addEventListener('click', (e) => {
  console.log('Click !!');

  const popupImg = popup.children[0];
  const target = e.target;
  const altStr = target.getAttribute('alt');
  const state = 'dev';

  if (altStr === BEFORE_LOGIN) {
    const srcStr = configImgStr('before', state, 'login');
    popupImg.setAttribute('src', srcStr);
  } else if (altStr === AFTER_LOGIN) {
    const srcStr = configImgStr('after', state, 'login');
    popupImg.setAttribute('src', srcStr);
    console.log(result);
  } else if (altStr === BEFORE_MAIN) {
    const srcStr = configImgStr('before', state, 'main');
    popupImg.setAttribute('src', srcStr);
  } else if (altStr === AFTER_MAIN) {
    const srcStr = configImgStr('after', state, 'main');
    popupImg.setAttribute('src', srcStr);
  } else if(altStr === BEFORE_ADDRESS) {
    const srcStr = configImgStr('before', state, 'address');
    popupImg.setAttribute('src', srcStr);
  } else if(altStr === AFTER_ADDRESS) {
    const srcStr = configImgStr('after', state, 'address');
    popupImg.setAttribute('src', srcStr);
  } else {
    popupImg.setAttribute('src', '');
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
      return devChk ? MW_IMG_ADDRESS : WE_IMG_ADDRESS_BUILD;
    }
  } else if(name === 'customer') {
    return ;
  } else if(name === 'products') {
    return;
  } else if(name === 'order') {
    return ;
  } else if(name === 'history') {
    return ;
  } else if(name === 'sale') {
    return ;
  }

  return 'none';
}
