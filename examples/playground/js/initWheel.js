import {Wheel} from '../../../dist/spin-wheel-esm.js';

const props = {
  items: [
    {
      label: 'one',
    },
    {
      label: 'two',
    },
    {
      label: 'three',
    },
  ],
  itemBackgroundColors: ['#fff', '#eee', '#ddd'],
  itemLabelFontSizeMax: 40,
  rotationResistance: -100,
  rotationSpeedMax: 1000,
};

const container = document.querySelector('.wheel-wrapper');

// Save object globally for easy debugging.
window.wheel = new Wheel(container, props);

// ✅ Gắn sự kiện click vào item ở đây:
wheel.onItemClick = (index) => {
  const item = wheel.items[index];
  alert(`🎯 Bạn đã click vào item số ${index}: "${item.label}"`);
};


// Log events for easy debugging:
wheel.onCurrentIndexChange = e => console.log(e);
wheel.onRest = e => console.log(e);
wheel.onSpin = e => console.log(e);