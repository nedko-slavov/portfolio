import React from 'react';
import Image from 'next/image';

const LeadInfo = () => (
  <div className="lead-info">
    <div className="container">
      <div className="avatar-wrapper">
        <div className="avatar-bg avatar-bg-animation">
          <Image
            src="/static/images/nedko.jpeg"
            alt="Picture of the author"
            width={150}
            height={150}
            className="avatar avatar-animation"
          />
          <div className="text-bg text-bg-animation" />
        </div>
      </div>

      <div className="lead-text lead-text-animation">
        <h3>Nedko Slavov</h3>

        <div className="row">
          <div className="col-4 education-col">
            <h4 className="title">Education</h4>
            <ul>
              <li>
                <strong>Institution: </strong>
                Burgas Free University
              </li>
              <li>
                <strong>Specialty: </strong>
                Informatics
              </li>
              <li>
                <strong>Period: </strong>
                2003 - 2007
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h4 className="title">Contact</h4>
            <p>
              <strong>tel: </strong>
              0878 895 044
              <br />
              <strong>email: </strong>
              n.p.slavov@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LeadInfo;