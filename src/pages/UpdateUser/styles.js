import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 80%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;

  span {
    color: #c753f8;
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

export const InputContainer = styled.div`
  width: 27.9vw;
  height: 49.5vh;
  border-radius: 28px;
  border: solid 1px #c753f8;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  input {
    border: none;
    width: 100%;
    height: 100%;
  }

  input::placeholder {
    color: #c753f8;
    opacity: 0.82;
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.36;
  }
`;

export const Button = styled.button`
  color: #fff;
  border: solid 1px #ff6177;
  border-radius: 28px;
  background-color: #ff6177;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.36;
  width: 10vw;
  height: 3.8vh;
  margin-top: 2%;
  margin-left: 59%;
`;
