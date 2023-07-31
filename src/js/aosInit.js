import AOS from 'aos';
import 'aos/dist/aos.css';

const GlobalProperty = {
  // Global settings:
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
}

const SettingProperty = {
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 350, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
}

AOS.init({
  ...GlobalProperty,
  ...SettingProperty,
});
