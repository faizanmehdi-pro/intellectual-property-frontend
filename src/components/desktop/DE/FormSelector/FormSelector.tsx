import React, { ChangeEvent } from "react";
import "./FormSelectorStyles.scss";

interface Option {
  value: string;
  label: string;
}

interface FormSelectorProps {
  // label: string;
  value: string;
  options: Option[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

function FormSelector({ value, options, onChange, error }: FormSelectorProps) {
  return (
    <div className="custom-form-selector">
      {/* <label>{label}</label> */}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p>{error}</p>}
    </div>
  );
}

export default FormSelector;
