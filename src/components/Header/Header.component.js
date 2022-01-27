import React from "react";
import "./Header.styles.scss";
import { Navigation } from "../Navigation/Navigation.component";

export function Header() {
	return (
		<header className="header content-layout">
			<Navigation />
		</header>
	);
}
