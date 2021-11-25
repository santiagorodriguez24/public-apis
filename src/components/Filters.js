import React, { useCallback } from 'react';
import InputSelect from 'components/InputSelect';
import { Form, Field } from 'react-final-form';
import { isEmpty } from 'lodash';

import { Button, Row, Col, Form as FormReactstrap } from 'reactstrap';

const constants = {
  authOptions: ['null', 'apiKey'],
  httpsOptions: ['true', 'false'],
  corsOptions: ['yes', 'no', 'unknown'],
};

const locales = {
  authLabel: 'AUTH',
  httpsLabel: 'HTTPS',
  corsLabel: 'CORS',
  updateButtonLabel: 'Update',
  inputErrorMessage: 'You must select a valid option.',
};

function Filters(props) {
  const { handleSubmit, isLoading } = props;
  const validate = useCallback((values) => {
    const errors = {}; // object with the validation errors found.The name of the keys is equal to the field with error.

    if (values.auth) {
      const isValid = constants.authOptions.includes(values.auth);
      if (!isValid) {
        errors.auth = locales.inputErrorMessage;
      }
    }

    if (values.https) {
      const isValid = constants.httpsOptions.includes(values.https);
      if (!isValid) {
        errors.https = locales.inputErrorMessage;
      }
    }

    if (values.cors) {
      const isValid = constants.corsOptions.includes(values.cors);
      if (!isValid) {
        errors.cors = locales.inputErrorMessage;
      }
    }

    return errors; // if there is no error, an empty object is returned.
  }, []);

  return (
    <Form
      onSubmit={handleSubmit}
      validate={validate}
      render={(formProps) => {
        const { errors, handleSubmit, pristine, submitError, submitting } =
          formProps;

        return (
          <div className="app-form">
            <FormReactstrap
              id="filtersForm"
              encType="multipart/form-data"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="filters-container">
                <Row className="basic-row">
                  <Col xs={12} sm={12} md={6}>
                    <Field
                      component={InputSelect}
                      label={locales.authLabel}
                      name="auth"
                      options={constants.authOptions}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <Field
                      component={InputSelect}
                      label={locales.httpsLabel}
                      name="https"
                      options={constants.httpsOptions}
                    />
                  </Col>
                </Row>
                <Row className="basic-row">
                  <Col xs={12} sm={12} md={6}>
                    <Field
                      component={InputSelect}
                      label={locales.corsLabel}
                      name="cors"
                      options={constants.corsOptions}
                    />
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    className="submit-button-container"
                  >
                    <Button
                      color=""
                      className="app-button"
                      size="lg"
                      form="filtersForm"
                      type="submit"
                      disabled={
                        submitting || pristine || !isEmpty(errors) || isLoading
                      }
                    >
                      {locales.updateButtonLabel}
                    </Button>
                  </Col>
                </Row>
                {submitError && (
                  <Row className="basic-row">
                    <pre className="form-error-msg">{submitError}</pre>
                  </Row>
                )}
              </div>
            </FormReactstrap>
          </div>
        );
      }}
    />
  );
}

export default Filters;
