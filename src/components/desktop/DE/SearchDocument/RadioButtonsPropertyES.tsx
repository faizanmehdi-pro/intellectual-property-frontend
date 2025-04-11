import "../DESetup.scss";
export interface RadioProps {
  isRadio: any;
  setIsRadio: any;
}
const RadioButtonsPropertyES = ({
  isRadio,
  setIsRadio,
}: RadioProps) => {
  const handleChange = (e: any) => {
    setIsRadio(+e.currentTarget.value);
  };

  return (
    <div className="radio-buttons-property-container">
      <div className="radio-button">
        <input
          type="radio"
          id="radio1"
          value="1"
          onChange={handleChange}
          checked={isRadio === 1}
        />
        <h4 className="radio-label">Video</h4>
      </div>
      <div className="radio-button">
        <input
          type="radio"
          id="radio2"
          value="2"
          onChange={handleChange}
          checked={isRadio === 2}
        />
        <h4 className="radio-label">Audio</h4>
      </div>
      <div className="radio-button">
        <input
          type="radio"
          id="radio3"
          value="3"
          onChange={handleChange}
          checked={isRadio === 3}
        />
        <h4 className="radio-label">Foto</h4>
      </div>
      
      <div className="radio-button">
        <input
          type="radio"
          id="radio4"
          value="4"
          onChange={handleChange}
          checked={isRadio === 4}
        />
        <h4 className="radio-label">Documento</h4>
      </div>
    </div>
  );
};

export default RadioButtonsPropertyES;
