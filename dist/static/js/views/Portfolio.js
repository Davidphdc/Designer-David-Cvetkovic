import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Portfolio");
  }

  async getHtml() {
    return `
    <div class="portfolio">
    <div class="portfoliocont">
      <h1>Portfolio</h1>
    
  
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>
     </div>
    </div>
    `;
  }
}