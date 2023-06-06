import React from 'react';

const MovieDetailsCard = ({ found}) => {
  console.log(found)
  return (
    <div>
      <p>movei{}</p>
      <img
        className="d-block w-100"
        // src={found.show.image.original}
        alt="Third slide"
      />
    </div>
  );
};

export default MovieDetailsCard;