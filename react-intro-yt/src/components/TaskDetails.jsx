import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./TaskDetails.css";

import Button from "./Button";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          error quasi similique fugit debitis autem, modi a sunt atque
          laboriosam non soluta earum eligendi ut doloremque totam animi optio
          ipsa!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
