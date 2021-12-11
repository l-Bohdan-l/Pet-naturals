import Inputmask from "inputmask";

const inputsTel = document.querySelector('input[type="tel"]');

Inputmask({
  "mask": "+38(999) 999-99-99",
  showMaskOnHover: false
}).mask(inputsTel);

inputsTel.addEventListener('click', ddd)

function ddd(e) {
    e.preventDefault();
}