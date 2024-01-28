import './../about/about.css';

export default function About(){
return (
<>
  <section className="anto-about" data-section="about">
    <div className="anto-section-content">
      <div className="row">
          <div data-animate-effect="fadeInLeft">
              <div className="about-desc">
                <div className='fadeInLeft'>
                  <span className="heading-meta">About Us</span>
                  <h2 className="anto-title">Who Am I?</h2>
                </div>
                <p className='sub-text textFade'><strong>Hi I'm Antony Tibursias Infant.</strong> Expert Java developer with 6 years of experience in
                  microservices-based web application development. Proven ability to design, develop, and deliver
                  high-quality software solutions using Java, J2EE, REST APIs, and microservices. Expertise in Agile
                  Software development life cycle methodology and continuous integration and deployment practices. I
                  also possess approximately 2 years of sufficient expertise in HTML, CSS, JavaScript, JQuery, JSP, and
                  Angular.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 fadeInLeft">
              <div className="services color-2 tile-box">
                <span className="icon2 tile-icon"><i className="icon-device-laptop icon-design"></i></span>
                <h3 className='tile-text'>Web Design</h3>
              </div>
            </div>
            <div className="col-md-3  fadeFromBottom" data-animate-effect="fadeInRight">
              <div className="services color-1 tile-box">
                <span className="icon2 tile-icon"><i className="icon-code icon-design"></i></span>
                <h3 className='tile-text'>Development</h3>
              </div>
            </div>
            <div className="col-md-3  fadeInRight" data-animate-effect="fadeInTop">
              <div className="services color-3 tile-box">
                <span className="icon2 tile-icon"><i className="icon-cloud-storage icon-design"></i></span>
                <h3 className='tile-text'>CI/CD</h3>
              </div>
            </div>
            <div className="col-md-3 fadeIntop" data-animate-effect="fadeInBottom">
              <div className="services color-4 tile-box">
                <span className="icon2 tile-icon"><i className="icon-chart-bar icon-design"></i></span>
                <h3 className='tile-text'>Agile</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" data-animate-effect="fadeInLeft">
              <div className="hire">
                <h2>I'm delighted to inform you that I've experience working on fintech projects within both the banking
                  and aviation sectors!</h2>
                <a href="https://www.dropbox.com/scl/fi/x1b3kyk58bvlu024t4zp2/ANTO_T_INF_SEP2023.pdf?rlkey=9godegkm9tmqhaldd4716wgeq&dl=0"
                  target="_blank" className="btn-hire">Hire me</a>
              </div>
            </div>
          </div>
        </div>
  </section>
</>
)
}