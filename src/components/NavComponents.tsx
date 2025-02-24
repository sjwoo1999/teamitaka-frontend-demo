import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav<{ $isMobile: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1000;
`;

export const NavItem = styled(Link)<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  text-decoration: none;
  font-size: ${({ $isMobile }) => ($isMobile ? '12px' : '14px')};
  gap: 5px;
  &:hover {
    color: #ff4500;
  }
`;
