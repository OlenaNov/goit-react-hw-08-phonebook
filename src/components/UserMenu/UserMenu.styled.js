import styled from '@emotion/styled';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const MenuTitle = styled.p`
  font-size: 16px;
  margin: 0;
  color: #7d3cff;
`;

export const MenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid lightblue;
  color: #7d3cff;
  cursor: pointer;
  font-size: 15px;
`;