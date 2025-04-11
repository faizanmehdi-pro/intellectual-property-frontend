import "../../DESetup.scss";
import { useState } from "react";
export interface RadioProps {
  selectedMotiveES: any;
  setSelectedMotiveES: any;
  differentMotive: any;
  setDifferentMotive: any;
}
const MotiveES = ({
  selectedMotiveES,
  setSelectedMotiveES,
  differentMotive,
  setDifferentMotive,
}: RadioProps) => {
  const [otherMotiveES, setOtherMotiveES] = useState(false);
  const handleChange = (e: any) => {
    setSelectedMotiveES(+e.currentTarget.value);
  };

  return (
    <>
      <div className="radio-options">
        <div className="radio-option">
          <input
            type="radio"
            id="radio1"
            value="1"
            onChange={handleChange}
            checked={selectedMotiveES === 1}
            onClick={() => setOtherMotiveES(false)}
          />
          <h4 className="option-label">Profesional</h4>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            id="radio2"
            value="2"
            onChange={handleChange}
            checked={selectedMotiveES === 2}
            onClick={() => setOtherMotiveES(false)}
          />
          <h4 className="option-label">Escuela</h4>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            id="radio3"
            value="3"
            onChange={handleChange}
            checked={selectedMotiveES === 3}
            onClick={() => setOtherMotiveES(false)}
          />
          <h4 className="option-label">Curiosidad</h4>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            id="radio3"
            value="4"
            onChange={handleChange}
            checked={selectedMotiveES === 4}
            onClick={() => setOtherMotiveES(true)}
          />
          <h4 className="option-label">Otro</h4>
        </div>
      </div>
      <div style={{ display: otherMotiveES ? "block" : "none" }}>
        <input
          placeholder="Introducir motivo"
          type="text"
          value={differentMotive}
          onChange={(e) => setDifferentMotive(e.target.value)}
          className="input-field"
        />
      </div>
    </>
  );
};

export default MotiveES;
