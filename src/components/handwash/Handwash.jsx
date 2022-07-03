import { HandWashData, SymptomsData } from "../../content";
import "./handwash.scss";

const Handwash = () => {
  return (
    <div className="handwash" id="handwash">
      <h1>Wash Your Hands Properly</h1>
      <div className="handwash-container">
        <div className="mainImg">
          <img src="assets/Images/main-wash-img.png" alt="" />
        </div>
        <div className="smallImgContainer">
          {HandWashData.map((symp) => (
            <div key={symp.id} className="handwash">
              <img src={symp.img} alt="" />
              <h4>{symp.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Handwash;
