import React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.input`
  border-radius: 25px;
  padding: 15px 25px;
  border: none;
  width: 300px;
`;

const Search = () => {
  return <StyledSearch placeholder="Search..."></StyledSearch>;
};

export default Search;
