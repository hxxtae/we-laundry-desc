const SECTION_PAGE_4 = document.querySelector('.page4');
const btnGroup = SECTION_PAGE_4.querySelector('.buttons'); // btn
const imageGroup = SECTION_PAGE_4.querySelector('.page4-image-group'); // img

const [customerBtn, productsBtn, addressBtn] = btnGroup.children;
const [customerBtnName, productsBtnName, addressBtnName] = ['cus', 'pro', 'add'];
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

btnGroup.addEventListener('click', onProductBtnEvent);