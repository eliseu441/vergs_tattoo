import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultiStepFormContext";
import Details from "./Details";
import Address from "./Address";
import Review from "./Review";
import './step.css';


const { Step } = Steps;

const detailsInitialState = {
  name: "",
  age: "",
  profession: ""
};

const addressInitialState = {
  address1: "",
  address2: "",
  city: ""
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Details />;
    case 1:
      return <Address />;
    case 2:
      return <Review />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <article class="wrapper">

    <div class="content-step">
    <Provider value={{ details, setDetails, next, prev, address, setAddress }}>
      <Steps current={currentStep} >
        <Step  title={"Dados pessoais"}  />
        <Step  title={"Dados da tatuagem"} />
        <Step  title={"Revisao"} />
        
      </Steps>
      <main>{renderStep(currentStep)}</main>
    </Provider>
    </div>
    </article>
  );
};
export default MultiStepForm;
