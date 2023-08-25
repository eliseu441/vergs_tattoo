import React, { useState } from "react";
import "./SideNavBar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/icons/0-circle-fill.svg';
import { Link } from "react-router-dom";
import logo from './logo.png';
import logo2 from './logoV.png';

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const [showSubMenu, setShowSubMenu] = useState(true);

	const handleClick = () => {
		setShowSubMenu(!showSubMenu);
		var submenuElement = document.querySelector(".submenu");

		if (showSubMenu) {
			submenuElement.classList.add("active");
		} else {
			submenuElement.classList.remove("active");
		}
	}
	const removeChecked = () => {
		var checkbox = document.querySelector("#checkbox-menu")
		if(checkbox){

			checkbox.click()
		}
	}

	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper" style={isExpanded ? { backgroundColor: "rgb(0, 0, 0, 0.3)" } : { backgroundColor: "rgb(0, 0, 0, 0)" }}>
				<div className="nav-heading " style={isExpanded ? { backgroundColor: "rgb(0, 0, 0, 0.8)" } : { backgroundColor: "rgb(0, 0, 0, 0)" }}>
					{isExpanded && (
						<div className="text-size mt-3">
						</div>
					)}
					<input type="checkbox" id="checkbox-menu" onClick={() => setExpendState(!isExpanded)} />
					<label for="checkbox-menu" className="hamburguer ">
						<img class="iconSide d-flex justify-content-center" src={logo2} style={{ zIndex: -1 }} />
					</label>
				</div>
				{isExpanded && (
					<div className="nav-menu mt-0">
						<div class="list-group">
						<Link to="/" className="decoration " onClick={e => removeChecked()}>
								<span class="list-group-item list-group-item-action"><span class="d-flex justify-content-center">
									<span style={{ marginLeft: "10px"}} class=" title-home"> Home</span>
								</span></span>
							</Link>
							<Link to="/personalize" className="decoration triagem" onClick={e => removeChecked()}>
								<span class="list-group-item list-group-item-action"><span class="d-flex justify-content-center">
									<span style={{ marginLeft: "10px"}} class=" title-tour"> Iniciar triagem</span>
								</span></span>
							</Link>
							<div>
								<span style={{ backgroundColor: "rgb(0, 0, 0, 0.7)" }} class="list-group-item list-group-item-action dropdown-toggle " onClick={handleClick}><span class="text-margin "><i class="bi bi-telephone-fill icons-color"></i>
									<span style={{ marginLeft: "10px" }} class="menu-titles "> Contato </span>
								 </span></span>
							</div>
							<div className="submenu">
								<div>
									<div class="list-group ">
										<span class="list-group-item list-group-item-action "><span class="text-margin  ">

											<span style={{ marginLeft: "20px", color:"red"  }} class="menu-titles">  <i class="bi bi-instagram fs-6" ></i></span>
											<span style={{ marginLeft: "10px" }} class="menu-titles "> Instagram	</span>
										</span></span>
									</div>
									<div class="list-group">
										<span class="list-group-item list-group-item-action "><span class="text-margin ">

											<span style={{ marginLeft: "20px", color:"rgb(22, 238, 22)" }} class="menu-titles ">  <i class="bi bi-whatsapp icons-size"></i></span>
											<span style={{ marginLeft: "10px" }} class="menu-titles "> Whatsapp	 </span>
										</span></span>
									</div>
								</div>
							</div>
							
							

						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SideNavBar;
