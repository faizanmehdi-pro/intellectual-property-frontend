import "../DESetup.scss";
export interface RadioProps {
  isRadioSection: any;
  setIsRadioSection: any;
}
const RadioButtonsSectionES = ({
  isRadioSection,
  setIsRadioSection,
}: RadioProps) => {
  const handleChange = (e: any) => {
    setIsRadioSection(+e.currentTarget.value);
  };

  return (
    <div className="radio-buttons-container">
      <div className="radio-button">
        <input
          type="radio"
          id="radio1"
          value="1"
          onChange={handleChange}
          checked={isRadioSection === 1}
        />
        <h4 className="radio-label">Ninguna</h4>
      </div>
      <div className="radio-button">
        <input
          type="radio"
          id="radio2"
          value="2"
          onChange={handleChange}
          checked={isRadioSection === 2}
        />
        <h4 className="radio-label">Popular</h4>
      </div>
      <div className="radio-button">
        <input
          type="radio"
          id="radio3"
          value="3"
          onChange={handleChange}
          checked={isRadioSection === 3}
        />
        <h4 className="radio-label">Histórica</h4>
      </div>
    </div>
  );
};

export default RadioButtonsSectionES;
