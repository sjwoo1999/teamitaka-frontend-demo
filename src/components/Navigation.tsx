// Navigation.tsx
import React from "react";
import { HomeIcon, FolderIcon, BellIcon, UserIcon } from "./IconWrapper";
import { NavBar, NavItem } from "./NavComponents";

interface NavigationProps {
  isMobile: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isMobile }) => {
  return (
    <NavBar $isMobile={isMobile}>
      <NavItem to="/home" $isMobile={isMobile} aria-label="Home">
        <HomeIcon size={20} />
        <span>home</span>
      </NavItem>
      <NavItem to="/file" $isMobile={isMobile} aria-label="File">
        <FolderIcon size={20} />
        <span>file</span>
      </NavItem>
      <NavItem to="/notification" $isMobile={isMobile} aria-label="Notification">
        <BellIcon size={20} />
        <span>notification</span>
      </NavItem>
      <NavItem to="/profile" $isMobile={isMobile} aria-label="Profile">
        <UserIcon size={20} />
        <span>profile</span>
      </NavItem>
    </NavBar>
  );
};

export default Navigation;
