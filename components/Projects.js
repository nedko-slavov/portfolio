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
      <div className="container">
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
                  <svg className="rocket" width="497" height="831" viewBox="0 0 497 831" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 4">
<g id="Group 1">
<g id="rokcet">
<g id="rocket-flame">
<g id="Group 2">
<path id="Ellipse 1" d="M182.148 608.452C182.148 638.394 186.24 684.148 176.011 670.85C165.781 657.552 147.369 643.231 147.369 608.452C147.369 573.673 180.513 564.467 192.377 564.467C204.241 564.467 182.148 578.51 182.148 608.452Z" fill="#FFD464"/>
<path id="Ellipse 2" d="M319.651 608.452C319.651 638.394 315.559 684.148 325.789 670.85C336.018 657.552 354.43 643.231 354.43 608.452C354.43 573.673 321.286 564.467 309.422 564.467C297.558 564.467 319.651 578.51 319.651 608.452Z" fill="#FFD464"/>
<path id="Ellipse 3" d="M242.5 581.856C236.176 633.122 220.081 612.377 220.081 715.858C187.263 655.098 188.286 645.765 188.286 599.246C188.286 586.662 202.453 565.49 214.881 565.49C231.248 565.49 242.5 569.272 242.5 581.856Z" fill="#F2B255"/>
<path id="Ellipse 6" d="M258.867 581.856C265.191 633.122 281.286 612.377 281.286 715.858C314.104 655.098 313.081 645.765 313.081 599.246C313.081 586.662 298.914 565.49 286.486 565.49C270.119 565.49 258.867 569.272 258.867 581.856Z" fill="#F2B255"/>
<path id="Ellipse 5" d="M275.233 699.492C275.233 742.992 251.706 771.096 251.706 792.577C251.706 814.058 226.133 727.11 226.133 710.744C226.133 667.243 239.949 599.246 250.683 599.246C261.417 599.246 275.233 655.991 275.233 699.492Z" fill="#F2B255"/>
</g>
</g>
<g id="Group 3">
<g id="rocket">
<g id="Rectangle 1" filter="url(#filter0_d)">
<path d="M167 80H248V559H167V80Z" fill="#E6E6E6"/>
</g>
<g id="Rectangle 2" filter="url(#filter1_d)">
<path d="M167 531V304C167 304 112 363 61.9999 404C11.9999 445 2.99994 531 2.99994 531H167Z" fill="#CC584C"/>
</g>
<g id="Rectangle 14" filter="url(#filter2_d)">
<path d="M330 531V304C330 304 385 363 435 404C485 445 494 531 494 531H330Z" fill="#CC584C"/>
</g>
<g id="Rectangle 8" filter="url(#filter3_d)">
<path d="M248 93V3L167 79.7187L248 93Z" fill="#CC584C"/>
</g>
<path id="Ellipse 8" d="M284.925 229.962C284.925 250.376 268.376 266.925 247.962 266.925C227.549 266.925 211 250.376 211 229.962C211 209.549 227.549 193 247.962 193C268.376 193 284.925 209.549 284.925 229.962Z" fill="#C2E2F2" stroke="black" stroke-width="12"/>
<g id="Rectangle 7" filter="url(#filter4_d)">
<path d="M248 80H330V559H248V80Z" fill="#DFDFDF"/>
</g>
<path id="Ellipse 9" d="M247.962 272.925C271.69 272.925 290.925 253.69 290.925 229.962C290.925 206.235 271.69 187 247.962 187V272.925Z" fill="#C2E2F2"/>
<path id="Ellipse 9 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M247.962 260.925C265.063 260.925 278.925 247.063 278.925 229.962C278.925 212.862 265.063 199 247.962 199C230.862 199 217 212.862 217 229.962C217 247.063 230.862 260.925 247.962 260.925ZM247.962 272.925C271.69 272.925 290.925 253.69 290.925 229.962C290.925 206.235 271.69 187 247.962 187C224.235 187 205 206.235 205 229.962C205 253.69 224.235 272.925 247.962 272.925Z" fill="black"/>
<g id="Rectangle 10" filter="url(#filter5_d)">
<path d="M248 559L167 559L248 527L248 559Z" fill="#CC584C"/>
</g>
<path id="Rectangle 12" d="M95 531L2.50004 529.5C6.50006 496 18.5364 463.284 32.5 439.5C46.2679 416.049 52 411.5 95 375L95 531Z" fill="#BE5247"/>
<path id="Rectangle 15" d="M401 531L493.5 529.5C489.5 496 477.464 463.284 463.5 439.5C449.732 416.049 444 411.5 401 375L401 531Z" fill="#BE5247"/>
<g id="Rectangle 11" filter="url(#filter6_d)">
<path d="M248 559L329 559L248 527L248 559Z" fill="#CC584C"/>
</g>
<g id="Rectangle 9" filter="url(#filter7_d)">
<path d="M248 93V3L330 79.7187L248 93Z" fill="#BE5247"/>
</g>
</g>
</g>
</g>
</g>
</g>
<defs>
<filter id="filter0_d" x="164" y="77" width="87" height="485" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="-6.10352e-05" y="301" width="170" height="233" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter2_d" x="327" y="301" width="170" height="233" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter3_d" x="164" y="0" width="87" height="96" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter4_d" x="245" y="77" width="88" height="485" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter5_d" x="164" y="524" width="87" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter6_d" x="245" y="524" width="87" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
              <div className="description-inner">
                <h5>Raketa CMS</h5>
                <p>Contributor to Raketa CMS <br/> project builded in <a href="https://raketadesign.com/" target="_blank" rel="noopener noreferrer">Studio Raketa</a></p>

                <a href="https://github.com/studioraketa/raketa-cms" target="_blank" rel="noopener noreferrer" className="github-link">
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.47748 0 0 4.47748 0 10C0 15.5231 4.47748 20 10 20C15.5225 20 20 15.5231 20 10C19.9999 4.47748 15.5224 0 10 0ZM12.8012 17.6181C12.7436 16.8356 12.6793 15.8662 12.6755 15.4737C12.6506 15.1725 12.618 14.4062 11.8906 13.9169C14.7787 13.675 16.153 12.0787 16.2518 9.96938C16.3343 8.76816 15.8568 7.71186 15.0087 6.8594C15.0518 5.94755 14.9812 4.86688 14.9225 4.39194C14.2712 4.20445 12.7525 5.00632 12.3281 5.34944C11.4331 5.00192 9.24248 4.88006 7.91123 5.34944C6.96746 4.68571 5.89311 4.27571 5.3075 4.39009C4.76685 5.58822 5.11438 6.72072 5.21996 6.85569C4.52368 7.49197 3.55245 8.27509 3.81622 9.91569C4.23932 12.3213 5.93183 13.6188 8.6568 13.9363C8.07559 14.0551 7.97741 14.4888 7.92867 14.6769C6.09865 15.4319 5.57559 14.2107 5.34429 13.8926C4.5762 12.9419 3.88679 13.2176 3.84429 13.2325C3.80303 13.2475 3.7718 13.3075 3.77619 13.3363C3.81491 13.5413 4.23308 13.7494 4.25367 13.7662C4.82054 14.1887 5.03055 14.9519 5.15989 15.1694C5.97302 16.5062 7.86304 15.9519 7.88116 15.9631C7.8824 16.08 7.86805 17.0638 7.85679 17.8294C4.41061 16.8881 1.87498 13.7443 1.87498 10C1.87498 5.5125 5.51249 1.87505 9.99993 1.87505C14.4874 1.87505 18.1249 5.5125 18.1249 10C18.1249 13.5019 15.9062 16.4762 12.8012 17.6181Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
