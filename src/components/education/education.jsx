export default function Education(){
    return ( 
        <>
       <section className="anto-education-section" data-section="education" id="education">
    <div className="anto-section-content">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span className="heading-meta">Education</span>
          <h2 className="anto-title animate-box">Education</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <div className="fancy-collapse-panel">
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Post Graduation
                        </a>
                    </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">
                        <p>Currently enrolled in a two-year Advanced Diploma program in Artificial Intelligence at Centennial College in Ontario, Canada. Will graduate in April 2025.</p>
                    </div>
                </div>
            </div>
              <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree of Computer Science
                          </a>
                      </h4>
                  </div>
                  <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                          <p>I earned my Bachelor's degree in computer science from Anna University in 2017. Graduated with a CGPA of 7.35 out of 10.</p>
                      </div>
                  </div>
              </div>
              <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Higher Secondary Course Certificate
                          </a>
                      </h4>
                  </div>
                  <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                      <div className="panel-body">
                          <p>I successfully finished my higher secondary education at Mount Park Hr. Sec. School in 2013, achieving an outstanding <strong>92% </strong> as my final result.</p>	
                      </div>
                  </div>
              </div>

              <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                      <h4 className="panel-title">
                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Secondary School Leaving Certificate
                          </a>
                      </h4>
                  </div>
                  <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                      <div className="panel-body">
                          <p>I completed my 10th at St. Joseph’s Higher Secondary School  in 2011, achieving an impressive <strong>95.6%</strong> and earning the top position in the school.</p>	
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}