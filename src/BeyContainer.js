import React from "react";
import BeyCard from './BeyCard';

const BeyContainer = ({beys, handleFavClick}) => {
 const renderBeyCards = beys.map(bey => <BeyCard key={bey.id} bey={bey} handleFavClick={handleFavClick} />)

  return (
    <div className="index">
      <h1>Index</h1>
      {renderBeyCards}
    </div>
  );
}

export default BeyContainer;
