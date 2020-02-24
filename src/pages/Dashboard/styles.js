import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

export const DashContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;
  width: 80.5%;

  h3 {
    color: #c753f8;
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

export const InputContainer = styled.div`
  width: 23.9vw;
  height: 5.1vh;
  border-radius: 28px;
  border: solid 1px #c753f8;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;

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
    color: #c753f8;
  }
`;

export const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  div:nth-child(even) {
    padding: 15px 0 15px 0;
  }
`;

export const ListRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
`;

export const ListItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  img {
    margin-bottom: 5px;
  }

  img:hover {
    opacity: 0.83;
    background-image: linear-gradient(
      to top,
      #ffffff 91%,
      rgba(128, 128, 128, 0) -5%
    );
  }
`;

export const ItemTitle = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 65%;
  justify-content: space-between;
  align-items: center;

  svg {
    color: #f2bf59;
  }

  span {
    color: #c753f8;
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.33;
  }
`;
