import React from "react";
import "./ServiceSection.styles.scss";
import { ServiceItem } from "../ServiceItem/ServiceItem.component";

export function ServiceSection() {
	return (
		<div className="service content-layout">
			<h2 className="service-title">Title Here</h2>
			<div className="service-container">
				<ServiceItem />
				<ServiceItem />
				<ServiceItem />
			</div>
		</div>
	);
}
