import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import gif from './logoV.png';

function topFunction(e) {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const Header = () => {
  return (

    <header class="fixed">
      <nav class="navbar fixed-top color-nav">
        <div class="row col-12">
        <div class="gif col-6">
            <button class=" gif-icon" onClick={e => topFunction(e)} type="button" >
              <img src={gif} class="gifImage" />
            </button>
          </div>
          <div id="mainnav" class="col-6 d-flex justify-content-end creditos">
            <ul class="menu">
              <li class="home">
                <a class="creditos">imagens usadas</a>
                <ul class="submenuteste creditos">
                  <li><a href="https://www.behance.net/gallery/170975077/Monster-Energy?tracking_source=search_projects|monster+energy"><img  style={{ zIndex: -1 }} /></a></li>
                  <li><a href="https://www.behance.net/gallery/56461915/Monster-Energy"><img  style={{ zIndex: -1 }} /></a></li>
                  <li><a href="https://www.behance.net/gallery/165913003/Monster-Energy?tracking_source=search_projects|monster+energy"><img  style={{ zIndex: -1 }} /></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Header