import headerStyles from '../assets/css/header.css?inline';
import rztilogo from '../assets/imgs/logos/RZTI.svg';

export class RZTIHeader extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(headerStyles);
    shadowRoot.adoptedStyleSheets = [sheet];

    let navlinks = [
      { href: '#home', text: 'Home' },
      { href: '#businessTypes', text: 'Nichos' },
      { href: '#solutions', text: 'Soluções' },
      { href: '#process', text: 'Processo' },
      { href: '#contact', text: 'Fale Conosco' }
    ];

    //É necessário criar a function de verificação de width
    //É necessário criar a function de verificação de scroll
    shadowRoot.innerHTML = `
      <header class="rzti-header-container">
        <div class="rzti-header-logo">
          <img src="${rztilogo}" alt="Logo" />
        </div>
        
      </header>
    `;
  }

  connectedCallback() {
    // Any additional setup when the component is added to the DOM
  }
}