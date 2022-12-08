/*
---------------------
  module-1
---------------------
 */
const SECTION_PAGE_4 = document.querySelector('.page4');

// btn
const btnGroup = SECTION_PAGE_4.querySelector('.buttons');
const [customerBtn, productsBtn, addressBtn] = btnGroup.children;
const [customerBtnName, productsBtnName, addressBtnName] = ['cus', 'pro', 'add'];

// img
const imageGroup = SECTION_PAGE_4.querySelector('.page4-image-group');
const [customerImg, productsImg, addressImg] = imageGroup.children;

const onAddElementStyle = (btnElem, imgElem) => {
  imgElem.style.opacity = 1;
  btnElem.classList.add('active');
}

const onRemoveElementStyle = (btnElem, imgElem) => {
  imgElem.style.opacity = 0;
  btnElem.classList.remove('active');
}

const onTargetClickEvent = (targetName) => {
  // update customer style
  if (targetName === customerBtnName) {
    onAddElementStyle(customerBtn, customerImg);
    onRemoveElementStyle(productsBtn, productsImg);
    onRemoveElementStyle(addressBtn, addressImg);
  }
  // update products style
  if (targetName === productsBtnName) {
    onAddElementStyle(productsBtn, productsImg);
    onRemoveElementStyle(addressBtn, addressImg);
    onRemoveElementStyle(customerBtn, customerImg);
  }
  // update address style
  if (targetName === addressBtnName) {
    onAddElementStyle(addressBtn, addressImg);
    onRemoveElementStyle(customerBtn, customerImg);
    onRemoveElementStyle(productsBtn, productsImg);
  }
}

const onProductBtnEvent = (e) => {
  const target = e.target;
  if (target.nodeName !== 'BUTTON') return;

  const btnName = target.dataset?.kind;
  if (!btnName) return;

  onTargetClickEvent(btnName);
}

/*
---------------------
  module-2
---------------------
 */
const HEADER = document.querySelector('.header');
const HEADER_IMG = HEADER.querySelector('.header-image');
const HEADER_CHEVRON = HEADER.querySelector('.header-go-next');
const headerHeight = HEADER.clientHeight;

const onHeaderOpacityEvent = (e) => {
  const scrollY = window.scrollY;
  if (headerHeight === 0) return;
  if (scrollY > headerHeight) return;
  
  const headerY = headerHeight - scrollY;
  const opacityValue = Math.floor((headerY / headerHeight) * 10) / 10;
  HEADER_IMG.style.opacity = opacityValue;
  HEADER_CHEVRON.style.opacity = opacityValue;
}

/*
---------------------
  Function Run
---------------------
 */
btnGroup.addEventListener('click', onProductBtnEvent);
window.addEventListener('scroll', onHeaderOpacityEvent);
