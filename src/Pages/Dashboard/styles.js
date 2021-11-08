import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;

  h1 {
    margin: 8px auto;
  }
`;

export const ClientsContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  h2 {
    margin: 16px;
  }
`;

export const ClientsList = Styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  max-height: 520px;
  /* max-width: 1020px; */

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: whitesmoke;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cecece;
    border-radius: 15px;
  }

  div {
    background-color: #fffffe;
    margin: 8px;
    padding: 16px;
    border-radius: 6px;
    width: 480px;
    box-shadow: 4px 4px 7px #3da9fc;
  }

  span {
    font-weight: 600;
  }
`;

export const LeftContent = Styled.div`
  max-width: 240px;
`;

export const RightContent = Styled.div`
  display: flex;
  flex-direction: column ;
  flex: 1;

  h1 {
    margin: 0px auto;
    text-align: center;
  }
`;
