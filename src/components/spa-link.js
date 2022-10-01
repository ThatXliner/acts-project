import { switchPage, parseSID } from "../acts-api.js";

export class SpaLink extends HTMLElement {
  static get observedAttributes() {
    return ["to"];
  }
  render() {
    if (
      this.dynamic &&
      this.getAttribute("to") !== null &&
      this.getAttribute("to") !== this.textContent
    ) {
      this.textContent = parseSID(this.getAttribute("to"));
    }
  }
  constructor() {
    super();
    this.dynamic = !this.innerHTML;
    this.render();
    this.onclick = (event) => {
      event.preventDefault();
      switchPage(this.getAttribute("to"));
    };
  }
  attributeChangedCallback() {
    this.render();
  }
}
if ("customElements" in window) {
  window.customElements.define("spa-link", SpaLink);
}
