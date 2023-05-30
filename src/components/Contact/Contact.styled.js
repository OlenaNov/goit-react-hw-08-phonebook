import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  color: #7d3cff;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  padding: 10px;

  font-size: 10px;
  border-radius: 5px;
  border: 2px solid lightblue;
  cursor: pointer;
  font-size: 15px;
  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;
  background-color: #f0f8ff;

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid lightblue;
  color: #7d3cff;
  cursor: pointer;
  font-size: 15px;
  background-color: #f0f8ff;
`;