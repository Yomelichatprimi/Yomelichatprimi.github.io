class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
     Nancy Murrieta Hernandez.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
