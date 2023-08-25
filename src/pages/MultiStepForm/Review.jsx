import { Button, Col, Row } from "antd";
import React, { useContext } from "react";
import MultiStepFormContext from "./MultiStepFormContext";

const Review = () => {
  const { details, address, next, prev } = useContext(MultiStepFormContext);
  const functionwpp = async(details, address)=>{
    console.log(details.name.trim() )
    let nome = details.name.trim()
console.log(encodeURIComponent(nome))
  let a = `https://api.whatsapp.com/send/?phone=5512982047622&text&type=phone_number&app_absent=0&text=nome:%20${encodeURIComponent(details.name.trim())}%20Idade:%20${details.age}%20Tamanho:%20${encodeURIComponent(address.tamanho.trim())}%20local:%20${encodeURIComponent(address.local.trim())}`
  window.location.href = a;
console.log(a)
  }
  return (
    <div className={"details__wrapper"}>
      <Row>
        <Col span={24}>
          <h1>Dados</h1>
          <p>Name: {details.name}</p>
          <p>Age: {details.age}</p>
        </Col>
        <Col span={24}>
          <h1>Detalhes da tatuagem</h1>
          <p>tamanho: {address.tamanho}</p>
          <p>local: {address.local}</p>
          <div
            className={
              "form__item button__items d-flex justify-content-between"
            }
          >
            <Button type={"default"} onClick={prev}>
              Back
            </Button>
            <Button type={"primary"} onClick={() => functionwpp(details, address)}>
              Confirm
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Review;
