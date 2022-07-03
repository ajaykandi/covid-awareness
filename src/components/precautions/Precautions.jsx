import { preventionsData } from "../../content";
import "./precautions.scss";

const Precautions = () => {
  return (
    <div className="precautions" id="precautions">
      <h2>TAKE PRECAUTIONS AGAINST COVID-19</h2>
      <div className="main">
        <div className="do-container">
          <div className="do-title">Things You Should Do</div>
          <div className="do-todo-container">
            {preventionsData.Do.map((dos) => (
              <div key={dos.id} className="todo">
                <img src={dos.img} alt="" />
                <div className="todo-content">
                  <h4 className="title">{dos.title}</h4>
                  <p className="desc">{dos.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="do-container">
          <div className="do-title donot-title">Things You Should Do</div>
          <div className="do-todo-container">
            {preventionsData.Donot.map((not) => (
              <div key={not.id} className="todo">
                <img src={not.img} alt="" />
                <div className="todo-content">
                  <h4 className="title">{not.title}</h4>
                  <p className="desc">{not.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Precautions;
