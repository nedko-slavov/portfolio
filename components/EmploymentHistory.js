import React, { useState } from 'react';
import Image from 'next/image'

export default () => {
  const [slide, setSlide] = useState({company: 'raketa', animationClass: ''});
  
  return (
    <div className="employment-history">
      <div className="slot-wrapper" />
      <div className="slot-shadow" />
      
      <div className="container employment-history-cnt">
        <div className="section-title-wrapper">
          <h4 className="section-title">Employment History</h4>
        </div>

        <div className={`employer-info ${slide.animationClass} ${slide.company === 'raketa' ? 'current' : ''}`}>
          <div className="close close-icon" onClick={() => setSlide({company: '', animationClass: 'slide-hide'}) } />
          {
            (slide.company === 'raketa') && (
              <div className="spacing-both">
              <div className="projects-wrapper">
                <div className="spacing-bottom-sm">
                  <h4 className="company-name">Studio Raketa Projects</h4>
                  <p>All projects below are builded with Raketa CMS</p>
                </div>

                <div className="projects-row row">
                  <div className="project col-6">
                    <a href="https://www.chaosgroup.com" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/static/images/chaos.jpg"
                        alt="Picture of the author"
                        width={440}
                        height={250}
                      />
                    </a>

                    <div className="project-info">
                      <h5>Chaos Group</h5>
                    </div>
                  </div>
                
                  <div className="project col-6">
                    <a href="https://smokini.bg" target="_blank" rel="noopener noreferrer">
                      <Image
                          src="/static/images/smokini.jpg"
                          alt="Picture of the author"
                          width={440}
                          height={250}
                        />
                    </a>

                    <div className="project-info">
                      <h5>Smokini</h5>
                    </div>
                  </div>
                
                  <div className="project col-6">
                    <a href="https://touchawesome.com" target="_blank" rel="noopener noreferrer">
                      <Image
                          src="/static/images/touchawsome.jpg"
                          alt="Picture of the author"
                          width={440}
                          height={250}
                        />
                    </a>
                    
                    <div className="project-info">
                      <h5>Touchawesome</h5>
                    </div>
                  </div>
                
                  <div className="project col-6">
                    <a href="https://smartcom.bg" target="_blank" rel="noopener noreferrer">
                      <Image
                          src="/static/images/smartcom.jpg"
                          alt="Picture of the author"
                          width={440}
                          height={250}
                        />
                    </a>

                    <div className="project-info">
                      <h5>Smartcom</h5>
                    </div>
                  </div>

                
                  <div className="project col-6">
                    <a href="https://konek.bg" target="_blank" rel="noopener noreferrer">
                      <Image
                          src="/static/images/konek.jpg"
                          alt="Picture of the author"
                          width={440}
                          height={250}
                        />
                    </a>

                    <div className="project-info">
                      <h5>Konek</h5>
                    </div>
                  </div>

                  
                  <div className="project col-6">
                    <a href="https://unikalni-podaraci.com" target="_blank" rel="noopener noreferrer">
                      <Image
                          src="/static/images/podaraci.jpg"
                          alt="Picture of the author"
                          width={440}
                          height={250}
                        />
                    </a>

                    <div className="project-info">
                      <h5>Уникални Подаръци</h5>
                    </div>
                  </div>


                  <div className="project col-6">
                    <a href="https://differentina.com" target="_blank" rel="noopener noreferrer">
                      <Image
                          src="/static/images/differentina.jpg"
                          alt="Picture of the author"
                          width={440}
                          height={250}
                        />
                    </a>

                    <div className="project-info">
                      <h5>Differentina</h5>
                    </div>
                  </div>

                  <div className="project col-6">
                    <a href="https://copycom.bg/bg" target="_blank" rel="noopener noreferrer">
                      <Image
                          src="/static/images/copycom.jpg"
                          alt="Picture of the author"
                          width={440}
                          height={250}
                        />
                    </a>


                    <div className="project-info">
                      <h5>Copycom</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          }

          {
            (slide.company === 'netea') && (
              <div className="spacing-both">
              <div className="projects-wrapper">
                <div className="spacing-bottom-sm">
                  <h4 className="company-name">Netea</h4>
                </div>

                <div className="projects-row row">
                  <div className="project col-6">
                      <a href="https://www.lecturio.com" target="_blank" rel="noopener noreferrer" className="col-6">
                        <Image
                          src="/static/images/lecturio.jpg"
                          alt="Picture of the author"
                          width={440}
                          height={250}
                        />
                      </a>

                      <div className="project-info">
                        <h5>Lecturio</h5>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            )
          }

          {
          (slide.company === 'avalith') && (
            <div className="spacing-both">
              <div className="projects-wrapper">
                <div className="spacing-bottom-sm">
                  <h4 className="company-name">Avalith</h4>
                </div>

                <div className="projects-row row">
                  <div className="project col-6">
                    <a href="https://www.historypin.org" target="_blank" rel="noopener noreferrer">
                      <Image
                          src="/static/images/historypin.jpg"
                          alt="Picture of the author"
                          width={440}
                          height={250}
                        />
                    </a>

                    <div className="project-info">
                      <h5>Historypin</h5>
                    </div>
                  </div>

                  <div className="project col-6">
                    <a href="http://zagorkacompany.bg" target="_blank" rel="noopener noreferrer">
                      <Image
                          src="/static/images/zagorcacompany.jpg"
                          alt="Picture of the author"
                          width={440}
                          height={250}
                        />
                    </a>

                    <div className="project-info">
                      <h5>Zagorka Company</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          }
        </div>
  
        <div className="row spacing-top-sm frontend-row">
          <div className="col-4">
            <div className="employer-info-wrapper">
              <p className="card short-info" onClick={() => setSlide({company: 'raketa', animationClass: 'slide-show'})}>
                <strong>Employer:</strong> Studio Raketa
                <br/>
                <strong>Period:</strong> 04.2016 - 02.2020
                <br/>
                <strong>Position:</strong> frontend developer
                <br/>
                <span className="show-projects">Show Projects</span>
              </p>
            </div>
          </div>
  
          <div className="col-4">
            <div className="employer-info-wrapper">
              <p className="card short-info" onClick={() => setSlide({company: 'netea', animationClass: 'slide-show'})}>
                <strong>Employer:</strong> Netea
                <br/>
                <strong>Period:</strong> 10.2015 - 01.2016
                <br/>
                <strong>Position:</strong> frontend developer
                <br/>
                <span className="show-projects">Show Projects</span>
              </p>
            </div>
          </div>
  
          <div className="col-4">
            <div className="employer-info-wrapper">
              <p className="card short-info" onClick={() => setSlide({company: 'avalith', animationClass: 'slide-show'})}>
                <strong>Employer:</strong> Avalith
                <br/>
                <strong>Period:</strong>  05.2013 - 10.2015
                <br/>
                <strong>Position:</strong> frontend developer
                <br/>
                <span className="show-projects">Show Projects</span>
              </p>
            </div>
          </div>
        </div>
  
        <div className="row spacing-top designer-row">
          <div className="col-4">
              <div className="employer-info-wrapper">
                <p className="card short-info">
                  <strong>Employer:</strong> HiEnd Publishing
                  <br/>
                  <strong>Period:</strong> 08.2010 – 05.2013
                  <br/>
                  <strong>Position:</strong> graphic designer
                </p>
                {/* <ul>
                  <li><strong>Projects:</strong> Albanian mobile operator catalog, M-tel catalog, Office One catalog, Hicomm Magazine, CEZ NEWS Magazine</li>
                </ul> */}
              </div>
            </div>
  
            <div className="col-4">
              <div className="employer-info-wrapper">
                <p className="card short-info">
                  <strong>Employer:</strong> “Tema” magazine
                  <br/>
                  <strong>Period:</strong> 08.2008 – 08.2010
                  <br/>
                  <strong>Position:</strong> graphic designer
                </p>
              </div>
            </div>
  
            <div className="col-4">
              <div className="employer-info-wrapper">
                <p className="card short-info">
                  <strong>Employer:</strong> Lambadjiev Standart
                  <br/>
                  <strong>Period:</strong> 10.2007 – 08.2008
                  <br/>
                  <strong>Position:</strong> graphic designer
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
