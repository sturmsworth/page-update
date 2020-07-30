import React from "react";

const CustomInput = ({
  inputCol,
  label,
  labelName,
  inputId,
  inputType,
  selectOptionHidden,
  selectOptions,
  inputValue,
  inputOnChange,
  inputOnBlur,
  inputPlaceholder,
  required,
  completed,
  error
}) => {
  return (
    <div className={`form-group ${inputCol}`}>
      {label ? (
        <label htmlFor={inputId}>
          {labelName}
          {required ? <span className="text-danger">*</span> : null}
        </label>
      ) : null}
      {inputType === "select" ? (
        completed ? (
          <select
            className="form-control"
            id={inputId}
            onChange={inputOnChange}
            readOnly
            onBlur={inputOnBlur}
          >
            <option value="" hidden="hidden">
              {selectOptionHidden}
            </option>
            {selectOptions.map((option, index) => {
              return (
                <option key={index} value={option.name}>
                  {option.name}
                </option>
              );
            })}
          </select>
        ) : (
          <select
            className="form-control"
            id={inputId}
            onChange={inputOnChange}
            onBlur={inputOnBlur}
          >
            <option value="" hidden="hidden">
              {selectOptionHidden}
            </option>
            {selectOptions.map((option, index) => {
              return (
                <option key={index} value={option.name}>
                  {option.name}
                </option>
              );
            })}
          </select>
        )
      ) : completed ? (
        <input
          type={inputType}
          value={inputValue}
          onChange={inputOnChange}
          onBlur={inputOnBlur}
          placeholder={inputPlaceholder}
          id={inputId}
          className="form-control"
          readOnly
        />
      ) : error ? (
        <input
          type={inputType}
          value={inputValue}
          onChange={inputOnChange}
          onBlur={inputOnBlur}
          placeholder={inputPlaceholder}
          id={inputId}
          className="form-control"
          style={{
            border: "2px solid",
            borderColor: "red"
          }}
        />
      ) : (
        <input
          type={inputType}
          value={inputValue}
          onChange={inputOnChange}
          onBlur={inputOnBlur}
          placeholder={inputPlaceholder}
          id={inputId}
          className="form-control"
        />
      )}
      {error ? (
        <div className="form-group col">
          <div>
            <span className="text-danger">{error}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CustomInput;
// <div className="form-group col-md-4 col-sm-12">
//   <Field
//     component="select"
//     name="applicantPrefix"
//     className="form-control"
//     placeholder="Prefix"
//   >
//     <option value="" defaultValue hidden="hidden">
//       Preferred Prefix
//     </option>
//     <option value="Mr.">Mr.</option>
//     <option value="Miss">Miss</option>
//   </Field>
//   {errors.applicantPrefix && touched.applicantPrefix ? (
//     <div style={{ color: "red" }}>{errors.applicantPrefix}</div>
//   ) : null}
// </div>;
