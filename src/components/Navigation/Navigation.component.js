import React from "react";
import "./Navigation.styles.scss";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import { SocialMedia } from "../SocialMedia/SocialMedia.component";

export function Navigation() {
	return (
		<nav className="navigation">
			<div className="navigation__top">
				<a href="#home" title="Home" className="home">
					<img src={logo} alt="Home" className="home-icon" />
				</a>
				<SocialMedia
					search={
						<li>
							<img src={search} alt="Search" />
						</li>
					}
				/>
			</div>
			<div className="navigation__bottom">
				<ul className="menu">
					<li className="menu__item">
						<a href="#a">Item A</a>
						<ul className="sub-menu">
							<li>
								<a href="#sub-a">SubItem A</a>
							</li>
							<li>
								<a href="#sub-b">SubItem B</a>
							</li>
							<li>
								<a href="#sub-c">SubItem C</a>
							</li>
						</ul>
					</li>
					<li className="menu__item">
						<a href="#b">Item B</a>
					</li>
					<li className="menu__item">
						<a href="#c">Item C</a>
					</li>
					<li className="menu__item">
						<a href="#d">Item D</a>
					</li>
					<li className="menu__item">
						<a href="#e">Item E</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
