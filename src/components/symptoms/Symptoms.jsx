import { SymptomsData } from "../../content";
import "./symptoms.scss";

const Symptoms = () => {
  return (
    <div className="symptoms" id="symptoms">
      <h1>COVID-19 SYMPTOMS</h1>
      <div className="symptomContainer">
        <div className="mainImg">
          <img src="assets/Images/main-symp-img.png" alt="" />
        </div>
        <div className="smallImgContainer">
          {SymptomsData.map((symp) => (
            <div key={symp.id} className="symptom">
              <img src={symp.img} alt="" />
              <h4>{symp.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
