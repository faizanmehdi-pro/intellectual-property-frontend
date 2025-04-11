import "../../DESetup.scss";
import { useState } from "react";
export interface RadioProps {
  selectedMotive: any;
  setSelectedMotive: any;
  differentMotive: any;
  setDifferentMotive: any;
}
const Motive = ({
  selectedMotive,
  setSelectedMotive,
  differentMotive,
  setDifferentMotive,
}: RadioProps) => {
  const [otherMotive, setOtherMotive] = useState(false);
  const handleChange = (e: any) => {
    setSelectedMotive(+e.currentTarget.value);
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
            checked={selectedMotive === 1}
            onClick={() => setOtherMotive(false)}
          />
          <h4 className="option-label">Professional</h4>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            id="radio2"
            value="2"
            onChange={handleChange}
            checked={selectedMotive === 2}
            onClick={() => setOtherMotive(false)}
          />
          <h4 className="option-label">School</h4>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            id="radio3"
            value="3"
            onChange={handleChange}
            checked={selectedMotive === 3}
            onClick={() => setOtherMotive(false)}
          />
          <h4 className="option-label">Curiosity</h4>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            id="radio3"
            value="4"
            onChange={handleChange}
            checked={selectedMotive === 4}
            onClick={() => setOtherMotive(true)}
          />
          <h4 className="option-label">Other</h4>
        </div>
      </div>
      <div style={{ display: otherMotive ? "block" : "none" }}>
        <input
          placeholder="Enter Motive"
          type="text"
          value={differentMotive}
          onChange={(e) => setDifferentMotive(e.target.value)}
          className="input-field"
        />
      </div>
    </>
  );
};

export default Motive;
