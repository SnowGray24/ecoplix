import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledButton = styled.button`
  background-color: ${(props) => props.color};
  border-radius: 25px;
  padding: 15px 15px;
  color: ${colors.white};
  border: none;
  margin: 20px 0px;
  cursor: pointer;
`;

const Button = ({ color, onClick, children }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
