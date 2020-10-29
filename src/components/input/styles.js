import styled from "styled-components";

const Container = styled.div`
 display: flex;
 position: relative;
 flex-direction: column;
 justify-content: left;
`;

const Label = styled.label`
  font-size: 18px;
  line-height: 1.25;
  text-align: left;
  color: black;
  position: relative;
  margin-bottom: 6px;
`;

const InputField = styled.input`
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
  border: 1px solid grey;
  padding-left: 10px;
  line-height: normal;
  font-size: 18px;
  color: black;
  
  padding-right: ${(props) => props.isWithButton ? '70px' : '10px'};
  
  &::placeholder {
    color: grey;
    opacity: 0.4;
  }
`;

export {
    Container,
    Label,
    InputField,
}