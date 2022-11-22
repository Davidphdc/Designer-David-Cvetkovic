import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Privacy Policy");
  }

  async getHtml() {
    return `
    <div class="services">
     <div class="servicescont">
      <h1>Privacy Policy</h1>

      

      
     </div>  
    </div>
    `;
  }
}