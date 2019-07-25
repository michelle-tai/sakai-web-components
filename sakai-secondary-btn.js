// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class SakaiSecondaryBtn extends LitElement {

  static get properties(){
    return{
      btnName: {type: String},
    };
  }

  static get styles(){
    return  css`
    button{
      font-family: "Open Sans",sans-serif;
      font-size: 14px;
      font-weight: 400;
      color: #333;
      border-color: #ccc;
      border-style: solid;
      border-width: 1px;
      border-radius: 3px;
      background-color: linear-gradient(#fff, #f9f9f9);
      radius: 3px;
      padding: 7px 10px;
      margin-right: 4px;
    }
    button:hover{
      border-color: #999;
      cursor: pointer;
    }
    button:active{
      background-color: linear-gradient(#f9f9f9, #fff);
      box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
    }
    button:focus{
      outline: 3px solid #5b9dd9;
      outline-offset: 2px;
    }
    `;
  }

  constructor(){
    super();
    this.btnName="lmao";
  }

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <!-- template content -->
      <button @click="${this.clickHandler}">${this.btnName}</button>
    `;
  }
  clickHandler(e) {
    console.log("e.target");
  }
}
// Register the new element with the browser.
customElements.define('sakai-secondary-btn', SakaiSecondaryBtn);
