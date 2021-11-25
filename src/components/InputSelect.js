import React, { useMemo } from 'react';
import { Input, FormGroup, FormFeedback, Label } from 'reactstrap';

const InputSelect = (props) => {
  const { input, label, meta, options, ref } = props;
  const { name } = input;

  const listOfOptions = useMemo(() => {
    let result = options.map((option, index) => {
      return (
        <option key={`${name}-${index}`} value={option}>
          {option}
        </option>
      );
    });
    result.unshift(
      <option key={0} value={''}>
        {''}
      </option>,
    );
    return result;
  }, [name, options]);

  return (
    <FormGroup className="app-input-container">
      <Label className="app-input-label" for={name}>
        {label}
      </Label>
      <Input
        id={name}
        type={'select'}
        innerRef={ref}
        invalid={meta.touched && !!meta.error}
        className="app-input-select"
        autoComplete="new-password"
        {...input}
        style={
          meta.touched && !!meta.error
            ? {}
            : {
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/down-filled-triangular-arrow.svg)`,
              }
        }
      >
        {listOfOptions}
      </Input>
      {meta.touched && meta.error ? (
        <FormFeedback className="app-formfeedback">{meta.error}</FormFeedback>
      ) : null}
    </FormGroup>
  );
};

export default InputSelect;
