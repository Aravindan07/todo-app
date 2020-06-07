import styled from "styled-components";

export const FormWrapper = styled.div`
  margin-top: 50px;
  letter-spacing: 0.64px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 50%;
  margin: 20px 0px;
  padding: 12px 12px 12px 30px;
  border: 2px solid #d2d2d2;
  border-radius: 10px;
  color: #012345;
  font-size: 16px;
  ::placeholder {
    color: #d2d2d2;
    font-weight: 600;
    font-size: 16px;
  }
  :focus,
  :active {
    border: 2px solid #6c63fe;
    outline: none;
  }
`;

export const Button = styled.button`
  background: #15b996;
  border: none;
  outline: none;
  padding: 15px;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
  margin-top: 10px;
  :hover {
    cursor: pointer;
  }
`;
