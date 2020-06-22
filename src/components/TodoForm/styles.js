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
  font-size: 16px;
  font-weight: 500;
  ::placeholder {
    color: #d2d2d2;
    font-weight: 600;
    font-size: 16px;
  }
  :focus,
  :active {
    border: 2px solid #cc2b5e;
    outline: none;
  }
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #cc2b5e, #753a88);
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
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
  }
  :hover,
  :focus,
  :active {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    box-shadow: 5px 5px 5px #d2d2d2;
  }
`;
