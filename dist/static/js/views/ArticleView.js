import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);   
    this.setTitle("Web Development - Learnig to code from Scratch");
    this.articleId = params.id;
  
  }

  async getHtml() {

    return `
    <div class="articles">
     <div class="articlescont">
      <h1>Articles</h1>
      <h2>Eager Beavers</h2>
      <h2>DISCOVER SPACE #${this.articleId}</h2>
  
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>
     </div>
    </div>
    `;
  }
}