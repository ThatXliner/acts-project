import { switchPage, parseSID } from "../acts-api.js";
/**
 * A web component encapsulating all the SPA
 * event handlers, etc. If you have *any elements
 * in it*, it *will not* dynamically change it's text
 *
 * @element spa-link
 * @prop {String} to - The sID of the page you want to switch to
 */
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
      if (this.getAttribute("to") !== $store.pages[$store.currentPage].sID) {
        switchPage(this.getAttribute("to"));
      }
    };
  }
  attributeChangedCallback() {
    this.render();
  }
}
if ("customElements" in window) {
  window.customElements.define("spa-link", SpaLink);
}
