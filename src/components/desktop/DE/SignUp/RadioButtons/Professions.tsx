import { useState } from "react";
import { Input } from "reactstrap";
import "../../DESetup.scss";
export interface RadioProps {
  selectedProfession: any;
  setSelectedProfession: any;
  differentProfession: any;
  setDifferentProfession: any;
}
const Profession = ({
  selectedProfession,
  setSelectedProfession,
  differentProfession,
  setDifferentProfession,
}: RadioProps) => {
  const [otherProfession, setOtherProfession] = useState(false);
  const handleChange = (e: any) => {
    setSelectedProfession(+e.currentTarget.value);
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
            checked={selectedProfession === 1}
            onClick={() => setOtherProfession(false)}
          />
          <h4 className="option-label">Student</h4>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            id="radio2"
            value="2"
            onChange={handleChange}
            checked={selectedProfession === 2}
            onClick={() => setOtherProfession(false)}
          />
          <h4 className="option-label">Lawyer</h4>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            id="radio3"
            value="3"
            onChange={handleChange}
            checked={selectedProfession === 3}
            onClick={() => setOtherProfession(false)}
          />
          <h4 className="option-label">History Researcher</h4>
        </div>
        <div className="radio-option">
          <input
            type="radio"
            id="radio3"
            value="4"
            onChange={handleChange}
            checked={selectedProfession === 4}
            onClick={() => setOtherProfession(true)}
          />
          <h4 className="option-label">Other</h4>
        </div>
      </div>
      <div style={{ display: otherProfession ? "block" : "none" }}>
        <Input
          placeholder="Enter Profession"
          type="text"
          value={differentProfession}
          onChange={(e) => setDifferentProfession(e.target.value)}
          className="input-field"
        />
      </div>
    </>
  );
};

export default Profession;
