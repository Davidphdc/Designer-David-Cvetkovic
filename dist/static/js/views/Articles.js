import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Articles");
  }

  async getHtml() {
    return `
    <div class="articles">
     <div class="articlescont">
     <h1>Articles</h1>
     <div class="articlescont_card">
        
     <div class="card">
       <img src="../../static/assets/jwst001.jpg">
       <figcaption>X-ray: NASA/CXC/Univ. Observ. Munich/T. Preibisch et al. - IR: NASA/ESA/CSA/STScI</figcaption>
       <div class="articlescontent">            
         <h2>JWST - JAMES WEBB SPACE TELESCOPE</h2>
         <h3>Author: David Cvetkovic</h3>
         <h3>Published: 20th November 2022</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>
         <a href="/articles/JWST" data-link>Read more...</a>
       </div>
     </div>

     <div class="card">
       <img src="../../static/assets/testimage.jpg">
       <div class="articlescontent">
         <h2>Web Developement a Journey into the unknown.</h2>
         <h3>Author: David Cvetkovic</h3>
         <h3>Published: 20th November 2022</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>
       </div>
     </div>

     <div class="card">
       <img src="../../static/assets/testimage.jpg">
       <div class="articlescontent">
         <h2>OutDoor Adventures - lerdergderg State Forrest</h2>
         <h3>Author: David Cvetkovic</h3>
         <h3>Published: 20th November 2022</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>
       </div>
     </div>
           
      </div>
     </div>
    </div>
    `;
  }
}