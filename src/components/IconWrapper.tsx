import React from 'react';
import { FaHome, FaFolder, FaBell, FaUser } from 'react-icons/fa';

// 각 아이콘을 React.FC<{ size?: number }>로 강제 캐스팅
const FaHomeCasted = FaHome as React.FC<{ size?: number }>;
const FaFolderCasted = FaFolder as React.FC<{ size?: number }>;
const FaBellCasted = FaBell as React.FC<{ size?: number }>;
const FaUserCasted = FaUser as React.FC<{ size?: number }>;

export const HomeIcon: React.FC<{ size?: number }> = (props) => {
  return <FaHomeCasted {...props} />;
};

export const FolderIcon: React.FC<{ size?: number }> = (props) => {
  return <FaFolderCasted {...props} />;
};

export const BellIcon: React.FC<{ size?: number }> = (props) => {
  return <FaBellCasted {...props} />;
};

export const UserIcon: React.FC<{ size?: number }> = (props) => {
  return <FaUserCasted {...props} />;
};
