import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import useAppState from '../hooks/useAppState';
import MovieCard from './MovieCard';

const Container = styled.div`
  margin: 10px 25px;
`;

const ListArea = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const List = styled.div`
  width: ${props => props.width}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h3`
  color: ${colors.black};
`;

const LeftArrow = styled.div`
  background: #000;
  opacity: 0.9;
  height: 100%;
  position: absolute;
  left: 0;
  width: 30px;
  z-index: 5;
`;

const RightArrow = styled.div`
  background: #000;
  opacity: 0.6;
  height: 100%;
  position: absolute;
  right: 0;
  width: 30px;
  z-index: 5;
`;


const CategoryList = ({ category, listName}) => {
  const {appState, loadDataFromCategory} = useAppState();
  
  useEffect(() => {
    loadDataFromCategory(category);
  }, []);
  
  return (
    <Container>
      <Title>{listName}</Title>
      <ListArea>
        <List width={appState[category].length * 150}>
          {appState[category].map((item) => {
            return <MovieCard item={item} key={item.id} />;
          })}
        </List>
      </ListArea>
    </Container>
  );
};

export default CategoryList;
