import styled from "styled-components";

const Para = styled.p`
  width: 100%;
  margin: 0;
  position: absolute;
  text-align: center;
  bottom: 5px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const ContainerMain = styled.div`
  width: ${(props) => {
    if (props.isFixedWidth) {
      return "250px;";
    }
    return props.index % 3 === 0 ? "100%" : "48%";
  }};
  height: 250px;
  display: inline-block;
  position: relative;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  &: hover {

  }
`;

export { Para, ContainerMain };
