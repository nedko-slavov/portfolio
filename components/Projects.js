import React, { useState, useLayoutEffect } from 'react';

const redirectDelay = () => {
  setTimeout(function () {
      window.location.href = "/builder";
   }, 1500);
}

export default () => {
  const [isRocketLounched, setRoketLounch] = useState(false);

  useLayoutEffect(() => {
    if (isRocketLounched) {
      redirectDelay();

      setTimeout(function () {
        setRoketLounch(false);
      }, 1510);
    }
  });
  
  return (
    <div className="projects">
      <div className="container spacing-bottom">
        <div className="spacing-bottom-lg">
          <div className="spacing-bottom-sm">
            <h4 className="section-title">Projects</h4>
          </div>
          
          <div className="row">
            <div className="col-6">  
              <div className="img-container">
                <a
                  href="/builder"
                  onClick={(e) => {e.preventDefault(); setRoketLounch(!isRocketLounched);}}
                  target="_blank"
                >
                  <div className={`projects-rocket ${isRocketLounched ? 'rocket-lounch' : ''}`}>
                  <svg className="rocket" width="497" height="801" viewBox="0 0 497 801" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Group 1">
  <g id="rocket">
  <g id="rocket-flame">
  <path id="Ellipse 1" d="M188.148 566.452C188.148 596.394 192.24 642.148 182.011 628.85C171.781 615.552 153.369 601.231 153.369 566.452C153.369 531.673 186.513 522.467 198.377 522.467C210.241 522.467 188.148 536.51 188.148 566.452Z" fill="#FFD464"/>
  <path id="Ellipse 2" d="M325.651 566.452C325.651 596.394 321.56 642.148 331.789 628.85C342.018 615.552 360.43 601.231 360.43 566.452C360.43 531.673 327.286 522.467 315.422 522.467C303.558 522.467 325.651 536.51 325.651 566.452Z" fill="#FFD464"/>
  <path id="Ellipse 3" d="M248.5 539.856C242.176 591.122 226.081 570.377 226.081 673.858C193.263 613.098 194.286 603.765 194.286 557.246C194.286 544.662 208.453 523.49 220.881 523.49C237.248 523.49 248.5 527.272 248.5 539.856Z" fill="#F2B255"/>
  <path id="Ellipse 6" d="M264.867 539.856C271.191 591.122 287.286 570.377 287.286 673.858C320.104 613.098 319.081 603.765 319.081 557.246C319.081 544.662 304.914 523.49 292.486 523.49C276.119 523.49 264.867 527.272 264.867 539.856Z" fill="#F2B255"/>
  <path id="Ellipse 5" d="M281.233 657.492C281.233 700.992 257.706 729.096 257.706 750.577C257.706 772.058 232.133 685.11 232.133 668.744C232.133 625.243 245.949 557.246 256.683 557.246C267.417 557.246 281.233 613.991 281.233 657.492Z" fill="#F2B255"/>
  </g>
  <g id="roket">
  <g id="Rectangle 1" filter="url(#filter0_d)">
  <path d="M167 81H248V529H167V81Z" fill="#E6E6E6"/>
  </g>
  <g id="Rectangle 2" filter="url(#filter1_d)">
  <path d="M166.667 528.604V364.938L3 528.604H166.667Z" fill="#CC584C"/>
  </g>
  <g id="Rectangle 8" filter="url(#filter2_d)">
  <path d="M248 93V3L167 79.7187L248 93Z" fill="#CC584C"/>
  </g>
  <g id="Rectangle 5" filter="url(#filter3_d)">
  <path d="M330.333 528.604V364.938L494 528.604H330.333Z" fill="#CC584C"/>
  </g>
  <g id="Rectangle 7" filter="url(#filter4_d)">
  <path d="M248 81H330V529H248V81Z" fill="#DFDFDF"/>
  </g>
  <g id="Rectangle 10" filter="url(#filter5_d)">
  <path d="M248 529L167 529L248 497L248 529Z" fill="#CC584C"/>
  </g>
  <path id="Rectangle 12" d="M95.5 529L4 529L42 490L95.5 529Z" fill="#BE5247"/>
  <path id="Rectangle 13" d="M399 529L490.5 529L452.5 490L399 529Z" fill="#BE5247"/>
  <g id="Rectangle 11" filter="url(#filter6_d)">
  <path d="M248 529L329 529L248 497L248 529Z" fill="#CC584C"/>
  </g>
  <path id="Ellipse 8" d="M284.925 214.962C284.925 235.376 268.376 251.925 247.962 251.925C227.549 251.925 211 235.376 211 214.962C211 194.549 227.549 178 247.962 178C268.376 178 284.925 194.549 284.925 214.962Z" fill="#C2E2F2" stroke="black" strokeWidth="12"/>
  <g id="Rectangle 9" filter="url(#filter7_d)">
  <path d="M248 93V3L330 79.7187L248 93Z" fill="#BE5247"/>
  </g>
  </g>
  </g>
  </g>
  <defs>
  <filter id="filter0_d" x="164" y="78" width="87" height="454" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset/>
  <feGaussianBlur stdDeviation="1.5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  <filter id="filter1_d" x="0" y="361.938" width="169.667" height="169.667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset/>
  <feGaussianBlur stdDeviation="1.5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  <filter id="filter2_d" x="164" y="0" width="87" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset/>
  <feGaussianBlur stdDeviation="1.5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  <filter id="filter3_d" x="327.333" y="361.938" width="169.667" height="169.667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset/>
  <feGaussianBlur stdDeviation="1.5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  <filter id="filter4_d" x="245" y="78" width="88" height="454" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset/>
  <feGaussianBlur stdDeviation="1.5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  <filter id="filter5_d" x="164" y="494" width="87" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset/>
  <feGaussianBlur stdDeviation="1.5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  <filter id="filter6_d" x="245" y="494" width="87" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset/>
  <feGaussianBlur stdDeviation="1.5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  <filter id="filter7_d" x="245" y="0" width="88" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset/>
  <feGaussianBlur stdDeviation="1.5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  </defs>
  </svg>
                  </div>
                </a>
              </div>
            </div>
  
            <div className="col-6 project">
              <div className="project-description">
                <div>
                  <h5>Raketa CMS</h5>
                  <p>Contributor to Raketa CMS <br/> project builded in <a href="https://raketadesign.com/" target="_blank" rel="noopener noreferrer">Studio Raketa</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
