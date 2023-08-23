import React from "react";

const ProjectBox = ({ title, imageSrc, description }) => {
  return (
    <div className="ProjectBox">
      <h3>{title}</h3>
      <img src={imageSrc} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default ProjectBox;