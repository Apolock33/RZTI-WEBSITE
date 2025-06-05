import './assets/css/style.css'

export class WCMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <main>
        <rzti-header></rzti-header>
      </main>
    `;
  }
}