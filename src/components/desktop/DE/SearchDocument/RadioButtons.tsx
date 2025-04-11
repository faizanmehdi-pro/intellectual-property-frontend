import "../DESetup.scss";
export interface RadioProps {
  isRadio: any;
  setIsRadio: any;
  setGeneralFields: (value: boolean) => void;
  setAgenciesFields: (value: boolean) => void;
  setMunicipalFields: (value: boolean) => void;
  setLawFields: (value: boolean) => void;
}
const RadioButtonsGroup = ({
  isRadio,
  setIsRadio,
  setGeneralFields,
  setAgenciesFields,
  setMunicipalFields,
  setLawFields,
}: RadioProps) => {
  const handleChange = (e: any) => {
    setIsRadio(+e.currentTarget.value);
  };

  return (
    <div className="radio-buttons-container">
      <div className="radio-button">
        <input
          type="radio"
          id="radio1"
          value="1"
          onChange={handleChange}
          checked={isRadio === 1}
          onClick={() => {
            setGeneralFields(true);
            setAgenciesFields(false);
            setMunicipalFields(false);
            setLawFields(true);
          }}
        />
        <h4 className="radio-label">Law</h4>
      </div>
      <div className="radio-button">
        <input
          type="radio"
          id="radio2"
          value="2"
          onChange={handleChange}
          checked={isRadio === 2}
          onClick={() => {
            setGeneralFields(true);
            setAgenciesFields(false);
            setMunicipalFields(false);
            setLawFields(false);
          }}
        />
        <h4 className="radio-label">Joint Resolution</h4>
      </div>
      {/* <div className="radio-button">
        <input
          type="radio"
          id="radio3"
          value="3"
          onChange={handleChange}
          checked={isRadio === 3}
          onClick={() => {
            setGeneralFields(true);
            setAgenciesFields(false);
            setMunicipalFields(false);
            setLawFields(false);
          }}
        />
        <h4 className="radio-label">Veto</h4>
      </div> */}
      <div className="radio-button">
        <input
          type="radio"
          id="radio4"
          value="4"
          onChange={handleChange}
          checked={isRadio === 4}
          onClick={() => {
            setGeneralFields(false);
            setAgenciesFields(true);
            setMunicipalFields(false);
            setLawFields(false);
          }}
        />
        <h4 className="radio-label">Agencies Regulations</h4>
      </div>
      <div className="radio-button">
        <input
          type="radio"
          id="radio5"
          value="5"
          onChange={handleChange}
          checked={isRadio === 5}
          onClick={() => {
            setGeneralFields(false);
            setAgenciesFields(false);
            setMunicipalFields(true);
            setLawFields(false);
          }}
        />
        <h4 className="radio-label">Municipal Regulation</h4>
      </div>
    </div>
  );
};

export default RadioButtonsGroup;
