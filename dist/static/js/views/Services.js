import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Services");
  }

  async getHtml() {
    return `
    <div class="services">
     
     <div class="servicescont">
        <h1>Services</h1>
        <div class="servicescont_card">
        
          <div class="card">
            <img src="../../static/assets/testimage.jpg">
            <div class="servicescontent">            
              <h2>Front-End Web Development</h2>
              <h3>Web Design</h3>
              <p>Understanding your business and its ethos will help direct the design process, combined with user focused designs based from research and testing ensure digital solutions are delivered that meet your requirements.</p>
              <h3>Concept Development</h3>
              <p>Valuable time is spent researching and understanding your business, its goals, your audience, competitors and the problem that requires a digital design solution.
              Working in close collaboration with your chosen point of contact; scheduled reviews, prototyping and testing will take place to ensure a suitable design solution is developed before final deployment or publication.</p>
              <h3>UI/UX</h3>
              <p>Research and user testing are key focal points for all designs ensuring the design is appealing to the desired audience and so that the user feels a natural connection with the interface and application. Easily navigating and using the application as intended.</p>
            </div>
          </div>

          <div class="card">
            <img src="../../static/assets/testimage.jpg">
            <div class="servicescontent">
              <h2>Graphic Design</h2>
              <p>Having an eclectic taste and interest in all forms of art, science and music. From Moonlight Sonata to Muse. Cold mountain peaks to sunny bright beaches. Astronomy to biology. Graphiti (Street Art) to impressionism. And everything in between; this combined with David's empathetic nature enables him to quickly absorb and understand the necessary research to discover a suitable digital design solution. Through the thorough design process I embody both the performer and the audience. This process ensures that my designs are fitting, attractive and accessible.</p>
            </div>
          </div>

          <div class="card">
            <img src="../../static/assets/testimage.jpg">
            <div class="servicescontent">
              <h2>Content Writing</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At porro cupiditate quas praesentium autem pariatur laboriosam laborum, ad quod repellendus eum magni non perferendis in modi dolor, enim est mollitia! Voluptatibus voluptatum ratione, molestias doloribus laborum blanditiis corrupti. Quae totam ut dolorem. Excepturi, quasi perspiciatis. quibusdam nam doloremque natus aperiam! Autem id eaque ab tempora, qui quod sunt magni dignissimos non maxime dolor, doloribus ut adipisci facere quibusdam odit quos corporis impedit exercitationem cupiditate incidunt atque voluptatum quisquam. Blanditiis a molestias totam ipsa voluptatibus saepe iusto quidem! Aut, harum.</p>
            </div>
          </div>
                
        </div>
     </div>  
    </div>
    `;
  }
}