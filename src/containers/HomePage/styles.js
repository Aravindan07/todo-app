import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  width: 90%;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  width: 200px;
  margin: 0 auto;
  background: -webkit-linear-gradient(#cc2b5e, #753a88);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const H2 = styled.h2`
  padding-left: 20px;
  color: #753a88;
  margin-top: 40px;
  margin-bottom: 0px;
`;

export const TasksUnderline = styled.div`
  margin-left: 20px;
  height: 5px;
  width: 5%;
  background: #4d883a;
  border-radius: 10px;
`;

export const Card = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  margin: 15px 0px 15px 25px;
  padding: 10px;
  overflow: auto;
  overflow-wrap: anywhere;
  border-top: ${setBorder};
`;
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TaskName = styled.div`
  color: #753a88;
  font-size: 22px;
`;

export const Para = styled.p`
  margin: 10px 0px;
  font-size: 18px;
`;

export const Span = styled.span`
  color: #753a88;
`;

export const LinkSpan = styled.span`
  color: #753a88;
  :hover {
    cursor: pointer;
  }
`;

export const Priority = styled.span`
  color: ${setColor};
`;

function setBorder(props) {
  if (props.priority === "High") {
    return "10px solid #ff6666";
  } else if (props.priority === "Normal") {
    return "10px solid #4d883a";
  } else if (props.priority === "Low") {
    return "10px solid #fd9059";
  }
}

function setColor(props) {
  if (props.priority === "High") {
    return "#ff6666";
  } else if (props.priority === "Normal") {
    return "#4d883a";
  } else if (props.priority === "Low") {
    return "#fd9059";
  }
}

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const DeleteButton = styled.button`
  background: #753a88;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  letter-spacing: 0.64px;
  border-radius: 10px;
  width: 50%;
  margin: 0 auto;
  padding: 5px;
  :hover {
    cursor: pointer;
    box-shadow: 3px 3px 3px #d2d2d2;
    transform: scale(1.02);
  }
`;
