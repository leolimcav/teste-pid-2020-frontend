import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 46.1vw;
  height: 71.9vh;
  border-radius: 40px;
  border: solid 1px #c753f8;

  h1 {
    font-size: 2.5rem;
    color: #c753f8;
    font-weight: 600;
    line-height: 1.33;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70%;
`;

export const FormCol = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  width: 52%;
  height: 100%;
`;

export const InputContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 28px;
  border: solid 1px #c753f8;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  input {
    border: none;
    width: 90%;
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

export const FormFooter = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  color: #fff;
  border: solid 1px #c753f8;
  border-radius: 28px;
  background-color: #c753f8;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.36;
  width: 10vw;
  height: 3.8vh;
`;
