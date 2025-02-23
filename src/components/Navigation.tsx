import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.active {
    color: #ff4d4f;
  }
`;

export const Navigation: React.FC = () => {
  return (
    <NavBar>
      <NavItem to="/home">홈</NavItem>
      <NavItem to="/files">파일</NavItem>
      <NavItem to="/notifications">알림</NavItem>
      <NavItem to="/profile">프로필</NavItem>
    </NavBar>
  );
};