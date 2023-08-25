import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
const Details = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        console.log(values)
        if (!values.local) errors.local = "*local do corpo obrigatorio";
        if (!values.tamanho) errors.city = "*tamanho da tatto obrigatoria";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.local && "input__error"}`}>
              <label>Local da tatuagem</label>
              <Input name={"local"} />
              <p className={"error__feedback"}>{errors.local}</p>
            </div>
            <div className={`form__item ${errors.city && "input__error"}`}>
              <label>Tamanho em cm</label>
              <Input name={"tamanho"} />
              <p className={"error__feedback"}>{errors.city}</p>
            </div>
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
              <Button type={"default"} onClick={prev}>
                Back
              </Button>
              <Button type={"primary"} onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Details;
