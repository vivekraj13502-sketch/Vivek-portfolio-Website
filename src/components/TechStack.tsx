import "./styles/TechStack.css";
import { SiGoogleanalytics, SiGoogleads, SiGooglesearchconsole, SiWordpress } from "react-icons/si";
import { GiBullseye } from "react-icons/gi";

const tools = [
  { name: "Google Analytics 4", icon: <SiGoogleanalytics />, class: "ga4" },
  { name: "SEMrush", icon: <GiBullseye />, class: "semrush" },
  { name: "Search Console", icon: <SiGooglesearchconsole />, class: "gsc" },
  { name: "Keyword Planner", icon: <SiGoogleads />, class: "kp" },
  { name: "WordPress", icon: <SiWordpress />, class: "wp" },
];

const TechStack = () => {
  return (
    <div className="techstack-section section-container" id="tech">
      <h2>My <span>Techstack</span></h2>
      <div className="tech-grid">
        {tools.map((tool, index) => (
          <div className={`tech-card ${tool.class}`} key={index}>
            <div className="tech-icon">{tool.icon}</div>
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
