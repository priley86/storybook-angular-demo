import styles from './hello.shadow.css'

/**
 * Cloning contents from a <template> element is more performant
 * than using innerHTML because it avoids addtional HTML parse costs.
 */
const helloTemplate = document.createElement('template')
helloTemplate.innerHTML = `<button><slot name="content"></slot></button>`

/**
 * Hello Web Component defines a custom button and its
 * encapsulated Shadow DOM styles
 * 
 * Usage: <hello-component disabled>Hello</hello-component>
 */
export default class HelloComponent extends HTMLElement {
  /*
  * An instance of the element is created or upgraded
  */
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(helloTemplate.content.cloneNode(true))
  }

  /**
   * `connectedCallback` hooks up the even listeners and styles the component
   */
  connectedCallback() {
    this._styleComponent()
    this.addEventListener('click', this._onClick)
  }

  static get observedAttributes() {
    return ['disabled', 'class']
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    this[attr] = newVal
  }

  _styleComponent() {
    // Create a style template with our element's shadow css
    const styleTemplate = document.createElement('template')
    styleTemplate.innerHTML = `<style>${styles}</style>`

    /*
      ShadyCSS is the polyfill for Shadow DOM that we need to activate 
      for each template in browsers that need it
    */
    if (!window.ShadyCSS.nativeShadow) {
      // ShadyCSS will rename classes as needed to ensure style scoping.
      window.ShadyCSS.prepareTemplate(styleTemplate, 'hello-component')
      window.ShadyCSS.styleElement(this)
    } else {
      this.shadowRoot.appendChild(styleTemplate.content.cloneNode(true))
    }
  }

  _onClick() {
    this.dispatchEvent(new CustomEvent('hello-component.onClick', {}))
  }

  get disabled() {
    return this._disabled
  }

  set disabled(val) {
    if (this.hasAttribute('disabled')) {
      this._disabled = true
      this.shadowRoot.querySelector('button').className = 'btn-disabled'
    } else {
      this._disabled = false
      this.shadowRoot.querySelector('button').className = this._class
    }
  }

  get class() {
    return this._class
  }

  set class(val) {
    if (this._class === val) {
      return
    }
    this._class = val
    if(!this._disabled){
      this.shadowRoot.querySelector('button').className = val
    }
  }
}
