/* FileName : education.jsx,
 * StudentName : Antony Tibursias Brightes Machado
 * StudentId : 301380198
 * Date : 02-02-2024 */

import './../education/education.css';

export default function Education(){
return (
<>
    <section className="anto-education-section" data-section="education">
        <div className="anto-section-content">
            <div className="row">
                <div className="fadeInLeft" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">Education</span>
                    <h2 className="anto-title animate-box">Education</h2>
                </div>
            </div>
            <div className="row edu-cls">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button btn-title" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Post Graduation
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Currently enrolled in a two-year Advanced Diploma program in Artificial Intelligence at Centennial College in Ontario, Canada. Will graduate in April 2025.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed btn-title" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Bachelor Degree of Computer Science
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                I earned my Bachelor's degree in computer science from Anna University in 2017. Graduated with a CGPA of <strong>7.35 out of 10.</strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed btn-title" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               Higher Secondary Course Certificate
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            I successfully finished my higher secondary education at Mount Park Hr. Sec.School in 2013, achieving an outstanding <strong>92% </strong> as my final result.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed btn-title" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                               Secondary School Leaving Certificate
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            I completed my 10th at St. Joseph’s Higher Secondary School in 2011,achieving an impressive <strong>95.6%</strong> and earning the top position in the school.
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