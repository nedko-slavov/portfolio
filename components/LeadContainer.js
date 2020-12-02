
export default () => (
  <div className="lead-container spacing-both-lg">
    <div className="container">
      <div className="row spacing-top lead-container-inner">
        <div className="col-3">
          <div className="avatar-wrapper">
            <img className="avatar" src="../static/images/nedko.jpeg" alt="" />
            <div className="text-bg" />
          </div>
        </div>

        <div className="col-9 lead-text">
          <h3>Nedko Slavov</h3>
          <div className="row">
            <div className="col-6">
              <h4 className="title">Personal info</h4>
              <ul>
                <li><strong>Period:</strong> 2003 - 2007</li>
                <li><strong>Specialty:</strong> Informatics</li>
                <li><strong>Educational Institution:</strong> Burgas Free University</li>
              </ul>
            </div>

            <div className="col-6">
              <h4 className="title">Contact</h4>
              <p><strong>tel:</strong> 0878 895 044 <br/> <strong>email:</strong> n.p.slavov@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);