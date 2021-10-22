import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import Search from './Search';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2;
`;

const Container = styled.div`
  position: relative;
  height: 300px;
  max-height: 300px;
  background-image: url('https://wallpaperaccess.com/full/6993439.png');
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  padding: 25px;
`;

const Title = styled.h2`
  color: ${colors.white};
  font-size: 25px;
`;

const Description = styled.p`
  color: ${colors.white};
  font: bold;
  font-size: 18px;
  width: 50%;
`;

const Banner = () => {
  return (
    <Container>
      <Overlay>
        <Content>
          <Title>Squid Games</Title>
          <Description>
            Hundreds of cash-strapped contestants accept an invitation to
            compete in children's games for a tempting prize, but the stakes are
            deadly.
          </Description>
          <Search></Search>
        </Content>
      </Overlay>
    </Container>
  );
};

export default Banner;
