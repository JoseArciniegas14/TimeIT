import React from "react";
import "../../css/IconoMenu.css";

export const IconoMenu1 = ({
  className,
  rectangleClassName,
  rectangleClassNameOverride,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div className={`icono-menu ${className}`}>
      <div className={`rectangle ${rectangleClassName}`} />
      <div className={`div ${rectangleClassNameOverride}`} />
      <div className={`rectangle-2 ${divClassName}`} />
      <div className={`rectangle-3 ${divClassNameOverride}`} />
    </div>
  );
};
  