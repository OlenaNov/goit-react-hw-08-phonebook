import styled from '@emotion/styled';

export const PageLoginSection = styled.section`
  display: block;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;

  width: 80%;
  max-width: 550px;
  margin: 1em auto;
  padding: 1em;
  border-radius: 10px;
`;

export const PageLoginTitle = styled.h1`
  font-size: 16px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  color: #7d3cff;
`;

export const PageHomeLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #7d3cff;
`;

export const PageHomeInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0 20px;
  display: inline-block;
  box-sizing: border-box;
  transition: background-color 0.5s ease-in-out;
  border: 2px solid lightblue;
  background-color: #f0f8ff;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
`;

export const PageHomeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  padding: 5px;
  border-radius: 20px;
  border: 2px solid lightblue;
  color: #7d3cff;
  cursor: pointer;
  font-size: 15px;

  background-color: #f0f8ff;
`;