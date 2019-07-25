// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class SakaiBtn extends LitElement {

  static get properties(){
    return{
      btnName: {type: String},
      btnType: {type: String}
    };
  }

  static get styles(){
    return  css`
    button{
      font-family: "Open Sans",sans-serif;
      font-size: 14px;
      font-weight: 400;
      border-style: solid;
      border-width: 1px;
      border-radius: 3px;
      radius: 3px;
      padding: 7px 10px;
      margin-right: 4px;
      border-style: solid;
    }

    button:focus{
      outline: 3px solid #5b9dd9;
      outline-offset: 2px;
    }

    button.primary{
      color: #fff;
      border-color: #326b97;
      background-color: #15597e;
    }

    button:hover.primary{
      background-color: #176691;
      border-color: #124466;
      cursor: pointer;
    }

    button:active.primary{
      box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
    }


    button.secondary{
      color: #333;
      border-color: #ccc;
      background-color: linear-gradient(#fff, #f9f9f9);
    }

    button:hover.secondary{
      border-color: #999;
      cursor: pointer;
    }

    button:active.secondary{
      background-color: linear-gradient(#f9f9f9, #fff);
      box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
    }
    `;
  }

  constructor(){
    super();
    this.btnName="lmao";
    // this.btnType="primary";
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
      <button class="${this.btnType}" @click="${this.clickHandler}">${this.btnName}</button>
    `;
  }
  clickHandler(e) {
    console.log("e.target");
  }
}
// Register the new element with the browser.
customElements.define('sakai-btn', SakaiBtn);
