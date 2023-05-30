import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;

    width: 400px;
    padding: 60px;

    background-color: #f0f8ff;
    border: 2px solid lightblue;
    border-radius: 4px;
`;

export const Label = styled.label`
    display: flex;
    justify-content: space-between;
    color: #7d3cff;
`;

export const Input = styled.input`
    padding: 12px;
    margin-left: 20px;

    border: 2px solid lightblue;
    background-color: #f0f8ff;
    border-radius: 4px;
    color: #7d3cff;
`;

export const SubmitContact = styled.button`
    padding: 12px 24px 12px 24px;

    background-color: #fef6dd;
    border: 2px solid lightblue;
    border-radius: 4px;
    color: #7d3cff;
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