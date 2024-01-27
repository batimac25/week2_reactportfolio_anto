export default function Home() {
    return (<>
       <section id="intro-section" className="js-fullheight" data-section="home">
    <div className="js-fullheight">
      <ul className="slides">
         {/* <li style="background-image: url(./../../../assets/images/intro3.jpeg);"> */}
         <li>
           <div className="overlay"></div>
           <div className="container-fluid">
             <div className="row">
               <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                 <div className="slider-text-inner js-fullheight">
                   <div className="desc">
                     <h1>Hi! I'm Antony Tibursias Infant</h1>
                    <p><a className="btn btn-primary btn-learn" href="https://www.dropbox.com/scl/fi/x1b3kyk58bvlu024t4zp2/ANTO_T_INF_SEP2023.pdf?rlkey=9godegkm9tmqhaldd4716wgeq&dl=0" target="_blank">Download CV <i className="icon-download4"></i></a></p>
                  </div>
                 </div>
               </div>
             </div>
           </div>
         </li>
         {/* <li style="background-image: url(./../../../assets/images/intro3.jpeg);"> */}
         <li> 
           <div className="overlay"></div>
           <div className="container-fluid">
             <div className="row">
               <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                 <div className="slider-text-inner">
                   <div className="desc">
                     <h1>I am a Java Microservices Developer</h1>
                     <p><a className="btn btn-primary btn-learn" href="https://www.linkedin.com/in/antony-t-infant/" target="_blank">View LinkedIn <i className="icon-linkedin22"></i></a></p> 
                  </div>
                 </div>
               </div>
             </div>
           </div>
         </li>
        </ul>
      </div>
  </section>
    </>
    )
}