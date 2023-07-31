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

window.addEventListener('scroll', onHeaderOpacityEvent);