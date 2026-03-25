import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance SEO Professional</h4>
                <h5>Various Companies</h5>
              </div>
              <h3>1 MO</h3>
            </div>
            <p>
              Executed comprehensive off-page SEO activities, including backlink creation, comprehensive keyword mapping, intent analysis, and directory submissions. Delivered scalable strategies targeting specific buyer journeys.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Companies Served</h4>
                <h5>Recent Clients</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Tamam Safety (UAE), Five Minutes Games, Admartech, ACSTECHHUB,
              Transcodezy IT Solutions Pvt. Ltd., TransWipo Tech Academy, TotalCal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
