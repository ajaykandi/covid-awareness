import "./prevent.scss";
import { preventions } from "../../content";

const Prevent = () => {
  return (
    <div className="prevent" id="prevent">
      <h2>HOW TO PREVENT VIRUS</h2>
      <div className="prevent-steps">
        {preventions.map((step) => (
          <div key={step.id} className="prevent-step">
            <img src={step.img} alt="" />
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prevent;
