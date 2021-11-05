import Styled from 'styled-components';
import { shade } from 'polished';

export const ContinerInfo = Styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fffffe;
  max-width: 600px;
  padding: 16px;
  align-items: center;
  margin: 140px auto;
  border-radius: 8px;
  box-shadow: 5px 5px 8px #3da9fc;

  label {
    margin: 8px 0;
    width: 320px;
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid #7d7d7d;
    outline: none;
  }

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
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: ${shade(0.1, '#3da9fc')};
    }
  }
`;
