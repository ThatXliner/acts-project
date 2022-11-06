/**
 * Make space for scrolling
 * @element scroll-spacer
 * @prop {String} amount - Space to generate in CSS space units
 */
export class ScrollSpacer extends HTMLElement {
  static get observedAttributes() {
    return ["amount"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    let div = document.createElement("div");
    div.innerHTML = "&nbsp;";
    div.setAttribute("id", "spacer");
    div.setAttribute("style", `margin:${this.getAttribute("amount")};`);
    this.shadowRoot.append(div);
  }
  attributeChangedCallback() {
    this.shadowRoot
      .getElementById("spacer")
      .setAttribute("style", `margin:${this.getAttribute("amount")};`);
  }
}
if ("customElements" in window) {
  window.customElements.define("scroll-spacer", ScrollSpacer);
}
