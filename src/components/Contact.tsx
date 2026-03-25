import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:vivekraj13502@gmail.com" data-cursor="disable">
                vivekraj13502@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>9998113502</p>
            <h4>Address</h4>
            <p>433-16-1, Amin Society,<br />Adas, Anand Gujarat, 388305</p>
            <h4>Education</h4>
            <p>BBA - ITM (2021-2023)<br />Shree D.N. Institute of Business<br />CGPA: 5.88<br />12th (45%), 10th (35%)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/raj-vivek-7212b01b3/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Vivek Raj</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
