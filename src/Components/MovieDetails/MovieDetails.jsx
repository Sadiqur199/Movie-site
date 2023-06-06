import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import MovieDetailsCard from './MovieDetailsCard';
import { useLoaderData, useParams } from 'react-router-dom';

const MovieDetails = () => {
  let { detailsId } = useParams();
  const loadIdData = useLoaderData();

  const found = loadIdData.find (obj => {
    return obj.id == detailsId;
  })
  console.log(found)
  return (

    <div>
      <Navbar></Navbar>
      <div>
        {/* <p>{found.length}</p>
           <img src={found.show.image.original} alt="" /> */}
        </div>
    </div>
  );
};

export default MovieDetails;