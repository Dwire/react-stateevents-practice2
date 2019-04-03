import React from "react";

const BeyCard = ({bey, handleFavClick}) => {
  return (
    <div>
      <h3>{bey.name}</h3>
      <img onClick={() => handleFavClick(bey)} src={bey.img} alt="bey"/>
    </div>
  );
};

export default BeyCard;
