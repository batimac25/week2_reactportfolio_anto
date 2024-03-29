/* FileName : services.jsx,
 * StudentName : Antony Tibursias Brightes Machado
 * StudentId : 301380198
 * Date : 02-02-2024 */
import back from '../../assets/images/back.jpeg';
import database from '../../assets/images/database.jpeg';
import front from '../../assets/images/front.jpeg';
import version from '../../assets/images/version.jpeg';
import freelance from '../../assets/images/freelance.jpeg';

export default function Service(){
    return (
        <>
    <section className="anto-services-section" data-section="services" id="services">
    <div className="anto-section-content">
      <div className="row">
        <div className="col-md-12">
              <div className="about-desc">
                <div className="fadeInLeft">
                  <span className="heading-meta">What I Offer?</span>
                  <h2 className="anto-title">Here are my services</h2>
                </div>
                <p className='sub-text'>Welcome to my freelance services! I offer a versatile set of skills that cover the spectrum of modern software development. Whether you're a business looking to enhance your digital presence or an individual in need of customized solutions, I'm here to bring your ideas to life.</p>
              </div>
            </div>
      </div>
      <div className="row row-pt-md">
        <div className="col-md-12 text-center animate-box">
          <div className="services color-2">
            <span className="icon">
              <i className="icon-data"></i>
            </span>
            <div className="desc text-left">
            <h3>1. Backend Development</h3>
            <div className="text-center">
                 <div ><img src={back} className="author-img"></img></div>
                 </div>
              <p>Leverage the power of robust and efficient backend solutions with my expertise in:</p>
              <p><strong>Core Java:</strong> Crafting reliable and high-performance backend systems.<br />
                 <strong>Spring Boot:</strong> Building a rapid, scalable and maintainable enterprise applications.<br />
                 <strong>Microservice:</strong> Designing modular and efficient architectures.<br /></p>
            </div>
          </div>
          <div className="services color-3">
            <span className="icon">
              <i className="icon-data"></i>
            </span>
            <div className="desc text-left">
            <h3>2. Database Solutions</h3>
            <div className="text-center">
                 <div ><img src={database} className="author-img"></img></div>
                 </div>
              <p>Ensure secure and performant data storage with my proficiency in:</p>
              <p><strong>SQL:</strong> Designing and managing databases seamlessly.<br />
                 <strong>ORM:</strong> Implementing Object-Relational Mapping (ORM) using Hibernate, Spring Data JPA<br />
              </p>
            </div>
          </div>
          <div className="services color-4">
            <span className="icon">
              <i className="icon-data"></i>
            </span>
            <div className="desc text-left">
            <h3>3. Frontend Development</h3>
            <div className="text-center">
                 <div ><img src={front} className="author-img"></img></div>
                 </div>
              <p>Create visually appealing and responsive user interfaces with my frontend skills:</p>
              <p><strong>HTML:</strong> Crafting structured and semantic HTML code.<br />
                 <strong>CSS:</strong> Styling web applications for a visually pleasing experience.<br />
                 <strong>JavaScript/JQuery:</strong> Enhancing interactivity and user experience.<br />
                 <strong>Angular:</strong> Developing dynamic single-page applications.<br /></p>
            </div>
          </div>
          <div className="services color-5">
            <span className="icon">
              <i className="icon-data"></i>
            </span>
            <div className="desc text-left">
            <h3>4. Collaboration and Version Control</h3>
            <div className="text-center">
                 <div ><img src={version} className="author-img"></img></div>
                 </div>
              <p>Ensure seamless code management and collaborative development using:</p>
              <p><strong>Version Control (SVN/Git/Bitbucket):</strong> Efficiently managing code with SVN, Git, and Bitbucket.<br /></p>
            </div>
          </div>
          <div className="services color-6">
            <span className="icon">
              <i className="icon-data"></i>
            </span>
            <div className="desc text-left">
            <h3>5. Consulting and Freelance Development</h3>
            <div className="text-center">
                 <div ><img src={freelance} className="author-img"></img></div>
                 </div>
              <p>Whether you need guidance on technology choices or hands-on development work, I offer:</p>
              <p><strong>Technology Consulting:</strong> Providing insights on the best technological solutions for your project.<br />
                 <strong>Freelance Development: </strong> Taking on projects with dedication and delivering high-quality solutions.<br /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}