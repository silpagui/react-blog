import React from "react";
import "./ServiceItem.styles.scss";
import { Button } from "../Button/Button.component";

export function ServiceItem() {
  return (
    <div className="service-item">
      <h3 className="service-item__title">Title</h3>
      <p className="service-item__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
      <Button />
    </div>
  );
}
