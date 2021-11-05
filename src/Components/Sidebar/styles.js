import Styled from 'styled-components';
import { shade } from 'polished';

export const Container = Styled.div`
  background-color: #fffffe;
  width: 240px;
  height: 100vh;
`;

export const ButtonsContianer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;

  button {
    width: 160px;
    padding: 8px;
    font-size: 20px;
    font-weight: 600;
    margin: 8px;
    background-color: #3da9fc;
    border: 0;
    color: #fffffe;
    border-radius: 6px;
    transition: all 0.2s;

    &:hover {
      background-color: ${shade(0.1, '#3da9fc')};
      transform: translateX(6px);
    }
  }

`;
