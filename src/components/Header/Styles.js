import styled from "styled-components";
import colors from "../../utils/colors";
import { ReactComponent as logo } from "../../images/YouVisit_Logo_RGB.svg";
import { ReactComponent as userLoginIcon } from "../../images/user.svg";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background: ${colors.white};
`;

export const HeaderLeftDiv = styled.div`
  margin: 20px;
  display: flex;
  justify-self: flex-start;
  align-items: center;
`;

export const HeaderRightDiv = styled.div`
  margin: 20px;
  display: flex;
  justify-self: flex-end;
`;

export const HeaderLogo = styled(logo)`
  width: 200px;
`;

export const HeaderLoginIcon = styled(userLoginIcon)`
  width: 50px;
`;

export const HeaderPara = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;
`;
