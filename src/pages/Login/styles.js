import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 656px;
  height: 705px;
  border-radius: 40px;
  border: solid 1px #f55858;

  h1 {
    color: #c753f8;
    font-size: 40px;
  }
`;

export const Button = styled.button`
  width: 159px;
  height: 37px;
  border-radius: 19px;
  background-color: #fff;
  color: #c753f8;
  border: solid 1px #f55858;
  margin-left: 95px;
`;

export const GButton = styled.button`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 266px;
  height: 55px;
  color: #fff;
  background-color: #f55858;
  border: solid 1px #f55858;
  border-radius: 28px;

  img {
    margin-right: 13px;
  }
`;
