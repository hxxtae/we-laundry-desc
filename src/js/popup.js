const BEFORE_LOGIN = "before-login-image";
const AFTER_LOGIN = "after-login-image";
const BEFORE_MAIN = "before-main-image";
const AFTER_MAIN = "after-main-image";

const MW_IMG_LOGIN = "/mw_address.76d49ea8.PNG";
const MW_IMG_MAIN = "mw_main.0d904070.PNG";
const WE_IMG_LOGIN = "/we_login.55d31020.PNG";
const WE_IMG_MAIN = "/we_main.560d9340.PNG";

const pages = document.querySelector('.pages-scrollspy');
const popup = document.querySelector(".show-detail");

pages.addEventListener('click', (e) => {
  console.log('Click !!');

  const popupImg = popup.children[0];
  const target = e.target;
  const altStr = target.getAttribute('alt');

  if (altStr === BEFORE_LOGIN) {
    popupImg.setAttribute('src', MW_IMG_LOGIN);
  } else if (altStr === AFTER_LOGIN) {
    popupImg.setAttribute('src', WE_IMG_LOGIN);
  } else if (altStr === BEFORE_MAIN) {
    popupImg.setAttribute('src', MW_IMG_MAIN);
  } else if (altStr === AFTER_MAIN) {
    popupImg.setAttribute('src', WE_IMG_MAIN);
  } else {
    popupImg.setAttribute('src', '');
  }
});

