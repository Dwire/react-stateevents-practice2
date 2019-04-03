import React from "react";
import BeyCard from './BeyCard';

const Favorites = ({beys, handleFavClick}) => {
  const renderBeyCards = beys.map(bey => <BeyCard key={bey.id} bey={bey} handleFavClick={handleFavClick}/>)

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {renderBeyCards}
    </div>
  );
}

export default Favorites
