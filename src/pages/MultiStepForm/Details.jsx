import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
const Details = () => {
  const { details, setDetails, next } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={details}
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "Nome obrigatorio";
        if (!values.age) errors.age = "Idade Obrigatoria";
        if (values.age > 90) errors.age = "Voce digitou qualquer coisa?";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.name && "input__error"}`}>
              <label>Nome *</label>
              <Input name={"name"} class="input-nome"/>
              <p className={"error__feedback"}>{errors.name}</p>
            </div>
            <div className={`form__item ${errors.age && "input__error"}`}>
              <label>Age *</label>
              <InputNumber name={"age"} min={0} />
              <p className={"error__feedback"}>{errors.age}</p>
            </div>
            <div
              className={"form__item button__items d-flex justify-content-end"}
            >
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
