import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <>
    <section className="anto-contact-section" data-section="contact" id="contact">
    <div className="anto-section-content">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span className="heading-meta">Get in Touch</span>
          <h2 className="anto-title">Contact</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="anto-contact-list anto-contact-list-sm animate-box" data-animate-effect="fadeInLeft">
            <div className="anto-contact-icon">
              <i className="icon-mail"></i>
            </div>
            <div className="anto-contact-text">
              <p><a href="https://mail.google.com/" target="_blank">antony25infant@gmail.com</a></p>
            </div>
          </div>
          <div className="anto-contact-list anto-contact-list-sm animate-box" data-animate-effect="fadeInLeft">
            <div className="anto-contact-icon">
              <i className="icon-social-linkedin"></i>
            </div>
            <div className="anto-contact-text">
              <p><a href="https://www.linkedin.com/in/antony-t-infant/" target="_blank">antony-t-infant</a></p>
            </div>
          </div>

          <div className="anto-contact-list anto-contact-list-sm animate-box" data-animate-effect="fadeInLeft">
            <div className="anto-contact-icon">
              <i className="icon-phone"></i>
            </div>
            <div className="anto-contact-text">
              <p><a>+1 437-962-9933</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-md-push-1">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
              <form action="">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="FirtName"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="LastName"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject"/>
                </div>
                <div className="form-group">
                  <textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                <Link to="/"><input type="submit" className="btn btn-primary btn-send-message" value="Send Message" /></Link> 
                </div>
              </form>
            </div>
            
          </div>
        </div> 
      </div>
    </div>
  </section>
        </>
    );
}