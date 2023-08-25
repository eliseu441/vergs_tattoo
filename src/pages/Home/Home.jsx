import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import home1 from './img/header1.png';
import home2 from './img/header2.jpg';
import description from './img/description.png';
import resized1 from './img/resized1.png';
import resized2 from './img/resized2.png';
import resized3 from './img/resized3.png';
import resized4 from './img/resized4.png';
import resized5 from './img/resized5.png';
import { Carousel } from '3d-react-carousal';


function Home() {
    const handleClick = (nutri) => {
        var tabela = document.querySelector(".nutrition");
        var detalhes = document.querySelector(".details");

        if (nutri == true) {
            tabela.classList.add("active");
            detalhes.classList.remove("active");
        } else {
            detalhes.classList.add("active");
            tabela.classList.remove("active");
        }
    }
    const slides = [
        <img src={resized1} alt="1" />,
        <img src={resized2} alt="2" />,
        <img src={resized3} alt="3" />,
        <img src={resized4} alt="4" />,
        <img src={resized5} alt="5" />
    ];






    return (
        <div>
            <div class="background-sizing row m1">
                <div class="background-image" >
                    <div class="ml-1 col-12 d-flex justify-content-center apresentation-background" >
                        <div class="row">
                            <h1 class="apresentation1 col-12">VERGZ</h1>
                            <h4 class="apresentation2 col-12">REALISM TATTO</h4>
                        </div>


                    </div>

                </div>
                    <div class="col-12 d-flex justify-content-center">
                <img src={description}  class="img-description " />
                </div>
                <div class="description ">
                <h1 class="col-12 d-flex justify-content-center mt-2 title-description">Proposito</h1>
                <p class="description-text">Vergz tattoo é um estudio de tatuagem especializado em realismo onde cada projeto é uma obra personalizada utilizando técnicas avançadas e insumos de alta qualidade, trabalhamos em colaboração com cada cliente para transformar suas visões em realidade na pele.</p>
                <p class="description-text">Você não é apenas mais um cliente, mas sim um co-autor na criação de uma peça artística que reflete sua individualidade e paixões. O ambiente é esterilizado, projetado para que você se sinta à vontade enquanto passa por essa experiência.</p>
                
                
                
                </div>
                <div class="col-12 quebra1"></div>
                <div class="col-12 carousel-home" >
                    <div class="col-12 d-flex justify-content-center background-my-work" >
                        <h1 class="my-work">O TRABALHO </h1>
                    </div>
                    <Carousel slides={slides} autoplay={true} interval={5000} />
                </div>
                <div class="col-12 quebra2"></div>
                <div class="col-12 background-create-project orcament" >
                    <div class="col-12 d-flex justify-content-center background-orcament" >
                        <h1 class="my-work ">PERSOLALIZAÇÃO </h1>
                    </div>
                    <div class="col-12 d-flex justify-content-center " ><a href="#" class="animated-button1">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p class="animated-button-text">ELABORAR PROJETO</p>
                    </a>
                    </div>
                </div>
                <div class="teste1 mt-4">
                    <div class="box row justify-content-center">
                        <div class="loader col-4 d-flex justify-content-end"></div>
                        <h1 class="col-6 d-flex justify-content-start mb-4" style={{ color: "white"}}>Localização:</h1>
                        <iframe className='google-map' style={{ width: "80%", height: "100%", borderRadius:"20px" }} src="https://maps.google.com/maps?width=310&amp;height=242&amp;hl=en&amp;q=Alecrim Florido&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>



                <div class="col-12 d-flex justify-content-center mr-4 mt-2" style={{ color: "black" }}>
                    <h1>Teste</h1>
                </div>

            </div>
            

        </div>
    )
}

export default Home;