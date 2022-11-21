import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("About");
  }

  async getHtml() {
    return `
    <div class="bio_content">
    <div class="content_display">
     <div class="headbio">
      <div class="headbio_content">
        <h1>Bio</h1>
        <h2>David Cvetkovic</h2>
        <h2>Designer | Adevnturer | Explorer & All Round Nature Enthusiast.</h2>    
        <p>David is passionate about exploring the world and learning how to best live and grow within this natural environment in unison with the advancement of technology. David draws on the art, architecture, science, culture and people around him, embracing the unique differences and relishing in the many similarities we all share. Colour, line and shape are the key aspects David
        explores to create vibrant and loud designs that are clean and sharp whilst maintaining a holistic ethos.</p>
      </div>
      <div class="images"><img src="../../static/assets/David001.png"></div>
     </div>      
   

     <div class="headtech">
      <div class="headtech_content">
        <h1>Technology</h1>
        <p>David is passionate about exploring the world and learning how to best live and grow within this natural environment in unison with the advancement of technology. David draws on the art, architecture, science, culture and people around him, embracing the unique differences and relishing in the many similarities we all share. Colour, line and shape are the key aspects David explores to create vibrant and loud designs that are clean and sharp whilst maintaining a holistic ethos.</p>       
      </div>
     </div>
    
    </div>
     
    </div>
    `;
  }
}


