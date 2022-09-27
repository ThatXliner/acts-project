import { switchPage } from '../acts-api.js';

class SpaLink extends HTMLParagraphElement {
  constructor() {
    super();
    this.innerHTML = `<a>${this.innerHTML}</a>`
    this.querySelector("a").onclick = (event) {
      event.preventDefault();
      switchPage(this.getAttribute('to'));
    }
  }
}

window.customElements.define('spa-link', SpaLink);
