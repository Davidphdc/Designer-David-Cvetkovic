import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    return `
    <div class="home">
    <div class="home_content">
      
    <div class="logo"><img src="../static/assets/newlogodc01.png" alt=""></div>
    <div class="biolink"><h1>David Cvetkovic | Designer</h1></div>
      
    </div>
    </div>
    `;
  }
}