/**
 * A web component encapsulating all the SPA
 * event handlers, etc. If you have *any elements
 * in it*, it *will not* dynamically change its text
 *
 * @element Quiz
 * @prop {String} option1 The first option
 */
export class Quiz extends HTMLElement {
  static get observedAttributes() {
    return ["option1"];
  }
  render() {
    let test = document.createElement("div");
    test.innerHTML = "hi mom";
  }
  constructor() {
    // "Always call super first" --MDN 2022 (i think)
    super();
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
}

if ("customElements" in window) {
  window.customElements.define("quiz-test", Quiz);
}

// navTemplate = document.createElement("template");

// navTemplate.innerHTML = `
//     <style>
//     nav {
//     height: 40px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color:  #0a0a23;
//     }

//     ul li {
//     list-style: none;
//     display: inline;
//     }

//     a {
//     font-weight: 700;
//     margin: 0 25px;
//     color: #fff;
//     text-decoration: none;
//     }

//     a:hover {
//     padding-bottom: 5px;
//     box-shadow: inset 0 -2px 0 0 #fff;
//     }
//     </style>
//     <header>
//     <nav>
//     <ul>
//         <li><a href="work.html">Work</a></li>
//         <li><a href="contact.html">Contact</a></li>
//     </ul>
//     </nav>
//     </header>
//     `;
// class Navbar extends HTMLElement {
//   constructor() {
//     super();
//     this.root = this.attachShadow({ mode: "open" });
//     this.root.appendChild(navTemplate.content);
//   }
// }
// customElements.define("my-navbar", Navbar);
