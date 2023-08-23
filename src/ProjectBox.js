import React from "react";

const ProjectBox = ({ title, imageSrc, description, link }) => {
  return (
    <a href={link} className="ProjectBox">
      <h3>{title}</h3>
      <img src={imageSrc} alt={title} />
      <p>{description}</p>
    </a>
  );
};

export default ProjectBox;