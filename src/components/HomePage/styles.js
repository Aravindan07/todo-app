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
  color: #6c63fe;
`;

export const H1 = styled.h1`
  margin-bottom: 0px;
`;

export const Underline = styled.div`
  height: 5px;
  width: 150px;
  background: #15b996;
  margin: 0 auto;
  border-radius: 10px;
`;

export const H2 = styled.h2`
  padding-left: 20px;
  color: #6c63fe;
  margin-top: 40px;
  margin-bottom: 0px;
`;

export const TasksUnderline = styled.div`
  margin-left: 20px;
  height: 5px;
  width: 5%;
  background: #15b996;
  border-radius: 10px;
`;

export const Card = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  margin-left: 20px;
  margin-top: 20px;
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
  color: #15b996;
  font-size: 22px;
`;

export const Para = styled.p`
  margin: 10px 0px;
  font-size: 18px;
`;

export const Span = styled.span`
  color: #6c63fe;
`;

export const LinkSpan = styled.span`
  color: #6c63fe;
  :hover {
    cursor: pointer;
  }
`;

export const Urgency = styled.span`
  color: ${setColor};
`;

function setBorder(props) {
  if (props.test === "Immediate") {
    return "10px solid #ff6666";
  } else {
    return "10px solid #15b996";
  }
}

function setColor(props) {
  if (props.test === "Immediate") {
    return "#ff6666";
  } else {
    return "#15b996";
  }
}

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const DeleteButton = styled.button`
  background: #ff4c4c;
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
    background: #ff7f7f;
  }
`;
