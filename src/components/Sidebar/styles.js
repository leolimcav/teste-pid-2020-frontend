import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  width: 19.5%;
  height: auto;
  border-right: solid 2px #c753f8;
  padding-top: 6.5vh;
  img {
    width: 31.3%;
    height: 100%;
    object-fit: contain;
  }

  h2 {
    font-size: 1.25rem;
    color: #c753f8;
    font-weight: 600;
    line-height: 1.35;
    margin-top: 54px;
  }

  span {
    color: #c753f8;
    font-size: 0.875rem;
    line-height: 1.36;
    font-weight: 300;
  }
`;

export const Name = styled.span`
  font-size: 1.25rem;
  color: #c753f8;
  font-weight: 600;
  line-height: 1.35;
  margin-top: 15px;
`;

export const Button = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.bgc};
  color: ${props => props.color};
  border-radius: 19px;
  border: solid 1px ${props => props.border};
  margin-top: 24px;
  padding: 9px 47px 9px 47px;
  font-size: 0.875rem;
`;

export const Gallery = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 9.9vw;
  margin-bottom: 19px;
  img {
    width: 4.8vw;
    height: 8.6vh;
  }

  #third,
  #fourth {
    margin-top: 4.6px;
    opacity: 0.57;
    background-image: linear-gradient(
      to top,
      #ffffff 91%,
      rgba(128, 128, 128, 0) -5%
    );
  }
`;
