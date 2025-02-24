import { User } from "../types";

export const mockUsers: User[] = [
  {
    id: 1,
    name: "김재현",
    profileImage: "https://via.placeholder.com/50",
    role: "팀원",
    evaluated: false,
  },
  {
    id: 2,
    name: "이민수",
    profileImage: "https://via.placeholder.com/50",
    role: "팀장",
    evaluated: false,
  },
];

export const evaluationCategories = [
  { id: 1, key: "effort", label: "노력" },
  { id: 2, key: "capability", label: "역량" },
  { id: 3, key: "growth", label: "성장" },
];