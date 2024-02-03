import './../home/home.css';
import bg_image from '../../assets/images/intro3.jpeg';
import mypic from '../../assets/images/about.jpg';

export default function Home() {
return (<>
  <section data-section="home">
    <img src={bg_image} className="bg-img"></img>
    
    <div className="home-content">
      <ul className="slides">
        <li className='lr-animation'>
                <div className="text-center">
                 <div ><img src={mypic} className="author-img"></img></div>
                 </div>
        </li>
        <li className='lr-animation'>
              <div className="wd-100">
                  <div className="txt-center">
                    <h1 className="mb-4 txt-cls">Hi! I'm Antony Tibursias Infant</h1>
                    <p><a className="btn btn-style"
                        href="https://www.dropbox.com/scl/fi/x1b3kyk58bvlu024t4zp2/ANTO_T_INF_SEP2023.pdf?rlkey=9godegkm9tmqhaldd4716wgeq&dl=0"
                        target="_blank">Download CV <i className="icon-download4"></i></a></p>
                  </div>
                </div>
        </li>
        <li className='rl-animation'>
              <div className="wd-100">
                  <div className="txt-center">
                    <h1 className="mb-4 txt-cls">I am a Full Stack Developer</h1>
                    <p><a className="btn-style" href="https://www.linkedin.com/in/antony-t-infant/"
                        target="_blank">View LinkedIn <i className="icon-linkedin22"></i></a></p>
                  </div>
                </div>
        </li>
        <li className='lr-animation'>
              <div className="row wd-100">
                  <div className="txt-center">    
                    <br/>
                    <h1>I am a catalyst for digital transformation, 
                       merging a deep understanding of Java technologies with a dynamic approach to 
                      full stack development to deliver solutions that drive progress, efficiency, and success in the digital age.</h1>
                  </div>    
                </div>
        </li>
      </ul>
    </div>
  </section>
</>
)
}