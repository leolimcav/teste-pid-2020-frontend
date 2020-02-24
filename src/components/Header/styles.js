import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 54px;
  padding-bottom: 3.8%;
  h1 {
    color: #c753f8;
    font-size: 2.1875rem;
    line-height: 1.17;
  }
`;

export const InputContainer = styled.div`
  width: 49.1vw;
  height: 5.1vh;
  border-radius: 28px;
  border: solid 1px #c753f8;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  justify-items: center;

  input {
    border: none;
    width: 80%;
    height: 100%;
    border-radius: 28px;
  }

  input::placeholder {
    color: #c753f8;
    opacity: 0.82;
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.36;
  }

  svg {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    color: #c753f8;
  }
`;

export const Button = styled.button`
  color: #c753f8;
  border: none;
  background-color: #fff;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.36;
`;
