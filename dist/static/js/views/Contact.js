import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Contact");
  }

  async getHtml() {
    return `
    <div class="content">
     <div class="contact_page">
      <h1>Lets Get Creative</h1>
      
      <form class="cform" action="">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" placeholder="Please enter your first name..."><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" placeholder="Please enter your last name..."><br>
        <label for="message">Message</label><br>
        <textarea type="message" name="message" id="message" placeholder="Please enter your message..."></textarea>
        <br><br>
        <input type="submit" value="Submit" class="g-recaptcha" 
        data-sitekey="reCAPTCHA_site_key" 
        data-callback='onSubmit' 
        data-action='submit'>
      </form>
     </div>  
    </div>
    `;
  }
}