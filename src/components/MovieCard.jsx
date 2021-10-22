import React from 'react';
import styled from 'styled-components';
import { IMG_BASE_URL } from '../config/api';

const Card = styled.div`
  min-width: 280px;
  width: 150px;
  border-radius: 5px;
  margin: 0px;

  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
    &:hover {
      transform: scale(1);
    }
  }
`;

const MovieCard = ({ item }) => {
  return (
    <Card>
      <img src={IMG_BASE_URL+ item.poster_path}></img>
    </Card>
  );
};

export default MovieCard;
